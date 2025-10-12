// src/data/projects.js
// NOTE: Images are in /public, so we reference them with absolute paths (no imports).

const pub = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, "")}`;

export const projects = [
  {
    slug: "motivation-app",
    title: "Motivation & Habit Tracking App",
    summary:
      "Mobile-first Android app designed to help users build sustainable routines using gamification and habit psychology.",
    tech: ["Java", "XML", "Android Studio", "Room DB", "MVVM"],
    repo: "#",
    demo: "#",

    // 👇 3-image hero (left, main/center, right)
    heroShots: [
      pub("motivation/rewards.png"),
      pub("motivation/points.png"),
      pub("motivation/calender.png"), // right (check spelling matches your actual file)
    ],

    // ✅ NEW: alternating feature layout (no bullets)
    featuresMedia: [
      {
        title: "**Fully User-Defined System**",
        text: "All habits, rewards, categories, difficulty levels, and frequencies are defined by the user, not preset. This gives complete flexibility and makes the app usable for a wide audience.",
        img: pub("motivation/addhabit.png"),
      },
      {
        title: "**Dynamic Points & Progress System**",
        text: "The progress bar adapts to the user’s own reward values, showing how close they are to unlocking their next goal rather than following fixed milestones. It resets daily to encourage consistency and provide fresh motivation, while the user’s running points total remains constant to reflect long-term progress.",
        img: pub("motivation/pointsbar.png"),
      },
      {
        title: "**Calendar Tracking**",
        text: "Encourages reflection on long-term progress by showing a visual record of habits completed over weeks and months, helping users step back from day-to-day frustration and recognise their growth.",
        img: pub("motivation/pointsbar.png"),
      },
      {
        title: "**Daily Habit Pop-up**",
        text: "A centralised daily checklist designed to bring all of the user’s habits into one view for quick action.",
        img: pub("motivation/calenderview.png"), // replace with daily view image if you have one
      },
      {
        title: "**Accessible UI & UX**",
        text: "Navigation and interactions are simple, drawing inspiration from a range of apps. The bottom navigation bar and dynamic triangle button for adding habits/rewards adapt contextually (e.g., changing function on the calendar page). Combined with a clean, neutral design, the app feels accessible and usable across demographics.",
        img: pub("motivation/dailyhabits.png"), // replace with nav/UX shot if you have one
      },
    ],

    // ✅ Sections for this project (Key Features removed — handled above)
    sections: [
      {
        heading: "Overview",
        body: "A mobile-first Android app designed to help users build long-term, sustainable routines using gamification backed by habit-formation psychology. It combines habit tracking with a points and rewards system, supported by features such as a progress calendar and daily habit view. The app avoids guilt and negative reinforcement, focusing instead on visual motivation and user-defined rewards to encourage consistent, long-term use.",
      },
      {
        heading: "Tech Stack",
        body: "Java and XML with Android Studio, following an MVVM architecture pattern. Room Database was used for persistent data storage. The interface follows Material Design guidelines. Testing was conducted via Android Emulator (Pixel 6, Android 13).\n\n Development was completed using AI-assisted workflows, allowing me to focus on system architecture, UX flow, and ensuring the technical implementation matched my design intentions.",
      },
      {
        heading: "Challenges Solved",
        body: "• **Consistency Across Screens** – Initially, points and rewards totals were not updating reliably between different views. This was solved by implementing a shared PointsViewModel to ensure consistent state management across the app.\n\n• **Restructured Progress Bar System** – The first implementation used a continuous points bar that wasn’t motivating. I redesigned it to dynamically show progress toward the next reward, creating a clearer and more encouraging visual feedback loop.",
      },
      {
        heading: "Reflection",
        body: "This was my first full Android app build, requiring me to manage a large-scale, multi-file project. I developed practical skills in version control, Android Studio, Material Design, and Room Database, while learning how to structure an app effectively.\n\n My research into behavioural psychology and habit formation, drawing on works such as Atomic Habits, showed that sustainable habit-building depends on positive reinforcement and personalisation, not punishment. Apps that penalise users (e.g., streak breaks or lost points) can discourage long-term engagement. I applied this by designing a system that rewards progress, lets users define their own rewards, and focuses on intrinsic motivation.\n\n Combining this research with practical development taught me how to align design and technology to support genuine behaviour change — building an app that motivates users through clarity, autonomy, and reward, rather than guilt.",
      },
    ],
  },

  // ============================================
  // SECOND PROJECT
  // ============================================
  {
    slug: "secure-mood-tracker",
    title: "Secure Mood Tracker (Mind App)",
    summary:
      "Anonymous, mobile-first Progressive Web App for mental health tracking, using AES encryption and a PIN-based security model to protect user privacy.",
    tech: ["JavaScript", "CryptoJS", "HTML/CSS", "PWA", "Service Workers"],
    repo: "#",
    demo: "#",

    // (Optional) add a hero later if you want:
    cover: pub("mindapp/home.png"),
    heroAlt: "Mind App – home screen",

    // ✅ NEW: alternating feature layout (matches first project)
    featuresMedia: [
      {
        title: "**Accessible, Mobile-First Experience**",
        text: "Designed as a Progressive Web App (PWA) with offline support, responsive layouts, and ARIA attributes for assistive technologies. The calm, minimalist interface uses colour psychology and clear visuals to support emotional comfort and usability across all devices.",
        img: pub("/mindapp/mobile.png"), // replace with your UI/accessibility shot
      },
      {
        title: "**Quick, Intuitive Mood Logging**",
        text: "Log your mood in seconds using emojis and optional descriptions. The visual-first design makes emotion tracking accessible, expressive, and effortless.",
        img: pub("/mindapp/entry.png"), // replace with your logging screen
      },
      {
        title: "**End-to-End Encryption with PIN Security**",
        text: "All data is encrypted client-side using AES through CryptoJS. The user’s PIN acts as the encryption key and is securely hashed before storage, ensuring that neither the PIN nor entries can ever be accessed in plain text.",
        img: pub("/mindapp/setpin.png"), // replace with an encryption/settings screen
      },
      {
        title: "**Visual Streak Tracker**",
        text: "A built-in calendar highlights the current day and visually marks each day with a completed entry. This creates a clear, motivating overview of consistency over time—helping users see their emotional tracking streaks at a glance and stay engaged with long-term reflection.",
        img: pub("/mindapp/tracker.png"), // replace with your calendar/streak view
      },
      {
        title: "**Secure Sharing**",
        text: "Entries can be exported and shared with trusted individuals through the Web Share API. Only recipients with the correct PIN can decrypt and view the data, keeping sensitive information protected even in transit.",
        img: pub("/mindapp/share.png"), // replace with a share/export UI
      },
    ],

    sections: [
      {
        heading: "Overview",
        body: "The Mind app is a mobile-first Progressive Web App (PWA) designed to provide a secure, anonymous space for individuals to track their moods and emotions. Users can log entries with emojis and descriptions, automatically timestamped with date, time, and weather data. All data is encrypted locally using AES with a user-defined PIN, ensuring privacy and control. The app empowers users to reflect on emotional patterns and optionally share encrypted entries with trusted third parties, without storing any personal profiles or external server data.",
      },
      // ⛔️ 'Key Features' removed — handled by featuresMedia above
      {
        heading: "Tech Stack",
        body: "JavaScript, HTML, CSS, and CryptoJS for AES encryption. PWA features include service workers for offline support and caching, plus a manifest file for native-like installation. Development was completed in Visual Studio Code with Git for version control and Chrome for testing/debugging.\n\n Built using AI-assisted development tools to streamline the encryption setup and focus on crafting a secure, privacy-first user experience.",
      },
      {
        heading: "Challenges Solved",
        body: "• **Encryption Integration** – Initially, multiple crypto scripts led to inconsistent encryption (PINs encrypted but not entries). This was resolved by adopting crypto.min.js, a precompiled library ensuring consistent AES encryption across the app.\n\n• **Cross-Screen Security & API Limitations** – PIN entry was streamlined to confirm secure actions like downloading or sharing data. To address API downtime, cached weather data was used as a fallback, maintaining smooth user experience.\n\n• **Balancing Simplicity with Security** – Achieved a lightweight, responsive design without compromising on robust encryption and offline capability.",
      },
      {
        heading: "Reflection",
        body: "This project highlighted the importance of building mental health tools that prioritise trust, privacy, and usability. Adopting a security-first approach taught me how to apply AES encryption with client-side storage to keep sensitive data fully under user control.\n\n Accessibility was also a key focus, with features such as ARIA attributes, intuitive emoji-based logging, and calming colour psychology to create a supportive user experience.\n\n Technically, I developed practical skills in Progressive Web App architecture, service workers, and secure local storage. I also learned how to balance scope within strict deadlines — prioritising core features like encryption and offline support over non-essential extras.\n\n Ultimately, this project reinforced how secure design, accessibility, and user empathy can work together to create digital health tools that are both trustworthy and effective.",
      },
    ],
  },
];
