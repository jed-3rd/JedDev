type jobsType = {
    company: string;
    title: string;
    duration: string;
    desc: string[];
}

export const jobs: jobsType[] = [
    {
        company: "Pink Summit",
        title: "Software Engineer",
        duration: "JUL 2021 - PRESENT",
        desc: [
            "Worked as a key member of a small agile development team to develop a B2B and government based SAAS solution.",
            "As a member of the team I worked on Full-Stack solutions including taking a lead on Front-End Design and Development."
        ]
    },
    {
        company: "Contractor",
        title: "Software Developer",
        duration: "2019 - 2021",
        desc: [
          "Worked directly with Individuals and Small Companies to design and develop numerous web solutions to fit each customers needs.",
          "Provided a range of services from custom web-app to semicustom / fully custom templates for Shopify and WordPress."
        ]
    }
];