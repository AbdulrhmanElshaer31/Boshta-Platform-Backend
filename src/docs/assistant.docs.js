/**
 * @swagger
 * tags:
 *   name: Assistant
 *   description: Assistant management endpoints (Center + Online Management)
 */

/* ============================================
   PROFILE & DASHBOARD & ACTIVITY LOG
   ============================================ */

/**
 * @swagger
 * /api/assistant/profile:
 *   get:
 *     summary: Get assistant profile
 *     description: Get current assistant profile information
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Profile retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/dashboard:
 *   get:
 *     summary: Get assistant dashboard
 *     description: Get dashboard stats based on assistant type (online/center)
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Dashboard data retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/activity-log:
 *   get:
 *     summary: Get activity log
 *     description: Get activity logs based on assistant permissions
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: query
 *         name: entity_type
 *         schema: { type: string }
 *         description: Filter by entity type (student, exam, payment, etc.)
 *       - in: query
 *         name: date
 *         schema: { type: string, format: date }
 *         description: Filter by date
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *         description: Page number
 *     responses:
 *       200:
 *         description: Activity logs retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/profile-image:
 *   put:
 *     summary: Update assistant profile image
 *     description: Upload new profile image
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Profile image file (jpg, png, webp)
 *     responses:
 *       200:
 *         description: Profile image updated successfully
 *   delete:
 *     summary: Delete assistant profile image
 *     description: Remove profile image
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Profile image deleted successfully
 */

/**
 * @swagger
 * /api/assistant/password:
 *   put:
 *     summary: Update assistant password
 *     description: Change current assistant password
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [oldPassword, password, confirmPassword]
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 description: Current password
 *               password:
 *                 type: string
 *                 description: New password
 *               confirmPassword:
 *                 type: string
 *                 description: Confirm new password
 *     responses:
 *       200:
 *         description: Password updated successfully
 */

/* ============================================
   GRADES MANAGEMENT - GET METHODS
   ============================================ */

/**
 * @swagger
 * /api/assistant/grades:
 *   get:
 *     summary: Get all grades
 *     description: Get list of all grades
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Grades list retrieved successfully
 *   post:
 *     summary: Create grade
 *     description: Create new grade with name and monthly price
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, monthlyPrice]
 *             properties:
 *               name:
 *                 type: string
 *                 example: "الصف الأول الثانوي"
 *               monthlyPrice:
 *                 type: number
 *                 example: 100
 *     responses:
 *       201:
 *         description: Grade created successfully
 */

/**
 * @swagger
 * /api/assistant/grades/groups-count:
 *   get:
 *     summary: Get grades with groups count
 *     description: Get all grades with number of groups in each
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Grades with groups count retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/grades/students-count:
 *   get:
 *     summary: Get grades with students count
 *     description: Get all grades with number of students in each
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Grades with students count retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/grades/stats:
 *   get:
 *     summary: Get all grades stats
 *     description: Get statistics for all grades
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: All grades stats retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/grades/{id}:
 *   get:
 *     summary: Get grade by ID
 *     description: Get specific grade details
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *         description: Grade ID
 *     responses:
 *       200:
 *         description: Grade data retrieved successfully
 *   put:
 *     summary: Update grade
 *     description: Update grade name and monthly price
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, monthlyPrice]
 *             properties:
 *               name: { type: string }
 *               monthlyPrice: { type: number }
 *     responses:
 *       200:
 *         description: Grade updated successfully
 *   delete:
 *     summary: Soft delete grade
 *     description: Soft delete grade (can be restored)
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Grade soft deleted successfully
 */

/**
 * @swagger
 * /api/assistant/grades/{id}/stats:
 *   get:
 *     summary: Get grade stats
 *     description: Get statistics for specific grade
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Grade stats retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/grades/{id}/permanent:
 *   delete:
 *     summary: Hard delete grade
 *     description: Permanently delete grade with all related data
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Grade permanently deleted
 */

/* ============================================
   GROUPS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/assistant/groups:
 *   get:
 *     summary: Get all groups
 *     description: Get list of all groups
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Groups list retrieved successfully
 *   post:
 *     summary: Create group
 *     description: Create new group linked to a grade
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, grade_id, days, start_time, end_time]
 *             properties:
 *               name:
 *                 type: string
 *                 example: "مجموعة السبت"
 *               grade_id:
 *                 type: integer
 *                 example: 1
 *               days:
 *                 type: string
 *                 example: "السبت, الاثنين, الاربعاء"
 *               start_time:
 *                 type: string
 *                 example: "10:00"
 *               end_time:
 *                 type: string
 *                 example: "12:00"
 *               room:
 *                 type: string
 *                 example: "قاعة 1"
 *     responses:
 *       201:
 *         description: Group created successfully
 */

/**
 * @swagger
 * /api/assistant/groups/with-grade-name:
 *   get:
 *     summary: Get groups with grade name
 *     description: Get all groups with their grade names
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Groups with grade name retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/groups/students-count:
 *   get:
 *     summary: Get groups with students count
 *     description: Get all groups with number of students
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Groups with students count retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/groups/stats:
 *   get:
 *     summary: Get all groups stats
 *     description: Get statistics for all groups
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: All groups stats retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/groups/{id}/full-stats:
 *   get:
 *     summary: Get group full stats
 *     description: Get comprehensive statistics for a group (students, attendance, payments, exams)
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *         description: Group ID
 *     responses:
 *       200:
 *         description: Group full stats retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/groups/grade/{gradeId}:
 *   get:
 *     summary: Get groups by grade
 *     description: Get all groups in specific grade
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Groups list retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/groups/{id}:
 *   get:
 *     summary: Get group by ID
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Group data retrieved successfully
 *   put:
 *     summary: Update group
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, days, start_time, end_time]
 *             properties:
 *               name: { type: string }
 *               days: { type: string }
 *               start_time: { type: string }
 *               end_time: { type: string }
 *               room: { type: string }
 *     responses:
 *       200:
 *         description: Group updated successfully
 *   delete:
 *     summary: Soft delete group
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Group soft deleted successfully
 */

/**
 * @swagger
 * /api/assistant/groups/{id}/permanent:
 *   delete:
 *     summary: Hard delete group
 *     description: Permanently delete group with all students
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Group permanently deleted
 */

/* ============================================
   STUDENTS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/assistant/students:
 *   get:
 *     summary: Get all students with filters
 *     description: Get students list with search and filter options
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema: { type: string }
 *         description: Search by name, barcode or phone
 *       - in: query
 *         name: grade_id
 *         schema: { type: integer }
 *         description: Filter by grade
 *       - in: query
 *         name: group_id
 *         schema: { type: integer }
 *         description: Filter by group
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *     responses:
 *       200:
 *         description: Students list retrieved successfully
 *   post:
 *     summary: Create student
 *     description: Create new student (parent_token will be auto-generated)
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [barcode, full_name, grade_id, group_id]
 *             properties:
 *               barcode:
 *                 type: string
 *                 example: "STU-2024-001"
 *               full_name:
 *                 type: string
 *                 example: "أحمد محمد"
 *               phone:
 *                 type: string
 *                 example: "01012345678"
 *               parent_phone:
 *                 type: string
 *                 example: "01112345678"
 *               grade_id:
 *                 type: integer
 *                 example: 1
 *               group_id:
 *                 type: integer
 *                 example: 1
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Student created successfully
 */

/**
 * @swagger
 * /api/assistant/students/deleted:
 *   get:
 *     summary: Get deleted students
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Deleted students retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/students/search/barcode:
 *   get:
 *     summary: Search student by barcode
 *     description: Find student by their barcode
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: query
 *         name: barcode
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Student found successfully
 */

/**
 * @swagger
 * /api/assistant/students/search/phone:
 *   get:
 *     summary: Search student by phone
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: query
 *         name: phone
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Student found successfully
 */

/**
 * @swagger
 * /api/assistant/students/search/parent-phone:
 *   get:
 *     summary: Search students by parent phone
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: query
 *         name: parent_phone
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Students found successfully
 */

/**
 * @swagger
 * /api/assistant/students/grade/{gradeId}:
 *   get:
 *     summary: Get students by grade
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Students list retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/students/group/{groupId}:
 *   get:
 *     summary: Get students by group
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Students list retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/students/{studentId}/profile:
 *   get:
 *     summary: Get student full profile
 *     description: Get comprehensive student profile
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Student profile retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/students/{studentId}/stats:
 *   get:
 *     summary: Get student quick stats
 *     description: Get student statistics (attendance, exams, payments)
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Student stats retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/students/{studentId}:
 *   get:
 *     summary: Get student by ID
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Student data retrieved successfully
 *   put:
 *     summary: Update student
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               barcode: { type: string }
 *               full_name: { type: string }
 *               phone: { type: string }
 *               parent_phone: { type: string }
 *               grade_id: { type: integer }
 *               group_id: { type: integer }
 *               notes: { type: string }
 *     responses:
 *       200:
 *         description: Student updated successfully
 *   delete:
 *     summary: Soft delete student
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Student soft deleted successfully
 */

/**
 * @swagger
 * /api/assistant/students/{studentId}/permanent:
 *   delete:
 *     summary: Hard delete student
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Student permanently deleted
 */

/**
 * @swagger
 * /api/assistant/students/{studentId}/restore:
 *   post:
 *     summary: Restore deleted student
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Student restored successfully
 */

/* ============================================
   ATTENDANCE MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/assistant/attendance/sessions/start:
 *   post:
 *     summary: Start attendance session
 *     description: Start new attendance session for a group
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [group_id, grade_id]
 *             properties:
 *               group_id:
 *                 type: integer
 *                 example: 1
 *               grade_id:
 *                 type: integer
 *                 example: 1
 *               lock_at:
 *                 type: string
 *                 format: date-time
 *                 description: Optional lock time (default from settings)
 *     responses:
 *       201:
 *         description: Session started successfully
 */

/**
 * @swagger
 * /api/assistant/attendance/sessions/active/{groupId}:
 *   get:
 *     summary: Get active session
 *     description: Get current active session for a group
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Active session retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/attendance/sessions/{id}/toggle-makeup:
 *   put:
 *     summary: Toggle makeup mode
 *     description: Enable/disable makeup attendance mode for session
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Makeup mode toggled successfully
 */

/**
 * @swagger
 * /api/assistant/attendance/scan-barcode:
 *   post:
 *     summary: Scan student barcode
 *     description: Scan barcode to record attendance with student info
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [barcode, group_id, grade_id, session_id]
 *             properties:
 *               barcode:
 *                 type: string
 *                 example: "STU-2024-001"
 *               group_id:
 *                 type: integer
 *               grade_id:
 *                 type: integer
 *               session_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Attendance recorded with student info
 */

/**
 * @swagger
 * /api/assistant/attendance/sessions/lock:
 *   post:
 *     summary: Lock session
 *     description: Lock session and mark remaining students as absent
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [id, groupId]
 *             properties:
 *               id: { type: integer }
 *               groupId: { type: integer }
 *     responses:
 *       200:
 *         description: Session locked and absent students marked
 */

/**
 * @swagger
 * /api/assistant/attendance:
 *   post:
 *     summary: Create attendance record
 *     description: Manually create attendance record
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [student_id, group_id, grade_id, attendance_date, status]
 *             properties:
 *               student_id: { type: integer }
 *               group_id: { type: integer }
 *               grade_id: { type: integer }
 *               attendance_date: { type: string, format: date }
 *               status: { type: string, enum: [present, absent] }
 *     responses:
 *       201:
 *         description: Attendance created successfully
 */

/**
 * @swagger
 * /api/assistant/attendance/{id}:
 *   put:
 *     summary: Update attendance
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Attendance updated successfully
 *   delete:
 *     summary: Delete attendance
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Attendance deleted successfully
 */

/* ============================================
   PAYMENTS & SUBSCRIPTIONS
   ============================================ */

/**
 * @swagger
 * /api/assistant/payments:
 *   get:
 *     summary: Get all payments
 *     description: Get payments with filters
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema: { type: string }
 *         description: Search by student name or barcode
 *       - in: query
 *         name: grade_id
 *         schema: { type: integer }
 *       - in: query
 *         name: group_id
 *         schema: { type: integer }
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *     responses:
 *       200:
 *         description: Payments retrieved successfully
 *   post:
 *     summary: Create payment
 *     description: Record new payment for student
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [subscription_id, student_id, amount]
 *             properties:
 *               subscription_id: { type: integer }
 *               student_id: { type: integer }
 *               amount:
 *                 type: number
 *                 example: 100
 *               payment_date: { type: string, format: date-time }
 *               notes: { type: string }
 *     responses:
 *       201:
 *         description: Payment created successfully
 */

/**
 * @swagger
 * /api/assistant/payments/{id}:
 *   put:
 *     summary: Update payment
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Payment updated successfully
 *   delete:
 *     summary: Delete payment
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Payment deleted successfully
 */

/**
 * @swagger
 * /api/assistant/payments/collections:
 *   get:
 *     summary: Get monthly collections
 *     description: Get monthly payment collections summary
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Monthly collections retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/payments/unpaid:
 *   get:
 *     summary: Get unpaid students
 *     description: Get students who haven't paid current month
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Unpaid students retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/payments/overall:
 *   get:
 *     summary: Get overall payment stats
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Overall payment stats retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/payments/students-status:
 *   get:
 *     summary: Get all students payment status
 *     description: Get payment status for all students
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Students payment status retrieved successfully
 */

/* ============================================
   ONLINE EXAMS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/assistant/online-exams:
 *   get:
 *     summary: Get all online exams
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Online exams retrieved successfully
 *   post:
 *     summary: Create online exam
 *     description: Create new online exam with questions added separately
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, grade_id, duration_minutes, start_at, end_at, full_mark]
 *             properties:
 *               title:
 *                 type: string
 *                 example: "امتحان الفصل الأول"
 *               description: { type: string }
 *               grade_id: { type: integer }
 *               group_id: { type: integer }
 *               duration_minutes:
 *                 type: integer
 *                 example: 60
 *               start_at:
 *                 type: string
 *                 format: date-time
 *                 example: "2026-08-25T10:00:00"
 *               end_at:
 *                 type: string
 *                 format: date-time
 *                 example: "2026-08-25T11:00:00"
 *               full_mark:
 *                 type: number
 *                 example: 10
 *               randomize_questions:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 0
 *     responses:
 *       201:
 *         description: Online exam created successfully
 */

/**
 * @swagger
 * /api/assistant/online-exams/available:
 *   get:
 *     summary: Get available online exams
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Available exams retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/online-exams/expired:
 *   get:
 *     summary: Get expired online exams
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Expired exams retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/online-exams/{examId}:
 *   get:
 *     summary: Get online exam by ID
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam retrieved successfully
 *   put:
 *     summary: Update online exam
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam updated successfully
 *   delete:
 *     summary: Soft delete online exam
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam soft deleted successfully
 */

/**
 * @swagger
 * /api/assistant/online-exams/{examId}/permanent:
 *   delete:
 *     summary: Hard delete online exam
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam permanently deleted
 */

/**
 * @swagger
 * /api/assistant/online-exams/stats/{examId}:
 *   get:
 *     summary: Get online exam stats
 *     description: Get comprehensive exam statistics
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam stats retrieved successfully
 */

/* ============================================
   QUESTIONS & OPTIONS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/assistant/questions:
 *   post:
 *     summary: Create question
 *     description: Create question for online exam (mcq/true_false/essay)
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [exam_id, question_text, type, order]
 *             properties:
 *               exam_id: { type: integer }
 *               question_text: { type: string }
 *               type:
 *                 type: string
 *                 enum: [mcq, true_false, essay]
 *                 example: "mcq"
 *               order: { type: integer }
 *     responses:
 *       201:
 *         description: Question created successfully
 */

/**
 * @swagger
 * /api/assistant/questions/exam/{examId}:
 *   get:
 *     summary: Get questions by exam
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Questions retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/options:
 *   post:
 *     summary: Create option
 *     description: Create option for MCQ question
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [question_id, option_text, is_correct, order]
 *             properties:
 *               question_id: { type: integer }
 *               option_text: { type: string }
 *               is_correct:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 1
 *               order: { type: integer }
 *     responses:
 *       201:
 *         description: Option created successfully
 */

/**
 * @swagger
 * /api/assistant/options/question/{questionId}:
 *   get:
 *     summary: Get options by question
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Options retrieved successfully
 */

/* ============================================
   ESSAY ANSWERS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/assistant/student-answers/essay/pending:
 *   get:
 *     summary: Get pending essay answers
 *     description: Get all essay answers waiting for grading
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Pending essay answers retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/student-answers/essay/exam/{examId}:
 *   get:
 *     summary: Get essay answers by exam
 *     description: Get essay answers for specific exam
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Essay answers retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/student-answers/{answerId}/grade:
 *   put:
 *     summary: Grade essay answer
 *     description: Grade essay answer (correct/incorrect)
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: answerId
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [is_correct]
 *             properties:
 *               is_correct:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 1
 *     responses:
 *       200:
 *         description: Answer graded successfully
 */

/* ============================================
   ASSIGNMENTS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/assistant/assignments:
 *   get:
 *     summary: Get all assignments
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Assignments retrieved successfully
 *   post:
 *     summary: Create assignment
 *     description: Create new assignment with file upload
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [title, grade_id, full_mark, deadline]
 *             properties:
 *               title: { type: string }
 *               description: { type: string }
 *               grade_id: { type: integer }
 *               group_id: { type: integer }
 *               full_mark:
 *                 type: number
 *                 example: 10
 *               deadline:
 *                 type: string
 *                 format: date-time
 *                 example: "2026-08-25T23:59:59"
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Assignment file (PDF/Word/Image)
 *     responses:
 *       201:
 *         description: Assignment created successfully
 */

/**
 * @swagger
 * /api/assistant/assignment-submissions/{submissionId}/grade:
 *   put:
 *     summary: Grade assignment submission
 *     description: Grade student's assignment submission (score + feedback)
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: submissionId
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [score]
 *             properties:
 *               score:
 *                 type: number
 *                 example: 8
 *               feedback:
 *                 type: string
 *                 example: "عمل ممتاز"
 *     responses:
 *       200:
 *         description: Submission graded successfully
 */

/* ============================================
   VIDEOS & PLAYLISTS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/assistant/videos:
 *   get:
 *     summary: Get all videos
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Videos retrieved successfully
 *   post:
 *     summary: Create video
 *     description: Upload new video with thumbnail
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [title, grade_id, video_url]
 *             properties:
 *               title: { type: string }
 *               description: { type: string }
 *               grade_id: { type: integer }
 *               video_url:
 *                 type: string
 *                 example: "https://youtube.com/..."
 *               thumbnail:
 *                 type: string
 *                 format: binary
 *                 description: Thumbnail image
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Additional file (PDF/Word)
 *     responses:
 *       201:
 *         description: Video created successfully
 */

/**
 * @swagger
 * /api/assistant/videos/{videoId}:
 *   get:
 *     summary: Get video by ID
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Video retrieved successfully
 *   put:
 *     summary: Update video
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Video updated successfully
 *   delete:
 *     summary: Delete video
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Video deleted successfully
 */

/**
 * @swagger
 * /api/assistant/playlists:
 *   get:
 *     summary: Get all playlists
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Playlists retrieved successfully
 *   post:
 *     summary: Create playlist
 *     description: Create new playlist with thumbnail
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [title, grade_id]
 *             properties:
 *               title: { type: string }
 *               description: { type: string }
 *               grade_id: { type: integer }
 *               thumbnail:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Playlist created successfully
 */

/**
 * @swagger
 * /api/assistant/playlist-videos:
 *   post:
 *     summary: Add video to playlist
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [playlist_id, video_id]
 *             properties:
 *               playlist_id: { type: integer }
 *               video_id: { type: integer }
 *     responses:
 *       201:
 *         description: Video added to playlist successfully
 */

/**
 * @swagger
 * /api/assistant/playlist-videos/{id}:
 *   delete:
 *     summary: Remove video from playlist
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Video removed from playlist successfully
 */

/* ============================================
   WHATSAPP TEMPLATES
   ============================================ */

/**
 * @swagger
 * /api/assistant/whatsapp-messages:
 *   get:
 *     summary: Get all whatsapp templates
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Templates retrieved successfully
 *   post:
 *     summary: Create whatsapp template
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [template, sent_to]
 *             properties:
 *               template: { type: string }
 *               sent_to:
 *                 type: string
 *                 enum: [students, parents, both]
 *               delay:
 *                 type: integer
 *                 default: 60
 *     responses:
 *       201:
 *         description: Template created successfully
 */

/**
 * @swagger
 * /api/assistant/whatsapp-messages/{templateId}:
 *   put:
 *     summary: Update whatsapp template
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Template updated successfully
 */

/**
 * @swagger
 * /api/assistant/whatsapp-messages/{templateId}/toggle:
 *   put:
 *     summary: Toggle whatsapp template active
 *     description: Enable or disable template
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Template status toggled successfully
 */ /* ============================================
   PAPER EXAMS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/assistant/exams:
 *   get:
 *     summary: Get all paper exams
 *     description: Get list of all paper exams
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *         description: Page number
 *     responses:
 *       200:
 *         description: Exams retrieved successfully
 *   post:
 *     summary: Create paper exam
 *     description: Create new paper exam
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, grade_id, total_degree, exam_date]
 *             properties:
 *               title:
 *                 type: string
 *                 example: "امتحان الفصل الأول"
 *               grade_id:
 *                 type: integer
 *                 example: 1
 *               group_id:
 *                 type: integer
 *                 example: null
 *                 description: Optional - for specific group
 *               total_degree:
 *                 type: number
 *                 example: 20
 *               exam_date:
 *                 type: string
 *                 format: date
 *                 example: "2026-08-25"
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Exam created successfully
 */

/**
 * @swagger
 * /api/assistant/exams/grade/{gradeId}:
 *   get:
 *     summary: Get exams by grade
 *     description: Get all paper exams for specific grade
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exams retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/exams/group/{groupId}:
 *   get:
 *     summary: Get exams by group
 *     description: Get all paper exams for specific group
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exams retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/exams/{id}:
 *   get:
 *     summary: Get exam by ID
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam retrieved successfully
 *   put:
 *     summary: Update exam
 *     description: Update paper exam information
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string }
 *               grade_id: { type: integer }
 *               group_id: { type: integer }
 *               total_degree: { type: number }
 *               exam_date: { type: string, format: date }
 *               notes: { type: string }
 *     responses:
 *       200:
 *         description: Exam updated successfully
 *   delete:
 *     summary: Soft delete exam
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam soft deleted successfully
 */

/**
 * @swagger
 * /api/assistant/exams/{id}/stats:
 *   get:
 *     summary: Get exam stats
 *     description: Get exam statistics (average, highest, lowest)
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam stats retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/exams/{id}/permanent:
 *   delete:
 *     summary: Hard delete exam
 *     description: Permanently delete exam
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam permanently deleted
 */

/* ============================================
   EXAM RESULTS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/assistant/exam-results:
 *   post:
 *     summary: Create exam result
 *     description: Add exam result for student
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [exam_id, student_id, degree]
 *             properties:
 *               exam_id: { type: integer }
 *               student_id: { type: integer }
 *               degree:
 *                 type: number
 *                 example: 18
 *               notes: { type: string }
 *     responses:
 *       201:
 *         description: Result created successfully
 */

/**
 * @swagger
 * /api/assistant/exam-results/upsert:
 *   post:
 *     summary: Upsert exam result
 *     description: Insert or update exam result for student
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [exam_id, student_id, degree]
 *             properties:
 *               exam_id: { type: integer }
 *               student_id: { type: integer }
 *               degree: { type: number }
 *               notes: { type: string }
 *     responses:
 *       200:
 *         description: Result upserted successfully
 */

/**
 * @swagger
 * /api/assistant/exam-results/upsert-batch/{examId}:
 *   post:
 *     summary: Upsert batch exam results
 *     description: Insert/update multiple results using barcode
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *         description: Exam ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [records]
 *             properties:
 *               records:
 *                 type: array
 *                 description: Array of { barcode, degree }
 *                 items:
 *                   type: object
 *                   required: [barcode, degree]
 *                   properties:
 *                     barcode:
 *                       type: string
 *                       example: "STU-2024-001"
 *                     degree:
 *                       type: number
 *                       example: 18
 *                     notes:
 *                       type: string
 *     responses:
 *       200:
 *         description: Batch results processed successfully
 */

/**
 * @swagger
 * /api/assistant/exam-results/{id}:
 *   put:
 *     summary: Update exam result
 *     description: Update student's exam result
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [degree]
 *             properties:
 *               degree: { type: number }
 *               notes: { type: string }
 *     responses:
 *       200:
 *         description: Result updated successfully
 *   delete:
 *     summary: Delete exam result
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Result deleted successfully
 */

/**
 * @swagger
 * /api/assistant/exam-results/exam/{examId}:
 *   get:
 *     summary: Get exam results
 *     description: Get all results for specific exam
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam results retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/exam-results/exam/{examId}/stats:
 *   get:
 *     summary: Get exam result stats
 *     description: Get statistics for exam results
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam result stats retrieved successfully
 */

/* ============================================
   SUBSCRIPTIONS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/assistant/subscriptions:
 *   post:
 *     summary: Create subscription
 *     description: Create monthly subscription for student
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [student_id, month, required_amount]
 *             properties:
 *               student_id:
 *                 type: integer
 *                 example: 1
 *               month:
 *                 type: string
 *                 example: "2026-08"
 *               required_amount:
 *                 type: number
 *                 example: 100
 *     responses:
 *       201:
 *         description: Subscription created successfully
 */

/**
 * @swagger
 * /api/assistant/subscriptions/overall:
 *   get:
 *     summary: Get overall subscription stats
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Overall stats retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/subscriptions/without-current:
 *   get:
 *     summary: Get students without current subscription
 *     description: Get students who don't have subscription this month
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Students list retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/subscriptions/student/{studentId}:
 *   get:
 *     summary: Get student subscriptions
 *     description: Get all subscriptions for specific student
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Student subscriptions retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/subscriptions/month/{month}:
 *   get:
 *     summary: Get subscriptions by month
 *     description: Get all subscriptions for specific month
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: month
 *         required: true
 *         schema: { type: string, example: "2026-08" }
 *     responses:
 *       200:
 *         description: Month subscriptions retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/subscriptions/{id}/status:
 *   put:
 *     summary: Update subscription status
 *     description: Update subscription status (paid/unpaid)
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [status]
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [paid, unpaid]
 *     responses:
 *       200:
 *         description: Subscription status updated successfully
 */

/**
 * @swagger
 * /api/assistant/subscriptions/{id}:
 *   delete:
 *     summary: Delete subscription
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Subscription deleted successfully
 */

/* ============================================
   STUDENT EXAMS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/assistant/student-exams/exam/{examId}:
 *   get:
 *     summary: Get student exams by exam
 *     description: Get all student attempts for specific exam
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Student exams retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/student-exams/exam/{examId}/stats:
 *   get:
 *     summary: Get exam attempt stats
 *     description: Get statistics for exam attempts
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam stats retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/student-exams/grade/{gradeId}/stats:
 *   get:
 *     summary: Get grade exam attempts stats
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Grade stats retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/student-exams/group/{groupId}/stats:
 *   get:
 *     summary: Get group exam attempts stats
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Group stats retrieved successfully
 */

/* ============================================
   STUDENT ANSWERS STATISTICS
   ============================================ */

/**
 * @swagger
 * /api/assistant/student-answers/question/{questionId}/stats:
 *   get:
 *     summary: Get question answer stats
 *     description: Get statistics for question answers
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Question stats retrieved successfully
 */

/**
 * @swagger
 * /api/assistant/student-answers/question/{questionId}/options:
 *   get:
 *     summary: Get most selected options
 *     description: Get most selected options for question
 *     tags: [Assistant]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Options retrieved successfully
 */
