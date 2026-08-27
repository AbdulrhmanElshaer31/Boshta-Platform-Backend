const app = require("./app");
const env = require("./config/env");

// Vercel Serverless
if (process.env.VERCEL) {
  module.exports = app;
} else {
  async function start() {
    app.listen(env.PORT, () => {
      console.log(`✅ Server running on port ${env.PORT}`);
      console.log(`📚 API Docs: http://localhost:${env.PORT}/api-docs`);
    });
  }
  start();
}
