const projects = [
  {
    id: "swiftq",
    name: "SwiftQ",
    meta: {
      kind: "personal",
      url: "https://swiftq-v2.netlify.app/",
    },
    technologies: ["TypeScript", "React.js", "Tailwind", "Firebase"],
    description: `
SwiftQ is a QR-based electronic queue management system designed to replace physical lines with a more flexible, user-friendly experience. Hosts can create and manage queues through an administrative dashboard, while customers join by scanning a QR code and entering a virtual queue directly on their phones. Once queued, customers can see their live position, the number of people ahead of them, and an estimated wait time, allowing them to move freely instead of standing in line. This makes SwiftQ particularly well-suited for pop-up shops, service counters, and crowded venues where long, slow-moving lines are common.

The portfolio version of SwiftQ (v2) was built using React.js, React Router, and Tailwind CSS, with Firebase used as a backend-as-a-service for authentication and real-time database functionality. While this enabled rapid iteration, it also led to tightly coupled frontend and data logic. To address this, I'm currently developing SwiftQ v3, which introduces a dedicated backend built with NestJS, alongside a refactored frontend architecture. This ongoing iteration reflects a deliberate shift toward better separation of concerns, improved scalability, and a more maintainable long-term system design.
    `,
  },
  {
    id: "ottri",
    name: "Ottri Cleaning Services",
    meta: {
      kind: "Client Work",
      // url: "https://ottri-frontend-3a6e09c2024b.herokuapp.com/booking/new",
    },
    technologies: ["TypeScript", "Next.js", "Tailwind", "Tanstack Query"],
    description: `
Ottri Cleaning Services is a web platform designed to modernize how a cleaning services business presents itself and manages operations. I led a complete frontend rebuild focused on improving usability, performance, and clarity for both customers and internal staff. The project includes a polished multi-page marketing website that clearly communicates services and pricing, helping users quickly understand and engage with the platform.

In addition to the marketing site, I built a multi-step customer booking flow with dynamic time-slot generation to streamline scheduling, as well as a comprehensive admin dashboard for managing users, bookings, site content, and analytics. The application was developed with Next.js, emphasizing responsive design, scalable architecture, and a smooth user experience across devices.
    `,
  },
  {
    id: "alu-globe",
    name: "ALU Globe",
    meta: {
      kind: "Academic",
      url: "https://globe-app.com/landing",
    },
    technologies: ["TypeScript", "React.js", "Tailwind", "Tanstack Query"],
    description: `
ALU Globe is a social and academic web platform built to improve connectivity and engagement among university students. The project brings together key campus features in one place, including discussion forums, event management, student directories, business networking, and shared resources, creating a central hub for student interaction and collaboration.

The application was developed as a responsive React and TypeScript web app with a modular component architecture. I implemented interactive features such as discussion boards, event calendars, user onboarding flows, and real-time communication elements, focusing on performance, usability, and scalability to support an active student community.
    `,
  },
];

export default projects;
