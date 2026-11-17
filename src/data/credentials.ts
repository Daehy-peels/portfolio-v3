import type { Credential } from "@/types/portfolio";

export const credentials: Credential[] = [
  {
    level: 5,
    title: "NCC Education Level 5 Diploma in Computing",
    qualificationNumber: "600/3055/0",
    awardingBody: "NCC Education, United Kingdom",
    centre: "M.S.T University, Myanmar",
    awardedOn: "17 January 2025",
    awardedOnISO: "2025-01-17",
    overallGrade: "Merit",
    levelStatement:
      "A Level 5 diploma qualification — not a bachelor's degree.",
    modules: [
      { name: "Database Design and Development", grade: "Distinction", score: 74 },
      { name: "Dynamic Websites", grade: "Distinction", score: 72 },
      { name: "Computing Project", grade: "Merit", score: 68 },
      { name: "Information Systems Analysis", grade: "Merit", score: 67 },
      { name: "Network Security and Cryptography", grade: "Pass", score: 54 },
      { name: "Professional Issues in IT", grade: "Pass", score: 48 },
    ],
  },
  {
    level: 4,
    title: "NCC Education Level 4 Diploma in Computing",
    qualificationNumber: "600/0406/X",
    awardingBody: "NCC Education, United Kingdom",
    centre: "M.S.T University, Myanmar",
    awardedOn: "27 October 2023",
    awardedOnISO: "2023-10-27",
    overallGrade: "Merit",
    levelStatement:
      "A Level 4 diploma qualification — not a bachelor's degree.",
    modules: [
      { name: "Designing and Developing a Website", grade: "Distinction", score: 77 },
      { name: "Software Development Techniques", grade: "Distinction", score: 71 },
      { name: "Office Solutions Development", grade: "Merit", score: 67 },
      { name: "Computer Networks", grade: "Merit", score: 66 },
      { name: "Databases", grade: "Merit", score: 62 },
      { name: "Skills for Computing", grade: "Merit", score: 62 },
      { name: "Computer Systems", grade: "Pass", score: 52 },
      {
        name: "Designing and Developing Object-Oriented Computer Programs",
        grade: "Pass",
        score: 59,
      },
    ],
  },
];
