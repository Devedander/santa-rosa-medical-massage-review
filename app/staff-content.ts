export type Practitioner = {
  slug: string;
  name: string;
  credentials: string;
  question: string;
  shortAnswer: string;
  bio: string;
  fit: string;
  teamPhoto: string;
};

export const squareBookingUrl =
  "https://book.squareup.com/appointments/60177225-a91d-4710-9923-a9f3871aca5c/location/1653W5FPZ4EP7/services";

export const practiceAwardCopy =
  "Santa Rosa Medical Massage is an award-winning, award-recognized practice, with BusinessRate Best of 2025 recognition and a 2026 BusinessRate Award Winner, Massage Therapist honor.";

// Practitioner information below is adapted from the public Square booking profiles.
// Credentials and modality descriptions are kept at the practice level unless Square
// specifically attributes them to an individual practitioner.
export const practitioners: Practitioner[] = [
  {
    slug: "andrea-cmt",
    name: "Andrea",
    credentials: "CMT #84505",
    question: "How do you treat persistent muscle knots and referred pain?",
    shortAnswer:
      "Andrea may be a thoughtful fit for clients looking for focused Trigger Point Therapy and a session shaped around their individual goals.",
    bio:
      "Born and raised in Santa Rosa, Andrea is proud to serve the community she has called home throughout her life. She graduated from the National Holistic Institute in 2021, where she developed a foundation in therapeutic bodywork and specialized in Trigger Point Therapy. Her approach combines therapeutic knowledge with intuitive care, so each session can be customized around what a client hopes to feel and do more comfortably.",
    fit:
      "For tight, sensitive areas that seem connected to discomfort elsewhere, Andrea can begin with the patterns you are noticing and tailor focused work at a comfortable pace. Her Trigger Point Therapy background makes her a useful option when the goal is to discuss persistent tension, muscle knots, or referred discomfort alongside an overall therapeutic session.",
    teamPhoto: "client-lounge-stripe.jpeg",
  },
  {
    slug: "cat-cmt",
    name: "Cat",
    credentials: "CMT",
    question: "How do you approach ongoing tension, pain, and inflammation?",
    shortAnswer:
      "Cat blends myofascial release, Trigger Point Therapy, neuromuscular work, and cupping in a slow, tailored approach.",
    bio:
      "Cat has been passionate about helping people work with pain, stress, and inflammation since beginning massage training in 2003. Her additional training includes myofascial release, Trigger Point Therapy, cupping, and manual lymphatic drainage. She tailors sessions to each client and may blend myofascial, trigger point, neuromuscular, and cupping approaches while keeping the pace calm and unhurried.",
    fit:
      "Cat may be a good fit when a client wants time to work through long-standing tension or stress patterns without rushing the session. Her range of soft-tissue approaches gives her a practical starting point for discussing areas that feel restricted, sore, or persistently overworked.",
    teamPhoto: "client-lounge-orange.jpeg",
  },
  {
    slug: "jamie-cmt",
    name: "Jamie",
    credentials: "CMT #5420",
    question: "How do you support mobility after sports or everyday strain?",
    shortAnswer:
      "Jamie brings therapeutic massage, sports massage, movement guidance, and whole-person care to goals around pain, mobility, and stress management.",
    bio:
      "Jamie has been practicing therapeutic massage and wellness work since 2009. Her training includes sports massage, Trigger Point Therapy, acupuncture, reflexology, Reiki, cupping, myofascial release, and Gua Sha. With intuitive touch and practical movement guidance, Jamie focuses on helping clients decrease pain, improve mobility, and manage stress through a whole-person approach.",
    fit:
      "For a goal such as moving more comfortably after activity, managing a recurring training-related tightness, or returning to a favorite routine, Jamie can help shape a session around function as well as relaxation. Her sports and therapeutic background makes her a useful option for clients who want to connect bodywork with everyday movement.",
    teamPhoto: "client-lounge-burgundy.jpeg",
  },
  {
    slug: "kimberly-nmt-cmt",
    name: "Kimberly",
    credentials: "NMT, CMT",
    question: "How do you support recovery when pain and stress feel connected?",
    shortAnswer:
      "Kimberly combines neuromuscular therapy, trigger point pain-pattern knowledge, and vagus toning training with a nervous-system-aware approach.",
    bio:
      "Kimberly has been practicing as a neuromuscular therapist since 2022, with a focus on trigger point pain patterns and the experience of moving from injury toward recovery. She has additional training in vagus nerve massage and vagus toning. Her work considers both the body and nervous system, with the aim of supporting relief from stress and helping clients shift toward rest and recovery.",
    fit:
      "Kimberly may be a good option when a client wants to discuss muscular discomfort in the context of stress, recovery, or feeling stuck in a constantly activated state. Her neuromuscular and vagus-toning training offers a calm, informed starting point for care that supports both physical comfort and a sense of ease.",
    teamPhoto: "client-lounge-black.jpeg",
  },
  {
    slug: "stacy-cmt",
    name: "Stacy",
    credentials: "CMT #14021",
    question: "How do you address pain alongside nervous-system regulation?",
    shortAnswer:
      "Stacy brings neuromuscular therapy, trigger point work, Somatic Experiencing, and a range of supportive therapeutic modalities to individualized care.",
    bio:
      "Stacy has practiced neuromuscular therapy since 2010 and became a Somatic Experiencing Practitioner in 2023. Her work combines intuitive, touch-focused Trigger Point Therapy for pain with Somatic Experiencing, an approach centered on the nervous system and body in relation to trauma and PTSD. Her published modalities include neuromuscular therapy, Reiki, sports massage, myofascial release, deep tissue work, Trigger Point Therapy, electronic cupping, PNF stretching, Tok Sen, and supportive tools such as percussion, cupping, scrapers, Gua Sha, CBD lubricant, and ROC tape when appropriate.",
    fit:
      "Stacy may be a good fit for clients who want a conversation about pain reduction, nervous-system regulation, and individualized therapeutic care. She has particular interest in the psoas, gluteal muscles, and neck and shoulders, and can help identify an approach that respects comfort, goals, and relevant health context.",
    teamPhoto: "client-lounge-green.jpeg",
  },
];

export function getPractitioner(slug: string) {
  return practitioners.find((practitioner) => practitioner.slug === slug);
}
