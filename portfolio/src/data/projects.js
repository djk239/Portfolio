import card1 from "../assets/card1.png";

export const projects = [
  {
    id: 1,
    title: "Melody Mystery",
    text: "Plays short audio clips for users challenging them to guess the song. Powered with the help of the Spotify API for use of audio clips and auto completion of song titles. Fully equipped with an admin panel, leaderboards, and more.",
    tech: ["React", "Django", "PostgreSQL", "HTML", "CSS", "JavaScript", "Python"],
    github: "https://github.com/djk239/UntitledProject/tree/dev",
    link: "",
  },
  {
    id: 2,
    title: "Spider WebCrawler",
    text: "A multithreaded web crawler implemented in C that performs concurrent HTTP retrieval, parses HTML to extract and normalize hyperlinks, and recursively traverses the web graph. The system incorporates thread lifecycle management, synchronized URL queueing, and structured document parsing to enable efficient, parallelized crawling with controlled traversal depth.",
    tech: ["C", "libcurl", "Multithreading"],
    github: "https://github.com/Gradius802/WebCrawler",
  },
  {
    id: 3,
    title: "Python-Based Protein Classification System",
    text: "A Python-based machine learning project implementing an end-to-end classification pipeline for protein subcellular localization. It processes biological sequence data through feature extraction, converts sequences into numerical representations, and trains multiple supervised models (e.g., KNN, SVM, Naive Bayes). Model performance is evaluated using cross-validation and standard metrics to compare and optimize predictive accuracy.",
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "Machine Learning", "Seaborn", ],
    github: "https://github.com/djk239/ml",
  },
];

