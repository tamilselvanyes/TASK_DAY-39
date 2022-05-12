// students collection
const students_collection = [
  {
    student_id: 1,
    name: "Arun",
    email: "arun@gmail.com",
    codekata_solved: 50,
    webkata_solved: 200,
  },
  {
    student_id: 2,
    name: "Ajay",
    email: "ajay@gmail.com",
    codekata_solved: 150,
    webkata_solved: 220,
  },
  {
    student_id: 3,
    name: "vignesh",
    email: "vignesh@gmail.com",
    codekata_solved: 80,
    webkata_solved: 90,
  },
  {
    student_id: 4,
    name: "Tamil",
    email: "tamil@gmail.com",
    codekata_solved: 220,
    webkata_solved: 260,
  },
  {
    student_id: 5,
    name: "akash",
    email: "akash@gmail.com",
    codekata_solved: 10,
    webkata_solved: 20,
  },

  {
    student_id: 6,
    name: "sanjay",
    email: "sanjay@gmail.com",
    codekata_solved: 100,
    webkata_solved: 210,
  },
  {
    student_id: 7,
    name: "vikram",
    email: "vikram@gmail.com",
    codekata_solved: 110,
    webkata_solved: 120,
  },
  {
    student_id: 8,
    name: "tom",
    email: "tom@gmail.com",
    codekata_solved: 40,
    webkata_solved: 80,
  },
  {
    student_id: 9,
    name: "ben",
    email: "ben@gmail.com",
    codekata_solved: 10,
    webkata_solved: 20,
  },
  {
    student_id: 10,
    name: "Jos",
    email: "jos@gmail.com",
    codekata_solved: 10,
    webkata_solved: 20,
  },
];

//Query to insert into DB

db.students_collection.insertMany(students_collection);

// attendance collection

const attendance_collection = [
  {
    date: new Date("10-01-2020"),
    present_id: [1, 2, 3, 4, 5, 7, 9, 10],
  },
  {
    date: new Date("10-02-2020"),
    present_id: [1, 2, 3, 4, 5, 7, 9, 10],
  },
  {
    date: new Date("10-03-2020"),
    present_id: [1, 2, 3, 4, 5, 8, 9, 10],
  },
  {
    date: new Date("10-04-2020"),
    present_id: [1, 2, 3, 4, 6, 7, 9, 10],
  },
  {
    date: new Date("10-05-2020"),
    present_id: [1, 2, 3, 4, 5, 8, 9, 10],
  },
  {
    date: new Date("10-06-2020"),
    present_id: [1, 2, 3, 4, 5, 6, 8, 10],
  },
  {
    date: new Date("10-07-2020"),
    present_id: [1, 2, 3, 4, 5, 7, 9, 10],
  },
];

//Query to insert into DB

db.students_collection.insertMany(students_collection);

//Topics collection
const topics_collection = [
  {
    topic_id: 1,
    topic_date: new Date("10-01-2020"),
    topic: " Introduction to Browser & web",
  },
  {
    topic_id: 2,
    topic_date: new Date("10-02-2020"),
    topic: "  Request & Response cycle",
  },
  {
    topic_id: 3,
    topic_date: new Date("10-03-2020"),
    topic: "JS array & objects",
  },
  {
    topic_id: 4,
    topic_date: new Date("10-04-2020"),
    topic: " JS array & objects",
  },
  {
    topic_id: 5,
    topic_date: new Date("10-05-2020"),
    topic: "Functions",
  },
  {
    topic_id: 6,
    topic_date: new Date("10-06-2020"),
    topic: "ES5 vs ES6",
  },
  {
    topic_id: 7,
    topic_date: new Date("10-07-2020"),
    topic: "OOP,MRF",
  },
];
//Query to insert into DB

db.topics_collection.insertMany(topics_collection);

//Tasks collection
const tasks_collection = [
  {
    task_id: 1,
    task_name:
      "To read: https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages https://stackoverflow.com/questions/17253545/scripting-language-vs-programming-language https://cs.lmu.edu/~ray/notes/paradigms/",
    task_date: new Date("10-01-2020"),
    due_date: new Date("10-10-2020"),
    submissions_id: [1, 2, 3, 4, 6, 7],
  },
  {
    task_id: 2,
    task_name:
      "https://docs.google.com/document/d/1QznT1zM4mI6dG0TODx5Xjs1GquMoSHO3xZ1USDnVM-w/edit?usp=sharing",
    task_date: new Date("10-02-2020"),
    due_date: new Date("10-11-2020"),
    submissions_id: [1, 2, 3, 4, 6, 7],
  },
  {
    task_id: 3,
    task_name:
      "https://docs.google.com/document/d/1EIpyPItk5xMOQluX5m_cPD4KTI9AnkyqDlO26pbG4a8/edit?usp=sharing",
    task_date: new Date("10-03-2020"),
    due_date: new Date("10-12-2020"),
    submissions_id: [1, 2, 3, 4, 6, 7],
  },
  {
    task_id: 4,
    task_name:
      "https://docs.google.com/document/d/1TPk3wqxDFi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit?usp=sharing",
    task_date: new Date("10-04-2020"),
    due_date: new Date("10-13-2020"),
    submissions_id: [1, 2, 3, 4, 6, 7],
  },
  {
    task_id: 5,
    task_name:
      "https://docs.google.com/document/d/1TPk3wqxDFi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit?usp=sharing",
    task_date: new Date("10-05-2020"),
    due_date: new Date("10-14-2020"),
    submissions_id: [1, 2, 3, 4, 6, 7],
  },
  {
    task_id: 6,
    task_name:
      "https://docs.google.com/document/d/1TPk3wqxDFi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit?usp=sharing",
    task_date: new Date("10-06-2020"),
    due_date: new Date("10-15-2020"),
    submissions_id: [1, 2, 3, 4, 6, 7],
  },
  {
    task_id: 7,
    task_name:
      "Practice task https://github.com/rvsp/HTML-CSS/blob/master/Mini-tasks/001-HTML.md",
    task_date: new Date("10-07-2020"),
    due_date: new Date("10-16-2020"),
    submissions_id: [1, 2, 3, 4, 6, 7],
  },
];

//Query to insert into DB

db.tasks_collection.insertMany(tasks_collection);

// Company Drives collection
const company_drives = [
  {
    date: new Date("10-05-2020"),
    company_name: "Amazon",
    students_attendance_student_id: [1, 2, 3, 5, 6],
  },
  {
    date: new Date("10-07-2020"),
    company_name: "HCL",
    students_attendance_student_id: [1, 2, 3, 5, 6],
  },
  {
    date: new Date("10-07-2020"),
    company_name: "TCS",
    students_attendance_student_id: [1, 2, 3, 5, 6],
  },
  {
    date: new Date("10-16-2020"),
    company_name: "Infosys",
    students_attendance_student_id: [1, 2, 3, 5, 6],
  },
  {
    date: new Date("10-17-2020"),
    company_name: "Wipro",
    students_attendance_student_id: [1, 2, 3, 5, 6],
  },
  {
    date: new Date("10-20-2020"),
    company_name: "HUL",
    students_attendance_student_id: [1, 2, 3, 5, 6],
  },
];

//Query to insert into DB

db.company_drives.insertMany(company_drives);

// Mentors collection
const mentors_collection = [
  {
    mentor_id: 1,
    mentor_name: "Sai Mohan",
    mentee_for_student_id: [1, 2],
  },
  {
    mentor_id: 2,
    mentor_name: "Raghav",
    mentee_for_student_id: [3, 4],
  },
  {
    mentor_id: 3,
    mentor_name: "Chandra Sekhar",
    mentee_for_student_id: [5, 6, 7],
  },
  {
    mentor_id: 4,
    mentor_name: "Vijay Kumar",
    mentee_for_student_id: [8, 9, 10],
  },
];

//Query to insert into DB

db.mentors_collection.insertMany(mentors_collection);
