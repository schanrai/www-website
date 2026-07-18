// All copy extracted from design_handoff_homepage/www-shared.jsx CONTENT object.
// This file is the single source of truth for all homepage copy.

export interface Benefit {
  bold: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const CONTENT = {
  meta: {
    title: 'Therapeutic Aqua Yoga for Women | Broward & North Miami',
    description:
      'Therapeutic aqua yoga for women navigating chronic pain, menopause and healthy aging. Group and private classes in Broward & North Miami. September 2026.',
    canonicalUrl: 'https://www.waterwomanwellness.com',
    ogImage: '/og-image.jpg',
  },

  hero: {
    tagline:
      'Mindful water-based therapy for women ready to move with freedom again.',
    supporting: 'Restore Strength. Move with Ease.',
    subheading:
      'Mindful, clinically-supported, low-impact aqua yoga for women navigating chronic pain, menopause, and healthy aging.',
    lead: 'Whether you\u2019re navigating menopause, managing chronic joint pain, or simply looking for a gentler, more sustainable way to stay strong and mobile \u2014 aqua yoga meets you where you are. In the water, movement becomes accessible again. Progress comes without punishment.',
    location:
      'Serving all areas in and between Hollywood, Fort Lauderdale, Pembroke Pines, Aventura, Sunny Isles and North Miami.',
    launch: 'Classes begin September 1st 2026.',
    cta: 'Make an Enquiry',
    ctaHref: 'mailto:hello@waterwomanwellness.com',
  },

  whyWater: {
    label: 'Why Water',
    title: 'Movement without the weight of gravity',
    intro:
      'Water creates a uniquely forgiving environment for therapeutic movement. Here\u2019s what changes the moment you step in:',
    benefits: [
      {
        bold: 'Joint load reduced by up to 80%',
        text: 'buoyancy offloads your joints, allowing range of motion that land-based exercise simply cannot offer',
      },
      {
        bold: 'No fear of falling',
        text: 'water supports you while gently challenging your balance and stability',
      },
      {
        bold: 'Immediate sensory feedback',
        text: 'the water tells your body where it is, deepening proprioception and body awareness',
      },
      {
        bold: 'Natural resistance without strain',
        text: 'builds strength and flexibility without impact or bracing',
      },
      {
        bold: 'Nervous system regulation',
        text: 'hydrostatic pressure has a measurable calming effect on the nervous system',
      },
    ] satisfies Benefit[],
  },

  services: {
    label: 'What I Offer',
    title: 'Move with Support',
    group: {
      title: 'Group Classes',
      desc: 'Bringing Water Woman Wellness to your facility \u2014 senior centers, retirement communities, assisted living, and private residential pools.',
      detail:
        'Classes are tailored to your residents or members, delivered in your pool on a schedule that works for you.',
      cta: 'Enquire about group classes \u2192',
      ctaHref: 'mailto:hello@waterwomanwellness.com',
      image: '/src/assets/images/class-tree-pose.png',
    },
    priv: {
      title: 'One-on-One Sessions',
      desc: 'Private therapeutic aqua yoga sessions tailored entirely to your body, your conditions, and your goals.',
      detail:
        'Sessions can take place at your own pool or at my local fitness club in Hollywood - whatever works best for you.',
      cta: 'Enquire about private sessions \u2192',
      ctaHref: 'mailto:hello@waterwomanwellness.com',
      image: '/src/assets/images/aerial-watsu.png',
    },
  },

  about: {
    label: 'About Your Instructor',
    title: 'Meet Sushi',
    hook: 'I know what it feels like when your body stops cooperating.',
    story: [
      'For years I navigated daily chronic pain, inflammation, and significant loss of mobility \u2014 living with hypermobility and autoimmune conditions which worsened over time and the shifting terrain of menopause.',

      'I had been a yogi for over 15 years, practicing many different styles including Iyengar, Ashtanga and Kundalini - but was drawn particularly to Anusara Yoga upon discovering it just before I moved to Florida from the UK.',
      'Having grown up in a Hindu household, yogic philosophy was simply part of my daily life. Yoga was not simply something I did \u2014 it was how I understood myself and my body.',
      'Which made it even more devastating when, as my conditions worsened, even my practice could no longer help me navigate the inflammation, the pain, and the loss of mobility. Land-based movement had become inaccessible to me.',
    ],
    turning: 'Getting back into the pool changed everything.',
    resolution: [
      'Discovering aqua yoga, I was able to start moving again \u2014 gently, safely, and without bracing against my own body.',
      'The water gave my joints the relief they needed. It gave my nervous system permission to let go. And it gave me back a relationship with my body I thought I had lost.',
      'I am now a certified RYT-200 yoga teacher and Aqua Yoga instructor, trained in therapeutic and somatic approaches to movement.',
      'I am also a freediver \u2014 because water is not just where I work. It is where I feel most at home.',
    ],
    closing:
      'I created Water Woman Wellness for women who are where I was \u2014 ready to move again, but needing a gentler, smarter way in.',
    signature: 'Sushi Chanrai',
    certifications: ['RYT-200, Yoga Alliance', 'Aqua Yoga Certification, Yoga Alliance, Trained by Christa Fairbrother'],
    specialization: ['Therapeutic Yoga Training, Soma Yoga Institute'],
  },

  faq: {
    label: 'Frequently Asked Questions',
    individual: {
      heading: 'For Individuals',
      items: [
        {
          q: 'Do I need to know how to swim?',
          a: 'No. Classes are practiced in chest-depth water. You will never be asked to go underwater.',
        },
        {
          q: 'Do I need prior yoga experience?',
          a: 'No. Aqua yoga is an excellent entry point for anyone new to yoga.',
        },
        {
          q: 'Is aqua yoga suitable for my condition?',
          a: 'Aqua yoga is gentle enough to be practiced by people living with chronic pain, autoimmune conditions, and menopause-related symptoms — as well as older adults and anyone who finds land-based movement difficult.',
        },
        {
          q: 'Where do private sessions take place?',
          a: 'Sessions can take place at a pool in my local fitness club in Hollywood, or at your own pool.',
        },
        {
          q: 'What should I wear?',
          a: 'A comfortable swimsuit. Water shoes are optional but recommended.',
        },
        {
          q: 'Will I get my hair wet?',
          a: 'Not necessarily. Getting your hair wet is entirely optional.',
        },
        {
          q: 'How much do classes cost?',
          a: 'Private sessions are offered as an introductory package of 3 \u00d7 60-minute sessions. Please contact me for pricing.',
        },
      ] satisfies FaqItem[],
    },
    facility: {
      heading: 'For Facilities',
      items: [
        {
          q: 'What are your qualifications?',
          a: 'Certified RYT-200 yoga teacher and certified Aqua Yoga instructor.',
        },
        {
          q: 'What pool specifications do you require?',
          a: 'Chest-depth water, safe pool entry and exit, and adequate space for the group size.',
        },
        {
          q: 'How many participants can you teach at once?',
          a: 'This depends on the pool size and the needs of your residents.',
        },
        {
          q: 'Do you carry liability insurance?',
          a: 'Yes.',
        },
        {
          q: 'How much do group classes cost?',
          a: 'Pricing is discussed directly with the facility.',
        },
      ] satisfies FaqItem[],
    },
  },

  ctaBand: {
    title: 'Ready to Move with Freedom Again?',
    body: 'Classes begin September 1st 2026. Express your interest and we\u2019ll be in touch.',
    cta: 'Make an Enquiry',
    ctaHref: 'mailto:hello@waterwomanwellness.com',
  },

  footer: {
    tagline: 'Freedom in Movement',
    location: 'Hollywood, Broward County, South Florida',
    brand: 'A Chikitsa LLC brand',
  },
} as const;
