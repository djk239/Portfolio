import card1 from "../assets/card1.png";

export const projects = [
  {
    id: 1,
    title: "Melody Mystery",
    text: "Plays short audio clips for users challenging them to guess the song. Powered with the help of the Spotify API for use of audio clips and auto completion of song titles. Fully equipped with an admin panel, leaderboards, and more.",
    tech: ["React", "Django", "PostgreSQL", "HTML", "CSS", "JavaScript", "Python", "JWT", "Spotify API", "Authentication"],
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
  {
    id: 4,
    title: "DKLLM AI – Full-Stack Developer LLM Platform",
    text: "A full-stack AI chat application built for developers, integrating local LLMs via Ollama (Qwen Coder 2.5) with optional cloud models through OpenRouter. Features include JWT-based authentication, persistent conversation history, retryable responses, and built-in productivity tools for generating structured code with comments, error handling, and test cases — all within a modern dark-themed UI.",
    tech: ["Node.js", "JavaScript", "JWT", "Ollama", "OpenRouter", "Authentication", "Full-Stack Development", "Tailwind"],
    github: "https://github.com/djk239/dkllmai",
  },
];

