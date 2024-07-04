// import ThumbNail from "./tumbnail.jpg";
import SocialMedia from "./social media.png";
import TranslateJson from "./translate application.png";
import Sentiment from "./sentiment.png";
import Movie from "./movie recommendation.png";
import Resume from "../assests/koushikgampa_resume.pdf";
import Profile from "../assests/profile.jpg";

export const PersonalData = {
  profile: Profile,
  resume: Resume,
  details: {
    name: "Koushik Gampa",
    currentPosition: "Full Stack Developer",
    description: "Web developer with experience in React, Node, Django",
  },
  aboutMe: {
    experience: [
      "Internship: 1 Year 6 months",
      "Full time: Jan 2024 - present",
    ],
    projectsCompleted: ["10+ Projects"],
    solved: ["50+ DSA Questions"],
    detailedDescription:
      "Experienced Full Stack Developer proficient in React, Angular, Spring Boot, and Python API frameworks such as Django and FastAPI. With a passion for creating seamless and efficient web applications, I bring a diverse skill set that spans both front-end and back-end development.",
  },
  qualifications: {
    education: [
      {
        degree: "Mtech Integrated Software Engineering",
        collegeName: "VIT Vellore",
        duration: "2018 - 2023",
        cgpa: "8.56",
      },
      {
        degree: "Board of Intermediate Education",
        collegeName: "Sri Chaitanya Junior College",
        duration: "2016 - 2018",
        cgpa: "96.3%",
      },
      {
        degree: "Board of Secondary Education",
        collegeName: "Kakatiya E-Techno School",
        duration: "2015 - 2016",
        cgpa: "9.7",
      },
      {
        degree: "",
        collegeName: "",
        duration: "",
        cgpa: "",
      },
    ],
    companys: [
      {
        companyName: "Illumine Industries",
        role: "Software Developer",
        description: "",
        duration: "Jan-2024 - Present",
      },
      {
        companyName: "Altair",
        role: "Software Developer",
        description: "",
        duration: "Sep-2022 - Jan-2024",
      },
      {
        companyName: "",
        role: "",
        description: "",
        duration: "",
      },
    ],
  },
  tech: [
    {
      title: "FrontEnd",
      skills: [
        "React JS",
        "React Query",
        "Redux ToolKit",
        "Typescript",
        "Javascript",
        "HTML/CSS",
      ],
    },
    {
      title: "Backend",
      skills: ["Node JS", "Django", "Python"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "Postgres SQL", "Mongo DB"],
    },
    {
      title: "UI Libraries and CSS Frameworks",
      skills: ["Tailwind CSS", "Bootstrap", "Material UI", "AntD"],
    },
  ],
  projects: [
    {
      projectName: "Social Media",
      projectLink: "https://github.com/koushikgampa23/Social-Media-Platform",
      thumbNail: SocialMedia,
    },
    {
      projectName: "Song Lyrics Sentiment Analysis",
      projectLink:
        "https://github.com/koushikgampa23/song-lyrics-sentiment-analysis/blob/main/sentiment-analysis.ipynb",
      thumbNail: Sentiment,
    },
    {
      projectName: "Movie Recommendation System",
      projectLink:
        "https://github.com/koushikgampa23/Movie-Recommendation-system/blob/main/movieRecommendation.ipynb",
      thumbNail: Movie,
    },
    {
      projectName: "Translate Json",
      projectLink: "https://github.com/koushikgampa23/translate-json",
      thumbNail: TranslateJson,
    },
  ],
  contact: {
    linkedIn: "https://in.linkedin.com/in/koushikgampa",
    github: "https://github.com/koushikgampa23",
    hackerRank: "https://www.hackerrank.com/profile/koushikgampa",
    leetCode: "https://leetcode.com/u/koushikgampa/",
  },
};
