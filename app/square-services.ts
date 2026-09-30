export type SquareService = {
  name: string;
  summary: string;
  description: string;
  bookingUrl: string;
  staff: string[];
};

const squareServiceBase =
  "https://book.squareup.com/appointments/60177225-a91d-4710-9923-a9f3871aca5c/location/1653W5FPZ4EP7/services/";

// Source: the public Square booking menu, reviewed September 26, 2026.
// Keep booking URLs paired with Square's current service names so a treatment
// schedule control opens the right offering rather than the general menu.
export const squareServices: SquareService[] = [
  {
    name: "New Client Medical Massage Special",
    summary: "A first visit designed to introduce medical massage and help you begin a path toward less pain.",
    description:
      "For people who have not visited Santa Rosa Medical Massage before, this introductory medical-massage appointment offers a chance to experience the practice and begin discussing goals for comfort, recovery, and easier movement.",
    bookingUrl: `${squareServiceBase}734KHYFCY5M4J7KDAGLH4AEI`,
    staff: ["Andrea", "Cat", "Jamie", "Matty", "Stacy"],
  },
  {
    name: "Vagus Toning",
    summary: "A gentle, relaxation-focused session that supports a shift toward rest, ease, and body awareness.",
    description:
      "Vagus Toning uses soothing therapeutic touch, breathing techniques, and focused work around areas associated with relaxation and nervous-system regulation. It may appeal to clients experiencing everyday stress, tension, difficulty unwinding, or a feeling of being constantly on. This wellness service is not a treatment for medical or neurological conditions.",
    bookingUrl: `${squareServiceBase}ZI2VH54THKM6STNKX64OMIPP`,
    staff: [],
  },
  {
    name: "Thai Massage and Stretching",
    summary: "Gentle assisted movement, passive stretching, and targeted pressure for mobility, flexibility, and circulation.",
    description:
      "Often described as assisted yoga, Thai Massage and Stretching combines rhythmic movement, passive stretches, and targeted pressure to help release muscle tension, reduce stiffness, and restore ease of movement. Sessions are customized to your comfort and range of motion.",
    bookingUrl: `${squareServiceBase}RRBCBGAH7OL32MA5CROW4LVD`,
    staff: ["Matty"],
  },
  {
    name: "Medical Massage",
    summary: "Recovery and maintenance work for common neck, shoulder, limb, back, hip, and foot concerns.",
    description:
      "Medical Massage focuses on recovery and maintenance for concerns including neck tension, migraines, frozen shoulder, rotator cuff injuries, numbness or tingling, headaches, TMJ, tennis or golfer’s elbow, low-back tightness, sciatica, piriformis syndrome, post-operative hip or knee recovery, and plantar fasciitis. This Square service is contraindicated for pregnancy.",
    bookingUrl: `${squareServiceBase}4GPD55P6W4JQLP24GIIAZW4Z`,
    staff: ["Andrea", "Cat", "Jamie", "Matty", "Stacy"],
  },
  {
    name: "Neuromuscular Therapy / Trigger Point Therapy",
    summary: "Focused work for muscle knots, tight bands, and pain that may be felt locally or elsewhere in the body.",
    description:
      "Neuromuscular Therapy focuses on stimulating and releasing trigger points: muscle fibers held in contraction that can form a knot, nodule, or tight band. The work can be intense and focuses on and around the pain area rather than a full-body session. This Square service is contraindicated for pregnancy.",
    bookingUrl: `${squareServiceBase}HNPKAYWN4I2AUEHNBZY7XLWT`,
    staff: ["Andrea", "Cat", "Jamie", "Stacy"],
  },
  {
    name: "Full Body Deep Tissue Myofascial",
    summary: "A full-body session for deep-tissue relief and myofascial work.",
    description:
      "A full-body deep-tissue myofascial massage intended to ease tension and support a sense of renewed comfort throughout the body.",
    bookingUrl: `${squareServiceBase}YYLHPMMVWXDVPQJNVNRWL435`,
    staff: ["Cat", "Matty"],
  },
  {
    name: "Lymphatic Facilitation",
    summary: "Extremely light-touch work intended to facilitate lymphatic-system movement.",
    description:
      "Lymphatic Facilitation uses an exceptionally light touch and is offered for upper and lower body. If scheduling after surgery, drainage tubes must be removed; the recommended frequency of post-surgical work should follow your doctor’s guidance.",
    bookingUrl: `${squareServiceBase}B43GJDUM65RN5VWXEP3FZONU`,
    staff: ["Andrea", "Cat", "Stacy"],
  },
  {
    name: "TMJ Work",
    summary: "Focused trigger-point work for the jaw joint, head, and muscles that control jaw movement.",
    description:
      "TMJ Work focuses on trigger-point therapy around the temporomandibular joint, head, and the muscles that control jaw movement when jaw discomfort is a concern.",
    bookingUrl: `${squareServiceBase}7F2XI5SW4Z72N3EOEGGPS2N4`,
    staff: ["Andrea", "Cat", "Stacy"],
  },
  {
    name: "Sports Massage",
    summary: "Deep-tissue and PNF-stretching work for range of motion, flexibility, and overworked muscles.",
    description:
      "Sports Massage combines modalities that focus on range of motion and flexibility, including deep-tissue work and PNF stretching to help lengthen tight, overworked muscles. Square asks clients to wear loose clothing that accommodates stretching.",
    bookingUrl: `${squareServiceBase}USSQAY2PR6FPUOT7BMV5UUMS`,
    staff: ["Cat", "Jamie", "Matty", "Stacy"],
  },
  {
    name: "Swedish Massage",
    summary: "A relaxation-focused massage intended to soothe muscles and ease everyday stress.",
    description:
      "A Swedish Massage session focused on relaxation, easing muscle tension, and leaving you refreshed and rejuvenated.",
    bookingUrl: `${squareServiceBase}A5ZA5ALRTNIA7UITZJIG436O`,
    staff: ["Matty"],
  },
  {
    name: "Somatic Experiencing",
    summary: "A clothed, body-centered approach that includes natural somatic responses in work around PTSD.",
    description:
      "Somatic Experiencing is a body-centered approach to PTSD that expands beyond thoughts or emotions associated with a traumatic event to include natural bodily, or somatic, responses. Clients remain clothed during sessions.",
    bookingUrl: `${squareServiceBase}63TEELAJISGXXWM5F3PJNQXX`,
    staff: ["Stacy"],
  },
];

export const squareServiceByName = new Map(
  squareServices.map((service) => [service.name, service]),
);

export const getSquareService = (name: string) => squareServiceByName.get(name);
