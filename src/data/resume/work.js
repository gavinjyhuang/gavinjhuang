/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Aspida',
    position: 'Software Engineering Intern',
    url: 'https://aspida.com',
    startDate: '2025-05-01',
    summary: '',
    highlights: [
      'Developed the Aspida digital annuities platform in a React, Node + Typescript, and Express environment.',
      'Coordinated closely with peer engineers on version control and code synchronization on concurrent development.',
      'Led the design of an internal e-signature platform to replace Docusign,',
      'Projected to save over $100,000 annually by eliminating $4-per-envelope costs across 30,000+ client contracts.',
      'Gained experience with IaC through AWS Lambda, Terraform, and agile workflows using Jira + Atlassian suite.',
    ],
  },
  {
    name: 'Duke University Bartesaghi Lab',
    position: 'Electron Microscope Image Processing Researcher',
    url: 'https://www.bartesaghilab.org/',
    startDate: '2025-01-01',
    summary: 'Processed electron microscope images using Duke’s HPC cluster to support 3D classification of ribosomal motion.',
    highlights: [
      'Implemented TomoDRGN to train a neural network for 3D classification from 2D projections.',
      'Developed deep learning models to automate identification of ribosomal conformational states.',
      'Enhanced AI-driven structural biology research through image analysis automation.',
    ],
  },
  {
    name: 'TEDxDKU Conference',
    position: 'Webmaster, Conference Data Analytics',
    url: 'https://www.tedxdku.com/',
    startDate: '2023-10-01',
    endDate: '2024-12-01',
    summary: 'Led the technical development and analytics strategy for TEDxDKU, supporting a large-scale student-faculty event.',
    highlights: [
      'Built a full-stack web app using React, Node.js, Express, and MongoDB for conference registration and engagement.',
      'Supported over 500 registrations and ensured system scalability and performance.',
      'Used R to visualize and analyze audience engagement metrics post-conference.',
    ],
  },
  {
    name: 'University of Science and Technology of China',
    position: 'Biotechnology Robotics Researcher',
    url: 'https://en.ustc.edu.cn/',
    startDate: '2023-06-01',
    endDate: '2023-08-01',
    summary: 'Automated ELISA experiments with a robotic arm using computer vision and real-time control systems.',
    highlights: [
      'Designed software for robotic automation of immunoassay experiments, improving efficiency by 20%.',
      'Integrated robotic control into biological workflows through close collaboration with cross-functional teams.',
    ],
  },
  {
    name: 'UC Berkeley School of Information',
    position: 'Machine Learning Researcher',
    url: 'https://www.ischool.berkeley.edu/',
    startDate: '2021-06-01',
    endDate: '2021-08-01',
    summary: 'Led research on image classification and object detection using deep learning techniques.',
    highlights: [
      'Developed object detection pipeline using EfficientDet-0 with 97.8% accuracy on a pet image dataset.',
      'Built multi-task neural networks for MNIST digit classification and bounding box localization.',
      'Implemented custom training logic in PyTorch, achieving over 98% accuracy.',
    ],
  },
];

export default work;
