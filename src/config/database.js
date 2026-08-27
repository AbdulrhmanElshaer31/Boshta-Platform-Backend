const { Pool } = require("pg");
const env = require("./env");

process.env.TZ = "Africa/Cairo";

// دالة مساعدة لبناء إعدادات SSL
function getSslConfig() {
  // لو في بيئة إنتاج واستخدام DATABASE_URL
  if (env.NODE_ENV === "production" && env.DATABASE_URL) {
    return {
      rejectUnauthorized: true, // تحقق من صحة الشهادة
      // لو عندك شهادة CA مخصصة
      ...(env.DATABASE_CA_CERT && { ca: env.DATABASE_CA_CERT }),
    };
  }

  // لو في development أو مش محتاج SSL صارم
  if (env.DB_SSL === "true" || env.DB_SSL === "1") {
    return {
      rejectUnauthorized: false, // للتطوير فقط
    };
  }

  // لو SSL مش مفعل
  return false;
}

// بناء إعدادات الاتصال
function getPoolConfig() {
  // الحالة 1: استخدام DATABASE_URL (مفضل)
  if (env.DATABASE_URL) {
    return {
      connectionString: env.DATABASE_URL,
      ssl: getSslConfig(),
      connectionTimeoutMillis: 5000,
      idleTimeoutMillis: 30000,
      max: 20,
    };
  }

  // الحالة 2: استخدام المتغيرات المنفصلة (للتوافق مع القديم)
  return {
    host: env.DB_HOST,
    port: env.DB_PORT || 5432,
    database: env.DB_NAME,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    ssl: getSslConfig(),
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
    max: 20,
  };
}

const pool = new Pool(getPoolConfig());

// باقي الكود كما هو...
pool.on("connect", async (client) => {
  try {
    await client.query("SET TIME ZONE 'Africa/Cairo'");
    await client.query("SET datestyle TO 'ISO, DMY'");
    console.log("✅ Database connected - Timezone set to Africa/Cairo");
  } catch (error) {
    console.error("❌ Error setting timezone:", error);
  }
});

pool.on("error", (err) => {
  console.error("❌ Unexpected error on idle client:", err);
});

async function query(text, params) {
  const client = await pool.connect();
  try {
    await client.query("SET TIME ZONE 'Africa/Cairo'");
    const result = await client.query(text, params);
    return result;
  } catch (error) {
    console.error("❌ Query error:", {
      text: text.substring(0, 100),
      error: error.message,
    });
    throw error;
  } finally {
    client.release();
  }
}

async function getCurrentTime() {
  const result = await query("SELECT NOW() AS current_time");
  return result.rows[0].current_time;
}

async function checkTimezone() {
  const result = await query("SHOW timezone");
  return result.rows[0].TimeZone;
}

module.exports = {
  pool,
  query,
  getCurrentTime,
  checkTimezone,
};
