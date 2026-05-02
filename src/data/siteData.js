export const profile = {
  name: 'Kritik Gianta',
  title: 'AI/ML Enthusiast',
  location: 'Bengaluru, India',
  phone: '+91 8968266979',
  email: 'kritikgianta88@gmail.com',
  github: 'https://github.com/kritikGianta',
  tagline: 'Continuously exploring machine learning, NLP, and intelligent systems through hands-on projects and research',
};

export const aboutPerspective = {
  title: 'I am still early in the journey, but I am clear about the kind of work I want to keep doing.',
  summary:
    'A lot of my journey has been about finding the kind of work that feels right to stay with for a long time. Growing up across different places made me adaptable, and studying AI/ML gave that curiosity a direction I genuinely want to keep building on.',
  cards: [
    {
      label: 'What shaped me',
      text: 'Coming from Shimla and growing up across different parts of India made adaptability a natural part of who I am. It taught me how to settle into new places, pay attention, and stay open to different ways of thinking.',
    },
    {
      label: 'How I work',
      text: 'I like building things that are practical, understandable, and worth using. I usually care as much about structure and clarity as I do about the final result.',
    },
    {
      label: 'Where I am heading',
      text: 'The direction feels clearer now: language systems, explainable AI, trustworthy tools, and research ideas that can eventually become real systems people can use.',
    },
  ],
};

export const homeNarrative = [
  {
    label: 'Who Am I',
    paragraphs: [
      'I am Kritik Gianta, an AI/ML student at BMS Institute of Technology and Management. I come from the hilly mountains of Shimla, but I have been brought up in different parts of the country, which has given me a diverse perspective on life and learning.',
      'I completed most of my early schooling at Army Public School Chandimandir, along with time spent in places like Suratgarh and other regions across India. Moving frequently helped me adapt quickly, stay curious, and remain open to new experiences.',
      'When I first chose AI/ML as my field of study, I did not truly understand what it was. I was familiar with the term, but not its depth or potential. Like many engineering students, I spent my early semesters exploring different domains such as development, cybersecurity, and blockchain, trying to find where I truly belonged.',
      'Everything changed toward the end of my third semester, when I began exploring Machine Learning more seriously. As I dove deeper, I became fascinated by the idea that humans are attempting to create something in their own image: systems that can think, learn, and make decisions. That was the moment I realized this was the field I wanted to pursue as a long-term journey.',
    ],
  },
  {
    label: 'Why I Choose AI',
    paragraphs: [
      'I believe AI represents the next stage in human evolution. In a way, it mirrors how humans were once created by what we might call absolute engineers. Now, we stand at a point where we are attempting to create something new ourselves: intelligent systems that extend beyond our limitations.',
      'AI is more than just a technology; it is a transformation. It marks the beginning of a new kind of existence, one where intelligence is no longer limited to biological boundaries. I want to be part of that journey not as an observer, but as a contributor.',
      'People often say AI is dangerous. But so are humans. Yet that has never stopped us from evolving, innovating, and pushing boundaries. The same applies to AI. It may bring challenges and risks, but it also carries immense potential to reshape the world in ways we cannot yet fully comprehend.',
      'To me, AI is not just about building smarter systems. It is about understanding intelligence itself: what it means to think, to learn, and to create. Being part of this transformation is not just exciting; it is necessary for anyone who wants to shape the future rather than simply witness it.',
    ],
  },
];

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Future Work', path: '/future-work' },
  { label: 'Contact', path: '/contact' },
];

export const heroStats = [
  { value: '9.4', label: 'Current GPA' },
  { value: '04', label: 'Core Projects' },
  { value: '2027', label: 'Expected Graduation' },
];

export const profileModes = [
  {
    id: 'builder',
    label: 'Builder',
    title: 'I like making systems feel usable, not just technically right.',
    description:
      'I pay attention to how technical choices affect the final experience, not just whether the code works.',
    pulse: ['Product thinking', 'Workflow design', 'Reliable implementation'],
  },
  {
    id: 'researcher',
    label: 'Researcher',
    title: 'I enjoy the stage where an idea has to prove itself.',
    description:
      'A lot of my work sits around NLP, explainability, model behavior, and seeing what actually holds up when tested properly.',
    pulse: ['Model evaluation', 'NLP pipelines', 'Iterative experiments'],
  },
  {
    id: 'competitor',
    label: 'Competitor',
    title: 'I also enjoy fast environments where ideas need to land quickly.',
    description:
      'Hackathons and fast builds taught me how to move quickly while still keeping the important parts clear.',
    pulse: ['Hackathons', 'Rapid prototyping', 'Team problem solving'],
  },
];

export const projects = [
  {
    slug: 'sms-classification-xlm-roberta',
    title: 'SMS Classification using XLM-RoBERTa',
    category: 'NLP System',
    status: 'Completed',
    blurb:
      'I built this project to separate signal from spam in a practical way, using multilingual SMS classification across English, Hindi, and Hinglish with calibrated confidence.',
    image: '/sms-classification-ui.png',
    stack: ['Python', 'PyTorch', 'Hugging Face Transformers'],
    repo: 'https://github.com/kritikGianta/SMS_Classification',
    metrics: ['98.99% F1', '134K SMS', 'xlm-roberta-base'],
    details: [
      'I fine-tuned XLM-RoBERTa for multilingual SMS classification so the system could handle English, Hindi, and Hinglish messages in a more realistic setting instead of a narrow single-language pipeline.',
      'What mattered to me here was not just raw classification, but making the output feel usable and dependable, especially when the difference between promotional and service messages needs to be surfaced clearly.',
    ],
    take:
      'I like this project because it solves a very practical problem and keeps the output simple enough to be useful right away.',
  },
  {
    slug: 'reponexus',
    title: 'RepoNexus (DebtLens)',
    category: 'AI SaaS Platform',
    status: 'Completed',
    blurb:
      'I built RepoNexus as an AI-powered technical debt platform that audits repositories, explains risk, and helps developers move from raw code problems to actionable fixes.',
    image: '/reponexus-ui.png',
    stack: ['React', 'FastAPI', 'Tree-sitter', 'XGBoost', 'Groq API'],
    repo: 'https://repo-nexus.vercel.app/',
    metrics: ['18 core features', 'Hybrid AI + AST architecture', 'Repository health scoring'],
    details: [
      'This project came from a simple frustration: technical debt often feels invisible until it becomes expensive. I wanted to build something that could read repositories more like an engineer, not just a static scanner.',
      'RepoNexus combines local parsing, custom ML scoring, and cloud-based LLM reasoning to audit codebases, surface technical debt, explain why it matters, and suggest clearer next actions for developers.',
    ],
    take:
      'This is one of the projects that feels closest to how I like to think: practical engineering problems, strong structure, and AI used where it genuinely helps.',
  },
  {
    slug: 'threatlens',
    title: 'ThreatLens',
    category: 'Future Work',
    status: 'Future Work',
    blurb:
      'A future cybersecurity direction focused on making threat understanding, monitoring, and response workflows more intelligent and more useful in practical security environments.',
    image: '/threatlens-ui.png',
    stack: ['Future direction'],
    metrics: ['Cybersecurity AI', 'Threat intelligence', 'SOC assistant'],
    repo: 'https://github.com/kritikGianta/ThreatLens.git',
    details: [
      'ThreatLens is one of the future systems I want to keep building out further.',
      'Right now I want it represented as a clear next direction rather than over-explaining it before the project is fully developed.',
    ],
    take:
      'Right now, this project matters more to me as a direction I want to keep growing than as something I want to overstate too early.',
  },
  {
    slug: 'skill-learning-ledger',
    title: 'Skill & Learning Ledger',
    category: 'Full-Stack DBMS Project',
    status: 'Completed',
    blurb:
      'I built this as a personal learning system with a strong DBMS foundation, centered on MySQL schema design, relational integrity, historical tracking, and a structure that matches how I actually learn and work.',
    image: '/skill-ledger-ui.png',
    stack: ['React', 'Express', 'MySQL', 'Vite'],
    repo: 'https://github.com/kritikGianta/Skill-Learning_Ledger',
    metrics: ['Normalized MySQL schema', '5 core entities', 'Graph-style relations'],
    details: [
      'The part I value most in this project is the MySQL design itself. I structured it around normalized entities like skills, resources, study sessions, skill levels, and skill relations so the system stays clean, extensible, and logically consistent.',
      'I used primary keys, foreign keys, referential actions, constraints, indexing, and historical level tracking to make the project feel like a proper DBMS-backed system instead of just a front-end tracker with loosely connected tables.',
    ],
    take:
      'What I like most here is the database thinking behind it. The project gave me space to make the structure itself a real part of the work.',
  },
  {
    slug: 'toxic-comment-detector-xai',
    title: 'Toxic Comment Detector with Explainable AI',
    category: 'Explainable AI',
    status: 'Completed',
    blurb:
      'I updated this into a local-first moderation app that reviews toxic language, explains why something gets flagged, screens CSVs in batches, and suggests calmer rewrites without relying on external APIs.',
    image: '/toxic-comment-ui.png',
    stack: ['Python', 'PyTorch', 'Transformers', 'Captum', 'Streamlit'],
    repo: 'https://github.com/kritikGianta/toxic-comment-detector-xai',
    metrics: ['F1: 0.8388', 'Threshold: 0.61', 'ROC-AUC: 0.9856'],
    details: [
      'I built this around a fine-tuned DistilBERT model and kept the entire workflow local, because I wanted moderation assistance that feels practical, lightweight, and usable even without depending on external AI services.',
      'What matters most to me in this project is not just classification accuracy, but making the moderation process more transparent through token-level explanations, threshold-aware decisions, fairness checks, and classifier-guided rewrite suggestions.',
    ],
    take:
      'I wanted this project to feel less like a model demo and more like something a moderator could actually work with.',
  },
  {
    slug: 'hybrid-quantum-fake-news',
    title: 'Hybrid Classical-Quantum Fake News Detection',
    category: 'Research Prototype',
    status: 'Completed',
    blurb:
      'Experimental hybrid QSVM and VQC classifier using PCA-reduced features to explore quantum-enhanced fake news detection.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    stack: ['Python', 'Qiskit', 'QSVM'],
    metrics: ['84.13% testing accuracy', '100% recall', '91.38% F1-score'],
    details: [
      'Evaluated Z, ZZ, and Pauli quantum feature maps on a 2016-sample dataset after reducing features into a 2-qubit representation.',
      'Treated the project as both a classification study and a research exercise in how classical preprocessing can support experimental quantum models.',
    ],
    take:
      'I value this one because it let me explore a less familiar area and approach it seriously instead of keeping my work too one-dimensional.',
  },
  {
    slug: 'wellsim',
    title: 'WellSim',
    category: 'Research and System Design',
    status: 'Halfway Completed',
    blurb:
      'A research and system design project I am building around simulated user wellbeing, decision support, and more human-centered recommendation thinking.',
    image:
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80',
    stack: ['Research system', 'Simulation design', 'Recommendation direction'],
    repo: 'https://github.com/kritikGianta/WellSim.git',
    metrics: ['Halfway completed', 'Research-led', 'System design focus'],
    details: [
      'I see WellSim as one of the stronger bridges between my research interests and the kind of systems I want to design long term.',
      'Right now it sits in the middle ground between exploration and implementation, which is why I want it represented as a partially developed project rather than a finished build.',
    ],
    take:
      'This project feels important to me because it connects research questions with the kind of system design problems I want to keep exploring.',
  },
];

export const researchPapers = [
  {
    title: 'Hybrid Classical-Quantum Fake News Detection',
    status: 'Research-ready project',
    blurb:
      'This project already carries a paper-style structure through experimentation, feature-map comparison, and measurable evaluation.',
    focus: ['Quantum feature maps', 'PCA reduction', '84.13% accuracy'],
  },
  {
    title: 'Wellbeing-Aware Recommendation Research',
    status: 'Almost done',
    blurb:
      'A near-complete research direction focused on recommendation systems that account for user wellbeing, longer-term outcomes, and safer decision support.',
    focus: ['Research direction', 'Wellbeing modeling', 'Experiment link'],
    repo: 'https://github.com/kritikGianta/user-well-being-system.git',
  },
  {
    title: 'SMS Classification Calibration Note',
    status: 'Write-up opportunity',
    blurb:
      'The calibration and override logic in the SMS system could be presented as a focused technical write-up on reliable decision layers.',
    focus: ['Temperature scaling', 'Heuristic override', 'Reliability framing'],
  },
];

export const experience = {
  role: 'Machine Learning Intern',
  company: 'TestAIng',
  duration: 'Jul 2025 - Jan 2026',
  mode: 'Remote',
  points: [
    'Worked within the CSV Team on applied AI research, optimization problems, and intelligent automation systems.',
    'Developed an intelligent SMS classification system in collaboration with TRAI for regulatory filtering and spam management.',
    'Fine-tuned transformer models using advanced NLP preprocessing, tokenization strategies, and hyperparameter optimization.',
    'Implemented data-centric AI strategies, including GAN-based synthetic data generation and augmentation pipelines.',
  ],
};

export const timeline = [
  {
    phase: 'B.E. in Artificial Intelligence and Machine Learning',
    period: 'Expected May 2027',
    summary:
      'BMS Institute of Technology and Management, Bengaluru. Current GPA: 9.4 with a strong focus on intelligent systems, ML workflows, and applied software engineering.',
  },
  {
    phase: 'Machine Learning Internship',
    period: 'Jul 2025 - Jan 2026',
    summary:
      'Worked remotely at TestAIng on applied AI research, transformer tuning, intelligent automation, and data-centric experimentation.',
  },
  {
    phase: 'Senior Secondary',
    period: 'July 2022',
    summary:
      'Completed CBSE at Army Public School, Panchkula with a score of 88%, building the academic base that led into engineering and AI.',
  },
];

export const skillGroups = [
  {
    title: 'AI and ML',
    items: [
      { name: 'Machine Learning', level: 90 },
      { name: 'Deep Learning and NLP', level: 88 },
      { name: 'Generative AI and RAG', level: 82 },
    ],
  },
  {
    title: 'Frameworks and Data',
    items: [
      { name: 'PyTorch and Transformers', level: 86 },
      { name: 'scikit-learn and LangChain', level: 80 },
      { name: 'NumPy, Pandas, Matplotlib', level: 84 },
    ],
  },
  {
    title: 'Engineering Stack',
    items: [
      { name: 'Python, C, C++', level: 87 },
      { name: 'Docker, MLflow, DVC', level: 78 },
      { name: 'AWS, CI/CD, GitHub Actions', level: 74 },
    ],
  },
];

export const achievements = [
  'Hacksphere Hackathon - First Position (BMSIT)',
  'CodeSprint 3.0 - First Position (NMIT)',
  'CodeWars - Second Position (MIT)',
  'Social Hackathon - Third Position (CMRIT)',
];

export const certifications = [
  'Hands-on Version with Git',
  'Python for Data Science, AI and Development',
  'HTML, CSS, JavaScript',
];

export const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/kritikGianta' },
  { label: 'Email', href: 'mailto:kritikgianta88@gmail.com' },
  { label: 'Call', href: 'tel:+918968266979' },
];

export const experimentCards = [
  {
    title: 'Prompt Note',
    body: 'Click through the modes, drag the cards, and treat the landing page like a small lab instead of a brochure.',
  },
  {
    title: 'What Matters',
    body: 'The goal is not maximum motion. The goal is motion that gives visitors something to do and remember.',
  },
  {
    title: 'Current Interests',
    body: 'NLP, explainable AI, RAG-flavored workflows, and practical software systems with measurable behavior.',
  },
];

export const playgroundSignals = [
  {
    id: 'nlp',
    label: 'NLP',
    title: 'Language systems are still the space I return to most naturally.',
    description:
      'From SMS filtering to moderation work, I enjoy projects where language, confidence, and practical decision-making all come together.',
    level: 'High',
    color: 'yellow',
    tags: ['Classification', 'Calibration', 'Transformers'],
    projectSlug: 'sms-classification-xlm-roberta',
  },
  {
    id: 'xai',
    label: 'XAI',
    title: 'I care about understanding why a model reaches a decision.',
    description:
      'Explainability matters to me because it makes model output easier to trust, inspect, and improve.',
    level: 'Active',
    color: 'orange',
    tags: ['Integrated Gradients', 'Bias checks', 'Reasoning'],
    projectSlug: 'toxic-comment-detector-xai',
  },
  {
    id: 'research',
    label: 'Research',
    title: 'I enjoy stepping into unusual technical ground when the question feels worth exploring.',
    description:
      'Research projects keep me curious and let me explore how experimental ideas can become something measurable and real.',
    level: 'Exploring',
    color: 'red',
    tags: ['Quantum', 'Evaluation', 'Experiments'],
    projectSlug: 'hybrid-quantum-fake-news',
  },
  {
    id: 'systems',
    label: 'Systems',
    title: 'I do not want to stop at models. I want the surrounding system to make sense too.',
    description:
      'Schema design, workflows, relationships, and product structure matter to me just as much as the model itself.',
    level: 'Stable',
    color: 'yellow',
    tags: ['MySQL', 'Relations', 'Workflows'],
    projectSlug: 'skill-learning-ledger',
  },
];

export const futureWork = [
  {
    title: 'ThreatLens',
    status: 'Major project direction',
    summary:
      'A cybersecurity direction I want to keep building around threat understanding, monitoring, and practical response support.',
  },
  {
    title: 'Wellbeing-Aware Recommendation Research',
    status: 'Research paper direction',
    summary:
      'A research direction around recommendation systems that pay more attention to wellbeing, long-term outcomes, and safer decision support.',
  },
  {
    title: 'AyurTrust',
    status: 'Research and system direction',
    summary:
      'A trust and traceability direction focused on making complex supply chains feel more transparent and dependable.',
  },
];
