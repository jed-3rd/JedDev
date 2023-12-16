export type ProjectType = {
    title: string;
    desc: string;
    github?: string;
    web?: string;
    tech: string[];
}

export const projects: ProjectType[] = [
    {
        title: "Digital Machine Id Code Algorithm",
        desc: "A GoLang based CLI that adds and reads near-invisible watermarks to digital images and videos. Based on Xerox's work in the 1980s.",
        github: "https://github.com/jed-3rd/Digital-Machine-Identification-Code-Algorithm",
        tech: [
            "GoLang",
            "Machine Learning",
        ]
    },
    {
        title: "AlgoTrader",
        desc: "Using several REST APIs and webhooks the software is able to fully automate the data analytics and trading of stocks in real-time.",
        github: "https://github.com/jed-3rd/AlgoTrader",
        tech: [
            "GoLang",
            "Google Cloud",
            "FireStore"
        ]
    },
    {
        title: "Material Color Utilities (SASS)",
        desc: "A SASS library based on Google's material-color-utilities. Material Color Utilities is a collection of libraries used in Material Design 3.",
        github: "https://github.com/jed-3rd/material-color-utilities-sass",
        tech: [
            "SASS",
            "TypeScript",
            "Material Design 3"
        ]
    },
    {
        title: "GameDeck",
        desc: "A Netflix style clone that uses multiple 3rd Party APIs to allow users to rate games they have played, and find new games they may enjoy.",
        web: "https://gamedeck.online/",
        tech: [
            "Remix",
            "React",
            "TypeScript",
            "SASS",
            "FireBase"
        ]
    },
    {
        title: "SASS Bitwise",
        desc: "A library of 32-Bit Bitwise Operations implemented fully in SASS. Works similar to the standard JavaScript Bitwise Operations.",
        github: "https://github.com/jed-3rd/sass-bitwise",
        tech: [
            "SASS",
            "JavaScript"
        ]
    },
    {
        title: "Blackjack Strategy CaseStudy",
        desc: "The goal of the study was to compare the most popular strategies used when playing blackjack, to find the best strategy to utilize.",
        github: "https://github.com/jed-3rd/BlackjackStrategyCaseStudy",
        tech: [
            "Python",
            "MatPlotLib",
            "SciPy",
            "Pandas & Numpy",
            "Jupyter"
        ]
    },
    {
        title: "Sudoku Solver",
        desc: "The Sudoku Solver game uses an algorithm to develop new random Sudoku puzzles. The game also includes a auto-solver using backtracking.",
        github: "https://github.com/jed-3rd/SudokuSolver",
        tech: [
            "Python",
            "QT",
            "PyQT5"
        ]
    },
    {
        title: "NFL Fantasy MVP Analysis",
        desc: "The goal of this study is to use Fantasy Football information to determine the best player at certain positions every year (1999 - 2019) in the NFL.",
        github: "https://github.com/jed-3rd/NFLFantasyMVPAnalysis",
        tech: [
            "Python",
            "Pandas & Numpy",
            "Jupyter"
        ]
    },
]
