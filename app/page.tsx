'use client';
import { useEffect, useState } from 'react';
import FamiliarSite from './familiar-site';
import { squareServices } from './square-services';

const serviceImages = [
  '/mockup-photos/yelp-treatment.jpg',
  '/mockup-photos/therapy-hands.jpg',
  '/mockup-photos/therapy-room.jpg',
  '/mockup-photos/yelp-detail-4.jpg',
  '/mockup-photos/yelp-treatment.jpg',
  '/mockup-photos/therapy-hands.jpg',
  '/mockup-photos/therapy-room.jpg',
  '/mockup-photos/yelp-detail-4.jpg',
];
const serviceDetails = squareServices.map((service) => [
  service.name,
  service.summary,
  service.description,
]);
const googleReviews = [
  ['Annie Zaks', '“I think I found the one.”', '7 months ago'],
  ['Anne Allman', '“Absolutely top notch… Highly recommend!”', '5 months ago'],
  ['Isis Howard', '“They work magic.”', 'Edited a month ago'],
  [
    'Danyale Hambly-Jones',
    '“Hands down the best medical massage I’ve ever had.”',
    '8 months ago',
  ],
  [
    'Lauren Gantz',
    '“So professional, knowledgeable and skilled.”',
    'A month ago',
  ],
  ['Commontater', '“It was so great and so helpful.”', '4 months ago'],
  [
    'Mindy Kilgore',
    '“I always walk out feeling rejuvenated with much less pain.”',
    '6 months ago',
  ],
  [
    'Vanessa Kettler',
    '“They are thorough and are safe and reliable.”',
    '9 months ago',
  ],
  ['Jenai Otis', '“The staff and space is amazing!”', '8 months ago'],
  [
    'Kim Stocker',
    'Five-star Google rating · written review available on Google.',
    'A year ago',
  ],
  ['J Scott', 'Five-star Google rating.', '10 months ago'],
  ['Pat Lang', 'Five-star Google rating.', 'Edited 11 months ago'],
  ['Lisa Chiaretta', 'Five-star Google rating.', '10 months ago'],
  ['Pat Ciston', 'Five-star Google rating.', '9 months ago'],
  ['Jerry Stocker', 'Five-star Google rating.', '11 months ago'],
  ['traci elledge', 'Five-star Google rating.', '8 months ago'],
  ['Becca BradyLong', 'Five-star Google rating.', '11 months ago'],
  ['Terry Behrens', 'Five-star Google rating.', 'A year ago'],
  ['Accounts Payable', 'Five-star Google rating.', 'A year ago'],
  ['jeff wolcott', 'Five-star Google rating.', 'A year ago'],
];
const yelpReviews = [
  [
    'Susan D.',
    '“I immediately made another appointment… in 75 minutes, I received more attention, expertise, therapeutic intervention and relief than I’d had in years.”',
    'Yelp',
  ],
  [
    'Ellen K.',
    '“I was not making post-surgery progress with shoulder range of motion, and Mariah saved me. I have had trigger point massage regularly to get functional again.”',
    'Yelp',
  ],
  [
    'Tom S.',
    '“I went in with a rotator cuff concern and she did an excellent job. I’ll have to go back—massage does not always fix everything in one sitting.”',
    'Yelp',
  ],
  [
    'Adrienne S.',
    '“They really listen to my needs and address those issues during treatment. They also give helpful tips and stretches to take home.”',
    'Yelp',
  ],
  [
    'Jackie C.',
    '“I have chronic back pain and a hard time finding relief. My appointment was so helpful, and they gave me good recommendations for aftercare.”',
    'Yelp',
  ],
];
// Spread Yelp voices through the rotation so each set of five feels like a
// genuine cross-section of the public feedback, rather than two separate lists.
const writtenGoogleReviews = googleReviews.filter(([, quote]) =>
  quote.startsWith('“'),
);
const allReviews = writtenGoogleReviews.reduce<string[][]>(
  (mixed, [name, quote], index) => {
    mixed.push([name, quote, 'Google']);
    const yelpIndex = Math.floor(
      (index * yelpReviews.length) / writtenGoogleReviews.length,
    );
    const shouldInsertYelp =
      Math.floor(
        ((index + 1) * yelpReviews.length) / writtenGoogleReviews.length,
      ) > yelpIndex;
    if (shouldInsertYelp && yelpIndex < yelpReviews.length) {
      mixed.push(yelpReviews[yelpIndex]);
    }
    return mixed;
  },
  [],
);
const blogPosts = [
  [
    'testimonials',
    'Considering Trigger Point Therapy? Here’s What Our Customers Say…',
    'Client experiences',
    'A client describes how a third visit became an extraordinary experience.',
    'https://santarosamedicalmassage.com/testimonials/',
    '“Stacy is a wonderful massage therapist however on my third visit something extraordinary happened. She decided to work on my chest for the full hour using acupressure and trigger point therapy. When she was done, I swear I walked out a half inch taller and my shoulders were square. Prior to that visit my shoulders were rounded and my shoulders are still square after 2 weeks. It was truly a life changing visit. I would highly recommend Stacy as a massage therapist. She is very skilled and truly cares about her clients.” Ted\n\nI just have to thank you SO VERY much for the BEST massage of my life!!!! I feel like a new woman!! You were SO in tuned with me and my knots!! Every touch was filled with love! This is your TRUE calling Stacy. You have an intuitive nurturing GIFT and I feel so blessed to have found you!! My BODY & soul THANKS YOU.\n\nDenise Esposti Frye\n\nI highly recommend Stacy for a relaxing healing massage. Her massage treatment is as effective as someone who has been in the field for years. She obviously has a healing touch and a passion for this type of body work. I look forward to many more sessions with her in the years to come! Sheron B\n\nI had an excellent experience receiving a massage from Stacy. I had some pretty painful muscle tightness so I was in major need of exactly what she provided: fantastic release of those trigger points. The entire process was professional – her online booking system and email confirmation reminders were great. I was impressed with her massage room, so many posters and resources with details about the body, stretches, sports specific references. But her hands told the real story. She has great hands!! And she has a lovely style – she asked the right questions and was very specific, showed great attention to detail in her treatment and analysis of my sore-ness, and was very kind during the at times uncomfortable moments when my muscles wanted to fight her work. Highly recommend and I will be back.\n\nLaurel E, Bigfork, MT 9/3/11\n\nStacy really knows her stuff. If there’s one thing I cannot tolerate, it’s paying money for a nambie-pambie massage. Yes, you can mention to the therapist to go deeper with more pressure, but a timid therapist does not a good massage make. This will not happen with Stacy, she listens to the client and is excellent at determining what a body needs. Chris O.\n\nStacy I just had to let you know how great I felt after the massage on Tuesday. I did NOT have a headache that night, as you thought I might, and feel a great deal of relief in my neck. You really got the right spot. Thank you. See you Tuesday. Matthew\n\nI had the great privilege to get a massage from Stacy, and what a wonderful experience it was. Stacy is professional, skilled and has great energy, I enthusiastically recommend her services. Jody S\n\nI have known Stacy for over 10 years. I knew her as a mortgage broker in her other life and watched her transition to a massage therapist. I had been meaning to get over and see her for a looong time and I think maybe I was shy since I knew her….. I am so glad I got over it because I had the best massage of my life. This is what she is meant to do and I am addicted. I just want to tell everyone. I am sending my wife to Stacy and I can’t wait to go back myself. Hans B Sebastopol\n\nStacy Desjardins is an awesome massage therapist. I know because I was lucky enough to be on the receiving end of her healing touch when she fulfilled an externship through my employer. Every week, Stacy created a soothing environment and skillfully relieved aches and tensions. Her demeanor and personality are well-suited to the work as well. She has an appealing nurturing vibe that set me at ease form the first-made me comfortable with her ability and trust her intuition. She never failed to find my stress points and ease them away. I miss her just thinking about it. I highly recommend Stacy as a massage therapist for her professionalism, personalist and talent. Alexandra Russell, NorthBay Biz magazine\n\nI’ve known Stacy for 30+ years and I’m SO HAPPY she’s chosen massage for a career. Example: I made an appointment after straining some muscles in my back, and not only did she work wonders on that, but she also (without me saying anything) discovered a stiffness in my neck and spent some extra time working on that, too. Both my back and neck are so much better thanks to her expertise and natural talents. She also came into my office on a weekly basis for a while and provided chair massage to myself and my coworkers. Everyone both anticipated and enjoyed that awesome office perk I’d highly recommend Stacy to anyone who wants a massage with real results and/or wants to show their employees how much they’re appreciated. Julie F Santa Rosa, CA 7/18/11\n\nWhy worry about your tensions, when Stacy has chosen massage as her work? An intelligent preening energy, methodical and graceful. People who choose people, are the most chosen people in the world’. On Stacy DesJardins’s table, the massage therapist owner of Hands2Go, my mind meandered, singing: People who choose people, are the most chosen people in the world. I’ve received Trigger Point massage treatments from Stacie for 5 months. I vouch for her healing touch.. The choice is yours. You’ll feel chosen. Laura L. (Yelp)',
  ],
  [
    'thai-foot-massage',
    'Thai Foot Massage',
    'Treatment guide',
    'A bodywork therapy for the mind, body, and soul, using focused work through the feet and lower legs.',
    'https://santarosamedicalmassage.com/thai-foot-massage/',
    'Thai Foot Massage is a body work therapy for the mind body and soul and involves reflexology using the foot. When pressure is applied to certain areas of the foot it stimulates another part of the body. Thai foot massage is an ancient reflexology technique that has made a comeback recently.\n\nThai foot reflexology is said to be a marriage between reflexology, Chinese Tuina, Japanese Shiatsu, and Indian Ayurvedi oga. Focusing on the feet, lower leg, and knees, it frees up blocked energy in the body’s Thai-based meridians to bring about deep relaxation, balance, and well-being.\n\nAlongside the acupressure and acupuncture theory it is believed that 7,200 sensory nerves exist within the foot which are connected to internal organs. Mapping out these connections on the foot is part of the therapists goal with each client. During a typical session the lower legs, and feet are stretched, opening Sen (energy). Then pressure points on the foot are stimulated. The pressure points connect to 10 major energy lines which run throughout the body. This careful stimulation of pressure points on the foot help the body restore its own natural balance.\n\n## Benefits of Thai Massage\n\nThe benefits of Thai Foot Massage are many. Besides restoring the body to its own natural balance other benefits include:\n\n- Improved circulation\n- Improved lymphatic drainage\n- Boosts the immune system\n- Reduces stiffness\n- Increases range of motion\n- Accelerates healing\n- Relieves stress\n- Improves sleep\n- Elevates mood\n- Improves concentration and clarity of mind\n- Creates feelings of tranquility, calmness, and well being',
    'blog-assets/thai-foot-massage.png',
  ],
  [
    'thai-massage',
    'Thai Massage',
    'Treatment guide',
    'An introduction to Thai bodywork, including Tok Sen and its cultural roots.',
    'https://santarosamedicalmassage.com/thai-massage/',
    '## Tok Sen\n\nNow if you’ve ever been to Thailand and had the opportunity to visit Chiang Mai in the North you may have felt a certain vibe on the street, a buzz…no not quite that more of a tap tap tap.\n\nIt’s the sound of the ancient Thai massage Tok Sen still practiced today after 500 years. It was originally prescribed by wives to the husbands after a hard days work in the fields. They would place the husband on the hard table and tap along the body with wooden sticks to ease their aching pains.\n\nThere is still very little known today about this body-work technique. There are no books or videos to use as a guide and it has to be taught orally. I was lucky enough to experience the treatment first hand in Thailand and fell in love with the practice as well as the history behind it. So much, that I decided to bring it back to Santa Rosa with me.\n\n## The Instruments\n\nThe Tok Sen is actually made from wood from a tamarind tree that has been struck by lightning. This is thought to remove the negative energy that we trap in our bodies. We use different sizes and shapes of hammer depending on body section.\n\n## The Mind\n\nThe rhythm of the taps is found to be quite hypnotizing. During a treatment you will find yourself following the tapping sound which will lead you to a meditative state. This will help you loosen your physical body even more making the massage more effective.\n\n## The Body\n\nTraditionally the massage is given fully clothed and tiger balm is used to massage into the skin. The Same energy lines / Sen Lines as general Thai massage are used to follow with the hammer. This creates a resonance that passes through the muscles and into the rest of the body. This resonance helps to dislodge long held and stubborn tension. By helping to release and relax the body a sense of well being and ease is felt, as a more natural flow of energy is re-established.\n\n## Benefits\n\n•Provides pain relief\n•Improves blood circulation\n•Removes energy blockages\n•Helps with sore tendons, pinched nerves and numbness',
    'blog-assets/thai-massage.jpg',
  ],
  [
    'massage-cupping',
    'Massage Cupping',
    'Treatment guide',
    'How suction-based massage cupping may be used as part of a bodywork session.',
    'https://santarosamedicalmassage.com/massage-cupping/',
    'Massage Cupping™ is a type of massage therapy that uses suction as a way to promote healing of the joints and muscles. Utilizing silicone or plastic cups with a vacuum pistol they are glided along the muscles while gently lifting and pulling up the skin. Using techniques like gliding, shaking, popping and rotating, this therapy promotes health and healing by loosening soft and connective tissue, increasing lymphatic flow and circulation and moving stagnation within the body like lactic acid where sore muscles reside. This suction based therapy has the ability to pull toxins and inflammation to the surface of the skin where elimination is made possible by the lymphatic system. The suction is able to reach deep into the soft tissue, attachments and organs where toxins generally reside making it an effective therapy for overall health and well being. Side effects of this therapy are generally mild but may include:\n\n- Post tenderness: usually less than experienced from deep tissue work\n\n- Redness and Itching: increased vaso-dilation and/or inflammation brought to the surface\n\n- Decreased Blood Pressure: due to vaso-dilation and/or nervous system sedation\n\nSome after care suggestions we recommend are:\n\n- As always, plenty of water should be consumed to eliminate the surface toxins brought to the skin surface.\n\n- Avoid showers, steam, sauna and exercise immediately following bodywork.\n\n- Light stretching and range of motion exercises are helpful\n\n- Exercise the next day will help increase circulation to aid in fading of cup kisses.\n\n## Contraindications\n\nPeople who are on blood thinners should avoid Massage Cupping™. If you start taking such medication please inform the therapist so your treatment plan can be adjusted. If you are under the care of an acupuncturist, massage cupping could potentially interfere with acupuncture treatments, and should be avoided.',
    'blog-assets/massage-cupping.jpg',
  ],
  [
    'fascia',
    'Fascia – What is it, and Where ISN’T it?',
    'Bodywork education',
    'A look at the connective tissue that runs throughout the body.',
    'https://santarosamedicalmassage.com/fascia-what-is-it-and-where-isnt-it/',
    'Like many roads and highways on a map, converging and connecting, in an attempt to cover the vast area of land from one end of the U.S. to the other, so too is a fiber in our bodies called Fascia. Often seen on chicken meat are the tough, white sometimes- clear fibers found when you pull raw chicken meat apart or away from the bone. Acting as a protective layer Fascia surrounds and runs thru every muscle, bone, nerve, organ, blood vessel, and cell connecting all of it together in some way.\n\nBecause of its expansiveness throughout our entire body, Fascia serves important functions including support, cushion and most importantly, provides space between vessels, bones, organs and muscles. These spaces allow fluids and nerves to pass between them.\n\n## What Does Fascia Consist of?\n\nFascia is made up of a 3-part complex.\n\n1. Elastin Fibers which make up the stretchy and elastic part of the complex\n2. Collagen Fibers are the tough and supportive part of the complex\n3. Ground substance/matrix: A Jell-O like substance that transfers metabolic material throughout the body.\n\n## Trauma to Fascial?\n\nWhen collagen fibers are healthy and unirritated they wrap around elastic fibers loosely, in a wavy pattern. The repetitive use of muscles or trauma of some kind to any part of our body can cause the Fascia to become hard and taut. This “tautness” is often felt in an area far from where the actual trauma to the muscle may have occurred. This chain like reaction is often the reason our pain in one area, is treated in another. Fascial restrictions propose challenges to finding the source of pain for individuals who suffer since the two areas may be very far apart and in seemingly unrelated locations to one another.\n\n## More Severe Effects of Fascial Restrictions\n\nFascial restrictions can apply an additional 2,000 pounds of pressure per square inch to any affected area of the body. In a healthy state, the collagen fibers wrap around the elastic fibers in a relaxed, wavy pattern. This pulling or tightness from Fascial restrictions pull the body out of alignment, compressing joint surfaces and bulging disks resulting in pain, loss of motion, and weakness.',
  ],
  [
    'sports-massage',
    'Sports Massage',
    'Treatment guide',
    'A discussion of massage for active people and the wear that sport can place on the body.',
    'https://santarosamedicalmassage.com/sports-massage/',
    'Sports Massage is a type of massage designed for highly active people who engage in athletics. Engaging in sports is harsh on the body and can often lead to injuries in both the short and long term. Sports Massage enhances performance and prolongs a sports career by helping to prevent injury, reduce pain and swelling in the body, relax the mind, increase flexibility, and dramatically improve recovery rates. Sports Massage is also highly effective in aiding the rapid recovery of an athlete from an injury by encouraging greater kinesthetic awareness and in turn promoting the body’s natural immune function.',
    'blog-assets/sports-massage.jpg',
  ],
  [
    'lymphatic-facilitation',
    'Lymphatic Facilitation Therapy',
    'Treatment guide',
    'An overview of gentle, rhythmic work intended to support lymph movement.',
    'https://santarosamedicalmassage.com/lymphatic-facilitation-therapy/',
    'This type of massage aims to gently and rhythmically move the lymph through the body, especially swollen areas of the body, relieving pressure and enhancing the functioning of the immune system …As both a preventative and remedial technique, Lymphatic Facilitation can be used for a wide range of purposes including faster recovery from injury, reduction of swelling and discomfort from pregnancy, and strengthened resistance to illness.',
    'blog-assets/lymphatic-facilitation.png',
  ],
  [
    'trigger-point-therapy',
    'Trigger Point Therapy',
    'Treatment guide',
    'Focused bodywork for sensitive muscle points that may refer pain elsewhere in the body.',
    'https://santarosamedicalmassage.com/trigger-point-therapy/',
    'An AMAZING style of bodywork that focuses on stimulating and releasing “trigger points” in your body. Trigger points are hyper-irritable muscle tissue that refer pain. These ‘knots’ are built up throughout a person’s life due to physical, mental, and/or emotional stress. During a session, focused pressure is applied through a variety of techniques in order to release your trigger points. This process can be quite painful at times, yet the effects are lasting and profoundly transformative.\n\nChoose this advanced therapeutic massage if you are visiting us primarily to treat a medical conditions such as…\n\n- You woke up this morning with a sore neck you need treated\n- You suffer from any type of chronic pain condition\n- You hurt your back cleaning the garage\n- Your shoulder is sore from golf over the weekend\n- Your low back pain is flaring up\n- Your knee hurts after a busy day yesterday\n- Your back generally hurts and needs treatment\n- Your leg hurts from cycling, running or golfing\n- You want a relaxation massage combined with specific treatment for an issue such as listed above\n\nRead what our customers say about our therapies',
    'blog-assets/trigger-point-therapy.png',
  ],
  [
    'deep-tissue-massage',
    'Deep Tissue Massage',
    'Treatment guide',
    'An introduction to working with chronic stress and tension in deeper layers of tissue.',
    'https://santarosamedicalmassage.com/deep-tissue-massage/',
    'This modality is a form of bodywork that aims to relieve tension in the deeper layers of tissue in the body. Deep Tissue Massage is a highly effective method for releasing chronic stress areas due to misalignment, repetitive motions, and past lingering injuries. Due to the nature of the deep tissue work, open communication during the session is crucial to make sure you don’t get too uncomfortable. Keep in mind that soreness is pretty common after the treatment, and that plenty of water should be ingested to aid with the flushing and removal of toxins that will have been released from the deep tissue during the session.',
    'blog-assets/deep-tissue-massage.jpg',
  ],
  [
    'treated-dysfunctions',
    'Treated Dysfunctions',
    'Care information',
    'An overview of conditions and concerns that may be discussed when considering massage therapy.',
    'https://santarosamedicalmassage.com/treated-dysfunctions/',
    'Even if you have tried chiropractic treatments, physical therapy, or even massage therapy in the past, there may be another way to approach your pain.\n\n## Ailments We Treat\n\n- Headaches/Migraines\n- Low Back Pain Neck Tension/Pain/Stiffness\n- Shoulder Impingement Stress\n- Hip Pain\n- TMJ Pain\n- Leg Cramps\n- Auto Injuries – Whiplash Associated Disorder (WAD)\n- Sciatica and Piriformis Syndrome\n- Rotator Cuff Injuries\n- Tingling in Hands\n- Carpal Tunnel Syndrome\n- Reduced Range of Motion\n- Postural Imbalances\n- Recovery after Surgery\n- Chronic Pain in any area\n- Lymphedema\n- Joint Aches\n- Fibromyalgia Pain\n- Plantar Fasciitis\n- Pain associated with bulged or injured spinal discs\n- Tendonitis\n- Constipation\n- Breast Pain\n- Repetitive use injuries such as Tennis Elbow or Golfers Elbow\n- and Much more…\n\nWe are confident that we can help relieve your tension and pain, assist your body’s own healing process and get you back to feeling like you should. Our goal is to devise a plan of massage therapy treatment that will provide the quickest relief with results that are long lasting.',
    'blog-assets/treated-dysfunctions.jpg',
  ],
  [
    'medical-massage',
    'Medical Massage',
    'Care information',
    'How medical massage differs from general bodywork when care is directed toward a diagnosed condition.',
    'https://santarosamedicalmassage.com/medical-massage/',
    'Medical massage therapy is designed to specifically target medical conditions that are diagnosed by a doctor. During your treatment your therapist will use different massage techniques and procedures.',
    'blog-assets/medical-massage.png',
  ],
];
const googleGalleryLabels = [
  'Remodeled Santa Rosa waiting room',
  'Updated practice signage',
  'Trigger point therapy detail',
  'Practice interior',
  'Treatment space',
  'Care detail',
  'Reception and waiting space',
  'Santa Rosa practice exterior',
  'Branded practice detail',
  'Treatment room',
  'Remodeled space',
];
const galleryImages = [
  ...[
    3, 4, 5, 6, 7, 8, 12, 13, 17, 18, 19, 20, 22, 23, 24, 29, 30, 32, 33, 34,
    35, 36, 37,
  ].map((i) => [
    `/mockup-photos/google-gallery-${i}.jpg`,
    `${googleGalleryLabels[i] || 'Inside Santa Rosa Medical Massage'} · Google business photo`,
  ]),
  [
    '/mockup-photos/yelp-treatment.jpg',
    'Hands-on treatment · Yelp business photo',
  ],
  ['/mockup-photos/yelp-gift.jpg', 'Gift cards · Yelp business photo'],
  [
    '/mockup-photos/yelp-active10.jpg',
    'Light-blue recovery products · Yelp business photo',
  ],
];
const treatmentPhotoOptions = serviceImages.map((src, i) => [
  src,
  `Hands-on massage treatment option ${i + 1}`,
]);
const remainingApprovedPhotos = [
  [
    '/mockup-photos/business-listing.jpg',
    'Santa Rosa Medical Massage — business listing',
  ],
  ['/blog-assets/sports-massage.jpg', 'Sports Massage treatment photo'],
  [
    '/mockup-photos/google-gallery-12.jpg',
    'Santa Rosa Medical Massage — google gallery 12',
  ],
  [
    '/mockup-photos/google-gallery-13.jpg',
    'Santa Rosa Medical Massage — google gallery 13',
  ],
  [
    '/mockup-photos/google-gallery-17.jpg',
    'Santa Rosa Medical Massage — google gallery 17',
  ],
  [
    '/mockup-photos/google-gallery-18.jpg',
    'Santa Rosa Medical Massage — google gallery 18',
  ],
  [
    '/mockup-photos/google-gallery-19.jpg',
    'Santa Rosa Medical Massage — google gallery 19',
  ],
  [
    '/mockup-photos/google-gallery-20.jpg',
    'Santa Rosa Medical Massage — google gallery 20',
  ],
  [
    '/mockup-photos/google-gallery-22.jpg',
    'Santa Rosa Medical Massage — google gallery 22',
  ],
  [
    '/mockup-photos/google-gallery-23.jpg',
    'Santa Rosa Medical Massage — google gallery 23',
  ],
  [
    '/mockup-photos/google-gallery-24.jpg',
    'Santa Rosa Medical Massage — google gallery 24',
  ],
  [
    '/mockup-photos/google-gallery-29.jpg',
    'Santa Rosa Medical Massage — google gallery 29',
  ],
  [
    '/mockup-photos/google-gallery-3.jpg',
    'Santa Rosa Medical Massage — google gallery 3',
  ],
  [
    '/mockup-photos/google-gallery-30.jpg',
    'Santa Rosa Medical Massage — google gallery 30',
  ],
  [
    '/mockup-photos/google-gallery-32.jpg',
    'Santa Rosa Medical Massage — google gallery 32',
  ],
  [
    '/mockup-photos/google-gallery-33.jpg',
    'Santa Rosa Medical Massage — google gallery 33',
  ],
  [
    '/mockup-photos/google-gallery-34.jpg',
    'Santa Rosa Medical Massage — google gallery 34',
  ],
  [
    '/mockup-photos/google-gallery-35.jpg',
    'Santa Rosa Medical Massage — google gallery 35',
  ],
  [
    '/mockup-photos/google-gallery-36.jpg',
    'Santa Rosa Medical Massage — google gallery 36',
  ],
  [
    '/mockup-photos/google-gallery-37.jpg',
    'Santa Rosa Medical Massage — google gallery 37',
  ],
  [
    '/mockup-photos/google-gallery-4.jpg',
    'Santa Rosa Medical Massage — google gallery 4',
  ],
  [
    '/mockup-photos/google-gallery-5.jpg',
    'Santa Rosa Medical Massage — google gallery 5',
  ],
  [
    '/mockup-photos/google-gallery-6.jpg',
    'Santa Rosa Medical Massage — google gallery 6',
  ],
  [
    '/mockup-photos/google-gallery-7.jpg',
    'Santa Rosa Medical Massage — google gallery 7',
  ],
  [
    '/mockup-photos/google-gallery-8.jpg',
    'Santa Rosa Medical Massage — google gallery 8',
  ],
  [
    '/mockup-photos/google-remodel-room.jpg',
    'Santa Rosa Medical Massage — google remodel room',
  ],
  [
    '/mockup-photos/therapy-hands.jpg',
    'Santa Rosa Medical Massage — therapy hands',
  ],
  [
    '/mockup-photos/therapy-room.jpg',
    'Santa Rosa Medical Massage — therapy room',
  ],
  [
    '/mockup-photos/yelp-active10.jpg',
    'Santa Rosa Medical Massage — yelp active10',
  ],
  [
    '/mockup-photos/yelp-detail-1.jpg',
    'Santa Rosa Medical Massage — yelp detail 1',
  ],
  [
    '/mockup-photos/yelp-detail-2.jpg',
    'Santa Rosa Medical Massage — yelp detail 2',
  ],
  [
    '/mockup-photos/yelp-detail-4.jpg',
    'Santa Rosa Medical Massage — yelp detail 4',
  ],
  ['/mockup-photos/yelp-gift.jpg', 'Santa Rosa Medical Massage — yelp gift'],
  [
    '/mockup-photos/yelp-services.jpg',
    'Santa Rosa Medical Massage — yelp services',
  ],
  [
    '/mockup-photos/yelp-storefront.jpg',
    'Santa Rosa Medical Massage — yelp storefront',
  ],
  [
    '/mockup-photos/yelp-treatment.jpg',
    'Santa Rosa Medical Massage — yelp treatment',
  ],
];
const newPracticePhotoFiles = [
  'assisted-stretching-01.jpeg',
  'assisted-stretching-02.jpeg',
  'assisted-stretching-03.jpeg',
  'assisted-stretching-04.jpeg',
  'assisted-stretching-05.jpeg',
  'assisted-stretching-06.jpeg',
  'assisted-stretching-07.jpeg',
  'assisted-stretching-08.jpeg',
  'assisted-stretching-09.jpeg',
  'assisted-stretching-10.jpeg',
  'assisted-stretching-11.jpeg',
  'assisted-stretching-12.jpeg',
  'assisted-stretching-13.jpeg',
  'assisted-stretching-14.jpeg',
  'assisted-stretching-15.jpeg',
  'assisted-stretching-16.jpeg',
  'client-lounge-black.jpeg',
  'client-lounge-blue.jpeg',
  'client-lounge-burgundy.jpeg',
  'client-lounge-green.jpeg',
  'client-lounge-orange.jpeg',
  'client-lounge-stripe.jpeg',
  'staff-portrait-01.jpeg',
  'staff-portrait-02.jpeg',
  'staff-portrait-03.jpeg',
  'staff-portrait-04.jpeg',
  'staff-portrait-05.jpeg',
  'staff-portrait-06.jpeg',
  'staff-portrait-07.jpeg',
  'staff-portrait-08.jpeg',
  'staff-portrait-09.jpeg',
  'team-group-lounge-portrait.jpeg',
  'team-group-lounge-red-wall.jpeg',
  'team-group-treatment-room-01.jpeg',
  'team-group-treatment-room-02.jpeg',
  'team-group-treatment-room-03.jpeg',
  'team-group-treatment-room-04.jpeg',
  'team-group-treatment-room-05-portrait.jpeg',
  'team-group-treatment-room-06-portrait.jpeg',
  'team-group-treatment-room-07.jpeg',
  'team-group-treatment-room-08.jpeg',
  'treatment-arm-work-01.jpeg',
  'treatment-back-work-01.jpeg',
  'treatment-back-work-02.jpeg',
  'treatment-back-work-03.jpeg',
  'treatment-back-work-04.jpeg',
  'treatment-back-work-05.jpeg',
  'treatment-back-work-06.jpeg',
  'treatment-hand-work-01.jpeg',
  'treatment-hand-work-02.jpeg',
  'treatment-hand-work-03.jpeg',
  'treatment-shoulder-work-01.jpeg',
  'treatment-shoulder-work-02.jpeg',
  'treatment-shoulder-work-03.jpeg',
  'treatment-shoulder-work-04.jpeg',
  'treatment-table-bodywork-01.jpeg',
  'treatment-table-bodywork-02.jpeg',
  'treatment-new-assisted-leg-01.jpeg',
  'treatment-new-bodywork-01.jpeg',
  'treatment-new-back-work-01.jpeg',
  'treatment-new-assisted-stretching-01.jpeg',
  'treatment-new-leg-work-01.jpeg',
];
const newPracticePhotoOptions = newPracticePhotoFiles.map((file) => [
  `/site-photo-intake/${file}`,
  `Santa Rosa Medical Massage — ${file
    .replace(/\.jpeg$/, '')
    .replaceAll('-', ' ')}`,
]);
const initialPhotoOptions = [
  ...galleryImages,
  ...treatmentPhotoOptions.filter(
    ([src]) => !galleryImages.some(([gallerySrc]) => gallerySrc === src),
  ),
];
// Stacy's definitive Visit & gallery allowlist. Other page imagery continues
// to use allPhotoOptions, so this only controls the public gallery pool.
const galleryPhotoFilenames = new Set([
  'google-gallery-3.jpg',
  'google-gallery-4.jpg',
  'google-gallery-5.jpg',
  'google-gallery-6.jpg',
  'google-gallery-7.jpg',
  'google-gallery-8.jpg',
  'google-gallery-12.jpg',
  'google-gallery-13.jpg',
  'google-gallery-17.jpg',
  'google-gallery-19.jpg',
  'google-gallery-20.jpg',
  'google-gallery-22.jpg',
  'google-gallery-23.jpg',
  'google-gallery-24.jpg',
  'google-gallery-29.jpg',
  'google-gallery-30.jpg',
  'google-gallery-32.jpg',
  'google-gallery-33.jpg',
  'yelp-gift.jpg',
  'therapy-room.jpg',
  'yelp-detail-4.jpg',
  'google-remodel-room.jpg',
  'yelp-detail-1.jpg',
  'assisted-stretching-01.jpeg',
  'assisted-stretching-02.jpeg',
  'assisted-stretching-03.jpeg',
  'assisted-stretching-04.jpeg',
  'assisted-stretching-05.jpeg',
  'assisted-stretching-06.jpeg',
  'assisted-stretching-07.jpeg',
  'assisted-stretching-09.jpeg',
  'assisted-stretching-13.jpeg',
  'assisted-stretching-14.jpeg',
  'assisted-stretching-15.jpeg',
  'treatment-arm-work-01.jpeg',
  'treatment-back-work-01.jpeg',
  'treatment-back-work-02.jpeg',
  'treatment-back-work-03.jpeg',
  'treatment-back-work-04.jpeg',
  'treatment-back-work-05.jpeg',
  'treatment-hand-work-01.jpeg',
  'treatment-hand-work-02.jpeg',
  'treatment-hand-work-03.jpeg',
  'treatment-shoulder-work-02.jpeg',
  'treatment-shoulder-work-03.jpeg',
  'treatment-table-bodywork-01.jpeg',
  'treatment-table-bodywork-02.jpeg',
  'treatment-new-assisted-leg-01.jpeg',
  'treatment-new-bodywork-01.jpeg',
  'treatment-new-back-work-01.jpeg',
  'treatment-new-assisted-stretching-01.jpeg',
  'treatment-new-leg-work-01.jpeg',
]);

// Final photo assignments. These are static defaults for their assigned slots;
// they are not part of the selectable gallery pool.
const approvedPhotoSelections: Record<string, string> = {
  'desk-treatments-overview': '/mockup-photos/therapy-hands.jpg',
  'house-referral-care': '/mockup-photos/google-gallery-8.jpg',
  'house-treatment-7': '/mockup-photos/yelp-detail-4.jpg',
  'desk-opening': '/mockup-photos/google-remodel-room.jpg',
  'house-welcome': '/mockup-photos/google-gallery-3.jpg',
  'house-practice-story': '/mockup-photos/google-remodel-room.jpg',
  'house-treatment-10': '/mockup-photos/google-gallery-19.jpg',
  'house-treatment-8': '/site-photo-intake/treatment-new-back-work-01.jpeg',
  'house-treatment-4': '/site-photo-intake/treatment-back-work-02.jpeg',
  'house-treatment-2': '/site-photo-intake/treatment-new-bodywork-01.jpeg',
  'house-treatment-0': '/site-photo-intake/treatment-table-bodywork-01.jpeg',
  'house-treatment-1': '/site-photo-intake/treatment-new-leg-work-01.jpeg',
  'house-treatment-6': '/site-photo-intake/treatment-hand-work-03.jpeg',
  'house-treatment-9': '/mockup-photos/google-gallery-19.jpg',
  'house-treatment-5': '/site-photo-intake/treatment-hand-work-01.jpeg',
  'house-treatment-3': '/site-photo-intake/treatment-shoulder-work-03.jpeg',
};

export const allPhotoOptions = Array.from(
  new Map(
    [
      ...initialPhotoOptions,
      ...remainingApprovedPhotos,
      ...newPracticePhotoOptions,
    ].map((photo) => [photo[0], photo]),
  ).values(),
);
const galleryPhotoOptions = allPhotoOptions.filter(([src]) =>
  galleryPhotoFilenames.has(src.split('/').pop() || src),
);
const assetPath = (src: string) => (src.startsWith('/') ? `.${src}` : src);
function InlineGallery({
  images,
  className = '',
  alt,
  slot = 'photo',
  imageHref,
  onImageClick,
  imageClickLabel,
  hideControls = false,
}: {
  images: string[][];
  className?: string;
  alt?: string;
  slot?: string;
  imageHref?: string;
  onImageClick?: () => void;
  imageClickLabel?: string;
  hideControls?: boolean;
}) {
  const staticSource = approvedPhotoSelections[slot];
  const staticLabel =
    images.find(([src]) => src === staticSource)?.[1] ||
    'Final Santa Rosa Medical Massage photo';
  const [src, label] = staticSource ? [staticSource, staticLabel] : images[0];
  const isNovelPhoto = className.split(/\s+/).includes('n-photo');
  return (
    <div className={`inline-gallery ${className}`}>
      {isNovelPhoto ? (
        imageHref ? (
          <a
            className="n-photo-image"
            href={imageHref}
            aria-label={imageClickLabel}
            onClick={(event) => {
              if (onImageClick && window.location.hostname === 'localhost') {
                event.preventDefault();
                onImageClick();
              }
            }}
          >
            <img src={assetPath(src)} alt={alt || label} />
          </a>
        ) : (
          <span
            className="n-photo-image"
            onClick={onImageClick}
            role={onImageClick ? 'link' : undefined}
            tabIndex={onImageClick ? 0 : undefined}
            aria-label={imageClickLabel}
            onKeyDown={(event) => {
              if (
                onImageClick &&
                (event.key === 'Enter' || event.key === ' ')
              ) {
                event.preventDefault();
                onImageClick();
              }
            }}
          >
            <img src={assetPath(src)} alt={alt || label} />
          </span>
        )
      ) : (
        <img src={assetPath(src)} alt={alt || label} />
      )}
    </div>
  );
}
function SelectionPage({ setPage }: { setPage: (page: string) => void }) {
  const [choices, setChoices] = useState<
    Array<{ slot: string; src: string; label: string }>
  >([]);
  const [notice, setNotice] = useState('');
  const refresh = () =>
    setChoices(
      Object.keys(window.localStorage)
        .filter((key) => key.startsWith('srmm-photo-'))
        .map((key) => JSON.parse(window.localStorage.getItem(key) || '{}'))
        .filter((choice) => choice.slot),
    );
  useEffect(() => {
    refresh();
    window.addEventListener('srmm-photo-selection', refresh);
    return () => window.removeEventListener('srmm-photo-selection', refresh);
  }, []);
  const copy = async () => {
    const text = choices.length
      ? `Santa Rosa Medical Massage photo selections\n\n${choices.map((choice) => `${choice.slot}: ${choice.src.split('/').pop()}`).join('\n')}`
      : 'No photo choices have been locked yet.';
    await navigator.clipboard.writeText(text);
    setNotice('Selections copied — paste them into an email or message.');
  };
  const share = async () => {
    const payload = btoa(encodeURIComponent(JSON.stringify(choices)));
    await navigator.clipboard.writeText(
      `${window.location.origin}${window.location.pathname}${window.location.search}#choices=${payload}`,
    );
    setNotice(
      'Review link copied — anyone opening it will see the locked photos.',
    );
  };
  const clear = () => {
    Object.keys(window.localStorage)
      .filter((key) => key.startsWith('srmm-photo-'))
      .forEach((key) => window.localStorage.removeItem(key));
    const url = new URL(window.location.href);
    url.hash = '';
    window.history.replaceState(null, '', url);
    window.dispatchEvent(new Event('srmm-photo-clear'));
    refresh();
    setNotice('Selections cleared.');
  };
  return (
    <section className="mock-page selections-page">
      <button className="back-link" onClick={() => setPage('home')}>
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
              <img src={assetPath(choice.src)} alt="Selected option" />
              <div>
                <b>{choice.slot.replaceAll('-', ' ')}</b>
                <span>{choice.src.split('/').pop()}</span>
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
  const [notice, setNotice] = useState('');
  const refresh = () =>
    setCount(
      Object.keys(window.localStorage).filter((key) =>
        key.startsWith('srmm-photo-'),
      ).length,
    );
  useEffect(() => {
    refresh();
    window.addEventListener('srmm-photo-selection', refresh);
    window.addEventListener('srmm-photo-clear', refresh);
    return () => {
      window.removeEventListener('srmm-photo-selection', refresh);
      window.removeEventListener('srmm-photo-clear', refresh);
    };
  }, []);
  const clear = () => {
    Object.keys(window.localStorage)
      .filter((key) => key.startsWith('srmm-photo-'))
      .forEach((key) => window.localStorage.removeItem(key));
    window.dispatchEvent(new Event('srmm-photo-clear'));
    setNotice('Photo selections cleared.');
  };
  const copyReviewLink = async () => {
    const choices = Object.keys(window.localStorage)
      .filter((key) => key.startsWith('srmm-photo-'))
      .map((key) => JSON.parse(window.localStorage.getItem(key) || '{}'))
      .filter((choice) => choice.slot);
    const payload = btoa(encodeURIComponent(JSON.stringify(choices)));
    await navigator.clipboard.writeText(
      `${window.location.origin}${window.location.pathname}${window.location.search}#choices=${payload}`,
    );
    setNotice(
      choices.length
        ? 'Review link copied with the locked photos.'
        : 'Review link copied. Lock photos first to include them.',
    );
  };
  return (
    <div className="n-photo-selection-tools" aria-label="Photo selection tools">
      <div>
        <strong>Photo selections</strong>
        <span>
          {count
            ? `${count} photo${count === 1 ? '' : 's'} locked`
            : 'Lock a photo from any gallery'}
        </span>
      </div>
      <div>
        <button onClick={copyReviewLink}>Copy review link</button>
        <button onClick={clear} disabled={!count}>
          Clear all
        </button>
      </div>
      {notice && (
        <p className="n-photo-tools-notice" role="status">
          {notice}
        </p>
      )}
    </div>
  );
}
function AwardStrip() {
  return (
    <section className="award-strip" aria-label="Practice recognition">
      <span>Recognized for massage therapy in Santa Rosa</span>
      <div>
        <img
          src="./award-businessrate.png"
          alt="BusinessRate Best of 2026 Award Winner, Massage Therapist"
        />
        <img
          src="./award-recognition.png"
          alt="BusinessRate Best of 2025 Massage Therapist recognition"
        />
      </div>
    </section>
  );
}

export default function Home() {
  const [page, setPage] = useState('home');
  const [shareMode, setShareMode] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('share') === 'familiar')
      setShareMode(true);
  }, []);

  return (
    <main className={`site house ${shareMode ? 'share-mode' : ''}`}>
      <FamiliarSite
        design="house"
        page={page}
        onPage={setPage}
        services={serviceDetails}
        photos={allPhotoOptions}
        galleryPhotos={galleryPhotoOptions}
        posts={blogPosts}
        reviews={allReviews}
        Photo={InlineGallery}
        selections={<SelectionPage setPage={setPage} />}
        photoTools={<PhotoSelectionTools />}
        awards={<AwardStrip />}
      />
    </main>
  );
}
