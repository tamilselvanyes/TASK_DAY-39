//1. Find all the topics and tasks which are thought in the month of October:

db.topics_collection
  .find({
    $and: [
      { topic_date: { $gte: new Date("10-01-2020") } },
      { topic_date: { $lte: new Date("10-31-2020") } },
    ],
  })
  .pretty();

db.tasks_collection
  .find({
    $and: [
      { task_date: { $gte: new Date("10-01-2020") } },
      { task_date: { $lte: new Date("10-31-2020") } },
    ],
  })
  .pretty();

//2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drives
  .find({
    $and: [
      { date: { $gte: new Date("10-15-2020") } },
      { date: { $lte: new Date("10-31-2020") } },
    ],
  })
  .pretty();

//3. Find all the company drives and students who are appeared for the placement.

db.company_drives
  .aggregate([
    {
      $lookup: {
        from: "students_collection",
        localField: "students_attendance_student_id",
        foreignField: "student_id",
        as: "company_student_info",
      },
    },
  ])
  .pretty();

//4. Find the number of problems solved by the user in codekata

db.students_collection
  .find({}, { student_id: 1, name: 1, codekata_solved: 1 })
  .pretty();

//5. Find all the mentors with who has the mentee's count more than 15

db.mentors_collection
  .find({ $expr: { $gt: [{ $size: "$mentee_for_student_id" }, 15] } })
  .pretty();

//6. Find the number of users who are absent and task is not submitted

//students absent
db.attendance_collection.aggregate([
  {
    $lookup: {
      from: "students_collection",
      let: {
        present_id: "$present_id",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $not: {
                $in: ["$student_id", "$$present_id"],
              },
            },
          },
        },
      ],
      as: "Absentees",
    },
  },
]);

//Task not completed
db.tasks_collection.aggregate([
  {
    $lookup: {
      from: "students_collection",
      let: {
        submissions_id: "$submissions_id",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $not: {
                $in: ["$student_id", "$$submissions_id"],
              },
            },
          },
        },
      ],
      as: "Not submitted students",
    },
  },
]);
