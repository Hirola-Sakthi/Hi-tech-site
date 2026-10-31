// General security guidance written for the blog. Review and edit before publishing; add dates when posts go live.
const T = (n) => `/images/team/p${String(n).padStart(2, "0")}.jpg`;
export const posts = [
  {
    slug: "how-to-choose-a-security-guard-agency",
    title: "How to choose a security guard agency",
    cat: "Guidance",
    mins: 5,
    date: "2026-10-31",
    img: T(14),
    service: "corporate-office-security",
    excerpt:
      "Six questions to ask before you sign, from licensing to supervision to what happens on a bad night.",
    body: [
      [
        "p",
        "A security contract is a promise that someone will be alert at the hours you are not. The agency you pick decides how well that promise is kept, so it is worth asking more than the price per guard.",
      ],
      ["h", "Check the licence and certifications"],
      [
        "p",
        "In India, private security agencies need a licence under the Private Security Agencies (Regulation) Act. Ask to see it. Quality certifications such as ISO 9001 show that processes are documented and audited, which matters once a site has more than a handful of guards.",
      ],
      ["h", "Ask who manages the guards"],
      [
        "p",
        "Guards are only as good as the people supervising them. Find out who trains them, who inspects posts, and who you call at 2 a.m. Management with a disciplined background, such as ex-service personnel, often brings the habits of briefing, reporting and accountability that sites need.",
      ],
      ["h", "Look for site-specific planning"],
      [
        "p",
        "A hotel, a bank and a factory gate need different things. A good agency visits your premises, asks about entrances, visitors, vehicles and valuables, and then proposes post orders for your site rather than a generic template.",
      ],
      ["h", "Test communication and response"],
      [
        "p",
        "Ask how incidents are reported, how quickly a replacement arrives when a guard is absent, and how you will receive regular updates. Clear answers here predict how the agency behaves under pressure.",
      ],
    ],
  },
  {
    slug: "visitor-management-for-apartment-communities",
    title: "Visitor management that residents will actually follow",
    cat: "Residential",
    mins: 4,
    date: "2026-10-31",
    img: T(32),
    service: "residential-apartment-security",
    excerpt:
      "Good gate procedure is firm without being rude. Here is how apartment communities get that balance.",
    body: [
      [
        "p",
        "Visitor management only works when residents cooperate, and residents only cooperate when the process is quick and polite. The goal is a gate that is secure and still friendly.",
      ],
      ["h", "Keep the rule simple"],
      [
        "p",
        "Every visitor is recorded, and every visitor is verified with the resident they are visiting before they enter. One rule, applied to everyone, is easier to follow than a long list of exceptions.",
      ],
      ["h", "Treat vehicles as visitors too"],
      [
        "p",
        "Vehicle entry, exit and parking are part of the same flow. A clear register and marked visitor parking keep the entrance from clogging and make unfamiliar vehicles easy to spot.",
      ],
      ["h", "Train for courtesy"],
      [
        "p",
        "The guard is often the first person a guest meets. A calm greeting and a clear explanation of why a check is needed turn a possible argument into a normal part of arriving.",
      ],
      ["h", "Walk the common areas"],
      [
        "p",
        "Vigilance does not stop at the gate. Regular, visible rounds through car parks, lobbies and play areas deter problems and reassure residents.",
      ],
    ],
  },
  {
    slug: "gate-control-and-material-movement-in-factories",
    title: "Gate control and material movement in factories",
    cat: "Industrial",
    mins: 5,
    date: "2026-10-31",
    img: T(19),
    service: "industrial-security",
    excerpt:
      "In industrial sites the gate is the control point. What passes through it should always be accounted for.",
    body: [
      [
        "p",
        "A factory has a long list of things that should be accounted for: people, vehicles, raw material, finished goods and tools. Almost all of them cross the same boundary, which is why the gate matters so much.",
      ],
      ["h", "Verify people before they enter"],
      [
        "p",
        "Employees, contractors and visitors should each have a clear entry procedure. Checking identity at the gate, and recording entry and exit times, gives the site a reliable picture of who is inside.",
      ],
      ["h", "Match goods to paperwork"],
      [
        "p",
        "Material leaving the site should match a document. Guards trained to compare what is on the vehicle with what is on the paper catch errors early and discourage losses.",
      ],
      ["h", "Protect valuable assets"],
      [
        "p",
        "Identify which areas and items carry the most value and give them extra attention, whether that is a store room, a tool crib or a loading bay.",
      ],
      ["h", "Write it down"],
      [
        "p",
        "Registers and shift handovers turn good intentions into a repeatable system. When a question comes up weeks later, the records answer it.",
      ],
    ],
  },
  {
    slug: "why-fire-safety-drills-matter-for-security-teams",
    title: "Why fire-safety drills matter for security teams",
    cat: "Training",
    mins: 4,
    date: "2026-10-31",
    img: T(6),
    service: "commercial-building-security",
    excerpt:
      "Guards are often the first on the scene. Practice is what turns a plan on paper into a calm response.",
    body: [
      [
        "p",
        "In many buildings the security guard is the first person to notice smoke or an alarm. What happens in the next two minutes depends far more on practice than on a written plan.",
      ],
      ["h", "Muscle memory beats memory"],
      [
        "p",
        "Using an extinguisher in a drill, even on a small controlled fire, teaches the grip, the distance and the sweep in a way reading never does. Under stress, people do what they have rehearsed.",
      ],
      ["h", "Know the building"],
      [
        "p",
        "Drills should include exits, assembly points and the location of equipment, so that a guard can direct others without hesitating.",
      ],
      ["h", "Repeat regularly"],
      [
        "p",
        "Skills fade and staff change. Scheduled refreshers keep the whole team current, including new joiners who have never seen a real emergency.",
      ],
    ],
  },
  {
    slug: "hotel-security-guests-never-notice",
    title: "Hotel security that guests never notice",
    cat: "Hospitality",
    mins: 4,
    date: "2026-10-31",
    img: T(3),
    service: "hotel-security",
    excerpt:
      "The best hotel security feels like good service. A look at how to protect guests without spoiling their stay.",
    body: [
      [
        "p",
        "Guests want to feel safe, but they do not want to feel watched. The craft of hotel security is being present and helpful at the same time.",
      ],
      ["h", "The entrance sets the tone"],
      [
        "p",
        "A well-turned-out guard who greets guests, helps with vehicles and notices who is coming and going protects the property while adding to the welcome.",
      ],
      ["h", "Cover the places guests do not see"],
      [
        "p",
        "Parking zones, service entrances and back-of-house areas matter as much as the lobby. Consistent coverage there protects staff and guests alike.",
      ],
      ["h", "Hospitality is part of the training"],
      [
        "p",
        "Courtesy, clear speech and calm judgement are skills. Guards who have them can handle a difficult moment without it becoming a scene.",
      ],
    ],
  },
  {
    slug: "access-control-basics-for-banks-and-offices",
    title: "Access control basics for banks and offices",
    cat: "Banking & Corporate",
    mins: 5,
    date: "2026-10-31",
    img: T(30),
    service: "bank-financial-security",
    excerpt:
      "Entrances, visitors and sensitive areas: the simple habits that make access control reliable.",
    body: [
      [
        "p",
        "Access control is less about technology than about habit. Locks, cards and cameras help, but they work best when a trained person applies the same procedure every time.",
      ],
      ["h", "Define who can go where"],
      [
        "p",
        "Decide which areas are open to the public, which are for staff and which are restricted. Clear boundaries are easy to explain and easy to enforce.",
      ],
      ["h", "Manage visitors consistently"],
      [
        "p",
        "Record who is visiting, who they are meeting and when they leave. A courteous but firm front desk or entrance guard sets the right tone from the first minute.",
      ],
      ["h", "Stay alert at the sensitive points"],
      [
        "p",
        "Entrances, cash and records areas and server rooms deserve extra vigilance. Rotating attention and clear escalation steps keep that vigilance sharp.",
      ],
    ],
  },
];
