export const experiences = [
  {
    title: "Frontend Enginner",
    company: "aedu",
    date: "June 2023 - Now",
    description: [
      "Create website education and website community for Aedu",
      "Developed and maintained responsive and user-friendly web applications",
      "Optimization of performance, accessibility, website SEO based on Google Light Speed",
      "Implement clean code By Robert C Martin",
      "Create testing for app and web and create documentation for review by PM / CTO",
      "Create mobile applications education using React native",
      "Setup Google console for publish Application to Play Store",
      "Code optimization to make it easier to read and develop in the future",
      "Tech: Nextjs, Typescript, Tailwind css, React Native, Expo Environment, Google Play Console, Testing, Android Development",
    ],
  },
  {
    title: "Frontend Developer",
    company: "STRT Button",
    date: "Febuary 2023 - June 2023",
    description: [
      "Developed and maintained responsive and user-friendly web applications at web 3.0 company",
      "Create reusable component for future use and improve quality code",
      "Collaborated with the UI/UX team, Frontend team and Backend team",
      "Using version control system (Git) for collaboration with the development team",
      "Tech: Next, Typescript, Wagmi, Thirdweb, Tailwind",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Armada Vision",
    date: "August 2022 - Febuary 2023",
    description: [
      "Develop and maintained web application systems for clients at Armada Vision",
      "Create reusable component for future use and improve quality code",
      "Tech: Vue, Vuex, Tailwind, Express Js, Mongodb",
    ],
  },
  {
    title: "Intern Fullstack Developer",
    company: "Indigospace Medan",
    date: "July - October 2021",
    description: [
      "Work as a team or individually",
      "Build and develop website using Reactjs, ExpressJs, and Mongodb",
      "Collaborate with other Developers and UI/UX to update the website and create new features",
      "Metting with DILo Manager in digital invitation website builder as my final project",
      "Tech: React, Boostrap, Express, Mongodb",
    ],
  }, 
];

export const ContentWorkExperience = () => {
  return experiences.map((experience, i) => (
    <div className="mb-5 text-primary" key={i}>
      <h3 className="text-base font-medium leading-loose text-secondary">
        {experience.title}
        <span className=" text-accent"> @{experience.company}</span>
      </h3>
      <p className="pb-5 font-mono text-sm">{experience.date}</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        {experience.description.map((desc, i) => (
          <li key={i} className="text-sm font-medium">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  ));
};
