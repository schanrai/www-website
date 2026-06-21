export interface SeniorBenefit {
  bold: string;
  text: string;
}

export interface SeniorFaq {
  q: string;
  a: string;
}

export const SENIORS = {
  meta: {
    title: 'Aqua Yoga for Seniors | Gentle Water Exercise | Broward & Miami',
    description:
      'Gentle aqua yoga and low impact pool-based exercise for seniors. Support mobility, balance, flexibility, and strength. Serving Broward & North Miami.',
    canonicalUrl: 'https://www.waterwomanwellness.com/seniors',
    ogImage: '/og-seniors.jpg',
  },

  hero: {
    headline: 'Gentle aquatics and pool exercises for seniors.',
    tagline: 'Healthy aging in the comfort of your pool.',
  },

  heroBody: {
    subheading: 'Stay strong, mobile and independent at any age with aqua yoga.',
    lead: 'Whatever your body has been through, the water meets you where you are. Aqua yoga is one of the most accessible and effective forms of gentle water exercise available to older adults \u2014 and it works precisely because water removes the barriers that land-based exercise cannot.',
    cta: 'Make an Enquiry',
  },

  whatIs: {
    label: 'What Is Aqua Yoga for Seniors?',
    paragraphs: [
      'If you\u2019ve been searching for pool exercises for seniors, water exercises for older adults, or aquatic exercise classes near you \u2014 aqua yoga is the answer you didn\u2019t know you were looking for.',
      'Unlike land-based yoga, aqua yoga takes place in chest-depth water where buoyancy becomes your support system. Poses that feel impossible or painful on land become accessible and comfortable in the water. Props like pool noodles and kickboards provide additional support, stability, and balance \u2014 allowing you to work at your own level regardless of your current fitness or mobility.',
      'No Silver Sneakers program. No water aerobics routine. Something more intentional, more therapeutic, and more effective for your specific body and health history.',
    ],
  },

  whyWater: {
    label: 'Why Water Works for Seniors',
    intro:
      'Water removes the barriers that land-based exercise cannot. Here is why aqua yoga is particularly well suited to older bodies:',
    benefits: [
      {
        bold: 'Joint load reduced by up to 80%',
        text: 'at chest depth, making movement comfortable even on your most difficult days',
      },
      {
        bold: 'No hard surfaces, no risk of falls',
        text: 'no bracing against gravity \u2014 just safe, supported movement from start to finish',
      },
      {
        bold: 'Builds strength, flexibility and balance',
        text: 'in a safe, supported environment that grows with you as your fitness improves',
      },
      {
        bold: 'Suitable for a wide range of conditions',
        text: 'including osteoarthritis, rheumatoid arthritis, osteoporosis, degenerative spine conditions, chronic venous insufficiency, Parkinson\u2019s disease, edema, and lymphedema',
      },
      {
        bold: 'Reduces fall risk',
        text: 'through balance training in a supported environment where falling is not a concern',
      },
      {
        bold: 'Ideal for post-surgical recovery',
        text: 'including post hip replacement and post knee replacement recovery',
      },
    ] satisfies SeniorBenefit[],
  },

  whatToExpect: {
    label: 'What to Expect',
    intro: 'As your strength, flexibility and confidence build, the practice builds with you.',
    faqs: [
      {
        q: 'What do classes look like?',
        a: 'Small group classes and one-on-one private sessions, tailored to your body and your health history.',
      },
      {
        q: 'Do I need yoga experience?',
        a: 'None at all. Every session is designed to meet you exactly where you are.',
      },
      {
        q: 'Do I need to be able to swim?',
        a: 'No swimming ability is required. Classes are held in waist or chest-depth water \u2014 you will never be asked to go underwater.',
      },
      {
        q: 'How long are the sessions?',
        a: 'Group classes run for approximately 60 minutes. Private sessions can be tailored to your needs and schedule.',
      },
      {
        q: 'Where do classes take place?',
        a: 'Sessions can take place either at my pool in Hollywood, Broward, or at your own or your facility\u2019s pool.',
      },
      {
        q: 'I have trouble getting up and down from the floor \u2014 is this suitable for me?',
        a: 'Absolutely. This is one of the most common barriers older adults face with traditional yoga \u2014 and it\u2019s exactly what aqua yoga solves. There is no mat, no floor, and no getting up and down. The entire practice takes place standing or supported in the water, so pressure on your wrists, knees, and spine is removed entirely.',
      },
      {
        q: 'How is aqua yoga different from water aerobics?',
        a: 'Water aerobics is a cardio workout. Aqua yoga integrates the therapeutic principles of yoga \u2014 breathwork, mindful movement, and body awareness \u2014 with the physical benefits of water-based exercise. The result builds genuine strength, flexibility, and balance in a way that a generic pool workout simply doesn\u2019t.',
      },
    ] satisfies SeniorFaq[],
    location:
      'Serving all areas in and between Hollywood, Fort Lauderdale, Pembroke Pines, Aventura, Sunny Isles and North Miami.',
    launch: 'Classes begin September 1st, 2026.',
    cta: 'Make an Enquiry',
  },

  meetSushi: {
    label: 'Meet Your Instructor',
    intro:
      'Sushi Chanrai is a certified RYT-200 yoga instructor and certified Aqua Yoga therapist. She created Water Woman Wellness for women who are ready to move again \u2014 but need a more gentle, smarter way in.',
    linkText: 'Read Sushi\u2019s full story \u2192',
    linkHref: '/#about',
  },

  ctaBand: {
    title: 'Ready to redefine what healthy aging looks like?',
    body: 'Classes begin September 1st 2026. Express your interest and we\u2019ll be in touch.',
    cta: 'Make an Enquiry',
  },
} as const;
