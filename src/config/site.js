export const site = {
  name: "HI-TECH PROTECTION SECURITY",
  tagline: "Security you can trust. Protection you can rely on.",
  iso: "An ISO 9001:2015 Certified Company",
  phone: "+91 72595 37223",
  phoneHref: "tel:+917259537223",
  whatsapp: "https://wa.me/917259537223",
  email: "hitechprotectionsecurity@gmail.com",
  address: [
    "No. 28, Shop No. 2, 3rd Cross,",
    "Vinayaka Nagar, JP Nagar 5th Phase,",
    "Bengaluru - 560 078",
  ],
  md: { name: "Akash Kattimani", role: "Managing Director" },
};

// All facts below come from the E-Brochure. Add new facts here only when they are confirmed by the company.
export const services = [
  {
    slug: "hotel-security",
    title: "Hotels",
    long: "Hotel Security",
    img: "/images/industry/hotel.webp",
    text: "Professional security support for hotels, guest areas, entrances, parking zones and other critical areas, helping create a safe and welcoming environment for guests and staff.",
  },
  {
    slug: "bank-financial-security",
    title: "Banks & Financial Institutions",
    long: "Bank & Financial Institution Security",
    img: "/images/industry/bank.webp",
    text: "Security personnel trained to maintain vigilance at entrances, premises and sensitive areas while supporting access control and visitor management.",
  },
  {
    slug: "corporate-office-security",
    title: "Corporate Offices",
    long: "Corporate Office Security",
    img: "/images/industry/corporate.webp",
    text: "Reliable security solutions for corporate offices, business parks and commercial establishments, including access monitoring, visitor management and premises surveillance.",
  },
  {
    slug: "industrial-security",
    title: "Factories & Industrial Units",
    long: "Industrial Security",
    img: "/images/industry/industrial.webp",
    text: "Security support for industrial premises with a focus on gate control, employee and visitor verification, material movement and protection of valuable assets.",
  },
  {
    slug: "commercial-building-security",
    title: "Offices & Commercial Buildings",
    long: "Commercial Building Security",
    img: "/images/industry/commercial.webp",
    text: "Professional guards to help protect employees, visitors, property and business assets while maintaining an organised and secure workplace.",
  },
  {
    slug: "residential-apartment-security",
    title: "Residential Apartments",
    long: "Residential Apartment Security",
    img: "/images/industry/residential.webp",
    text: "Security solutions for apartment communities, including entrance monitoring, visitor management, vehicle movement, common-area vigilance and overall premises security.",
  },
];

export const values = [
  [
    "Discipline",
    "Following established procedures and maintaining professional conduct.",
  ],
  ["Vigilance", "Staying alert and attentive to potential security risks."],
  [
    "Responsibility",
    "Taking ownership of assigned duties and protecting the premises entrusted to us.",
  ],
  [
    "Integrity",
    "Maintaining honesty, confidentiality and trust in every assignment.",
  ],
  [
    "Professionalism",
    "Representing our clients with courtesy, discipline and respect.",
  ],
];

export const clients = [
  ["Aditya Birla Group", "aditya-birla"],
  ["BSNL", "bsnl"],
  ["Mahindra", "mahindra"],
  ["Union Bank of India", "union-bank"],
  ["Volkswagen", "volkswagen"],
  ["INOX", "inox"],
  ["BIG Cinemas", "big-cinemas"],
  ["DAMRO", "damro"],
  ["Fabindia", "fabindia"],
  ["GIRIAS", "girias"],
];

export const approach = [
  [
    "Assess",
    "Every location has different requirements, so we begin by understanding the site, its people, daily routines and potential risks.",
  ],
  [
    "Prevent",
    "Trained, vigilant personnel and clear procedures help identify concerns early and reduce risk before it becomes an incident.",
  ],
  [
    "Protect",
    "Disciplined guards secure entrances, premises and assets with courtesy and professionalism, maintaining an alert and welcoming presence.",
  ],
  [
    "Respond",
    "Clear communication and a prompt response, guided by Ex-Army management, help personnel act when something happens.",
  ],
];

// Per-sector page content. Copy is derived from the E-Brochure wording; confirm with the company before launch.
const T = (n) => `/images/team/p${String(n).padStart(2, "0")}.webp`;
export const sectorPages = {
  "hotel-security": {
    hero: T(3),
    kind: "full",
    theme: "dark",
    show: "crossfade",
    shots: [T(24), T(17), T(1)],
    lead: "A safe and welcoming environment for guests and staff.",
    intro:
      "A hotel is a place people arrive at tired and expect to feel looked after. Our guards support the front of house quietly and courteously, while watching the entrances, guest areas and parking zones that matter most.",
    focus: [
      [
        "Entrances",
        "The first face guests meet. Courteous, alert and observant.",
      ],
      [
        "Guest areas",
        "Visible presence that keeps public spaces calm and safe.",
      ],
      ["Parking zones", "Vehicle movement watched at arrival and departure."],
      [
        "Other critical areas",
        "Back-of-house and sensitive points covered for staff.",
      ],
    ],
    duties: [
      "Entrance and lobby vigilance",
      "Guest-area patrolling",
      "Parking-zone supervision",
      "Courteous guest and staff interaction",
      "Watch over critical areas",
    ],
  },
  "bank-financial-security": {
    hero: T(13),
    kind: "split",
    theme: "dark",
    show: "stack",
    shots: [T(30), T(2), T(6)],
    lead: "Vigilance at every entrance and sensitive area.",
    intro:
      "Banks and financial institutions need guards who are disciplined, observant and exact about procedure. Our personnel are trained to maintain vigilance while supporting access control and visitor management.",
    focus: [
      ["Entrances", "Controlled, observed and recorded."],
      ["Premises", "Consistent vigilance across the whole building."],
      ["Sensitive areas", "Watched with discipline and confidentiality."],
      ["Visitors", "Managed in line with the institution's procedures."],
    ],
    duties: [
      "Entrance vigilance",
      "Access-control support",
      "Visitor management",
      "Premises monitoring",
      "Protection of sensitive areas",
    ],
  },
  "corporate-office-security": {
    hero: T(16),
    kind: "inset",
    theme: "dark",
    show: "swap",
    shots: [T(14), T(18), T(4)],
    lead: "Access monitoring and visitor management for modern workplaces.",
    intro:
      "Corporate offices, business parks and commercial establishments run on smooth, secure access. We provide reliable security solutions that keep people moving while keeping the premises protected.",
    focus: [
      ["Access monitoring", "Who comes in, when, and where they go."],
      [
        "Visitor management",
        "A professional first impression with proper checks.",
      ],
      [
        "Premises surveillance",
        "Alert presence across campuses and business parks.",
      ],
      ["Commercial establishments", "Solutions suited to each location."],
    ],
    duties: [
      "Access monitoring",
      "Visitor management",
      "Premises surveillance",
      "Support for business parks and campuses",
      "Professional front-of-house conduct",
    ],
  },
  "industrial-security": {
    hero: T(29),
    kind: "full",
    theme: "dark",
    show: "horizontal",
    shots: [T(19), T(20), T(7)],
    lead: "Gate control and asset protection for factories and industrial units.",
    intro:
      "Industrial sites depend on what passes through the gate. Our guards focus on gate control, verification of employees and visitors, material movement and the protection of valuable assets.",
    focus: [
      ["Gate control", "Every entry and exit observed and controlled."],
      [
        "Verification",
        "Employees and visitors checked in line with site rules.",
      ],
      ["Material movement", "Goods in and out watched and accounted for."],
      [
        "Valuable assets",
        "Protected around the clock by disciplined personnel.",
      ],
    ],
    duties: [
      "Gate control",
      "Employee and visitor verification",
      "Material-movement monitoring",
      "Protection of valuable assets",
      "Perimeter vigilance",
    ],
  },
  "commercial-building-security": {
    hero: T(27),
    kind: "split",
    theme: "dark",
    show: "collage",
    shots: [T(22), T(28), T(8)],
    lead: "An organised and secure workplace for everyone inside.",
    intro:
      "Offices and commercial buildings hold people, property and business assets together. Our professional guards help protect all three while keeping the workplace orderly.",
    focus: [
      ["Employees", "A safe, reassuring presence every working day."],
      ["Visitors", "Welcomed and directed with courtesy."],
      ["Property", "Common areas and entrances watched."],
      ["Business assets", "Protected by trained, vigilant personnel."],
    ],
    duties: [
      "Protection of employees and visitors",
      "Property and asset protection",
      "Entrance and common-area vigilance",
      "Orderly workplace conduct",
      "Prompt communication of incidents",
    ],
  },
  "residential-apartment-security": {
    hero: T(21),
    kind: "inset",
    theme: "light",
    show: "arches",
    shots: [T(32), T(5), T(9)],
    lead: "Safe, well-watched homes for apartment communities.",
    intro:
      "In an apartment community the guard is the first person residents and visitors see. Ours are courteous, attentive and clear about procedure, from the entrance gate to the common areas.",
    focus: [
      ["Entrance monitoring", "Every arrival noted and welcomed properly."],
      ["Visitor management", "Visitors verified before they go in."],
      ["Vehicle movement", "Entry, exit and parking kept orderly."],
      ["Common areas", "Steady vigilance where residents gather."],
    ],
    duties: [
      "Entrance monitoring",
      "Visitor management",
      "Vehicle-movement control",
      "Common-area vigilance",
      "Overall premises security",
    ],
  },
};
