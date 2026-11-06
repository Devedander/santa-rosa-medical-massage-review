export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  description: string;
  updated: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "medical-massage-santa-rosa",
    title: "What is medical massage?",
    category: "Medical massage",
    description:
      "A plain-language introduction to condition-focused massage and how to decide whether it is a fit.",
    updated: "Draft for review",
    sections: [
      {
        heading: "A goal-focused starting point",
        paragraphs: [
          "Medical massage is a term often used for massage that is planned around a specific concern, such as persistent tension, movement discomfort, or recovery alongside guidance from a healthcare professional.",
          "A first conversation should cover what you are experiencing, the activities you would like to do more comfortably, and any relevant medical guidance. Massage does not diagnose a condition or replace medical care.",
        ],
      },
      {
        heading: "When to ask questions first",
        paragraphs: [
          "If symptoms are new, severe, changing, or connected to an injury or surgery, check with the appropriate medical professional before scheduling. The practice can also discuss whether its services are an appropriate fit before an appointment.",
        ],
      },
    ],
  },
  {
    slug: "massage-for-tmj-tension",
    title: "Can massage help with TMJ tension?",
    category: "Jaw and neck comfort",
    description:
      "Questions to consider when jaw tension, clenching, headaches, and neck tightness are affecting your day.",
    updated: "Draft for review",
    sections: [
      {
        heading: "Start with the pattern you notice",
        paragraphs: [
          "Jaw tension can be connected to clenching, headaches, neck tightness, stress, and everyday habits. It helps to notice when it feels worse, what brings relief, and whether a dentist or clinician is already involved in your care.",
          "A massage conversation may include the jaw, temples, scalp, neck, shoulders, and your comfort with pressure and positioning. It should be paced to your preferences.",
        ],
      },
      {
        heading: "When to seek medical guidance",
        paragraphs: [
          "New jaw pain, locking, injury, dental concerns, or significant changes in symptoms deserve appropriate clinical or dental advice. Massage can be considered as supportive care when appropriate, not as a substitute for evaluation.",
        ],
      },
    ],
  },
  {
    slug: "massage-for-sciatica-questions",
    title: "Massage for sciatica: questions to ask before booking",
    category: "Low back and leg comfort",
    description:
      "A practical guide to preparing for a massage conversation when low-back, hip, or leg symptoms affect movement.",
    updated: "Draft for review",
    sections: [
      {
        heading: "Bring the full picture",
        paragraphs: [
          "Symptoms described as sciatica can affect sitting, walking, driving, sleep, and daily routines. Before booking, consider how long symptoms have been present, what changes them, and whether you have received a diagnosis or care guidance.",
          "A therapist can discuss comfort, pressure, positioning, and whether supportive soft-tissue work around the low back, hips, and legs is appropriate for your situation.",
        ],
      },
      {
        heading: "Know when not to wait",
        paragraphs: [
          "Seek timely medical advice for new or severe weakness, numbness, loss of bladder or bowel control, fever, major trauma, or other concerning changes. Massage does not replace medical assessment.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
