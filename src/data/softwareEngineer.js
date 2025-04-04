import { AiFillGithub, AiTwotonePhone, AiFillLinkedin } from "react-icons/ai";
import {
  IoLocationSharp,
  IoMail,
  IoLogoJavascript,
  IoGameController,
  IoColorPalette,
  IoLogoGithub,
  IoLogoCss3,
  IoLogoReact,
  IoAccessibilitySharp,
  IoCode,
  IoLogoNodejs,
  IoCamera,
} from "react-icons/io5";
import {
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiPostman,
  SiFigma,
  SiMantine,
  SiTrpc,
  SiJsonwebtokens,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { CgPiano } from "react-icons/cg";

export const heading = {
  name: "Sulaiman Yaacob",
  title: "Full-Stack Typescript Developer",
};

export const contactsData = [
  {
    icon: IoMail,
    label: "Email",
    value: "sulaimanyaacob99@gmail.com",
    link: "mailto:sulaimanyaacob99@gmail.com",
  },
  {
    icon: AiTwotonePhone,
    label: "Phone",
    value: "(+60)167167638",
    link: "https://api.whatsapp.com/send?phone=60167167638",
  },
  {
    icon: IoLocationSharp,
    label: "Location",
    value: "Kota Bharu, MY",
    link: "https://www.google.com/maps/place/15200+Kota+Bharu,+Kelantan/@6.1190029,102.242175,13.96z/data=!4m6!3m5!1s0x31b6afd8841d6f33:0xbf251986c16f7589!8m2!3d6.124785!4d102.2543825!16zL20vMDI4enEx",
  },
];
export const links = [
  // {
  //   icon: FaGlobeAsia,
  //   label: "Portfolio",
  //   value: "ibrahimyaacob.xyz",
  //   link: "https://ibrahimyaacob.xyz/",
  // },
  {
    icon: AiFillGithub,
    label: "GitHub",
    value: "github.com/SulaimanYaacob",
    link: "https://github.com/SulaimanYaacob",
    // value: "https://bit.ly/2SSBeH7",
  },
  {
    icon: AiFillLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sulaimanyaacob",
    link: "https://www.linkedin.com/in/sulaiman-yaacob",
    // value: "https://bit.ly/3tYkJpQ",
  },
];

// high level only
export const education = {
  course: "Software Engineering",
  university: "University Technology Malaysia",
  cgpa: 3.65,
  period: "Oct 2020 - Feb 2025",
  location: "Johor, MY",
};

export const languages = [
  {
    name: "Typescript",
    years: "2",
    icon: SiTypescript,
    iconSize: "18px",
  },
  {
    name: "Javascript",
    years: "2",
    icon: IoLogoJavascript,
    iconSize: "22px",
  },
  // {
  //   name: "C++",
  //   years: "1",
  //   icon: SiCplusplus,
  //   iconSize: "18px",
  // },
];

export const technologies = [
  {
    name: "ReactJS",
    years: "2 Years",
    icon: IoLogoReact,
    iconSize: "18px",
  },
  {
    name: "NextJS",
    years: "2 Years",
    icon: SiNextdotjs,
    iconSize: "18px",
  },
  {
    name: "NodeJS",
    years: "2 Years",
    icon: IoLogoNodejs,
    iconSize: "18px",
  },
  {
    name: "tRPC",
    years: "1 Years",
    icon: SiTrpc,
    iconSize: "18px",
  },
  {
    name: "Git",
    years: "2 Years",
    icon: IoLogoGithub,
    iconSize: "18px",
  },
  {
    name: "CSS",
    years: "2 Years",
    icon: IoLogoCss3,
    iconSize: "18px",
  },
  {
    name: "MUI/Mantine",
    years: "1 Years",
    icon: SiMantine,
    iconSize: "18px",
  },
  {
    name: "PostgreSQL",
    years: "1 Years",
    icon: SiPostgresql,
    iconSize: "18px",
  },
  {
    name: "Postman",
    years: "1 Years",
    icon: SiPostman,
    iconSize: "18px",
  },
  {
    name: "Prisma",
    years: "1 Years",
    icon: SiPrisma,
    iconSize: "18px",
  },
  {
    name: "Figma",
    years: "2 Years",
    icon: SiFigma,
    iconSize: "18px",
  },
  {
    name: "JWT",
    years: "1 Years",
    icon: SiJsonwebtokens,
    iconSize: "18px",
  },
  // {
  //   name: "Drizzle",
  //   years: "1 Years",
  //   // icon: SiDrizzle,
  //   iconSize: "18px",
  // },
  {
    name: "Supabase",
    years: "1 Years",
    icon: SiSupabase,
    iconSize: "18px",
  },
  {
    name: "Tailwind",
    years: "1 Years",
    icon: SiTailwindcss,
    iconSize: "18px",
  },
];

export const engineering = [
  // {
  //   name: "3D Modelling",
  //   icon: BsFillGearFill,
  //   iconSize: "12px",
  // },
  // {
  //   name: "Fluid Dynamics",
  //   icon: BsFillGearFill,
  //   iconSize: "12px",
  // },
  // {
  //   name: "Thermodynamics",
  //   icon: BsFillGearFill,
  //   iconSize: "12px",
  // },
  // {
  //   name: "Acoustics Vibration",
  //   icon: BsFillGearFill,
  //   iconSize: "12px",
  // },
  // {
  //   name: "Statistical Data Analysis",
  //   icon: BsFillGearFill,
  //   iconSize: "12px",
  // },
];

export const managerial = [
  {
    name: "Software Development Lifecycle",
    iconSize: "12px",
    icon: IoAccessibilitySharp,
  },
  {
    name: "Project Management",
    iconSize: "12px",
    icon: IoAccessibilitySharp,
  },
  {
    name: "Agile Methodology",
    iconSize: "12px",
    icon: IoAccessibilitySharp,
  },
  {
    name: "Integrated Testing",
    iconSize: "12px",
    icon: IoAccessibilitySharp,
  },
  {
    name: "Product Analytics",
    iconSize: "12px",
    icon: IoAccessibilitySharp,
  },
  // {
  //   name: "Design Intuition",
  //   iconSize: "12px",
  //   icon: IoAccessibilitySharp,
  // },
  // {
  //   name: "Mentoring",
  //   iconSize: "12px",
  //   icon: IoAccessibilitySharp,
  // },
];

export const interest = [
  {
    name: "Coding",
    icon: IoCode,
    iconSize: "18px",
  },
  {
    name: "Music",
    icon: CgPiano,
    iconSize: "18px",
  },
  {
    name: "Gaming",
    icon: IoGameController,
    iconSize: "18px",
  },
  {
    name: "Art",
    icon: IoColorPalette,
    iconSize: "18px",
  },
  // {
  //   name: "Startup Ideas",
  //   icon: HiOutlineLightBulb,
  //   iconSize: "22px",
  // },
  {
    name: "Photography",
    icon: IoCamera,
    iconSize: "18px",
  },
  // {
  //   name: "Volunteering",
  //   icon: FaHandHoldingHeart,
  //   iconSize: "18px",
  // },
  // {
  //   name: "Cooking",
  //   icon: GiCookingPot,
  //   iconSize: "20px",
  // },
];

export const workExperiences = [
  {
    company: "Port of Pelabuhan Tanjung Pelepas (PTP)",
    period: "Sep 2023 - Feb 2024",
    role: "Internship - FullStack Developer",
    link: "",
    description:
      "Building and experiencing new framework and platforms for responsive web development using low-code with Joget Dx and full-code with NextJS, Trpc, and Express",
    experiences: [
      {
        title: "",
        points: [
          "Designed and developed an internal web app with Joget Dx, reducing manual inspection time by 40% and improving reporting accuracy for fire extinguisher checks.",
          "Create a PTP iConnect platform tailored to equip port personnel with an array of tools tailored for seamless operations within the port industry.",
        ],
      },
    ],
  },
  {
    company: "Part-Time Freelancing",
    period: "2022 - 2025",
    role: "Fullstack Developer (FE Focus)",
    description:
      "Worked on multiple freelance projects, focusing on frontend development and API integrations, to enhance real-world problem-solving skills.",
    experiences: [
      {
        title: "AJXB",
        period: "Nov 2022 - Jan 2023",
        points: [
          // "Leading frontend development on a event management app, (similar to Eventbrite) using NextJS, React Query and MantineUI",
          "Developed and maintained responsive UI components for web applications using Next.js, SWR, and Mantine UI.",
          "Integrated APIs from Laravel backend and improved data fetching efficiency using SWR.",
          "Collaborated with clients to refine UI/UX, ensuring a seamless user experience across multiple devices",
        ],
      },
      {
        title: "Talaqqi",
        period: "Jan 2023 - May 2023",
        href: "https://talaqqi-web-dev-ibrahimyaacob92.vercel.app/",
        points: [
          "Built and optimized authentication flows through onboarding process using T3-Stack (NextJS, tRPC, Prisma)",
          "Improved application reliability by debugging and fixing critical UI/UX issues",
        ],
      },
      {
        title: "PTP iConnect - Remote",
        period: "Oct 2024 - Jan 2025",
        href: "https://i-connect-components.vercel.app/",
        points: [
          "Designed and developed a list of responsive and reusable UI components.",
        ],
      },
    ],
  },
  // {
  //   company: "Mechanical Engineering",
  //   period: "May 2015 - Jan 2018",
  //   role: "Product Test Engineer",
  //   description: "The years before I get into the tech world",
  //   experiences: [
  //     {
  //       title: "Daikin Refrigeration, May 2015 - Jan 2018",
  //       points: [
  //         "Responsible of overseing the R&D Test Activity, Verifying Results & Reporting for Refrigeration Products. Began coding professionally with Excel VBA",
  //       ],
  //     },
  //     {
  //       title: "Vitrox Technology, May 2015 - Sept 2016",
  //       points: [
  //         "Design the machine vision hardwares for semiconductor inspection unit with SolidWorks",
  //       ],
  //     },
  //   ],
  // },
];

export const projects = [
  {
    title: "Interactive IQRA",
    desc: "An interactive real-time learning platform for students and tutors to engage in learning IQRA.",
    href: undefined,
  },
  {
    title: "Student Welfare",
    desc: "A web-based application for helping students with their necessities",
    href: "https://student-welfare.vercel.app/",
  },
  {
    title: "Intellibraille",
    desc: "A web application with AI implemented features to help translate characters to braille",
    href: "https://intelli-braille-i645.vercel.app/",
  },
];

// export const certificates = [
//   {
//     title: "Certificate of Excellence",
//     points: [
//       "Scoring highest marks (Top 10%) in Mid-Term Test June - October 2019 Session",
//     ],
//   },
//   {
//     title: "Certificate of Achievement",
//     points: [
//       "Attained GPA 4.00 UPU in October 2019 Examination",
//       "Attained GPA 4.00 UPU in May 2020 Examination",
//     ],
//   },
//   // {
//   //   title: "Pertandingan Poster Dakwah Karnival Islam Di Hatiku",
//   //   points: [
//   //     'Awarded with silver medal for the performance in the competition with the topic of "Adab Belajar"',
//   //   ],
//   // },
// ];
