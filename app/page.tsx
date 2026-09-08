"use client";
import { useEffect, useRef, useState } from "react";
import NewConcepts from "./new-concepts";
import { agingCopy, referralCopy, practiceCopy } from "./care-content";
import {
  Activity,
  ArrowRight,
  Bone,
  Brain,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDot,
  Footprints,
  Gift,
  Hand,
  HeartPulse,
  MapPin,
  Move3D,
  MoveRight,
  PersonStanding,
  Phone,
  RotateCcw,
  ShieldCheck,
  Star,
  Stethoscope,
  Waves,
} from "lucide-react";

const services = [
  "Trigger Point Therapy",
  "Medical Massage",
  "Deep Tissue / Full Body",
  "Lymphatic Facilitation",
  "Swedish Massage",
  "Somatic Experiencing",
];
const conditionItems = [
  [
    "Headaches & migraines",
    "Head and neck tension that can make ordinary days feel smaller.",
    Brain,
  ],
  [
    "Neck tension",
    "Tightness, posture strain, and restricted movement through the neck.",
    PersonStanding,
  ],
  [
    "Shoulder impingement",
    "Shoulder discomfort and a feeling of limited reach or mobility.",
    CircleDot,
  ],
  [
    "Hip pain",
    "Hip-area tightness, movement discomfort, and activity-related strain.",
    Move3D,
  ],
  [
    "TMJ pain",
    "Jaw tension, clenching patterns, and head-and-neck discomfort.",
    Waves,
  ],
  [
    "Sciatica & piriformis",
    "Low-back, hip, or leg symptoms that can change how you move.",
    Activity,
  ],
  [
    "Rotator cuff recovery",
    "Supportive care conversations around shoulder recovery and movement.",
    RotateCcw,
  ],
  [
    "Post-surgical stiffness",
    "Gentle, goal-focused support while movement and comfort are changing.",
    HeartPulse,
  ],
  [
    "Carpal tunnel",
    "Hand, wrist, and forearm tension that can affect daily tasks.",
    Hand,
  ],
  [
    "Reduced range of motion",
    "A focused starting point when movement feels limited or guarded.",
    Bone,
  ],
  [
    "Chronic pain",
    "A listening-first approach to persistent pain and everyday goals.",
    Stethoscope,
  ],
  [
    "Plantar fasciitis",
    "Foot discomfort that can make walking and standing harder.",
    Footprints,
  ],
] as const;
const serviceDetails = [
  [
    "Trigger Point Therapy",
    "Targeted soft-tissue work for knots, tight bands, and referred pain.",
    "This session uses a combination of trigger point, myofascial, Swedish, and related techniques to encourage circulation, ease tension, and help restore movement.",
  ],
  [
    "Medical Massage",
    "Condition-focused massage for concerns that have been diagnosed by a medical professional.",
    "Your therapist may use a combination of techniques and procedures based on the condition, your goals, and how your body responds during the session.",
  ],
  [
    "Deep Tissue / Full Body",
    "Focused, full-body care for persistent tension, movement restriction, and recovery.",
    "Treatment combines hands-on techniques with attention to the areas that are limiting comfort, mobility, and everyday activity.",
  ],
  [
    "Lymphatic Facilitation",
    "Exceptionally light-touch work intended to support and stimulate the lymphatic system.",
    "This gentle service is distinct from deep tissue work and should be selected when a lighter, targeted approach is appropriate.",
  ],
  [
    "Swedish Massage",
    "Restorative full-body massage for relaxation, stress release, and general wellbeing.",
    "A calming session designed to reduce tension and leave you feeling refreshed and more at ease in your body.",
  ],
  [
    "Somatic Experiencing",
    "A body-centered approach that can support people working with post-traumatic stress.",
    "This service centers awareness, pacing, and body-based support; it is not a substitute for mental-health care.",
  ],
];
const serviceImages = [
  "/mockup-photos/yelp-treatment.jpg",
  "/mockup-photos/therapy-hands.jpg",
  "/mockup-photos/therapy-room.jpg",
  "/mockup-photos/yelp-detail-4.jpg",
  "/mockup-photos/yelp-treatment.jpg",
  "/mockup-photos/therapy-hands.jpg",
];
const concepts = [
  ["house-photo", "1 · Familiar", "Editorial reference format"],
  ["webwell-photo", "2 · Wellness guide", "New business imagery"],
  ["finder-photo", "3 · Care finder", "Guided selection flow"],
  ["desk-photo", "4 · Practice desk", "Compact care directory"],
];

function Switcher({
  style,
  setStyle,
}: {
  style: string;
  setStyle: (s: string) => void;
}) {
  const choose = (id: string) => {
    setStyle(id);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("concept", id);
      window.history.replaceState(null, "", url);
    }
  };
  return (
    <div
      className="switcher combined-concepts"
      role="group"
      aria-label="Compare the four website designs"
    >
      <div>
        <b>Design review</b>
        <span>Choose your finalists</span>
      </div>
      {concepts.map((c) => (
        <button
          key={c[0]}
          aria-pressed={style === c[0]}
          className={style === c[0] ? "active" : ""}
          onClick={() => choose(c[0])}
        >
          <b>{c[1]}</b>
        </button>
      ))}
    </div>
  );
}

const reviewQuotes = [
  [
    "“Matty is an excellent masseuse… he created a sense of safety, deep relaxation, and helped her body release stress.”",
    "Yelp review · August 2026",
  ],
  [
    "“Matty does a great job listening to what problem areas you have and combining the right pressure with stretches.”",
    "Yelp review · January 2026",
  ],
  [
    "“Everyone is so incredible… I leave pain free every time.”",
    "Yelp review · April 2026",
  ],
];
const googleReviews = [
  ["Annie Zaks", "“I think I found the one.”", "7 months ago"],
  ["Anne Allman", "“Absolutely top notch… Highly recommend!”", "5 months ago"],
  ["Isis Howard", "“They work magic.”", "Edited a month ago"],
  [
    "Danyale Hambly-Jones",
    "“Hands down the best medical massage I’ve ever had.”",
    "8 months ago",
  ],
  [
    "Lauren Gantz",
    "“So professional, knowledgeable and skilled.”",
    "A month ago",
  ],
  ["Commontater", "“It was so great and so helpful.”", "4 months ago"],
  [
    "Mindy Kilgore",
    "“I always walk out feeling rejuvenated with much less pain.”",
    "6 months ago",
  ],
  [
    "Vanessa Kettler",
    "“They are thorough and are safe and reliable.”",
    "9 months ago",
  ],
  ["Jenai Otis", "“The staff and space is amazing!”", "8 months ago"],
  [
    "Kim Stocker",
    "Five-star Google rating · written review available on Google.",
    "A year ago",
  ],
  ["J Scott", "Five-star Google rating.", "10 months ago"],
  ["Pat Lang", "Five-star Google rating.", "Edited 11 months ago"],
  ["Lisa Chiaretta", "Five-star Google rating.", "10 months ago"],
  ["Pat Ciston", "Five-star Google rating.", "9 months ago"],
  ["Jerry Stocker", "Five-star Google rating.", "11 months ago"],
  ["traci elledge", "Five-star Google rating.", "8 months ago"],
  ["Becca BradyLong", "Five-star Google rating.", "11 months ago"],
  ["Terry Behrens", "Five-star Google rating.", "A year ago"],
  ["Accounts Payable", "Five-star Google rating.", "A year ago"],
  ["jeff wolcott", "Five-star Google rating.", "A year ago"],
];
const yelpReviews = [
  ["Susan D.", "“I immediately made another appointment… in 75 minutes, I received more attention, expertise, therapeutic intervention and relief than I’d had in years.”", "Yelp"],
  ["Annie L.", "“Avocado took the time to listen to me and get to know me and my pain before we began. I felt more at ease and grounded after.”", "Yelp"],
  ["Ellen K.", "“I was not making post-surgery progress with shoulder range of motion, and Mariah saved me. I have had trigger point massage regularly to get functional again.”", "Yelp"],
  ["Tom S.", "“I went in with a rotator cuff concern and she did an excellent job. I’ll have to go back—massage does not always fix everything in one sitting.”", "Yelp"],
  ["Adrienne S.", "“They really listen to my needs and address those issues during treatment. They also give helpful tips and stretches to take home.”", "Yelp"],
  ["Jackie C.", "“I have chronic back pain and a hard time finding relief. My appointment was so helpful, and they gave me good recommendations for aftercare.”", "Yelp"],
];
// Spread Yelp voices through the rotation so each set of five feels like a
// genuine cross-section of the public feedback, rather than two separate lists.
const writtenGoogleReviews = googleReviews.filter(([, quote]) => quote.startsWith("“"));
const allReviews = writtenGoogleReviews.reduce<string[][]>((mixed, [name, quote], index) => {
  mixed.push([name, quote, "Google"]);
  const yelpIndex = Math.floor(
    (index * yelpReviews.length) / writtenGoogleReviews.length,
  );
  const shouldInsertYelp =
    Math.floor(((index + 1) * yelpReviews.length) / writtenGoogleReviews.length) >
    yelpIndex;
  if (shouldInsertYelp && yelpIndex < yelpReviews.length) {
    mixed.push(yelpReviews[yelpIndex]);
  }
  return mixed;
}, []);
const blogPosts = [
  [
    "testimonials",
    "Considering Trigger Point Therapy? Here’s What Our Customers Say…",
    "Client experiences",
    "A client describes how a third visit became an extraordinary experience.",
    "https://santarosamedicalmassage.com/testimonials/",
    "“Stacy is a wonderful massage therapist however on my third visit something extraordinary happened. She decided to work on my chest for the full hour using acupressure and trigger point therapy. When she was done, I swear I walked out a half inch taller and my shoulders were square. Prior to that visit my shoulders were rounded and my shoulders are still square after 2 weeks. It was truly a life changing visit. I would highly recommend Stacy as a massage therapist. She is very skilled and truly cares about her clients.” Ted\n\nI just have to thank you SO VERY much for the BEST massage of my life!!!! I feel like a new woman!! You were SO in tuned with me and my knots!! Every touch was filled with love! This is your TRUE calling Stacy. You have an intuitive nurturing GIFT and I feel so blessed to have found you!! My BODY & soul THANKS YOU.\n\nDenise Esposti Frye\n\nI highly recommend Stacy for a relaxing healing massage. Her massage treatment is as effective as someone who has been in the field for years. She obviously has a healing touch and a passion for this type of body work. I look forward to many more sessions with her in the years to come! Sheron B\n\nI had an excellent experience receiving a massage from Stacy. I had some pretty painful muscle tightness so I was in major need of exactly what she provided: fantastic release of those trigger points. The entire process was professional – her online booking system and email confirmation reminders were great. I was impressed with her massage room, so many posters and resources with details about the body, stretches, sports specific references. But her hands told the real story. She has great hands!! And she has a lovely style – she asked the right questions and was very specific, showed great attention to detail in her treatment and analysis of my sore-ness, and was very kind during the at times uncomfortable moments when my muscles wanted to fight her work. Highly recommend and I will be back.\n\nLaurel E, Bigfork, MT 9/3/11\n\nStacy really knows her stuff. If there’s one thing I cannot tolerate, it’s paying money for a nambie-pambie massage. Yes, you can mention to the therapist to go deeper with more pressure, but a timid therapist does not a good massage make. This will not happen with Stacy, she listens to the client and is excellent at determining what a body needs. Chris O.\n\nStacy I just had to let you know how great I felt after the massage on Tuesday. I did NOT have a headache that night, as you thought I might, and feel a great deal of relief in my neck. You really got the right spot. Thank you. See you Tuesday. Matthew\n\nI had the great privilege to get a massage from Stacy, and what a wonderful experience it was. Stacy is professional, skilled and has great energy, I enthusiastically recommend her services. Jody S\n\nI have known Stacy for over 10 years. I knew her as a mortgage broker in her other life and watched her transition to a massage therapist. I had been meaning to get over and see her for a looong time and I think maybe I was shy since I knew her….. I am so glad I got over it because I had the best massage of my life. This is what she is meant to do and I am addicted. I just want to tell everyone. I am sending my wife to Stacy and I can’t wait to go back myself. Hans B Sebastopol\n\nStacy Desjardins is an awesome massage therapist. I know because I was lucky enough to be on the receiving end of her healing touch when she fulfilled an externship through my employer. Every week, Stacy created a soothing environment and skillfully relieved aches and tensions. Her demeanor and personality are well-suited to the work as well. She has an appealing nurturing vibe that set me at ease form the first-made me comfortable with her ability and trust her intuition. She never failed to find my stress points and ease them away. I miss her just thinking about it. I highly recommend Stacy as a massage therapist for her professionalism, personalist and talent. Alexandra Russell, NorthBay Biz magazine\n\nI’ve known Stacy for 30+ years and I’m SO HAPPY she’s chosen massage for a career. Example: I made an appointment after straining some muscles in my back, and not only did she work wonders on that, but she also (without me saying anything) discovered a stiffness in my neck and spent some extra time working on that, too. Both my back and neck are so much better thanks to her expertise and natural talents. She also came into my office on a weekly basis for a while and provided chair massage to myself and my coworkers. Everyone both anticipated and enjoyed that awesome office perk I’d highly recommend Stacy to anyone who wants a massage with real results and/or wants to show their employees how much they’re appreciated. Julie F Santa Rosa, CA 7/18/11\n\nWhy worry about your tensions, when Stacy has chosen massage as her work? An intelligent preening energy, methodical and graceful. People who choose people, are the most chosen people in the world’. On Stacy DesJardins’s table, the massage therapist owner of Hands2Go, my mind meandered, singing: People who choose people, are the most chosen people in the world. I’ve received Trigger Point massage treatments from Stacie for 5 months. I vouch for her healing touch.. The choice is yours. You’ll feel chosen. Laura L. (Yelp)",
  ],
  [
    "thai-foot-massage",
    "Thai Foot Massage",
    "Treatment guide",
    "A bodywork therapy for the mind, body, and soul, using focused work through the feet and lower legs.",
    "https://santarosamedicalmassage.com/thai-foot-massage/",
    "Thai Foot Massage is a body work therapy for the mind body and soul and involves reflexology using the foot. When pressure is applied to certain areas of the foot it stimulates another part of the body. Thai foot massage is an ancient reflexology technique that has made a comeback recently.\n\nThai foot reflexology is said to be a marriage between reflexology, Chinese Tuina, Japanese Shiatsu, and Indian Ayurvedi oga. Focusing on the feet, lower leg, and knees, it frees up blocked energy in the body’s Thai-based meridians to bring about deep relaxation, balance, and well-being.\n\nAlongside the acupressure and acupuncture theory it is believed that 7,200 sensory nerves exist within the foot which are connected to internal organs. Mapping out these connections on the foot is part of the therapists goal with each client. During a typical session the lower legs, and feet are stretched, opening Sen (energy). Then pressure points on the foot are stimulated. The pressure points connect to 10 major energy lines which run throughout the body. This careful stimulation of pressure points on the foot help the body restore its own natural balance.\n\n## Benefits of Thai Massage\n\nThe benefits of Thai Foot Massage are many. Besides restoring the body to its own natural balance other benefits include:\n\n- Improved circulation\n- Improved lymphatic drainage\n- Boosts the immune system\n- Reduces stiffness\n- Increases range of motion\n- Accelerates healing\n- Relieves stress\n- Improves sleep\n- Elevates mood\n- Improves concentration and clarity of mind\n- Creates feelings of tranquility, calmness, and well being",
    "/blog-assets/thai-foot-massage.png",
  ],
  [
    "thai-massage",
    "Thai Massage",
    "Treatment guide",
    "An introduction to Thai bodywork, including Tok Sen and its cultural roots.",
    "https://santarosamedicalmassage.com/thai-massage/",
    "## Tok Sen\n\nNow if you’ve ever been to Thailand and had the opportunity to visit Chiang Mai in the North you may have felt a certain vibe on the street, a buzz…no not quite that more of a tap tap tap.\n\nIt’s the sound of the ancient Thai massage Tok Sen still practiced today after 500 years. It was originally prescribed by wives to the husbands after a hard days work in the fields. They would place the husband on the hard table and tap along the body with wooden sticks to ease their aching pains.\n\nThere is still very little known today about this body-work technique. There are no books or videos to use as a guide and it has to be taught orally. I was lucky enough to experience the treatment first hand in Thailand and fell in love with the practice as well as the history behind it. So much, that I decided to bring it back to Santa Rosa with me.\n\n## The Instruments\n\nThe Tok Sen is actually made from wood from a tamarind tree that has been struck by lightning. This is thought to remove the negative energy that we trap in our bodies. We use different sizes and shapes of hammer depending on body section.\n\n## The Mind\n\nThe rhythm of the taps is found to be quite hypnotizing. During a treatment you will find yourself following the tapping sound which will lead you to a meditative state. This will help you loosen your physical body even more making the massage more effective.\n\n## The Body\n\nTraditionally the massage is given fully clothed and tiger balm is used to massage into the skin. The Same energy lines / Sen Lines as general Thai massage are used to follow with the hammer. This creates a resonance that passes through the muscles and into the rest of the body. This resonance helps to dislodge long held and stubborn tension. By helping to release and relax the body a sense of well being and ease is felt, as a more natural flow of energy is re-established.\n\n## Benefits\n\n•Provides pain relief\n•Improves blood circulation\n•Removes energy blockages\n•Helps with sore tendons, pinched nerves and numbness",
    "/blog-assets/thai-massage.jpg",
  ],
  [
    "massage-cupping",
    "Massage Cupping",
    "Treatment guide",
    "How suction-based massage cupping may be used as part of a bodywork session.",
    "https://santarosamedicalmassage.com/massage-cupping/",
    "Massage Cupping™ is a type of massage therapy that uses suction as a way to promote healing of the joints and muscles. Utilizing silicone or plastic cups with a vacuum pistol they are glided along the muscles while gently lifting and pulling up the skin. Using techniques like gliding, shaking, popping and rotating, this therapy promotes health and healing by loosening soft and connective tissue, increasing lymphatic flow and circulation and moving stagnation within the body like lactic acid where sore muscles reside. This suction based therapy has the ability to pull toxins and inflammation to the surface of the skin where elimination is made possible by the lymphatic system. The suction is able to reach deep into the soft tissue, attachments and organs where toxins generally reside making it an effective therapy for overall health and well being. Side effects of this therapy are generally mild but may include:\n\n- Post tenderness: usually less than experienced from deep tissue work\n\n- Redness and Itching: increased vaso-dilation and/or inflammation brought to the surface\n\n- Decreased Blood Pressure: due to vaso-dilation and/or nervous system sedation\n\nSome after care suggestions we recommend are:\n\n- As always, plenty of water should be consumed to eliminate the surface toxins brought to the skin surface.\n\n- Avoid showers, steam, sauna and exercise immediately following bodywork.\n\n- Light stretching and range of motion exercises are helpful\n\n- Exercise the next day will help increase circulation to aid in fading of cup kisses.\n\n## Contraindications\n\nPeople who are on blood thinners should avoid Massage Cupping™. If you start taking such medication please inform the therapist so your treatment plan can be adjusted. If you are under the care of an acupuncturist, massage cupping could potentially interfere with acupuncture treatments, and should be avoided.",
    "/blog-assets/massage-cupping.jpg",
  ],
  [
    "fascia",
    "Fascia – What is it, and Where ISN’T it?",
    "Bodywork education",
    "A look at the connective tissue that runs throughout the body.",
    "https://santarosamedicalmassage.com/fascia-what-is-it-and-where-isnt-it/",
    "Like many roads and highways on a map, converging and connecting, in an attempt to cover the vast area of land from one end of the U.S. to the other, so too is a fiber in our bodies called Fascia. Often seen on chicken meat are the tough, white sometimes- clear fibers found when you pull raw chicken meat apart or away from the bone. Acting as a protective layer Fascia surrounds and runs thru every muscle, bone, nerve, organ, blood vessel, and cell connecting all of it together in some way.\n\nBecause of its expansiveness throughout our entire body, Fascia serves important functions including support, cushion and most importantly, provides space between vessels, bones, organs and muscles. These spaces allow fluids and nerves to pass between them.\n\n## What Does Fascia Consist of?\n\nFascia is made up of a 3-part complex.\n\n1. Elastin Fibers which make up the stretchy and elastic part of the complex\n2. Collagen Fibers are the tough and supportive part of the complex\n3. Ground substance/matrix: A Jell-O like substance that transfers metabolic material throughout the body.\n\n## Trauma to Fascial?\n\nWhen collagen fibers are healthy and unirritated they wrap around elastic fibers loosely, in a wavy pattern. The repetitive use of muscles or trauma of some kind to any part of our body can cause the Fascia to become hard and taut. This “tautness” is often felt in an area far from where the actual trauma to the muscle may have occurred. This chain like reaction is often the reason our pain in one area, is treated in another. Fascial restrictions propose challenges to finding the source of pain for individuals who suffer since the two areas may be very far apart and in seemingly unrelated locations to one another.\n\n## More Severe Effects of Fascial Restrictions\n\nFascial restrictions can apply an additional 2,000 pounds of pressure per square inch to any affected area of the body. In a healthy state, the collagen fibers wrap around the elastic fibers in a relaxed, wavy pattern. This pulling or tightness from Fascial restrictions pull the body out of alignment, compressing joint surfaces and bulging disks resulting in pain, loss of motion, and weakness.",
  ],
  [
    "sports-massage",
    "Sports Massage",
    "Treatment guide",
    "A discussion of massage for active people and the wear that sport can place on the body.",
    "https://santarosamedicalmassage.com/sports-massage/",
    "Sports Massage is a type of massage designed for highly active people who engage in athletics. Engaging in sports is harsh on the body and can often lead to injuries in both the short and long term. Sports Massage enhances performance and prolongs a sports career by helping to prevent injury, reduce pain and swelling in the body, relax the mind, increase flexibility, and dramatically improve recovery rates. Sports Massage is also highly effective in aiding the rapid recovery of an athlete from an injury by encouraging greater kinesthetic awareness and in turn promoting the body’s natural immune function.",
    "/blog-assets/sports-massage.jpg",
  ],
  [
    "lymphatic-facilitation",
    "Lymphatic Facilitation Therapy",
    "Treatment guide",
    "An overview of gentle, rhythmic work intended to support lymph movement.",
    "https://santarosamedicalmassage.com/lymphatic-facilitation-therapy/",
    "This type of massage aims to gently and rhythmically move the lymph through the body, especially swollen areas of the body, relieving pressure and enhancing the functioning of the immune system …As both a preventative and remedial technique, Lymphatic Facilitation can be used for a wide range of purposes including faster recovery from injury, reduction of swelling and discomfort from pregnancy, and strengthened resistance to illness.",
    "/blog-assets/lymphatic-facilitation.png",
  ],
  [
    "trigger-point-therapy",
    "Trigger Point Therapy",
    "Treatment guide",
    "Focused bodywork for sensitive muscle points that may refer pain elsewhere in the body.",
    "https://santarosamedicalmassage.com/trigger-point-therapy/",
    "An AMAZING style of bodywork that focuses on stimulating and releasing “trigger points” in your body. Trigger points are hyper-irritable muscle tissue that refer pain. These ‘knots’ are built up throughout a person’s life due to physical, mental, and/or emotional stress. During a session, focused pressure is applied through a variety of techniques in order to release your trigger points. This process can be quite painful at times, yet the effects are lasting and profoundly transformative.\n\nChoose this advanced therapeutic massage if you are visiting us primarily to treat a medical conditions such as…\n\n- You woke up this morning with a sore neck you need treated\n- You suffer from any type of chronic pain condition\n- You hurt your back cleaning the garage\n- Your shoulder is sore from golf over the weekend\n- Your low back pain is flaring up\n- Your knee hurts after a busy day yesterday\n- Your back generally hurts and needs treatment\n- Your leg hurts from cycling, running or golfing\n- You want a relaxation massage combined with specific treatment for an issue such as listed above\n\nRead what our customers say about our therapies",
    "/blog-assets/trigger-point-therapy.png",
  ],
  [
    "deep-tissue-massage",
    "Deep Tissue Massage",
    "Treatment guide",
    "An introduction to working with chronic stress and tension in deeper layers of tissue.",
    "https://santarosamedicalmassage.com/deep-tissue-massage/",
    "This modality is a form of bodywork that aims to relieve tension in the deeper layers of tissue in the body. Deep Tissue Massage is a highly effective method for releasing chronic stress areas due to misalignment, repetitive motions, and past lingering injuries. Due to the nature of the deep tissue work, open communication during the session is crucial to make sure you don’t get too uncomfortable. Keep in mind that soreness is pretty common after the treatment, and that plenty of water should be ingested to aid with the flushing and removal of toxins that will have been released from the deep tissue during the session.",
    "/blog-assets/deep-tissue-massage.jpg",
  ],
  [
    "treated-dysfunctions",
    "Treated Dysfunctions",
    "Care information",
    "An overview of conditions and concerns that may be discussed when considering massage therapy.",
    "https://santarosamedicalmassage.com/treated-dysfunctions/",
    "Even if you have tried chiropractic treatments, physical therapy, or even massage therapy in the past, there may be another way to approach your pain.\n\n## Ailments We Treat\n\n- Headaches/Migraines\n- Low Back Pain Neck Tension/Pain/Stiffness\n- Shoulder Impingement Stress\n- Hip Pain\n- TMJ Pain\n- Leg Cramps\n- Auto Injuries – Whiplash Associated Disorder (WAD)\n- Sciatica and Piriformis Syndrome\n- Rotator Cuff Injuries\n- Tingling in Hands\n- Carpal Tunnel Syndrome\n- Reduced Range of Motion\n- Postural Imbalances\n- Recovery after Surgery\n- Chronic Pain in any area\n- Lymphedema\n- Joint Aches\n- Fibromyalgia Pain\n- Plantar Fasciitis\n- Pain associated with bulged or injured spinal discs\n- Tendonitis\n- Constipation\n- Breast Pain\n- Repetitive use injuries such as Tennis Elbow or Golfers Elbow\n- and Much more…\n\nWe are confident that we can help relieve your tension and pain, assist your body’s own healing process and get you back to feeling like you should. Our goal is to devise a plan of massage therapy treatment that will provide the quickest relief with results that are long lasting.",
    "/blog-assets/treated-dysfunctions.jpg",
  ],
  [
    "medical-massage",
    "Medical Massage",
    "Care information",
    "How medical massage differs from general bodywork when care is directed toward a diagnosed condition.",
    "https://santarosamedicalmassage.com/medical-massage/",
    "Medical massage therapy is designed to specifically target medical conditions that are diagnosed by a doctor. During your treatment your therapist will use different massage techniques and procedures.",
    "/blog-assets/medical-massage.png",
  ],
];
const googleGalleryLabels = [
  "Remodeled Santa Rosa waiting room",
  "Updated practice signage",
  "Trigger point therapy detail",
  "Practice interior",
  "Treatment space",
  "Care detail",
  "Reception and waiting space",
  "Santa Rosa practice exterior",
  "Branded practice detail",
  "Treatment room",
  "Remodeled space",
];
const galleryImages = [
  ...[
    3, 4, 5, 6, 7, 8, 12, 13, 17, 18, 19, 20, 22, 23, 24, 29, 30, 32, 33, 34,
    35, 36, 37,
  ].map((i) => [
    `/mockup-photos/google-gallery-${i}.jpg`,
    `${googleGalleryLabels[i] || "Inside Santa Rosa Medical Massage"} · Google business photo`,
  ]),
  [
    "/mockup-photos/yelp-treatment.jpg",
    "Hands-on treatment · Yelp business photo",
  ],
  ["/mockup-photos/yelp-gift.jpg", "Gift cards · Yelp business photo"],
  [
    "/mockup-photos/yelp-active10.jpg",
    "Light-blue recovery products · Yelp business photo",
  ],
];
const treatmentPhotoOptions = serviceImages.map((src, i) => [
  src,
  `Hands-on massage treatment option ${i + 1}`,
]);
const remainingApprovedPhotos = [
  [
    "/mockup-photos/business-listing.jpg",
    "Santa Rosa Medical Massage — business listing",
  ],
  [
    "/mockup-photos/google-gallery-12.jpg",
    "Santa Rosa Medical Massage — google gallery 12",
  ],
  [
    "/mockup-photos/google-gallery-13.jpg",
    "Santa Rosa Medical Massage — google gallery 13",
  ],
  [
    "/mockup-photos/google-gallery-17.jpg",
    "Santa Rosa Medical Massage — google gallery 17",
  ],
  [
    "/mockup-photos/google-gallery-18.jpg",
    "Santa Rosa Medical Massage — google gallery 18",
  ],
  [
    "/mockup-photos/google-gallery-19.jpg",
    "Santa Rosa Medical Massage — google gallery 19",
  ],
  [
    "/mockup-photos/google-gallery-20.jpg",
    "Santa Rosa Medical Massage — google gallery 20",
  ],
  [
    "/mockup-photos/google-gallery-22.jpg",
    "Santa Rosa Medical Massage — google gallery 22",
  ],
  [
    "/mockup-photos/google-gallery-23.jpg",
    "Santa Rosa Medical Massage — google gallery 23",
  ],
  [
    "/mockup-photos/google-gallery-24.jpg",
    "Santa Rosa Medical Massage — google gallery 24",
  ],
  [
    "/mockup-photos/google-gallery-29.jpg",
    "Santa Rosa Medical Massage — google gallery 29",
  ],
  [
    "/mockup-photos/google-gallery-3.jpg",
    "Santa Rosa Medical Massage — google gallery 3",
  ],
  [
    "/mockup-photos/google-gallery-30.jpg",
    "Santa Rosa Medical Massage — google gallery 30",
  ],
  [
    "/mockup-photos/google-gallery-32.jpg",
    "Santa Rosa Medical Massage — google gallery 32",
  ],
  [
    "/mockup-photos/google-gallery-33.jpg",
    "Santa Rosa Medical Massage — google gallery 33",
  ],
  [
    "/mockup-photos/google-gallery-34.jpg",
    "Santa Rosa Medical Massage — google gallery 34",
  ],
  [
    "/mockup-photos/google-gallery-35.jpg",
    "Santa Rosa Medical Massage — google gallery 35",
  ],
  [
    "/mockup-photos/google-gallery-36.jpg",
    "Santa Rosa Medical Massage — google gallery 36",
  ],
  [
    "/mockup-photos/google-gallery-37.jpg",
    "Santa Rosa Medical Massage — google gallery 37",
  ],
  [
    "/mockup-photos/google-gallery-4.jpg",
    "Santa Rosa Medical Massage — google gallery 4",
  ],
  [
    "/mockup-photos/google-gallery-5.jpg",
    "Santa Rosa Medical Massage — google gallery 5",
  ],
  [
    "/mockup-photos/google-gallery-6.jpg",
    "Santa Rosa Medical Massage — google gallery 6",
  ],
  [
    "/mockup-photos/google-gallery-7.jpg",
    "Santa Rosa Medical Massage — google gallery 7",
  ],
  [
    "/mockup-photos/google-gallery-8.jpg",
    "Santa Rosa Medical Massage — google gallery 8",
  ],
  [
    "/mockup-photos/google-remodel-room.jpg",
    "Santa Rosa Medical Massage — google remodel room",
  ],
  [
    "/mockup-photos/therapy-hands.jpg",
    "Santa Rosa Medical Massage — therapy hands",
  ],
  [
    "/mockup-photos/therapy-room.jpg",
    "Santa Rosa Medical Massage — therapy room",
  ],
  [
    "/mockup-photos/yelp-active10.jpg",
    "Santa Rosa Medical Massage — yelp active10",
  ],
  [
    "/mockup-photos/yelp-detail-1.jpg",
    "Santa Rosa Medical Massage — yelp detail 1",
  ],
  [
    "/mockup-photos/yelp-detail-2.jpg",
    "Santa Rosa Medical Massage — yelp detail 2",
  ],
  [
    "/mockup-photos/yelp-detail-4.jpg",
    "Santa Rosa Medical Massage — yelp detail 4",
  ],
  ["/mockup-photos/yelp-gift.jpg", "Santa Rosa Medical Massage — yelp gift"],
  [
    "/mockup-photos/yelp-services.jpg",
    "Santa Rosa Medical Massage — yelp services",
  ],
  [
    "/mockup-photos/yelp-storefront.jpg",
    "Santa Rosa Medical Massage — yelp storefront",
  ],
  [
    "/mockup-photos/yelp-treatment.jpg",
    "Santa Rosa Medical Massage — yelp treatment",
  ],
];
const initialPhotoOptions = [
  ...galleryImages,
  ...treatmentPhotoOptions.filter(
    ([src]) => !galleryImages.some(([gallerySrc]) => gallerySrc === src),
  ),
];
const allPhotoOptions = Array.from(
  new Map(
    [...initialPhotoOptions, ...remainingApprovedPhotos].map((photo) => [
      photo[0],
      photo,
    ]),
  ).values(),
);
function InlineGallery({
  images,
  className = "",
  alt,
  slot = "photo",
}: {
  images: string[][];
  className?: string;
  alt?: string;
  slot?: string;
}) {
  const storageKey = `srmm-photo-${slot}`;
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  useEffect(() => {
    try {
      const encoded = new URLSearchParams(window.location.hash.slice(1)).get(
        "choices",
      );
      const linked = encoded
        ? JSON.parse(decodeURIComponent(atob(encoded))).find(
            (choice: { slot: string }) => choice.slot === slot,
          )
        : null;
      const saved =
        linked || JSON.parse(window.localStorage.getItem(storageKey) || "null");
      if (!saved) return;
      const savedIndex = images.findIndex(([src]) => src === saved.src);
      if (savedIndex >= 0) {
        setActive(savedIndex);
        setLocked(true);
      }
    } catch {}
  }, [images, slot, storageKey]);
  useEffect(() => {
    const clearLock = () => setLocked(false);
    window.addEventListener("srmm-photo-clear", clearLock);
    return () => window.removeEventListener("srmm-photo-clear", clearLock);
  }, []);
  const [src, label] = images[active];
  const previous = () => {
    setActive((active + images.length - 1) % images.length);
    setLocked(false);
  };
  const next = () => {
    setActive((active + 1) % images.length);
    setLocked(false);
  };
  const lock = () => {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ slot, src, label }),
    );
    setLocked(true);
    window.dispatchEvent(new Event("srmm-photo-selection"));
  };
  return (
    <div className={`inline-gallery ${className} ${locked ? "is-locked" : ""}`}>
      <img src={src} alt={alt || label} />
      <button
        className="inline-gallery-arrow previous"
        onClick={previous}
        aria-label="Previous photo"
      >
        ←
      </button>
      <button
        className="inline-gallery-arrow next"
        onClick={next}
        aria-label="Next photo"
      >
        →
      </button>
      <button className="lock-photo" onClick={lock}>
        {locked ? "Locked ✓" : "Lock this photo"}
      </button>
      <span className="inline-gallery-count">
        {active + 1}/{images.length}
      </span>
    </div>
  );
}
function SelectionPage({ setPage }: { setPage: (page: string) => void }) {
  const [choices, setChoices] = useState<
    Array<{ slot: string; src: string; label: string }>
  >([]);
  const [notice, setNotice] = useState("");
  const refresh = () =>
    setChoices(
      Object.keys(window.localStorage)
        .filter((key) => key.startsWith("srmm-photo-"))
        .map((key) => JSON.parse(window.localStorage.getItem(key) || "{}"))
        .filter((choice) => choice.slot),
    );
  useEffect(() => {
    refresh();
    window.addEventListener("srmm-photo-selection", refresh);
    return () => window.removeEventListener("srmm-photo-selection", refresh);
  }, []);
  const copy = async () => {
    const text = choices.length
      ? `Santa Rosa Medical Massage photo selections\n\n${choices.map((choice) => `${choice.slot}: ${choice.src.split("/").pop()}`).join("\n")}`
      : "No photo choices have been locked yet.";
    await navigator.clipboard.writeText(text);
    setNotice("Selections copied — paste them into an email or message.");
  };
  const share = async () => {
    const payload = btoa(encodeURIComponent(JSON.stringify(choices)));
    await navigator.clipboard.writeText(
      `${window.location.origin}${window.location.pathname}${window.location.search}#choices=${payload}`,
    );
    setNotice(
      "Review link copied — anyone opening it will see the locked photos.",
    );
  };
  const clear = () => {
    Object.keys(window.localStorage)
      .filter((key) => key.startsWith("srmm-photo-"))
      .forEach((key) => window.localStorage.removeItem(key));
    const url = new URL(window.location.href);
    url.hash = "";
    window.history.replaceState(null, "", url);
    window.dispatchEvent(new Event("srmm-photo-clear"));
    refresh();
    setNotice("Selections cleared.");
  };
  return (
    <section className="mock-page selections-page">
      <button className="back-link" onClick={() => setPage("home")}>
        ← Back to home
      </button>
      <span>Photo review board</span>
      <h1>Locked photo choices</h1>
      <p className="gallery-intro">
        Use the arrows on any image, then select “Lock this photo.” Copy a
        review link when finished so the same choices appear for anyone who
        opens it.
      </p>
      <div className="selection-actions">
        <button onClick={share}>Copy review link</button>
        <button onClick={copy}>Copy selections</button>
        <button onClick={clear}>Clear all</button>
      </div>
      {notice && <p className="selection-notice">{notice}</p>}
      <div className="selection-list">
        {choices.length ? (
          choices.map((choice) => (
            <article key={choice.slot}>
              <img src={choice.src} alt="Selected option" />
              <div>
                <b>{choice.slot.replaceAll("-", " ")}</b>
                <span>{choice.src.split("/").pop()}</span>
              </div>
            </article>
          ))
        ) : (
          <p>No selections yet. Start with any image on the site.</p>
        )}
      </div>
    </section>
  );
}
function PhotoSelectionTools() {
  const [count, setCount] = useState(0);
  const [notice, setNotice] = useState("");
  const refresh = () =>
    setCount(
      Object.keys(window.localStorage).filter((key) =>
        key.startsWith("srmm-photo-"),
      ).length,
    );
  useEffect(() => {
    refresh();
    window.addEventListener("srmm-photo-selection", refresh);
    window.addEventListener("srmm-photo-clear", refresh);
    return () => {
      window.removeEventListener("srmm-photo-selection", refresh);
      window.removeEventListener("srmm-photo-clear", refresh);
    };
  }, []);
  const clear = () => {
    Object.keys(window.localStorage)
      .filter((key) => key.startsWith("srmm-photo-"))
      .forEach((key) => window.localStorage.removeItem(key));
    window.dispatchEvent(new Event("srmm-photo-clear"));
    setNotice("Photo selections cleared.");
  };
  const copyReviewLink = async () => {
    const choices = Object.keys(window.localStorage)
      .filter((key) => key.startsWith("srmm-photo-"))
      .map((key) => JSON.parse(window.localStorage.getItem(key) || "{}"))
      .filter((choice) => choice.slot);
    const payload = btoa(encodeURIComponent(JSON.stringify(choices)));
    await navigator.clipboard.writeText(
      `${window.location.origin}${window.location.pathname}${window.location.search}#choices=${payload}`,
    );
    setNotice(
      choices.length
        ? "Review link copied with the locked photos."
        : "Review link copied. Lock photos first to include them.",
    );
  };
  return (
    <div className="n-photo-selection-tools" aria-label="Photo selection tools">
      <div>
        <strong>Photo selections</strong>
        <span>{count ? `${count} photo${count === 1 ? "" : "s"} locked` : "Lock a photo from any gallery"}</span>
      </div>
      <div>
        <button onClick={copyReviewLink}>Copy review link</button>
        <button onClick={clear} disabled={!count}>
          Clear all
        </button>
      </div>
      {notice && <p className="n-photo-tools-notice" role="status">{notice}</p>}
    </div>
  );
}
function GalleryPage({ setPage }: { setPage: (page: string) => void }) {
  const [active, setActive] = useState(0);
  const [src, label] = allPhotoOptions[active];
  const previous = () =>
    setActive((active + allPhotoOptions.length - 1) % allPhotoOptions.length);
  const next = () => setActive((active + 1) % allPhotoOptions.length);
  return (
    <section className="mock-page gallery-page">
      <button className="back-link" onClick={() => setPage("home")}>
        ← Back to home
      </button>
      <span>Visit Santa Rosa Medical Massage</span>
      <h1>Come in, get comfortable, and take a look around.</h1>
      <p className="gallery-intro">
        A practical guide to the refreshed space, getting here, and the
        supportive care clients can expect when they visit.
      </p>
      <div className="visit-gallery-overview">
        <article>
          <MapPin size={24} />
          <h2>Find us downtown</h2>
          <p>
            630 Third Street, Suite B<br />
            Santa Rosa, CA 95404
          </p>
          <p>Private parking · Visits by appointment</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Santa%20Rosa%20Medical%20Massage"
            target="_blank"
            rel="noreferrer"
          >
            Get directions <ArrowRight size={15} />
          </a>
        </article>
        <article>
          <Phone size={24} />
          <h2>Questions before you come in?</h2>
          <a className="visit-phone" href="tel:+17073037707">
            (707) 303-7707
          </a>
          <p>Ask about appointments, payment, receipts, or access needs.</p>
          <button onClick={() => setPage("contact")}>
            Contact the practice
          </button>
        </article>
      </div>
      <div className="gallery-carousel">
        <button
          className="gallery-arrow prev"
          onClick={previous}
          aria-label="Previous image"
        >
          ←
        </button>
        <img src={src} alt={label} />
        <button
          className="gallery-arrow next"
          onClick={next}
          aria-label="Next image"
        >
          →
        </button>
        <div className="gallery-caption">
          <b>{label}</b>
          <span>
            {active + 1} / {allPhotoOptions.length}
          </span>
        </div>
      </div>
      <div className="gallery-thumbs">
        {allPhotoOptions.map(([image, alt], i) => (
          <button
            key={image}
            className={i === active ? "active" : ""}
            onClick={() => setActive(i)}
            aria-label={`Show ${alt}`}
          >
            <img src={image} alt="" />
          </button>
        ))}
      </div>
      <small className="gallery-note">
        Use any photo picker in this review to compare and lock imagery for a
        final site.
      </small>
    </section>
  );
}
function ReviewCarousel() {
  const pageSize = 5;
  const pageCount = Math.ceil(googleReviews.length / pageSize);
  const [activePage, setActivePage] = useState(0);
  const previous = () =>
    setActivePage((activePage + pageCount - 1) % pageCount);
  const next = () => setActivePage((activePage + 1) % pageCount);
  const visible = googleReviews.slice(
    activePage * pageSize,
    activePage * pageSize + pageSize,
  );
  return (
    <section className="review-carousel">
      <div className="review-source">
        <span>Google reviews</span>
        <b>4.7 ★ from 94 public reviews</b>
      </div>
      <div className="review-page">
        {visible.map(([name, quote, date]) => (
          <article key={name}>
            <div className="review-stars">★★★★★</div>
            <blockquote>{quote}</blockquote>
            <footer>
              <b>{name}</b>
              <span>Google · {date}</span>
            </footer>
          </article>
        ))}
      </div>
      <div className="review-controls">
        <button onClick={previous} aria-label="Previous five reviews">
          ←
        </button>
        <span>
          Reviews {activePage * pageSize + 1}–
          {Math.min((activePage + 1) * pageSize, googleReviews.length)} of{" "}
          {googleReviews.length}
        </span>
        <button onClick={next} aria-label="Next five reviews">
          →
        </button>
      </div>
      <div className="review-dots" aria-label="Choose a group of reviews">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            className={i === activePage ? "active" : ""}
            onClick={() => setActivePage(i)}
            aria-label={`Show reviews ${i * pageSize + 1} through ${Math.min((i + 1) * pageSize, googleReviews.length)}`}
          />
        ))}
      </div>
      <a
        href="https://www.google.com/search?q=Santa+Rosa+Medical+Massage+reviews#"
        target="_blank"
        rel="noreferrer"
      >
        Read all Google reviews <ArrowRight size={15} />
      </a>
    </section>
  );
}
function BlogPage({ setPage }: { setPage: (page: string) => void }) {
  return (
    <section className="mock-page blog-page">
      <button className="back-link" onClick={() => setPage("home")}>
        ← Back to home
      </button>
      <span>Santa Rosa Medical Massage · Notes</span>
      <h1>Helpful notes for moving and feeling better.</h1>
      <p className="gallery-intro">
        A calm, useful blog space for treatment education, preparation, and the
        questions people often have before booking care.
      </p>
      <div className="blog-grid">
        {blogPosts.map(([slug, title, category, excerpt]) => (
          <article key={slug}>
            <small>{category}</small>
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <button onClick={() => setPage(`post-${slug}`)}>
              Read article <ArrowRight size={15} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
function MockPages({
  page,
  setPage,
}: {
  page: string;
  setPage: (page: string) => void;
}) {
  if (page === "home") return null;
  if (page === "gallery") return <GalleryPage setPage={setPage} />;
  if (page === "selections") return <SelectionPage setPage={setPage} />;
  if (page === "blog") return <BlogPage setPage={setPage} />;
  const post = blogPosts.find(([slug]) => page === `post-${slug}`);
  if (post) {
    const [, title, category, excerpt] = post;
    return (
      <section className="mock-page blog-article">
        <button className="back-link" onClick={() => setPage("blog")}>
          ← All notes
        </button>
        <span>{category}</span>
        <h1>{title}</h1>
        <p className="service-subtitle">{excerpt}</p>
        <div className="article-body">
          <p>
            Every body and health history is different. This article layout
            gives the practice a welcoming place to explain common concerns in
            plain language, while encouraging readers to share their specific
            goals and relevant medical guidance at a visit.
          </p>
          <h2>Bring the details that matter</h2>
          <p>
            What you notice, what changes the feeling, and what you hope to
            return to can all help guide a focused conversation. Massage therapy
            does not diagnose or replace medical care; work with your medical
            team when that support is needed.
          </p>
          <button onClick={() => setPage("treatments")}>
            Explore treatment options <ArrowRight size={15} />
          </button>
          <button className="outline-action" onClick={() => setPage("book")}>
            Book a consultation
          </button>
        </div>
      </section>
    );
  }
  const conditionKey = page.startsWith("condition-")
    ? decodeURIComponent(page.replace("condition-", ""))
    : "";
  if (conditionKey) {
    return (
      <section className="mock-page condition-detail">
        <button className="back-link" onClick={() => setPage("conditions")}>
          ← All conditions
        </button>
        <span>Condition guide</span>
        <h1>{conditionKey}</h1>
        <p className="service-subtitle">
          A starting point for a focused conversation about pain, movement, and
          the activities you want to return to.
        </p>
        <div className="condition-detail-grid">
          <div>
            <h2>How we approach care</h2>
            <p>
              We begin by listening to what you are experiencing, what changes
              it, and what support you are looking for. Your session is tailored
              to your goals and relevant health information.
            </p>
            <p>
              Massage therapy is not a diagnosis or a replacement for medical
              care. If you are working with a physician or physical therapist,
              bring that context to your appointment.
            </p>
            <button onClick={() => setPage("treatments")}>
              Explore treatment options
            </button>
          </div>
          <aside>
            <b>Helpful to share</b>
            <span>
              Where it hurts, how long it has been present, what makes it better
              or worse, and any current medical guidance.
            </span>
            <button onClick={() => setPage("book")}>Book a consultation</button>
          </aside>
        </div>
      </section>
    );
  }
  const serviceIndex = page.startsWith("service-")
    ? Number(page.replace("service-", ""))
    : -1;
  if (serviceIndex >= 0) {
    const [name, subtitle, description] = serviceDetails[serviceIndex];
    return (
      <section className="mock-page service-detail">
        <button className="back-link" onClick={() => setPage("treatments")}>
          ← All treatments
        </button>
        <span>Santa Rosa Medical Massage · Treatment details</span>
        <h1>{name}</h1>
        <p className="service-subtitle">{subtitle}</p>
        <div className="service-detail-grid">
          <InlineGallery
            className="service-detail-photo"
            slot={`service-detail-${serviceIndex}`}
            images={allPhotoOptions}
            alt={`Hands-on ${name} treatment`}
          />
          <div>
            <h2>What to expect</h2>
            <p>{description}</p>
            <p>
              At your first visit, we’ll discuss your goals and relevant health
              information before tailoring the session to what your body needs
              that day.
            </p>
            <button onClick={() => setPage("book")}>
              Schedule this treatment
            </button>
            <small>Appointment flow placeholder</small>
          </div>
        </div>
      </section>
    );
  }
  const serviceNames = services;
  if (page === "book" || page === "gift")
    return (
      <section className="mock-page booking-page">
        <header>
          <div>
            <span>Santa Rosa Medical Massage</span>
            <h1>Appointments & gift cards.</h1>
            <p>
              Choose an appointment for yourself or a gift certificate for
              someone you care about.
            </p>
          </div>
          <button onClick={() => setPage("home")}>← Back to home</button>
        </header>
        <div className="booking-options">
          <article>
            <CalendarDays size={27} />
            <h2>Schedule an appointment</h2>
            <p>
              Select a service, preferred practitioner, and an available time.
              This finished-form layout is a non-working prototype.
            </p>
            <button>Choose an appointment</button>
          </article>
          <article>
            <Gift size={27} />
            <h2>Gift a session</h2>
            <p>
              Choose a gift certificate amount and delivery option. This
              finished-form layout is a non-working prototype.
            </p>
            <button>Choose a gift certificate</button>
          </article>
        </div>
      </section>
    );
  return (
    <section className="mock-page">
      <header>
        <div>
          <span>Santa Rosa Medical Massage</span>
          <h1>
            {page === "treatments"
              ? "Treatments designed around your needs"
              : page === "conditions"
                ? "Care for pain, recovery, and movement"
                : page === "reviews"
                  ? "Words from people we’ve cared for"
                  : page === "about"
                    ? "A practice built around listening"
                    : page === "contact"
                      ? "A welcoming way to get in touch"
                      : "A clear next step"}
          </h1>
          <p>
            {page === "treatments"
              ? "Explore the specialized bodywork options used to help reduce pain, restore movement, and support your goals."
              : page === "conditions"
                ? "Select a concern to see how the consultation and treatment path can begin."
                : page === "reviews"
                  ? "A rotating selection of 20 public five-star Google reviews and ratings. Written excerpts are kept short; rating-only cards are identified clearly."
                  : page === "about"
                    ? "Santa Rosa Medical Massage specializes in soft-tissue care using trigger point therapy, deep tissue work, and other targeted modalities. Contact us to discuss practitioner experience and the right fit for your needs."
                    : page === "contact"
                      ? "Call with questions about treatments, your first visit, or referring a patient."
                      : "Scheduling and gift certificates are intentionally presented as placeholders for this prototype."}
          </p>
        </div>
        <button onClick={() => setPage("home")}>← Back to home</button>
      </header>
      {page === "treatments" ? (
        <div className="mock-grid">
          {serviceNames.map((s, i) => (
            <article key={s}>
              <InlineGallery
                className="mock-treatment-photo"
                slot={`treatments-${i}`}
                images={allPhotoOptions
                  .slice(i)
                  .concat(allPhotoOptions.slice(0, i))}
                alt={`Image option for ${s}`}
              />
              <small>0{i + 1}</small>
              <h2>{s}</h2>
              <p>
                {
                  [
                    "Focused work for trigger points, muscle knots, and referred pain.",
                    "Techniques tailored to diagnosed concerns and treatment goals.",
                    "A full-body session for persistent tension, mobility, and recovery.",
                    "Very light touch intended to support lymphatic flow.",
                    "Restorative full-body care for stress release and general wellbeing.",
                    "Body-centered support that prioritizes awareness, pacing, and comfort.",
                  ][i]
                }
              </p>
              <button onClick={() => setPage(`service-${i}`)}>
                View details
              </button>
            </article>
          ))}
        </div>
      ) : page === "conditions" ? (
        <div className="mock-condition-grid">
          {conditionItems.map(([name, description, Icon]) => (
            <button
              key={name}
              className="mock-condition-card"
              onClick={() => setPage(`condition-${encodeURIComponent(name)}`)}
            >
              <span className="mock-condition-icon">
                <Icon size={24} strokeWidth={1.7} />
              </span>
              <span className="mock-condition-copy">
                <b>{name}</b>
                <small>{description}</small>
              </span>
              <ArrowRight className="mock-condition-arrow" size={17} />
            </button>
          ))}
        </div>
      ) : page === "reviews" ? (
        <ReviewCarousel />
      ) : page === "about" ? (
        <div className="mock-about">
          <InlineGallery
            className="about-office-photo"
            slot="about-office"
            images={allPhotoOptions}
            alt="Santa Rosa Medical Massage image option"
          />
          <div>
            <h2>Located in downtown Santa Rosa</h2>
            <p>
              630 Third Street, Suite B<br />
              Santa Rosa, CA 95404
            </p>
            <p>
              Clients describe the setting as clean, comforting, and
              professional. Private rooms and private parking are available.
            </p>
            <button onClick={() => setPage("contact")}>
              View hours & directions
            </button>
          </div>
        </div>
      ) : page === "contact" ? (
        <div className="contact-layout">
          <article>
            <h2>Visit or call</h2>
            <p>
              630 Third Street, Suite B<br />
              Santa Rosa, CA 95404
            </p>
            <a href="tel:+17073037707">(707) 303-7707</a>
            <p>Private parking · By appointment</p>
          </article>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              Name
              <input placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              How can we help?
              <textarea placeholder="Tell us a little about what you are looking for." />
            </label>
            <button>Send message</button>
            <small>
              Contact-form placeholder — it will not send from this review site.
            </small>
          </form>
        </div>
      ) : (
        <div className="mock-actions">
          <article>
            <h2>{page === "gift" ? "Give care" : "Schedule care"}</h2>
            <p>
              {page === "gift"
                ? "Gift certificate purchasing will connect here."
                : "Appointment selection will connect here."}
            </p>
            <button>
              {page === "gift" ? "Buy gift certificate" : "Choose a treatment"}
            </button>
            <small>Prototype only — no transaction will occur.</small>
          </article>
        </div>
      )}
    </section>
  );
}
function PrototypeNav({
  page,
  setPage,
}: {
  page: string;
  setPage: (page: string) => void;
}) {
  const goHomeSection = (selectors: string) => {
    setPage("home");
    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        document
          .querySelector<HTMLElement>(selectors)
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      ),
    );
  };
  return (
    <nav className="prototype-nav" aria-label="Mockup pages">
      <button
        className={page === "home" ? "active" : ""}
        onClick={() => setPage("home")}
      >
        Home
      </button>
      <button
        onClick={() =>
          goHomeSection(
            "#services,.soft-services,.journal-columns,.signal-grid,.finder-menu",
          )
        }
      >
        Care
      </button>
      <button
        onClick={() =>
          goHomeSection(
            "#conditions,.clinical-bridge,.soft-bottom,.finder-menu",
          )
        }
      >
        Conditions
      </button>
      <button
        onClick={() =>
          goHomeSection("#reviews,.review,.soft-review,.signal-grid")
        }
      >
        Reviews
      </button>
      <button
        className={page === "blog" ? "active" : ""}
        onClick={() => setPage("blog")}
      >
        Blog
      </button>
      <button
        className={page === "gallery" ? "active" : ""}
        onClick={() => setPage("gallery")}
      >
        Visit & gallery
      </button>
      <button
        className={page === "book" || page === "gift" ? "active" : ""}
        onClick={() => setPage("book")}
      >
        Schedule now
      </button>
      <button
        className={page === "gift" ? "active" : ""}
        onClick={() => setPage("gift")}
      >
        Gift cards
      </button>
      <button
        className={page === "selections" ? "active" : ""}
        onClick={() => setPage("selections")}
      >
        Selections
      </button>
    </nav>
  );
}

function SocialLinks() {
  return (
    <span className="social-links" aria-label="Social media">
      <a
        href="https://www.facebook.com/search/top?q=santa%20rosa%20medical%20massage%2C%20inc.%20ca%2314021"
        target="_blank"
        rel="noreferrer"
        aria-label="Santa Rosa Medical Massage on Facebook"
      >
        <img src="/social-facebook.svg" alt="" />
      </a>
      <a
        href="https://www.instagram.com/santarosamedicalmassage/"
        target="_blank"
        rel="noreferrer"
        aria-label="Santa Rosa Medical Massage on Instagram"
      >
        <img src="/social-instagram.svg" alt="" />
      </a>
      <a
        href="https://www.yelp.com/biz/santa-rosa-medical-massage-santa-rosa-4?osq=Santa+Rosa+Medical+Massage"
        target="_blank"
        rel="noreferrer"
        aria-label="Santa Rosa Medical Massage on Yelp"
      >
        <img src="/social-yelp.svg" alt="" />
      </a>
    </span>
  );
}
function SimpleFooter({ className = "" }: { className?: string }) {
  return (
    <footer className={`simple-footer ${className}`}>
      <img src="/logo-correct.png" alt="Santa Rosa Medical Massage" />
      <div>
        <span>630 Third Street, Suite B · Santa Rosa, CA 95404</span>
        <a href="tel:+17073037707">(707) 303-7707</a>
      </div>
    </footer>
  );
}
function AwardStrip() {
  return <section className="award-strip" aria-label="Practice recognition"><span>Recognized for massage therapy in Santa Rosa</span><div><img src="/award-businessrate.png" alt="BusinessRate Best of 2026 Award Winner, Massage Therapist" /><img src="/award-recognition.png" alt="BusinessRate Best of 2025 Massage Therapist recognition" /></div></section>;
}

function FullBleed() {
  return (
    <div className="fb">
      <header className="fb-nav">
        <div className="fb-brand">
          <span>SR</span>
          <b>
            Santa Rosa
            <br />
            <em>Medical Massage</em>
          </b>
        </div>
        <nav>
          <a href="#fb-care">Treatments</a>
          <a href="#fb-story">Our approach</a>
          <a href="#fb-visit">Visit</a>
        </nav>
        <button>
          Schedule a session <ArrowRight size={16} />
        </button>
      </header>
      <section className="fb-hero">
        <img src="/hero.jpeg" alt="Therapeutic trigger point anatomy study" />
        <div className="fb-wash" />
        <div className="fb-hero-copy">
          <p>Advanced neuromuscular therapy · Santa Rosa</p>
          <h1>
            Make room
            <br />
            to feel <i>better.</i>
          </h1>
          <div>
            <span>
              Specific, thoughtful bodywork for pain, movement, recovery, and a
              more comfortable life.
            </span>
            <button>
              Find your treatment <ArrowRight />
            </button>
          </div>
        </div>
        <aside>
          <b>★★★★★</b>
          <span>Trusted, highly rated care in the heart of Santa Rosa</span>
        </aside>
      </section>
      <section id="fb-story" className="fb-intro">
        <p>We believe relief begins with being heard.</p>
        <div>
          <h2>Your body is not a template.</h2>
          <p>
            Every session starts with what you feel, how you move, and what you
            want to get back to. Then we shape the treatment around you.
          </p>
          <a href="#fb-care">
            See how we work <ArrowRight size={15} />
          </a>
        </div>
      </section>
      <section id="fb-care" className="fb-care">
        <div className="fb-care-title">
          <span>Treatment paths</span>
          <h2>
            Care for the body
            <br />
            you live in.
          </h2>
        </div>
        <div className="fb-care-list">
          {services.slice(0, 4).map((s, i) => (
            <article key={s}>
              <small>0{i + 1}</small>
              <h3>{s}</h3>
              <p>
                {
                  [
                    "Persistent knots, referred pain, and restricted movement.",
                    "Focused care for a diagnosed condition or recurring concern.",
                    "Attentive full-body work for mobility, tension, and recovery.",
                    "Gentle rhythmic support for healthy lymphatic flow.",
                  ][i]
                }
              </p>
              <ArrowRight />
            </article>
          ))}
        </div>
      </section>
      <section className="fb-quote">
        <span>Client story</span>
        <blockquote>
          “I walked up my stairs for the first time in years without pain.”
        </blockquote>
        <small>— Susan D. · Verified Yelp review</small>
      </section>
      <section id="fb-visit" className="fb-visit">
        <div>
          <span>Ready when you are</span>
          <h2>
            Come back to
            <br />
            your body.
          </h2>
          <button>
            Schedule an appointment <ArrowRight />
          </button>
        </div>
        <div>
          <b>Santa Rosa Medical Massage</b>
          <p>
            630 Third Street
            <br />
            Santa Rosa, CA 95404
          </p>
          <p>
            (707) 303-7707
            <br />
            By appointment
          </p>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}

function DuncanInspired() {
  return (
    <div className="dh">
      <div className="dh-top">
        630 Third Street, Santa Rosa, California <span>(707) 303-7707</span>
      </div>
      <header className="dh-nav">
        <nav>
          <a href="#dh-welcome">Welcome</a>
          <a href="#dh-treatments">Treatments</a>
          <a href="#dh-story">Our story</a>
        </nav>
        <div className="dh-seal">
          <span>SR</span>
          <b>Santa Rosa</b>
          <em>Medical Massage</em>
        </div>
        <nav>
          <a href="#dh-reviews">Reviews</a>
          <a href="#dh-visit">Contact</a>
          <button>Book now</button>
        </nav>
      </header>
      <section className="dh-hero">
        <img src="/hero.jpeg" alt="Therapeutic trigger point anatomy study" />
        <div className="dh-vignette" />
        <div className="dh-hero-copy">
          <span>Est. in Santa Rosa</span>
          <h1>
            Skilled hands.
            <br />
            Thoughtful care.
          </h1>
          <p>Advanced massage therapy for lasting relief and freer movement.</p>
          <button>Reserve an appointment</button>
        </div>
      </section>
      <main className="dh-frame">
        <section id="dh-welcome" className="dh-welcome">
          <div className="dh-flourish">✦</div>
          <span>Welcome to Santa Rosa Medical Massage</span>
          <h2>
            A restorative setting for
            <br />
            focused, individual care.
          </h2>
          <p>
            In the heart of downtown Santa Rosa, our advanced neuromuscular
            therapists offer precise, compassionate treatment for pain,
            recovery, and everyday wellbeing.
          </p>
          <button>
            Discover our approach <ArrowRight size={15} />
          </button>
        </section>
        <section id="dh-treatments" className="dh-split">
          <div className="dh-photo">
            <img
              src="/hero.jpeg"
              alt="Anatomy illustration used in therapeutic assessment"
            />
          </div>
          <div>
            <span>Our treatments</span>
            <h2>Relief, carefully considered.</h2>
            {services.slice(0, 4).map((s, i) => (
              <a key={s}>
                <small>0{i + 1}</small>
                {s}
                <ArrowRight size={15} />
              </a>
            ))}
          </div>
        </section>
        <section id="dh-reviews" className="dh-testimonial">
          <span>Words from our clients</span>
          <div>“</div>
          <blockquote>
            I walked up my stairs for the first time in years without pain.
          </blockquote>
          <small>★★★★★ &nbsp; Susan D. · Yelp</small>
        </section>
        <section id="dh-visit" className="dh-panels">
          <article>
            <span>Plan your visit</span>
            <h3>Downtown Santa Rosa</h3>
            <p>
              630 Third Street
              <br />
              Santa Rosa, CA 95404
            </p>
            <a>Get directions →</a>
          </article>
          <article className="dh-panel-dark">
            <span>Begin your care</span>
            <h3>Appointments available</h3>
            <p>Not sure which treatment fits? We’ll help you choose.</p>
            <button>Schedule now</button>
          </article>
          <article>
            <span>Stay connected</span>
            <h3>Follow the practice</h3>
            <p>News, availability, and practical ways to care for your body.</p>
            <SocialLinks />
          </article>
        </section>
      </main>
      <SimpleFooter className="dh-footer" />
    </div>
  );
}

function Classic({
  style,
  photo = false,
  onPage,
}: {
  style: string;
  photo?: boolean;
  onPage: (page: string) => void;
}) {
  const heroImage = photo
    ? style === "editorial"
      ? "/mockup-photos/google-gallery-4.jpg"
      : "/mockup-photos/google-gallery-3.jpg"
    : "/mockup-photos/yelp-treatment.jpg";
  const intro =
    style === "editorial"
      ? [
          "Welcome to a more thoughtful kind of bodywork. In our downtown Santa Rosa practice, advanced training meets an unhurried, personal approach.",
          "We create space to understand what your body needs, then help you return to the life you love.",
        ]
      : [
          "Pain can change how you move, work, rest, and enjoy everyday life. Our advanced neuromuscular therapists look beyond the immediate symptom to understand the patterns behind it.",
          "Then we create focused treatment designed around your body, your goals, and the activities that matter most to you.",
        ];
  const community =
    style === "editorial"
      ? [
          "For more than 15 years, Santa Rosa Medical Massage has been a steady, trusted part of downtown Santa Rosa. What began as a focused practice in therapeutic bodywork has grown into a place people return to for both difficult pain patterns and the ongoing care that keeps life moving.",
          "Clients come to us for trigger point therapy, medical massage, deep tissue work, lymphatic facilitation, Swedish massage, and somatic experiencing. They often mention the same things: knowledgeable therapists, a warm and welcoming environment, and care that begins by listening.",
        ]
      : [
          "Established in 2010, Santa Rosa Medical Massage has spent more than 15 years helping Sonoma County clients move with less pain and more confidence. Our approach centers your goals for comfort, recovery, and everyday mobility.",
          "We offer trigger point therapy, medical massage, deep tissue and full-body work, lymphatic facilitation, Swedish massage, and somatic experiencing. Local clients value the thoughtful consultations, skilled hands, and practical results that make this a practice they recommend to friends, family, and people involved in their care.",
        ];
  return (
    <>
      <div className="topbar">
        <span className="topbar-address">
          <MapPin size={15} />
          630 Third St, Santa Rosa
        </span>
        <a
          className="topbar-phone"
          href="tel:+17073037707"
          aria-label="Call Santa Rosa Medical Massage at 707-303-7707"
        >
          <Phone size={15} />
          (707) 303-7707
        </a>
        <span className="topbar-right">
          <span className="cred">
            <ShieldCheck size={15} />
            Advanced Neuromuscular Therapists
          </span>
          <SocialLinks />
        </span>
      </div>
      <header>
        <img src="/logo-correct.png" alt="Santa Rosa Medical Massage" />
        <nav>
          <button onClick={() => onPage("treatments")}>Services</button>
          <button onClick={() => onPage("conditions")}>Conditions</button>
          <button onClick={() => onPage("about")}>About</button>
          <button onClick={() => onPage("reviews")}>Reviews</button>
          <button onClick={() => onPage("gift")}>Gift cards</button>
        </nav>
        <button className="book" onClick={() => onPage("book")}>
          Schedule now
        </button>
      </header>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            Targeted massage therapy · Santa Rosa, California
          </p>
          <h1>
            <span className="clinical-copy">
              Move better.
              <br />
              Live with less pain.
            </span>
            <span className="warm-copy">
              Feel at home
              <br />
              in your body again.
            </span>
            <span className="editorial-copy">
              Relief, with
              <br />a reason.
            </span>
          </h1>
          <div className="lede">
            {intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="actions">
            <button className="primary" onClick={() => onPage("book")}>
              Find an appointment <ArrowRight size={17} />
            </button>
            <button className="secondary" onClick={() => onPage("gift")}>
              <Gift size={17} />
              Gift certificates
            </button>
          </div>
          <div className="proof">
            <span>
              <Star size={16} fill="currentColor" />
              Highly rated on Yelp
            </span>
            <span>
              <Check size={16} />
              Care centered on your goals
            </span>
          </div>
        </div>
        <div className="hero-image">
          <InlineGallery
            className="hero-photo-picker"
            slot={`hero-${style}-${photo ? "photos" : "original"}`}
            images={allPhotoOptions}
            alt="Santa Rosa Medical Massage image option"
          />
          <div className="float-card">
            <b>Not sure what to book?</b>
            <span>Tell us where it hurts. We’ll guide you.</span>
            <button onClick={() => onPage("treatments")}>
              Match me to a service
            </button>
          </div>
        </div>
      </section>
      <section className="practice-intro">
        <div>
          <span>Established in 2010 · Santa Rosa, California</span>
          <h2>
            {style === "editorial"
              ? "A local practice, built on attentive care."
              : "More than a massage. A plan for feeling better."}
          </h2>
        </div>
        <div>
          {community.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <button onClick={() => onPage("about")}>
            Meet the practice <ArrowRight size={15} />
          </button>
        </div>
        <aside>
          <b>15+</b>
          <span>years serving the Santa Rosa community</span>
          <b>4.4</b>
          <span>Yelp rating from 83 public reviews</span>
        </aside>
      </section>
      {photo && (
        <section className="photo-strip">
          <div>
            <span>THE REMODELED PRACTICE</span>
            <h2>A space designed to feel clear, grounded, and welcoming.</h2>
            <p>
              Try any of the available photos in these placements to find the
              right visual balance for this section.
            </p>
            <button onClick={() => onPage("gallery")}>
              Explore the gallery <ArrowRight size={15} />
            </button>
          </div>
          <div className="photo-strip-grid">
            {[0, 7, 14, 21].map((i) => (
              <InlineGallery
                key={i}
                slot={`photo-strip-${i}`}
                className="office-photo-picker"
                images={allPhotoOptions
                  .slice(i)
                  .concat(allPhotoOptions.slice(0, i))}
              />
            ))}
          </div>
        </section>
      )}
      <section className="trust">
        <div>
          <strong>2026</strong>
          <span>Best of Santa Rosa recognition</span>
        </div>
        <div>
          <strong>6</strong>
          <span>Focused treatment options</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Natural pain-relief approach</span>
        </div>
      </section>
      <section className="clinical-bridge">
        <div className="clinical-bridge-intro">
          <p>When pain is getting in the way</p>
          <h2>Clear care for people—and the professionals who support them.</h2>
          <p>
            When muscle tension or limited movement interrupts your day, start
            with what you want to do more comfortably. Explore treatment options
            or contact us to discuss your goals.
          </p>
        </div>
        <div className="clinical-bridge-list">
          <article>
            <span>For referring providers</span>
            <h3>Targeted soft-tissue support, with a direct path to care.</h3>
            <p>
              Contact the practice to discuss treatment options for a patient
              and ask about the experience relevant to their care.
            </p>
            <button onClick={() => onPage("contact")}>
              Start a referral conversation <ArrowRight size={15} />
            </button>
          </article>
          <article>
            <span>For older adults</span>
            <h3>More comfort for the movements that keep life yours.</h3>
            <p>
              Support for walking, stairs, gardening, sleep, and the ordinary
              routines that become harder when pain lingers.
            </p>
            <button onClick={() => onPage("conditions")}>
              Explore common concerns <ArrowRight size={15} />
            </button>
          </article>
          <article>
            <span>For practical planning</span>
            <h3>A welcoming space in downtown Santa Rosa.</h3>
            <p>
              Small details make a return visit feel manageable when comfort and
              mobility are the priority.
            </p>
            <button onClick={() => onPage("about")}>
              Plan your visit <ArrowRight size={15} />
            </button>
          </article>
        </div>
      </section>
      <section id="services" className="section">
        <p className="eyebrow">Care that meets you where you are</p>
        <div className="section-head">
          <h2>Start with what you need help with</h2>
          <p>
            Explore focused soft-tissue care for tension, movement, and
            recovery. If you are unsure where to begin, we can help you talk
            through the options.
          </p>
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <article key={s}>
              <button
                className="schedule-dot"
                onClick={() => onPage("book")}
                aria-label={`Schedule ${s}`}
              >
                Book
              </button>
              <span className="num">0{i + 1}</span>
              <InlineGallery
                className="service-photo-picker"
                slot={`home-service-${i}`}
                images={allPhotoOptions
                  .slice(i)
                  .concat(allPhotoOptions.slice(0, i))}
                alt={`Image option for ${s}`}
              />
              <h3>{s}</h3>
              <p>
                {i === 0
                  ? "Target stubborn knots and referred pain patterns."
                  : i === 1
                    ? "Condition-focused care aligned to a diagnosed need."
                    : i === 3
                      ? "Gentle techniques that support healthy lymph flow."
                      : "Skilled hands-on care tailored to tension, mobility and recovery."}
              </p>
              <button onClick={() => onPage(`service-${i}`)}>
                View details <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </section>
      <section id="reviews" className="review">
        <div>
          <p className="eyebrow">Client story</p>
          <blockquote>
            “I walked up my stairs for the first time in years without pain.”
          </blockquote>
          <p>
            Real outcomes should be edited into short, scannable proof—then link
            to the full verified review.
          </p>
          <span>★★★★★ Susan D. · Yelp</span>
        </div>
        <img src="/award.png" alt="Best of 2026 recognition plaque" />
      </section>
      <section id="conditions" className="conditions">
        <div>
          <p className="eyebrow">Conditions we commonly support</p>
          <h2>Make the problem the navigation.</h2>
        </div>
        <div className="chips">
          {[
            "Neck & shoulder pain",
            "Headaches & migraines",
            "Sciatica",
            "TMJ pain",
            "Recovery after surgery",
            "Limited range of motion",
            "Sports injuries",
            "Chronic pain",
          ].map((x) => (
            <button
              key={x}
              onClick={() => onPage(`condition-${encodeURIComponent(x)}`)}
            >
              {x}
            </button>
          ))}
        </div>
      </section>
      <section className="cta">
        <p className="eyebrow">A clear next step</p>
        <h2>Let’s find the right treatment for you.</h2>
        <p>
          Explore appointment options, or give someone time for care with a gift
          certificate.
        </p>
        <button onClick={() => onPage("book")}>
          Schedule an appointment <ArrowRight size={17} />
        </button>
      </section>
      <SimpleFooter />
    </>
  );
}

function Navigator() {
  const [area, setArea] = useState("Neck + shoulders");
  return (
    <div className="navx">
      <div className="navx-head">
        <img src="/logo-correct.png" alt="Santa Rosa Medical Massage" />
        <span>PAIN RELIEF, MAPPED TO YOU</span>
        <SocialLinks />
        <button>Book now</button>
      </div>
      <section className="navx-hero">
        <div className="navx-title">
          <span>01 / START HERE</span>
          <h1>
            Where does
            <br />
            it hurt?
          </h1>
          <p>
            Choose an area. We’ll suggest the most relevant treatment and
            explain why.
          </p>
        </div>
        <div className="body-map">
          <img src="/hero.jpeg" alt="Back and shoulder trigger point map" />
          <div className="pulse p1" />
          <div className="pulse p2" />
        </div>
        <div className="area-panel">
          <p>SELECT AN AREA</p>
          {[
            "Neck + shoulders",
            "Lower back",
            "Hips + sciatic pain",
            "Head + jaw",
            "Full-body tension",
          ].map((x) => (
            <button
              className={area === x ? "selected" : ""}
              onClick={() => setArea(x)}
              key={x}
            >
              {x}
              <ChevronRight />
            </button>
          ))}
        </div>
      </section>
      <section className="recommend">
        <div>
          <span>YOUR STARTING POINT</span>
          <h2>{area}</h2>
          <p>
            Based on this area, start with a focused assessment and targeted
            hands-on treatment.
          </p>
        </div>
        <article>
          <Activity />
          <div>
            <small>RECOMMENDED</small>
            <h3>
              {area === "Head + jaw"
                ? "Trigger Point Therapy"
                : "Medical Massage · 75 min"}
            </h3>
            <p>
              Assessment-led care that focuses the session on the source—not
              only the symptom.
            </p>
          </div>
          <button>
            See next openings <MoveRight />
          </button>
        </article>
      </section>
      <section className="navx-strip">
        <b>1,130+</b>
        <span>hours of advanced training</span>
        <b>6</b>
        <span>focused treatment paths</span>
        <b>★★★★★</b>
        <span>client-rated care</span>
      </section>
      <section className="navx-bottom">
        <p>Not ready to choose?</p>
        <h2>Talk to a human who knows bodies.</h2>
        <button>Call (707) 303-7707</button>
      </section>
    </div>
  );
}

function Atelier() {
  return (
    <div className="atelier">
      <div className="atelier-head">
        <div className="monogram">
          SR
          <br />
          MM
        </div>
        <div className="atelier-word">
          SANTA ROSA
          <br />
          <i>Medical Massage</i>
        </div>
        <nav>Work · Therapists · Notes · Visit</nav>
        <button>Reserve</button>
      </div>
      <section className="atelier-hero">
        <div className="vertical">THIRD STREET · SANTA ROSA · CALIFORNIA</div>
        <div className="atelier-photo">
          <img src="/hero.jpeg" alt="Therapeutic anatomy study" />
          <span>THE BODY, STUDIED WITH CARE</span>
        </div>
        <div className="atelier-copy">
          <p>Advanced neuromuscular therapy</p>
          <h1>
            The quiet
            <br />
            art of
            <br />
            <em>feeling well.</em>
          </h1>
          <div>
            <span>Targeted work for pain, movement, recovery, and return.</span>
            <button>
              Begin a session <ArrowRight />
            </button>
          </div>
        </div>
      </section>
      <section className="atelier-manifesto">
        <span>OUR PRACTICE</span>
        <p>We listen with our hands.</p>
        <p>
          Every body arrives with a history. Our work is specific, informed, and
          unhurried—designed around what yours is asking for today.
        </p>
      </section>
      <section className="atelier-services">
        <div className="bigword">TREATMENTS</div>
        {services.slice(0, 4).map((s, i) => (
          <article key={s}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h2>{s}</h2>
            <p>
              {
                [
                  "Persistent pain · movement restriction · referred tension",
                  "Condition-specific care · assessment · recovery",
                  "Deep muscular tension · mobility · maintenance",
                  "Post-surgical support · gentle rhythmic work",
                ][i]
              }
            </p>
            <ArrowRight />
          </article>
        ))}
      </section>
      <section className="atelier-quote">
        <p>“I walked up my stairs for the first time in years without pain.”</p>
        <span>— Susan D., verified Yelp review</span>
      </section>
      <section className="atelier-visit">
        <div>
          <span>VISIT</span>
          <h2>
            Come as you are.
            <br />
            Leave with more room.
          </h2>
        </div>
        <div>
          <p>
            630 Third Street
            <br />
            Santa Rosa, CA 95404
          </p>
          <p>
            (707) 303-7707
            <br />
            By appointment
          </p>
          <button>
            Find a time <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}

function Poster() {
  return (
    <div className="poster">
      <div className="poster-nav">
        <div className="poster-mark">
          SR<span>MM</span>
        </div>
        <p>
          MEDICAL MASSAGE
          <br />
          SANTA ROSA, CALIFORNIA
        </p>
        <nav>
          Services / Method / Team / Visit <SocialLinks />
        </nav>
        <button>BOOK A SESSION ↗</button>
      </div>
      <section className="poster-hero">
        <div className="poster-copy">
          <div className="poster-label">HANDS-ON CARE FOR BODIES IN MOTION</div>
          <h1>
            PAIN
            <br />
            <span>CHANGES</span>
            <br />
            HERE.
          </h1>
          <p>
            Focused massage therapy for stubborn pain, restricted movement, and
            bodies ready to get back to living.
          </p>
        </div>
        <div className="poster-art">
          <div className="red-disc">
            RELIEF
            <br />
            IN
            <br />
            MOTION
          </div>
          <img src="/hero.jpeg" alt="Trigger point map of the back" />
          <div className="angle-note">
            ADVANCED
            <br />
            NEUROMUSCULAR
            <br />
            THERAPY
          </div>
        </div>
      </section>
      <div className="poster-ticker">
        <span>TRIGGER POINT</span>
        <b>✦</b>
        <span>MEDICAL MASSAGE</span>
        <b>✦</b>
        <span>DEEP TISSUE</span>
        <b>✦</b>
        <span>LYMPHATIC</span>
        <b>✦</b>
        <span>SOMATIC</span>
      </div>
      <section className="poster-choose">
        <div className="poster-side">
          <span>CHOOSE BY NEED</span>
          <h2>
            DON'T KNOW
            <br />
            WHAT TO BOOK?
          </h2>
          <p>
            Start with what you feel. We’ll connect you with the right
            treatment.
          </p>
        </div>
        <div className="poster-needs">
          {[
            "Neck + shoulder tension",
            "Low back + sciatic pain",
            "Headaches + jaw pain",
            "Recovery + limited motion",
          ].map((x, i) => (
            <button key={x}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {x}
              <ArrowRight />
            </button>
          ))}
        </div>
      </section>
      <section className="poster-proof">
        <div>
          <b>1,130+</b>
          <span>HOURS OF ADVANCED EDUCATION</span>
        </div>
        <blockquote>
          “I walked up my stairs for the first time in years without pain.”
        </blockquote>
        <div className="poster-stars">
          ★★★★★<small>VERIFIED YELP REVIEW</small>
        </div>
      </section>
      <section className="poster-grid">
        {services.map((s, i) => (
          <article key={s}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h3>{s}</h3>
            <p>
              {
                [
                  "Precise work for referred pain and persistent knots.",
                  "Condition-focused care guided by assessment.",
                  "Firm, specific treatment for mobility and tension.",
                  "Gentle rhythmic support for lymphatic flow.",
                  "Restorative full-body care and decompression.",
                  "Body-centered support for stress and trauma.",
                ][i]
              }
            </p>
            <button>DETAILS ↗</button>
          </article>
        ))}
      </section>
      <section className="poster-end">
        <div className="poster-circle">
          BOOK
          <br />
          NOW
          <br />↗
        </div>
        <h2>
          MOVE
          <br />
          LIKE
          <br />
          YOURSELF.
        </h2>
        <div>
          <p>
            630 THIRD STREET
            <br />
            SANTA ROSA, CA 95404
          </p>
          <p>
            (707) 303-7707
            <br />
            BY APPOINTMENT
          </p>
        </div>
      </section>
    </div>
  );
}

function SoftConcept({
  variant,
  onPage,
}: {
  variant: "cloud" | "path" | "sunlit";
  onPage: (page: string) => void;
}) {
  const copy =
    variant === "cloud"
      ? [
          "A softer way back to yourself.",
          "Thoughtful bodywork for the places life holds onto.",
        ]
      : variant === "path"
        ? [
            "Care that meets you where you are.",
            "Start with what is getting in your way, then find a calm, clear next step.",
          ]
        : [
            "Feel good in your body again.",
            "Targeted massage care, made warm, simple, and personal.",
          ];
  const serviceStart = variant === "path" ? 2 : variant === "sunlit" ? 3 : 0;
  return (
    <div className={`soft-concept ${variant}`}>
      <header className="soft-head">
        <button className="soft-wordmark" onClick={() => onPage("home")}>
          <span>SR</span>
          <b>
            Santa Rosa
            <br />
            <i>Medical Massage</i>
          </b>
        </button>
        <nav>
          <button onClick={() => onPage("treatments")}>Treatments</button>
          <button onClick={() => onPage("conditions")}>Conditions</button>
          <button onClick={() => onPage("about")}>Our practice</button>
          <button onClick={() => onPage("blog")}>Notes</button>
          <button onClick={() => onPage("gift")}>Gift cards</button>
        </nav>
        <button className="soft-book" onClick={() => onPage("book")}>
          Schedule now
        </button>
      </header>
      <main>
        <section className="soft-hero">
          <div className="soft-hero-copy">
            <p>
              {variant === "cloud"
                ? "A welcoming space for focused care"
                : variant === "path"
                  ? "Take the pressure out of choosing care"
                  : "Santa Rosa’s warm, skilled massage practice"}
            </p>
            <h1>{copy[0]}</h1>
            <p className="soft-lede">
              You don’t need to have everything figured out before you arrive.
              Whether a familiar ache has been asking for attention or you
              simply miss moving comfortably, there’s room here to pause, ask
              questions, and talk about what matters to you.
            </p>
            <p className="soft-welcome-more">
              At Santa Rosa Medical Massage, we begin by listening. Together, we
              can talk through an approach to soft-tissue care that respects
              your comfort, your preferences, and the everyday things you would
              like to get back to.
            </p>
            <div>
              <button onClick={() => onPage("book")}>
                Find an appointment
              </button>
              <button
                className="soft-text-button"
                onClick={() => onPage("treatments")}
              >
                Explore treatments
              </button>
            </div>
          </div>
          <div className="soft-hero-art">
            <InlineGallery
              slot={`soft-hero-${variant}`}
              images={allPhotoOptions}
              alt="Santa Rosa Medical Massage image option"
            />
            <span>
              {variant === "path"
                ? "A little more room to move."
                : variant === "sunlit"
                  ? "Care that feels like a reset."
                  : "Your comfort is the starting point."}
            </span>
          </div>
        </section>
        <section className="soft-intro">
          <div>
            <p>
              {variant === "sunlit"
                ? "Hello, Santa Rosa."
                : "Individual care, without the guesswork."}
            </p>
            <h2>
              {variant === "path"
                ? "A good plan starts with a good listen."
                : variant === "cloud"
                  ? "Room to pause. Support to move forward."
                  : "Hands-on care with a human touch."}
            </h2>
          </div>
          <p>
            We begin with what you are feeling, what you want to get back to,
            and what will make the visit feel manageable. Targeted techniques
            meet you there—whether you are seeking support for pain, recovery,
            movement, or a quieter nervous system.
          </p>
          <button onClick={() => onPage("about")}>
            How the practice works <ArrowRight size={15} />
          </button>
        </section>
        <section className="soft-services">
          <div className="soft-services-title">
            <p>
              {variant === "path"
                ? "Choose a starting point"
                : "Care that fits real life"}
            </p>
            <h2>
              {variant === "sunlit"
                ? "Pick what sounds helpful today."
                : "Ways to feel more at ease."}
            </h2>
          </div>
          <div className="soft-service-list">
            {services
              .slice(serviceStart, serviceStart + 3)
              .map((service, i) => (
                <article key={service}>
                  <span>{i + 1}</span>
                  <h3>{service}</h3>
                  <p>
                    {
                      [
                        "Targeted attention for tension, pain patterns, and the routines they interrupt.",
                        "A tailored session grounded in your goals and relevant care context.",
                        "A slower reset for mobility, comfort, and everyday wellbeing.",
                      ][i]
                    }
                  </p>
                  <button
                    onClick={() =>
                      onPage(`service-${(serviceStart + i) % services.length}`)
                    }
                  >
                    Details <ArrowRight size={15} />
                  </button>
                </article>
              ))}
          </div>
        </section>
        <section className="soft-review">
          <div className="soft-review-mark">“</div>
          <blockquote>
            {variant === "path"
              ? "I always walk out feeling rejuvenated with much less pain."
              : variant === "cloud"
                ? "So professional, knowledgeable and skilled. Will definitely be returning."
                : "The staff and space is amazing!"}
          </blockquote>
          <p>Public five-star Google review</p>
          <button onClick={() => onPage("reviews")}>See client reviews</button>
        </section>
        <section className="soft-bottom">
          <div>
            <p>
              {variant === "path"
                ? "Still not sure where to start?"
                : "Your next visit can be simple."}
            </p>
            <h2>
              {variant === "sunlit"
                ? "We’ll help you choose."
                : "Tell us what needs a little more care."}
            </h2>
          </div>
          <div>
            <button onClick={() => onPage("conditions")}>
              Browse common concerns
            </button>
            <button
              className="soft-light-button"
              onClick={() => onPage("contact")}
            >
              Visit or call us
            </button>
          </div>
        </section>
      </main>
      <SimpleFooter className="soft-footer" />
    </div>
  );
}

function CompleteCareContent({
  variant,
  onPage,
}: {
  variant: "cloud" | "finder";
  onPage: (page: string) => void;
}) {
  return (
    <section className={`complete-care ${variant}`}>
      <section className="complete-story">
        <div>
          <span>Established in Santa Rosa</span>
          <h2>More than 15 years of thoughtful, targeted care.</h2>
        </div>
        <p>
          Santa Rosa Medical Massage offers focused soft-tissue care for chronic
          tension, injury recovery, post-surgical stiffness, and everyday
          mobility. Clients return for skilled hands, practical conversations,
          and a remodeled space that feels welcoming from the moment they
          arrive.
        </p>
      </section>
      <section className="complete-services">
        <div>
          <span>All treatment options</span>
          <h2>Care for the body you live in.</h2>
        </div>
        <div>
          {services.map((service, i) => (
            <button key={service} onClick={() => onPage(`service-${i}`)}>
              <small>{String(i + 1).padStart(2, "0")}</small>
              <b>{service}</b>
              <ArrowRight size={16} />
            </button>
          ))}
        </div>
      </section>
      <section className="complete-conditions">
        <div>
          <h2>Start with what is getting in your way.</h2>
          <p>
            Headaches, jaw tension, low-back pain, sciatica, recovery after
            surgery, plantar fasciitis, and limited range of motion all have a
            clear place to begin.
          </p>
        </div>
        <button onClick={() => onPage("conditions")}>
          Explore common conditions
        </button>
      </section>
      <SimpleFooter />
    </section>
  );
}

function StrategyContent({ onPage }: { onPage: (page: string) => void }) {
  return (
    <section className="strategy-content">
      <section className="strategy-referral">
        <div>
          <p>For patients and referring professionals</p>
          <h2>A clear next step for focused soft-tissue care.</h2>
        </div>
        <div>
          <p>{referralCopy}</p>
          <button onClick={() => onPage("contact")}>
            Ask about referring a patient <ArrowRight size={15} />
          </button>
        </div>
      </section>
      <section className="strategy-profiles">
        <div>
          <p>Personal attention</p>
          <h2>Start with what matters to you.</h2>
          <p>{practiceCopy}</p>
        </div>
        <aside>
          <b>Find the right fit</b>
          <span>
            Have questions about a therapist’s experience or a particular
            treatment? Talk with us before choosing an appointment.
          </span>
          <button onClick={() => onPage("contact")}>
            Talk with the practice
          </button>
        </aside>
      </section>
      <section className="strategy-aging">
        <div>
          <p>Staying active as you age</p>
          <h2>Walking. Gardening. A more comfortable night’s sleep.</h2>
        </div>
        <div>
          <p>{agingCopy}</p>
          <button onClick={() => onPage("conditions")}>
            Explore common concerns
          </button>
        </div>
      </section>
      <section className="strategy-practical">
        <article>
          <MapPin size={22} />
          <h3>Plan your arrival</h3>
          <p>
            Find us at 630 Third Street, Suite B, in downtown Santa Rosa.
            Private parking is available. Call ahead with questions about access
            or anything you need for a comfortable visit.
          </p>
          <button onClick={() => onPage("contact")}>Location & contact</button>
        </article>
        <article>
          <ShieldCheck size={22} />
          <h3>Questions before booking?</h3>
          <p>
            Contact the practice for current session lengths, pricing, and
            questions about payment or receipts before choosing your
            appointment.
          </p>
          <button onClick={() => onPage("contact")}>Ask a question</button>
        </article>
        <article>
          <Activity size={22} />
          <h3>Care around your goals</h3>
          <p>
            Let your therapist know about relevant guidance from your medical or
            rehabilitation team, including any restrictions. That context helps
            you discuss an appropriate next step.
          </p>
          <button onClick={() => onPage("treatments")}>
            Explore treatments
          </button>
        </article>
      </section>
      <SimpleFooter />
    </section>
  );
}

function AvantConcept({
  variant,
  onPage,
}: {
  variant: "journal" | "signal" | "finder";
  onPage: (page: string) => void;
}) {
  const isJournal = variant === "journal",
    isSignal = variant === "signal";
  const headline = isJournal
    ? "The body keeps a record."
    : isSignal
      ? "Your relief has a signal."
      : "Find a useful next step.";
  return (
    <div className={`avant-concept ${variant}`}>
      <header className="avant-head">
        <button onClick={() => onPage("home")} className="avant-logo">
          Santa Rosa
          <br />
          <i>Medical Massage</i>
        </button>
        <nav>
          <button onClick={() => onPage("treatments")}>Treatments</button>
          <button onClick={() => onPage("conditions")}>Conditions</button>
          <button onClick={() => onPage("reviews")}>Reviews</button>
          <button onClick={() => onPage("blog")}>Journal</button>
          <button onClick={() => onPage("gift")}>Gift cards</button>
        </nav>
        <span className="avant-social">
          <a
            href="https://www.facebook.com/search/top?q=santa%20rosa%20medical%20massage%2C%20inc.%20ca%2314021"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/social-facebook.svg" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/santarosamedicalmassage/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/social-instagram.svg" alt="Instagram" />
          </a>
          <a
            href="https://www.yelp.com/biz/santa-rosa-medical-massage-santa-rosa-4"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/social-yelp.svg" alt="Yelp" />
          </a>
        </span>
        <a className="avant-call" href="tel:+17073037707">
          Call (707) 303-7707
        </a>
        <button onClick={() => onPage("book")}>Schedule now</button>
      </header>
      <main>
        {isJournal ? (
          <>
            <section className="journal-hero">
              <div>
                <p>Santa Rosa, California</p>
                <h1>{headline}</h1>
                <p>
                  Skilled massage therapy for the work, the worry, the recovery,
                  and the everyday movement that asks more of you.
                </p>
                <button onClick={() => onPage("book")}>Plan a visit</button>
              </div>
              <InlineGallery
                slot="avant-journal-hero"
                images={allPhotoOptions}
                alt="Santa Rosa Medical Massage image option"
              />
              <aside>
                <span>New here?</span>
                <button onClick={() => onPage("conditions")}>
                  Start with what hurts <ArrowRight size={15} />
                </button>
              </aside>
            </section>
            <section className="journal-columns">
              <div>
                <span>What we do</span>
                <h2>Hands-on work, thoughtfully applied.</h2>
              </div>
              <div>
                <p>
                  Each appointment begins with the context that matters: what
                  has changed, what is limiting you, and what you want to return
                  to.
                </p>
                <button onClick={() => onPage("about")}>
                  Meet the practice
                </button>
              </div>
              <div className="journal-services">
                {services.slice(0, 4).map((s, i) => (
                  <button key={s} onClick={() => onPage(`service-${i}`)}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {s}
                    <ArrowRight size={16} />
                  </button>
                ))}
              </div>
            </section>
          </>
        ) : isSignal ? (
          <>
            <section className="signal-hero">
              <div className="signal-disc">
                MOVE
                <br />
                WITH
                <br />
                MORE
                <br />
                ROOM
              </div>
              <div>
                <p>Advanced care for the body in motion</p>
                <h1>{headline}</h1>
                <p>
                  Target the pain patterns and tight places getting in the way
                  of your day.
                </p>
                <button onClick={() => onPage("conditions")}>
                  Choose a concern
                </button>
              </div>
              <InlineGallery
                slot="avant-signal-hero"
                images={allPhotoOptions}
                alt="Santa Rosa Medical Massage image option"
              />
            </section>
            <section className="signal-band">
              <span>Trigger point therapy</span>
              <span>Deep tissue</span>
              <span>Medical massage</span>
              <span>Lymphatic facilitation</span>
            </section>
            <section className="signal-grid">
              <article>
                <b>1,130+</b>
                <span>hours of advanced education</span>
              </article>
              <article>
                <blockquote>“I think I found the one.”</blockquote>
                <button onClick={() => onPage("reviews")}>
                  More client stories
                </button>
              </article>
              <article>
                <h2>Specific work for real life.</h2>
                <button onClick={() => onPage("treatments")}>
                  View treatments
                </button>
              </article>
            </section>
          </>
        ) : (
          <>
            <section className="finder-hero">
              <div>
                <span>Santa Rosa Medical Massage</span>
                <h1>{headline}</h1>
                <p>
                  Sometimes you know exactly what needs attention. Sometimes you
                  only know that your body doesn’t feel quite like itself.
                  Either way, you’re welcome to begin with a conversation.
                </p>
                <p>
                  Our Santa Rosa practice offers focused soft-tissue care with a
                  personal approach. Tell us about your day, the movements that
                  have become difficult, and the activities you miss. You don’t
                  need to choose the right treatment on your own—we can talk
                  through the options together.
                </p>
                <AwardStrip />
              </div>
              <div className="finder-orbit">
                <InlineGallery
                  slot="avant-finder-hero"
                  images={allPhotoOptions}
                  alt="Santa Rosa Medical Massage image option"
                />
                <button
                  className="finder-start"
                  onClick={() => onPage("conditions")}
                >
                  START
                  <br />
                  HERE
                </button>
              </div>
            </section>
            <section className="finder-menu">
              <p>What feels most relevant today?</p>
              <div>
                {[
                  ["Head + jaw", "Headaches, jaw tension, TMJ"],
                  [
                    "Neck + shoulders",
                    "Tightness, posture, restricted movement",
                  ],
                  [
                    "Back + hips",
                    "Sciatic symptoms, low-back tension, recovery",
                  ],
                  ["Whole body", "Stress, general tension, restorative care"],
                ].map(([title, text], i) => (
                  <button
                    key={title}
                    onClick={() =>
                      onPage(
                        i === 0
                          ? "condition-TMJ%20pain"
                          : i === 1
                            ? "condition-Neck%20tension"
                            : i === 2
                              ? "condition-Sciatica%20%26%20piriformis"
                              : "treatments",
                      )
                    }
                  >
                    <b>{title}</b>
                    <span>{text}</span>
                    <ArrowRight size={18} />
                  </button>
                ))}
              </div>
            </section>
            <section className="finder-promise">
              <div>
                <h2>
                  You don’t have to know the exact treatment before you arrive.
                </h2>
                <p>
                  Start with a concern, a goal, or simply the wish to feel
                  better in your body.
                </p>
              </div>
              <button onClick={() => onPage("book")}>
                Find an appointment
              </button>
            </section>
          </>
        )}
        <SimpleFooter className="avant-footer" />
      </main>
    </div>
  );
}

function TemplateTestimonial() {
  const [index, setIndex] = useState(0);
  const [name, quote] = googleReviews[index % googleReviews.length];
  return <section className="tpl-testimonial"><span>WHAT CLIENTS SAY</span><blockquote>“{quote}”</blockquote><small>— {name} · Google</small><div className="tpl-testimonial-controls"><button onClick={() => setIndex((index + googleReviews.length - 1) % googleReviews.length)} aria-label="Previous client review">←</button><span>{index + 1} / {googleReviews.length}</span><button onClick={() => setIndex((index + 1) % googleReviews.length)} aria-label="Next client review">→</button></div></section>;
}

function TemplateMock({
  kind,
  photo = false,
  onPage,
}: {
  kind: "wixsoft" | "wpspa" | "webwell";
  photo?: boolean;
  onPage: (page: string) => void;
}) {
  const wix = kind === "wixsoft",
    wp = kind === "wpspa";
  const jumpServices = () => {
    onPage("home");
    requestAnimationFrame(() => requestAnimationFrame(() => document.querySelector<HTMLElement>(".tpl-services")?.scrollIntoView({ behavior: "smooth", block: "start" })));
  };
  return (
    <div className={`tpl ${kind}`}>
      <div className="tpl-note">
        REFERENCE DIRECTION ·{" "}
        {wix
          ? "WIX MASSAGE THERAPIST (SOFT)"
          : wp
            ? "WORDPRESS MASSAGE SPA"
            : "WEBFLOW HEALTH & WELLNESS"}
      </div>
      <header className="tpl-head">
        <img src="/logo-correct.png" alt="Santa Rosa Medical Massage" />
        <nav>
          <button onClick={() => onPage("home")}>Home</button>
          <button onClick={() => onPage("about")}>About</button>
          <button onClick={kind === "webwell" ? jumpServices : () => onPage("treatments")}>Services</button>
          <button onClick={() => onPage("reviews")}>Reviews</button>
          <button onClick={() => onPage("contact")}>Contact</button>
          <button onClick={() => onPage("gift")}>Gift cards</button>
          <SocialLinks />
        </nav>
        <button onClick={() => onPage("book")}>Schedule now</button>
      </header>
      <section className="tpl-hero">
        <div className="tpl-copy">
          <span>
            {wix
              ? "PERSONALIZED THERAPEUTIC CARE"
              : wp
                ? "WELCOME TO SANTA ROSA MEDICAL MASSAGE"
                : "ADVANCED CARE FOR EVERYDAY MOVEMENT"}
          </span>
          <h1>
            {wix
              ? "Relax your body. Restore your life."
              : wp
                ? "Professional massage for lasting pain relief."
                : "Your body knows the way forward."}
          </h1>
          <p>
            There are days when a little more comfort would make a real
            difference. An easier walk, time in the garden, or simply turning
            your head without thinking about it. Those everyday moments matter
            to us, too.
          </p>
          <p>
            Welcome to Santa Rosa Medical Massage. Our approach to soft-tissue
            care begins with listening to your experience, making space for your
            questions, and understanding what you hope to return to. Whether
            this is your first visit or part of ongoing care, we’ll help you
            find a thoughtful place to begin.
          </p>
          {kind === "webwell" && <AwardStrip />}
          <button onClick={() => wix ? onPage("book") : kind === "webwell" ? jumpServices() : onPage("treatments")}>
            {wix
              ? "Book an appointment"
              : wp
                ? "LEARN MORE"
                : "Explore our approach"}
          </button>
        </div>
        <div className="tpl-photo">
          <InlineGallery
            className="template-hero-picker"
            slot={`template-hero-${kind}-${photo ? "photos" : "original"}`}
            images={allPhotoOptions}
            alt="Santa Rosa Medical Massage image option"
          />
        </div>
      </section>
      {wix ? (
        <section className="wix-intro">
          <span>WELCOME</span>
          <h2>A thoughtful approach to feeling better</h2>
          <p>
            We listen first, then build each session around your needs. Our
            advanced neuromuscular therapists combine specialized techniques
            with compassionate, personal care.
          </p>
        </section>
      ) : wp ? (
        <section className="wp-icons">
          {[
            ["✦", "Experienced therapists"],
            ["◉", "Focused treatments"],
            ["♡", "Personal attention"],
            ["⌖", "Santa Rosa location"],
          ].map((x) => (
            <div key={x[1]}>
              <b>{x[0]}</b>
              <span>{x[1]}</span>
            </div>
          ))}
        </section>
      ) : (
        <section className="web-intro">
          <div>
            <span>Established in 2010</span>
            <h2>A clear path toward feeling more like yourself.</h2>
          </div>
          <div className="web-copy">
            <p>
              For more than 15 years, Santa Rosa Medical Massage has helped
              local clients find thoughtful care for chronic pain, recovery
              after injury or surgery, and the everyday strain of active lives.
              Bring your questions and goals so we can discuss the treatment
              options that fit your needs.
            </p>
            <p>
              From trigger point therapy and medical massage to deep tissue,
              lymphatic facilitation, Swedish massage, and somatic experiencing,
              treatment begins by listening. Clients tell us they value the
              skilled attention, welcoming space, and results that keep them
              coming back and referring the people they love.
            </p>
          </div>
          <button onClick={() => onPage("about")}>How we work →</button>
        </section>
      )}
      <section className="tpl-services">
        <div className="tpl-section-title">
          <span>OUR SERVICES</span>
          <h2>
            {wix
              ? "Choose the care your body needs"
              : wp
                ? "MASSAGE SERVICES"
                : "Ways we can help"}
          </h2>
        </div>
        <div className="tpl-cards">
          {services.map((s, i) => (
            <article key={s}>
              <div className="tpl-thumb">
                <InlineGallery
                  className="template-service-picker"
                  slot={`template-service-${i}`}
                  images={allPhotoOptions
                    .slice(i)
                    .concat(allPhotoOptions.slice(0, i))}
                  alt={`Image option for ${s}`}
                />
              </div>
              <h3>{s}</h3>
              <p>
                {
                  [
                    "Focused work for stubborn knots, referred pain, and limited movement.",
                    "Condition-specific treatment guided by your needs and goals.",
                    "Firm, attentive work that supports mobility and recovery.",
                    "Exceptionally light touch to support a gentle lymphatic approach.",
                    "Restorative full-body care for stress release and general wellbeing.",
                    "Body-centered support that prioritizes awareness, pacing, and comfort.",
                  ][i]
                }
              </p>
              <button
                className="tpl-detail-link"
                onClick={() => onPage(`service-${i}`)}
              >
                View treatment <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </section>
      <section className="tpl-referral">
        <div>
          <span>FOR PATIENTS AND PROVIDERS</span>
          <h2>Care that makes the next step clear.</h2>
        </div>
        <div>
          <p>
            Condition-led guidance for sciatica, plantar fasciitis, TMJ pain,
            frozen shoulder, post-surgical recovery, and other persistent
            movement concerns.
          </p>
          <p>
            Referring a patient? Contact the practice with questions about
            treatment options and practitioner experience.
          </p>
          <button onClick={() => onPage("contact")}>
            Talk through a care goal →
          </button>
        </div>
      </section>
      <TemplateTestimonial />
      <section className="tpl-final">
        <div>
          <span>READY WHEN YOU ARE</span>
          <h2>Let’s help you feel like yourself again.</h2>
        </div>
        <button onClick={() => onPage("book")}>Schedule an appointment</button>
      </section>
      <SimpleFooter className="tpl-foot" />
    </div>
  );
}

export default function Home() {
  const [style, setStyle] = useState("house-photo");
  const [page, setPage] = useState("home");
  // Keep the server and browser's first render identical. URL-specific review
  // mode is applied after hydration, which also prevents the selector flashing
  // permanently in the Familiar-only link.
  const [shareMode, setShareMode] = useState(false);
  const siteRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("concept");
    if (new URLSearchParams(window.location.search).get("share") === "familiar") {
      setShareMode(true);
      setStyle("house-photo");
    }
    if (selected && concepts.some(([id]) => id === selected))
      setStyle(selected);
    try {
      const encoded = new URLSearchParams(window.location.hash.slice(1)).get(
        "choices",
      );
      const choices = encoded
        ? JSON.parse(decodeURIComponent(atob(encoded)))
        : [];
      if (Array.isArray(choices))
        choices.forEach((choice) => {
          if (
            typeof choice?.slot === "string" &&
            allPhotoOptions.some(([src]) => src === choice.src)
          )
            window.localStorage.setItem(
              `srmm-photo-${choice.slot}`,
              JSON.stringify(choice),
            );
        });
    } catch {}
  }, []);

  useEffect(() => {
    if (!concepts.some(([id]) => id === style)) setStyle("house-photo");
  }, [style]);

  useEffect(() => {
    const root = siteRef.current;
    if (
      [
        "courtyard-photo",
        "desk-photo",
        "everyday-photo",
        "house-photo",
      ].includes(style)
    )
      return;
    if (
      !root ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const targets = Array.from(
      root.querySelectorAll<HTMLElement>(
        [
          "header:not(.switcher)",
          "section > *",
          "section article",
          ".trust > div",
          ".chips > span",
          ".poster-needs > button",
          "footer > *",
        ].join(","),
      ),
    ).filter((el, i, all) => all.indexOf(el) === i);

    targets.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = `${Math.min(i % 6, 5) * 70}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      targets.forEach((el) => {
        el.classList.remove("reveal", "is-visible");
        el.style.removeProperty("transition-delay");
      });
    };
  }, [style]);

  const photo = style.endsWith("-photo");
  const baseStyle = style.replace("-photo", "");
  const chooseConcept = (next: string) => {
    setStyle(next);
    setPage("home");
    const url = new URL(window.location.href);
    url.searchParams.set("concept", next);
    window.history.replaceState(null, "", url);
    window.scrollTo(0, 0);
  };
  if (["courtyard", "desk", "everyday", "house"].includes(baseStyle))
    return (
    <main ref={siteRef} className={`site ${baseStyle} ${shareMode ? "share-mode" : ""}`}>
        {!shareMode && <Switcher style={style} setStyle={chooseConcept} />}
        {!shareMode && <div className="new-review-tools">
          <button
            onClick={() => {
              setPage("selections");
              window.scrollTo(0, 0);
            }}
          >
            Photo selections
          </button>
        </div>}
        <NewConcepts
          key={baseStyle}
          design={baseStyle as "courtyard" | "desk" | "everyday" | "house"}
          page={page}
          onPage={setPage}
          services={serviceDetails}
          photos={allPhotoOptions}
          posts={blogPosts}
          reviews={allReviews}
          Photo={InlineGallery}
          selections={<SelectionPage setPage={setPage} />}
          photoTools={<PhotoSelectionTools />}
          awards={<AwardStrip />}
        />
      </main>
    );

  return (
    <main
      ref={siteRef}
      className={`site ${baseStyle} ${photo ? "with-photos" : ""}`}
    >
      <Switcher style={style} setStyle={chooseConcept} />
        <PrototypeNav page={page} setPage={setPage} />
        {page === "home" && !["webwell", "finder"].includes(baseStyle) && <AwardStrip />}
      {page !== "home" ? (
        <MockPages page={page} setPage={setPage} />
      ) : (
        <>
          {baseStyle === "cloud" ? (
            <>
              <SoftConcept variant="cloud" onPage={setPage} />
              <CompleteCareContent variant="cloud" onPage={setPage} />
            </>
          ) : baseStyle === "finder" ? (
            <>
              <AvantConcept variant="finder" onPage={setPage} />
              <CompleteCareContent variant="finder" onPage={setPage} />
            </>
          ) : ["path", "sunlit"].includes(baseStyle) ? (
            <SoftConcept
              variant={baseStyle as "path" | "sunlit"}
              onPage={setPage}
            />
          ) : ["journal", "signal"].includes(baseStyle) ? (
            <AvantConcept
              variant={baseStyle as "journal" | "signal"}
              onPage={setPage}
            />
          ) : baseStyle === "webwell" ? (
            <TemplateMock kind="webwell" photo={photo} onPage={setPage} />
          ) : (
            <Classic style={baseStyle} photo={photo} onPage={setPage} />
          )}
          <StrategyContent onPage={setPage} />
        </>
      )}
    </main>
  );
}
