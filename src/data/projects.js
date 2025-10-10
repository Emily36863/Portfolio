// src/data/projects.js
// NOTE: Images are in /public, so we reference them with absolute paths (no imports).

export const projects = [
  {
    slug: "motivation-app",
    title: "Motivation & Habit Tracking App",
    summary:
      "Mobile-first Android app designed to help users build sustainable routines using gamification and habit psychology.",
    tech: ["Java", "XML", "Android Studio", "Room DB", "MVVM"],
    repo: "#",
    demo: "#",

    // 👇 3-image hero (left, main/center, right) — uses your public/motivation files
    heroShots: [
      "/motivation/rewards.png", // left  (your file is spelled 'calender')
      "/motivation/points.png", // main (center, biggest)
      "/motivation/calender.png", // right
    ],

    sections: [
      {
        heading: "Overview",
        body: "A mobile-first Android app designed to help users build long-term, sustainable routines using gamification backed by habit-formation psychology. It combines habit tracking with a points and rewards system, supported by features such as a progress calendar and daily habit view. The app avoids guilt and negative reinforcement, focusing instead on visual motivation and user-defined rewards to encourage consistent, long-term use.",
      },
      {
        heading: "Key Features",
        body: "• **Fully User-Defined System** – All habits, rewards, categories, difficulty levels, and frequencies are defined by the user, not preset. This gives complete flexibility and makes the app usable for a wide audience.\n\n• **Dynamic Points & Progress System** – The progress bar adapts to the user’s own reward values, showing how close they are to unlocking their next goal rather than following fixed milestones. It resets daily to encourage consistency and provide fresh motivation, while the user’s running points total remains constant to reflect long-term progress.\n\n• **Calendar Tracking** – Encourages reflection on long-term progress by showing a visual record of habits completed over weeks and months, helping users step back from day-to-day frustration and recognise their growth.\n\n• **Daily Habit Pop-up** – A centralised daily checklist designed to bring all of the user’s habits into one view for quick action.\n\n• **Accessible UI & UX** – Navigation and interactions are simple, drawing inspiration from a range of apps. The bottom navigation bar and dynamic triangle button for adding habits/rewards adapt contextually (e.g., changing function on the calendar page). Combined with a clean, neutral design, the app feels accessible and usable across demographics.",
      },

      {
        heading: "Tech Stack",
        body: "Java and XML with Android Studio, following an MVVM architecture pattern. Room Database was used for persistent data storage. The interface follows Material Design guidelines. Testing was conducted via Android Emulator (Pixel 6, Android 13).",
      },
      {
        heading: "Challenges Solved",
        body: "• **Consistency Across Screens** – Initially, points and rewards totals were not updating reliably between different views. This was solved by implementing a shared PointsViewModel to ensure consistent state management across the app.\n\n• **Restructured Progress Bar System** – The first implementation used a continuous points bar that wasn’t motivating. I redesigned it to dynamically show progress toward the *next* reward, creating a clearer and more encouraging visual feedback loop.",
      },
      {
        heading: "Reflection",
        body: "This was my first full Android app build, requiring me to manage a project of significant scale. I developed practical skills in version control, Android Studio, Material Design, and Room Database, while also learning how to structure and organise a multi-file project effectively.\n\nFrom a research perspective, I explored behavioural psychology and habit-formation theory, drawing on works such as *Atomic Habits*. A key insight was that habit apps must focus on positive reinforcement, intrinsic motivation, and personalisation. Negative punishment systems (e.g., streak breaks or lost points) can discourage long-term use, so I designed the app to reward progress without punishing setbacks. Allowing users to define their own rewards ensures that achievements feel meaningful and tied to real life, rather than arbitrary in-app milestones.\n\nThis combination of technical development and applied psychology helped me build not just a functioning app, but one designed to genuinely support sustainable behaviour change.",
      },
    ],
  },

  {
    slug: "secure-mood-tracker",
    title: "Secure Mood Tracker (Mind App)",
    summary:
      "Anonymous, mobile-first Progressive Web App for mental health tracking, using AES encryption and a PIN-based security model to protect user privacy.",
    tech: ["JavaScript", "CryptoJS", "HTML/CSS", "PWA", "Service Workers"],
    repo: "#",
    demo: "#",

    // (Optional) add a hero later if you want:
    // heroShots: ["/mindapp/home.png", "/mindapp/phone.png", "/mindapp/share.png"],

    sections: [
      {
        heading: "Overview",
        body: "The Mind app is a mobile-first Progressive Web App (PWA) designed to provide a secure, anonymous space for individuals to track their moods and emotions. Users can log entries with emojis and descriptions, automatically timestamped with date, time, and weather data. All data is encrypted locally using AES with a user-defined PIN, ensuring privacy and control. The app empowers users to reflect on emotional patterns and optionally share encrypted entries with trusted third parties, without storing any personal profiles or external server data.",
      },
      {
        heading: "Key Features",
        body: "• **Emoji-Based Mood Logging** – Universally accessible interface for quick and intuitive emotion capture.\n\n• **Descriptive Entries + Context Data** – Each entry includes user notes plus automatic date, time, and weather details to help identify triggers and long-term patterns.\n\n• **PIN + AES Encryption** – Every entry is encrypted client-side using CryptoJS. The user’s PIN serves as the encryption key and is hashed before storage, ensuring it cannot be read in plain text.\n\n• **Local Storage Privacy** – All data is stored on the user’s device as encrypted JSON, reducing reliance on external servers and strengthening anonymity.\n\n• **Secure Sharing** – Entries can be exported and shared with trusted parties through the Web Share API. Only recipients with the correct PIN can decrypt and view the content.\n\n• **Accessibility & Mobile-First Design** – Built as a PWA with ARIA attributes, keyboard navigation, and responsive layouts, ensuring usability across devices and for diverse user needs.",
      },
      {
        heading: "Tech Stack",
        body: "JavaScript, HTML, CSS, and CryptoJS for AES encryption. PWA features include service workers for offline support and caching, plus a manifest file for native-like installation. Development was completed in Visual Studio Code with Git for version control and Chrome for testing/debugging.",
      },
      {
        heading: "Challenges Solved",
        body: "• **Encryption Integration** – Initially, multiple crypto scripts led to inconsistent encryption (PINs encrypted but not entries). This was resolved by adopting crypto.min.js, a precompiled library ensuring consistent AES encryption across the app.\n\n• **Cross-Screen Security & API Limitations** – PIN entry was streamlined to confirm secure actions like downloading or sharing data. To address API downtime, cached weather data was used as a fallback, maintaining smooth user experience.\n\n• **Balancing Simplicity with Security** – Achieved a lightweight, responsive design without compromising on robust encryption and offline capability.",
      },
      {
        heading: "Reflection",
        body: "This project highlighted the importance of building mental health tools that prioritise trust, privacy, and usability. By adopting a 'security-first' approach, I learned how to apply AES encryption effectively with client-side storage, ensuring that sensitive data remained fully under user control. Accessibility was a key focus, with features such as ARIA attributes, intuitive emojis, and colour psychology to create a calm, user-friendly interface. Technically, I developed my skills in Progressive Web App architecture, service workers, and handling local storage securely. I also gained experience in balancing scope within strict deadlines, prioritising essential features like encryption and offline support over non-critical extras. Ultimately, the app demonstrated how user research, secure design, and accessible UI can combine to make digital health tools both practical and trustworthy.",
      },
    ],
  },
];
