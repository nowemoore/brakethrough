// All site copy lives here — edit this file to change the text.

export const APPLY_URL = "https://airtable.com/apptTLpW6JE5VRyBD/pagAucUnPG3YdAsPX/form";

export const home = {
  // Each line is a list of pieces: plain text, { highlight } for bold teal italic,
  // or { link, href } for a link.
  statement: [
    "In July 2026, ",
    { link: "1386 employees from frontier AI companies", href: "https://www.pacingthefrontier.com/" },
    " signed a statement asking governments to ",
    { highlight: "pace" },
    " the development of advanced AI.",
  ],
  title: [
    "Today, we look for ",
    { highlight: "exceptional system thinkers" },
    " to answer ",
    { link: "open questions", href: "https://pacing.tech/appendices/" },
    " around pacing and turn it into a realistic option that world leaders can no longer put off.",
  ],
  // Full-width picture between the buttons and "Supported by". It stays fixed while the page
  // scrolls over it. Put the file in public/ and set e.g. image: "/stripe.jpg".
  // While image is null, a placeholder pattern is shown.
  stripe: {
    // Photo by Jesse Collins on Unsplash (unsplash.com/photos/ICXMkhRdquA), converted to black and white
    image: "/stripe.jpg",
    alt: "Looking up between marble columns at a coffered stone ceiling",
  },
  supporters: {
    heading: "Supported by",
    // Logo files live in public/supporters/
    items: [
      { name: "Arb Research", logo: "/supporters/arb.svg", href: "https://arbresearch.com/" },
      { name: "Paradigm 3", logo: "/supporters/paradigm3.png", href: "https://www.paradigm3.org/" },
    ],
  },
};

// Subsections alternate sides: text left, then right, and so on.
// `image` is optional ({ src: "/about/photo.jpg", alt: "..." }, file in public/) and fills the empty side.
// `full: true` makes a section span the whole width instead. `heading` is optional.
// An entry of the form { stripe: { image, alt } } is a full-width fixed picture divider (like Home's).
// Each `body` entry is a paragraph: a plain string, or a list of pieces (see `home`) for links.
export const about = {
  sections: [
    {
      heading: "Who We Are",
      full: true,
      body: [
        "We are a group of researchers excited about the opportunities AI presents to humanity and, at the same time, concerned about the industry's current trajectory. Brakethrough Fellowship began as our effort to establish the world's first home for scholars dedicated to figuring out how to bring frontier AI to the world safely and at the right pace. We aim to catalyse a community of experts comfortable operating in this new, unfamiliar problem space, excited to generate insights that will help decision-makers worldwide to steer AI development toward a future that benefits everyone.",
      ],
      image: null,
    },
    {
      // Photo by Unsplash (photo-1773024247520-29ebfd0b5988), converted to black and white
      stripe: { image: "/about/stripe-bulbs.jpg", alt: "Rows of glowing filament light bulbs hanging from a dark ceiling" },
    },
    {
      heading: "What We Mean by \"Pacing\"",
      full: true,
      body: [
        "We define pacing as deliberately adjusting the speed at which frontier AI is developed and deployed, so that society’s ability to manage the risks can keep up with the technology. It is not a blanket ban or a permanent halt. A pacing intervention can be narrow or broad, targeting specific capabilities, stages of development, or kinds of deployment while preserving beneficial uses. Getting pacing right means answering hard questions: which risks justify it, what activity it should cover, how compliance can be verified, how rivals can coordinate, and when and how it should end.",
      ],
      image: null,
    },
    {
      // Photo by Unsplash (photo-1454923634634-bd1614719a7b), converted to black and white
      stripe: { image: "/about/stripe-people.jpg", alt: "People walking across a station concourse seen from above, some blurred by motion" },
    },
    {
      // No heading: just the picture divider above, then the link and card
      full: true,
      body: [
        [
          "Learn more about how we think about pacing in our original piece: ",
          { link: "Pacing the Frontier: A Framework & Research Agenda", href: "https://pacing.tech/" },
        ],
      ],
      // Optional preview card shown under the text; image from the page's own social preview
      card: {
        href: "https://pacing.tech/",
        image: "/about/pacing-card-v2.png",
        imageAlt: "Pacing the Frontier: A Framework & Research Agenda, by Raymond Douglas, Charles Dillon, Nikola Moore, Gavin Leech and Shahar Avin, with Mathias Kirk Bonde, Rohit Krishnan, Noah Perez, Nathan Young, Cormac Slade Byrd, Stephen Casper, Jan Kulveit and David Duvenaud",
        title: "Pacing the Frontier: A Framework & Research Agenda",
        description: "How to think about how to pace.",
        site: "pacing.tech",
      },
      image: null,
    },
  ],
};

export const programme = {
  title: "Programme",
  lead: "Join our 12-week fellowship for system thinkers who want to make pacing a realistic option for world leaders.",

  about: {
    heading: "What You Get",
    // Optional full-width fixed picture shown after this section (same as Home's stripe)
    // Photo by Unsplash (photo-1479142506502-19b3a3b7ff33), converted to black and white
    stripeAfter: { image: "/programme/stripe-books.jpg", alt: "Antique leather-bound books on a wooden library shelf" },
    // `icon` is a Phosphor icon name (phosphoricons.com); add new ones to the icon list in Programme.jsx
    points: [
      { icon: "CalendarBlank", text: [{ bold: "12 weeks" }, " to work full-time on a project you design."] },
      { icon: "ChatsCircle", text: ["Support from a ", { bold: "expert advisers" }, " and weekly one-on-ones with our research support team."] },
      { icon: "Coins", text: ["A", { bold: " weekly stipend of $1,200" }, " so you can focus on your research."] },
      { icon: "GlobeHemisphereWest", text: ["Flexibility to ", { bold: "work from anywhere" }, " in the world."] },
      { icon: "UsersThree", text: ["A ", { bold: "small cohort" }, " of fellows to think, test ideas and write with."] },
      { icon: "AirplaneTilt", text: [{ bold: "Travel support" }, " to present your work at a conference, if your paper is accepted."] },
    ],
  },

  topics: {
    heading: "Topics",
    // Photo by Unsplash (photo-1602876153306-9a59170d9d8d), converted to black and white
    stripeAfter: { image: "/programme/stripe-bulbs.jpg", alt: "A row of glowing Edison light bulbs hanging from an industrial pipe" },
    lead: "We are excited about a wide range of work on the open questions that stand between pacing as an idea and pacing as policy, including:",
    items: [
      {
        heading: "Grounds for Pacing",
        body: "What should gate the release of new frontier models? How do labs and governments weigh evidence about pacing today, and how can research reach them? When is titration (“deploy and learn”) acceptable?",
      },
      {
        heading: "Coordinated Pacing & Incentives",
        body: "What information must be shared for coordination to be credible, without compromising security or commercial confidentiality? How do the incentives of bound parties shift over an intervention’s lifetime?",
      },
      {
        heading: "Pacing Mechanisms",
        body: "How much/what relevant activity can companies, infrastructure providers, and national rules actually reach? How effective are restrictions once a dangerous capability has been developed or released? Which technical advances could make interventions narrower, so that useful work can continue?",
      },
      {
        heading: "The Aftermath of Pacing",
        body: "What does a safe exit look like, and what mechanisms (other than staging) can enable it? How should the conditions for ending an intervention relate to those for starting it? How should those who lose out be compensated, and who should pay?",
      },
      {
        heading: "Pacing Readiness",
        body: "What investments made now would keep pacing possible later? Will pacing become easier or harder over time? How can dry-run simulations prepare decision-makers for a real intervention?",
      },
    ],
  },

  fit: {
    heading: "Should I apply?",
    // Photo by Unsplash (photo-1553877522-43269d4ea984), converted to black and white
    stripeAfter: { image: "/programme/stripe-laptops.jpg", alt: "Two people working at laptops around a table, seen through a glass wall" },
    lead: "We believe that scholars who are most likely to enjoy this work may:",
    points: [
      "Have experience in AI safety, policy, economics, security, or political science.",
      "Think in systems (incentives, feedback loops, second-order effects)",
      "Know how to turn a big, fuzzy question into a project with a clear output within a few months",
      "Be comfortable articulating half-baked ideas and reason transparently under ambiguity",
      "Have opinions on how to build bridges across disciplines (esp. technical and non-technical)",  
      "Show evidence of steelmanning arguments and updating on new evidence",    
    ],
    note: ["When in doubt, ", { link: "apply", href: APPLY_URL }, "."],
  },

  // Placeholder questions written from what the site already says. Answers can use pieces (see `home`) for links/bold.
  faq: {
    heading: "FAQs",
    items: [
      {
        q: "Do I need a background in AI or policy?",
        a: "No, but it helps.",
      },
      {
        q: "Is the fellowship full-time only?",
        a: "We are flexible with exceptional candidates.",
      },
      {
        q: "Do I need to be in London or San Francisco to take part?",
        a: "No. You can work from anywhere in the world.",
      },
      {
        q: "Do you sponsor visa?",
        a: "No. This fellowship is fully remote.",
      },
      {
        q: "Do I need a project idea before I apply?",
        a: "You'll need to know what area you'd like to research and a few ideas of ways to go about it, but you don't need a fully formed research proposal. You'll refine your project with your team in the first weeks.",
      },
      {
        q: "When is the application deadline?",
        a: "We're accepting fellows on a rolling basis. If the application form is open, admissions are on!",
      },
    ],
  },

  process: {
    heading: "Application process",
    steps: [
      {
        when: "Step 1",
        heading: "Open Application",
        body: "Basic info, open-format evidence, a few short-form questions, and an optional exercise.",
      },
      {
        when: "Step 2",
        heading: "Lock-In Application",
        body: "We may ask promising candidates to elaborate on their thoughts or complete a short exercise.",
      },
      {
        when: "Step 3",
        heading: "Interview",
        body: "Say hi to the team and tell us what you'd be most excited to work on with us.",
      },
      {
        when: "Step 4",
        heading: "Offer",
        body: "Successful applicants will be invited to join the cohort.",
      },
    ],
  },
};

// Set `photo` to an image path (e.g. "/team/jane.jpg" in public/) to fill the circle.
export const team = {
  title: "Team",
  // Each entry is a paragraph (plain string or pieces, see `home`)
  intro: [
    "We’re a small team with many expert supporters behind the scenes. Some may join to give talks, advise on projects, and otherwise accelerate Brakethrough fellows.",
  ],
  // Shown below the team
  outro: [
    [
      "Working on pacing or a pacing-relevant topic full-time and would like to help? Reach us at ",
      { link: "hello@pacing.tech", href: "mailto:hello@pacing.tech" },
      ".",
    ],
  ],
  people: [
    {
      name: "Charles Dillon",
      bio: "Charles is a partner at Arb Research, a research consultancy focused on AI safety and governance. He previously worked as a portfolio manager in quantitative finance and as CTO of a startup.",
      photo: "/team/charles-dillon.jpg",
    },
    {
      name: "Nikola Moore",
      bio: "Nikola works as a researcher by day and as a field-builder by night. She has a background in language, cognition, and computer science, and helps early- and mid-career professionals apply their skills to making AI go well at BlueDot.",
      photo: "/team/nikola-moore.jpg",
    },
    {
      name: "Gavin Leech",
      bio: "Gavin runs Arb and is a fellow at Cosmos and Foresight. He recently wrote a book on AI with Dwarkesh Patel, has a PhD in AI from the University of Bristol, and reviewed ~1200 books on Goodreads.",
      photo: "/team/gavin-leech.jpg",
    },
  ],
};
