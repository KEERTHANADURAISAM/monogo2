//1.users

db.users.insertMany([
  {
    id: 1,
    user_name: "Dinesh",
    gmail: "dinesh123@gmail.com",
    absent_on: [new Date("17-0ct-2020")],
    company_drives: [],
    codekata_problems: [1, 2, 3, 6, 8],
    submitted_task: [
      {
        task_id: 1,
        submitted_date: new Date("19-0ct-2020"),
      },
    ],
  },
  {
    id: 2,
    user_name: "Siva",
    gmail: "siva123@gmail.com",
    absent_on: [new Date("19-0ct-2020")],
    company_drives: [],
    codekata_problems: [1, 2, 3, 6, 8, 9, 11],
    submitted_task: [
      {
        task_id: 2,
        submitted_date: new Date("18-0ct-2020"),
      },
    ],
  },
  {
    id: 3,
    user_name: "Harish",
    gmail: "harish123@gmail.com",
    absent_on: [new Date("18-0ct-2020")],
    company_drives: [],
    codekata_problems: [1, 2, 3, 6, 8, 13, 14, 15],
    submitted_task: [
      {
        task_id: 3,
        submitted_date: new Date("16-0ct-2020"),
      },
    ],
  },
  {
    id: 4,
    user_name: "Sanjay",
    gmail: "sanjay123@gmail.com",
    absent_on: [new Date("21-0ct-2020")],
    company_drives: [],
    codekata_problems: [1, 2, 3, 6, 7, 9, 11, 13, 15],
    submitted_task: [
      {
        task_id: 4,
        submitted_date: new Date("27-0ct-2020"),
      },
    ],
  },
  {
    id: 5,
    user_name: "Arun",
    gmail: "arun123@gmail.com",
    absent_on: [new Date("22-0ct-2020")],
    company_drives: [],
    codekata_problems: [1, 2, 3, 5, 6, 8],
    submitted_task: [
      {
        task_id: 5,
        submitted_date: new Date("19-0ct-2020"),
      },
    ],
  },
  {
    id: 6,
    user_name: "Saran",
    gmail: "saran123@gmail.com",
    absent_on: [new Date("23-0ct-2020")],
    company_drives: [],
    codekata_problems: [1, 2, 3, 6, 8, 12, 14],
    submitted_task: [
      {
        task_id: 6,
        submitted_date: new Date("30-0ct-2020"),
      },
    ],
  },
  {
    id: 7,
    user_name: "Keerthana",
    gmail: "keerthana123@gmail.com",
    absent_on: [new Date("15-0ct-2020")],
    company_drives: [],
    codekata_problems: [1, 2, 3, 6, 8, 9, 11],
    submitted_task: [
      {
        task_id: 7,
        submitted_date: new Date("10-0ct-2020"),
      },
    ],
  },
  {
    id: 8,
    user_name: "Amrith",
    gmail: "amrith123@gmail.com",
    absent_on: [new Date("17-0ct-2020")],
    company_drives: [],
    codekata_problems: [1, 2, 3, 6, 8, 11, 13, 17, 19],
    submitted_task: [
      {
        task_id: 8,
        submitted_date: new Date("17-0ct-2020"),
      },
    ],
  },
  {
    id: 9,
    user_name: "Lavanya",
    gmail: "lavanya123@gmail.com",
    absent_on: [new Date("19-0ct-2020")],
    company_drives: [],
    codekata_problems: [1, 2, 3, 6, 8, 10, 18],
    submitted_task: [
      {
        task_id: 9,
        submitted_date: new Date("22-0ct-2020"),
      },
    ],
  },
  {
    id: 10,
    user_name: "Kalpana",
    gmail: "kalpana123@gmail.com",
    absent_on: [new Date("10-0ct-2020")],
    company_drives: [],
    codekata_problems: [1, 2, 13, 16, 8],
    submitted_task: [
      {
        task_id: 10,
        submitted_date: new Date("25-0ct-2020"),
      },
    ],
  },
]);

//2.codekata

db.codekata.insertMany([
  {
    q_id: 1,
    category: "HTML",
    level: "Easy",
    problems_statement: "Sample problem statement",
  },
  {
    q_id: 2,
    category: "HTML",
    level: "Hard",
    problems_statement: "Sample problem statement",
  },
  {
    q_id: 3,
    category: "JavaScript",
    level: "Easy",
    problems_statement: "Sample problem statement",
  },
  {
    q_id: 4,
    category: "JavaScript",
    level: "Hard",
    problems_statement: "Sample problem statement",
  },
  {
    q_id: 5,
    category: "ReactJS",
    level: "Easy",
    problems_statement: "Sample problem statement",
  },
  {
    q_id: 6,
    category: "ReactJS",
    level: "Hard",
    problems_statement: "Sample problem statement",
  },
  {
    q_id: 7,
    category: "NodeJS",
    level: "Easy",
    problems_statement: "Sample problem statement",
  },
  {
    q_id: 8,
    category: "NodeJS",
    level: "Hard",
    problems_statement: "Sample problem statement",
  },
  {
    q_id: 9,
    category: "NodeJS",
    level: "Hard",
    problems_statement: "Sample problem statement",
  },
  {
    q_id: 10,
    category: "NodeJS",
    level: "Hard",
    problems_statement: "Sample problem statement",
  },
]);

//3.company drives

db.company_drives.insertMany([
  {
    company_id: 1,
    drive_date: new Date("2020-10-15"),
    company: "Meta",
  },

  {
    company_id: 2,
    drive_date: new Date("2020-10-20"),
    company: "Apple",
  },
  {
    company_id: 3,
    drive_date: new Date("2020-10-26"),
    company: "Amazon",
  },
  {
    company_id: 4,
    drive_date: new Date("2020-10-30"),
    company: "NetFlix",
  },
  {
    company_id: 5,
    drive_date: new Date("2020-11-15"),
    company: "Google",
  },
]);

//4.topics
db.topics.insertMany([
  {
    topicid: 1,
    topic: "HTML",
    topic_date: new Date("2020-10-15"),
    task: {
      task_date: new Date("2020-10-19"),
    },
  },
  {
    topicid: 2,
    topic: "CSS",
    topic_date: new Date("2020-10-24"),
    task: {
      task_date: new Date("2020-10-24"),
    },
  },
  {
    topicid: 3,
    topic: "JavaScript",
    topic_date: new Date("2020-10-31"),
    task: {
      task_date: new Date("2020-10-29"),
    },
  },
  {
    topicid: 4,
    topic: "ReactJS",
    topic_date: new Date("2020-11-5"),
    task: {
      task_date: new Date("2020-11-1"),
    },
  },

  {
    topicid: 5,
    topic: "MongoDB",
    topic_date: new Date("2020-11-10"),
    task: {
      task_date: new Date("2020-11-9"),
    },
  },
  {
    topicid: 6,
    topic: "NodeJS",
    topic_date: new Date("2020-11-15"),
    task: {
      task_date: new Date("2020-11-19"),
    },
  },
  {
    topicid: 7,
    topic: "Express",
    topic_date: new Date("2020-11-15"),
    task: {
      task_date: new Date("2020-11-21"),
    },
  },
  {
    topicid: 8,
    topic: "Postman",
    topic_date: new Date("2020-11-15"),
    task: {
      task_date: new Date("2020-11-21"),
    },
  },
]);

//5.tasks

db.tasks.insertMany([
  {
    task_id: 1,
    topicid: 1,
    name: "HTML Banner Creation",
    date: new Date("2020-10-11"),
  },
  {
    task_id: 2,
    topicid: 1,
    name: "HTML Calculator",
    date: new Date("2020-10-15"),
  },
  {
    task_id: 3,
    topicid: 1,
    name: "CSS-Animation",
    date: new Date("2020-10-18"),
  },
  {
    task_id: 4,
    topicid: 2,
    name: "JavaScript",
    date: new Date("2020-10-27"),
  },
  {
    task_id: 5,
    topicid: 3,
    name: "React UI",
    date: new Date("2020-10-29"),
  },
]);

//6.insert attendance

db.attendance.insertMany([
  {
    username: "dinesh@28",
    fullname: "dineshkumar",
    date: 2020 - 10 - 15,
  },
  {
    username: "siva@58",
    fullname: "siva",
    date: 2020 - 10 - 15,
  },
  {
    username: "harish@53",
    fullname: "Harish",
    date: 2020 - 10 - 15,
  },
  {
    username: "sanjay@7564",
    fullname: "sanjay",
    date: 2020 - 10 - 15,
  },
  {
    username: "saran@75",
    fullname: "saravanan",
    date: 2020 - 10 - 15,
  },
  {
    username: "amrith@52",
    fullname: "amrith",
    date: 2020 - 10 - 15,
  },
  {
    username: "lavanya@22",
    fullname: "lavanya",
    date: 2020 - 10 - 15,
  },
  {
    username: "kalpana@32",
    fullname: "kalpana",
    date: 2020 - 10 - 15,
  },
  {
    username: "keerthana@62",
    fullname: "keerthana",
    date: 2020 - 10 - 15,
  },
  {
    username: "santhya@58",
    fullname: "santhyababu",
    date: 2020 - 10 - 15,
  },
]);

//7.insert mentors

db.mentors.insertMany([
  {
    id: 1,
    mentor_name: "RagavKumar",
    email: "RagavK@gmail.com",
    mentee_count: 11,
  },
  {
    id: 2,
    mentor_name: "Rupan",
    email: "Rupan@gmail.com",
    mentee_count: 19,
  },
  {
    id: 3,
    mentor_name: "Sai Mohan",
    email: "Sai@gmail.com",
    mentee_count: 25,
  },
  {
    id: 4,
    mentor_name: "sanjay",
    email: "sanjay05@gmail.com",
    mentee_count: 30,
  },
  {
    id: 5,
    mentor_name: "Vidhyavkm",
    email: "vidhyavkm@gmail.com",
    mentee_count: 30,
  },
]);
