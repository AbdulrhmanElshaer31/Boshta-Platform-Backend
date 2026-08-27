const { query } = require("../../config/database");
const teacherQueries = require("./teacher.queries");
const assistantService = require("../assistant/assistant.service");

// Get teacher profile
const getTeacherProfile = async (teacherId) => {
  const result = await query(teacherQueries.getTeacherProfile, [teacherId]);
  return result.rows[0];
};

// Get dashboard
const getDashboard = async () => {
  const overview = await query(teacherQueries.getDashboardOverview);
  const attendance = await query(teacherQueries.getAttendanceTodayStats);
  const exams = await query(teacherQueries.getExamsStats);
  const assignments = await query(teacherQueries.getAssignmentsStats);
  const payments = await query(teacherQueries.getPaymentsMonthStats);
  const lastPayment = await query(teacherQueries.getLastPayment);
  const recentActivities = await query(teacherQueries.getRecentActivities);

  return {
    overview: overview.rows[0],
    attendance_today: attendance.rows[0],
    exams: exams.rows[0],
    assignments: assignments.rows[0],
    payments_month: payments.rows[0],
    last_payment: lastPayment.rows[0] || null,
    recent_activities: recentActivities.rows,
  };
};

// Get activity log (assistants only)
const getActivityLogs = async (filters, teacherId) => {
  const { entity_type = "", date = null, page = 1 } = filters;

  const result = await assistantService.getActivityLogs(
    { entity_type, date, page },
    "teacher",
    null,
    teacherId,
  );

  return result;
};

module.exports = {
  getTeacherProfile,
  getDashboard,
  getActivityLogs,
};
