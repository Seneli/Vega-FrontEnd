const about_content = [
  {
    title: 'Why did we build this?',
    icon: 'lightbulb',
    paragraphs: [
      'It is estimated that 70% of security vulnerabilities are added to a software system prior to implementation, highlighting the need for a method of identifying these vulnerabilities during the design phase of software development.',
      'To improve visibility into vulnerabilities caused by third party packages, Software Bill of Materials (SBOM), have been adopted in the software industry. SBOMs are lists outlining all components, libraries, modules, and dependencies necessary to build a software product.',
    ],
    images: [],
  },
  {
    title: 'Who is this for?',
    icon: 'lightbulb',
    paragraphs: [
      'This project aims to leverage the information about a software system contained in that system’s SBOM and public vulnerability databases to inform users of weaknesses present in their system prior to implementation. The target users for our project are software developers and architects evaluating their system at the design stage.',
    ],
    images: [],
  },
  {
    title: 'How do we use this?',
    icon: 'lightbulb',
    paragraphs: [
      'The secure software development lifecycle (SDLC) is the process by which security assurance and management activities are integrated in software as it is being designed developed and engineer.',
      'Given that most security vulnerabilities are added to a software system during the design phase, Vega, our proposed solution, will support software architects during the design stage by scanning software SBOMs, identifying the vulnerabilities associated with each component and contextualizing risk and likelihood of occurrence for a single vulnerability as well as a component of many vulnerabilities.'
    ],
    images: [],
  },
];

export default about_content;
