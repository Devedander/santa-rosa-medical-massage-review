'use client';
import { legacyPosts as blogPosts } from './legacy-posts';
import { familiarHref, publicAsset } from './familiar-routes';
import FamiliarSite from './familiar-site';
import { squareServices } from './square-services';

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
const initialPhotoOptions = [...galleryImages];
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
  'house-referral-care': '/mockup-photos/google-gallery-8.jpg',
  'house-treatment-7': '/mockup-photos/yelp-detail-4.jpg',
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

const allPhotoOptions = Array.from(
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
const assetPath = publicAsset;
function InlineGallery({
  images,
  className = '',
  alt,
  slot = 'photo',
  imageHref,
  onImageClick,
  imageClickLabel,
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
function AwardStrip() {
  return (
    <section className="award-strip" aria-label="Practice recognition">
      <span>Recognized for massage therapy in Santa Rosa</span>
      <div>
        <img
          src="/award-businessrate.png"
          alt="BusinessRate Best of 2026 Award Winner, Massage Therapist"
        />
        <img
          src="/award-recognition.png"
          alt="BusinessRate Best of 2025 Massage Therapist recognition"
        />
      </div>
    </section>
  );
}

export default function FamiliarPage({ page = 'home' }: { page?: string }) {
  const navigate = (target: string) => { window.location.assign(familiarHref(target)); };
  return (
    <main className="site house">
      <FamiliarSite
        page={page}
        onPage={navigate}
        services={serviceDetails}
        photos={allPhotoOptions}
        galleryPhotos={galleryPhotoOptions}
        posts={blogPosts}
        reviews={allReviews}
        Photo={InlineGallery}
        awards={<AwardStrip />}
      />
    </main>
  );
}
