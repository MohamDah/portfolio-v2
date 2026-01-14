const projects = [
  {
    id: "swiftq",
    name: "SwiftQ",
    link: "/projects/swiftq",
    meta: {
      kind: "personal",
      url: "https://swiftq-v2.netlify.app/",
    },
    technologies: ["TypeScript", "React", "Tailwind", "Firebase"],
    description: `
SwiftQ is a QR-based electronic queue management system designed to replace physical lines with a more flexible, user-friendly experience. Hosts can create and manage queues through an administrative dashboard, while customers join by scanning a QR code and entering a virtual queue directly on their phones. Once queued, customers can see their live position, the number of people ahead of them, and an estimated wait time, allowing them to move freely instead of standing in line. This makes SwiftQ particularly well-suited for pop-up shops, service counters, and crowded venues where long, slow-moving lines are common.

The portfolio version of SwiftQ (v2) was built using React.js, React Router, and Tailwind CSS, with Firebase used as a backend-as-a-service for authentication and real-time database functionality. While this enabled rapid iteration, it also led to tightly coupled frontend and data logic. To address this, I’m currently developing SwiftQ v3, which introduces a dedicated backend built with Next.js, alongside a refactored frontend architecture. This ongoing iteration reflects a deliberate shift toward better separation of concerns, improved scalability, and a more maintainable long-term system design.
    `,
  },
  // { name: "Ottri Cleaning Services", link: "/projects/ottri" },
];

export default projects;
