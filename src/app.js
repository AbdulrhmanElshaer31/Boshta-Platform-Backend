const express = require("express");
const cors = require("cors");

// Routes
const authRouts = require("./modules/auth/auth.routes");
const studentModuleRoutes = require("./modules/student/student.routes"); // ✅ الجديد
const parentRoutes = require("./modules/parent/parent.routes");
const assistantRoutes = require("./modules/assistant/assistant.routes");
const teacherRoutes = require("./modules/teacher/teacher.routes");
const superAdminRoutes = require("./modules/super-admin/super-admin.routes");

// Middleware
const errorHandler = require("./middlewares/error.middleware");
const apiMiddelware = require("./middlewares/apiAuth.middleware");
const clientAuth = require("./middlewares/clientAuth.middleware");
const assistantAuth = require("./middlewares/assistantAuth.middleware");
const teacherAuth = require("./middlewares/teacherAuth.middleware");
const superAdminAuth = require("./middlewares/superAdminAuth.middleware");

// Database
const { query } = require("./config/database");

// Swagger
const swaggerSpec = require("./docs/swagger");

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());

// Root
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome To Jupiter Learn API!",
  });
});

// Swagger JSON spec
app.get("/api-docs-json", (req, res) => {
  res.json(swaggerSpec);
});

// Swagger UI with CDN
app.get("/api-docs", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ar">
    <head>
      <meta charset="UTF-8">
      <title>JupiterLearn API Docs</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.17.14/swagger-ui.css">
    </head>
    <body>
      <div id="swagger-ui"></div>
      <script src="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.17.14/swagger-ui-bundle.js"></script>
      <script>
        window.onload = function() {
          SwaggerUIBundle({
            url: "/api-docs-json",
            dom_id: "#swagger-ui",
            presets: [
              SwaggerUIBundle.presets.apis,
              SwaggerUIBundle.SwaggerUIStandalonePreset
            ],
            layout: "BaseLayout",
          });
        };
      </script>
    </body>
    </html>
  `);
});

// Check platform status middleware
const checkPlatformStatus = async (req, res, next) => {
  try {
    if (req.path.includes("/super-admin") || req.path.includes("/auth")) {
      return next();
    }

    const result = await query(
      "SELECT platform_status FROM settings WHERE id = 1",
    );
    const platformStatus = result.rows[0]?.platform_status;

    if (platformStatus === "paused") {
      return res.status(403).json({
        success: false,
        message: "المنصة مغلقة مؤقتاً للصيانة",
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};

app.use(checkPlatformStatus);

// API Routes
app.use("/api/auth", apiMiddelware, authRouts);
app.use("/api/student", apiMiddelware, clientAuth, studentModuleRoutes); // ✅ الجديد
app.use("/api/parent", apiMiddelware, parentRoutes);
app.use(
  "/api/assistant",
  apiMiddelware,
  clientAuth,
  assistantAuth,
  assistantRoutes,
);
app.use("/api/teacher", apiMiddelware, clientAuth, teacherAuth, teacherRoutes);
app.use(
  "/api/super-admin",
  apiMiddelware,
  clientAuth,
  superAdminAuth,
  superAdminRoutes,
);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error Handler
app.use(errorHandler);

module.exports = app;
