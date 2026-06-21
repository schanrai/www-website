export interface MenoBenefit {
  bold: string;
  text: string;
}

export interface MenoFaq {
  q: string;
  a: string;
}

export const MENOPAUSE = {
  meta: {
    title: 'Aqua Yoga for Menopause & Perimenopause | Broward & North Miami',
    description:
      'Gentle aqua yoga and low impact water exercise for menopausal and perimenopausal women. Build strength, flexibility and balance. Serving Broward & North Miami.',
    canonicalUrl: 'https://www.waterwomanwellness.com/menopause',
  },

  hero: {
    headline:
      'Gentle aqua yoga and water-based movement for menopausal and perimenopausal women.',
    tagline: 'Gentle enough for today. Strong enough for tomorrow.',
  },

  heroBody: {
    subheading:
      'Support mobility, flexibility, balance, and strength with low-impact exercise.',
    lead: 'If exercise has started to feel harder than it used to \u2014 you are not imagining it. Perimenopause and menopause change the way your body responds to movement. Joints feel stiffer, energy levels fluctuate, and the routines that once worked may no longer feel accessible. Aqua yoga meets you exactly where you are \u2014 on good days and low energy days alike \u2014 and grows with you as your strength returns.',
    cta: 'Make an Enquiry',
  },

  whatIs: {
    label: 'What Is Aqua Yoga for Perimenopause and Menopause',
    paragraphs: [
      'If you\u2019ve been searching for gentle exercise for menopause, low-impact movement, or a menopause-friendly exercise routine that actually works \u2014 aqua yoga is what you\u2019ve been looking for.',
      'Unlike land-based yoga, aqua yoga takes place in chest-depth water where buoyancy removes the pressure on your joints and spine entirely. Poses that feel stiff, uncomfortable, or simply impossible on land become fluid and accessible in the water. There is no hard floor, no getting up and down, no bracing against gravity \u2014 just supported, intentional movement that works with your changing body rather than against it.',
      'Props like pool noodles and water blocks can be used throughout every class to provide additional support, stability, and balance \u2014 making the practice genuinely adaptive to where you are on any given day. When perimenopause or menopause makes workouts harder, the water makes movement possible again.',
    ],
  },

  whyWater: {
    label: 'Why Water Exercise Works for Midlife Women',
    intro:
      'Hormonal changes during perimenopause and menopause affect almost every system and organ in your body. Water-based exercise addresses many of these changes directly:',
    benefits: [
      {
        bold: 'Joint pain and stiffness',
        text: 'buoyancy reduces joint load by up to 80%, making movement comfortable even on your most difficult days',
      },
      {
        bold: 'Fatigue and low energy',
        text: 'the class adapts to you. There is no pressure to perform. You work at your own level, every session',
      },
      {
        bold: 'Muscle loss and body composition',
        text: 'water provides natural resistance that builds and maintains lean muscle without impact or strain',
      },
      {
        bold: 'Balance and coordination',
        text: 'hydrostatic pressure improves proprioception and body awareness, addressing the balance changes that come with hormonal shifts',
      },
      {
        bold: 'Flexibility and mobility',
        text: 'warm water relaxes muscles and connective tissue, allowing greater range of motion than land-based stretching',
      },
      {
        bold: 'Nervous system regulation',
        text: 'immersion in water has a measurable calming effect, helping to address the anxiety and mood fluctuations that can be associated with perimenopause and menopause',
      },
    ] satisfies MenoBenefit[],
  },

  whatToExpect: {
    label: 'What to Expect',
    intro:
      'As your strength, flexibility and confidence build, the practice builds with you.',
    faqs: [
      {
        q: 'What do classes look like?',
        a: 'Small group classes and one-on-one private sessions, fully adaptive to your body and your symptoms on any given day.',
      },
      {
        q: 'Do I need yoga experience?',
        a: 'None at all. Every session is designed to meet you exactly where you are.',
      },
      {
        q: 'Do I need to be able to swim?',
        a: 'No swimming ability is required. Classes are held in chest-depth water \u2014 you will never be asked to go underwater.',
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
        q: 'What if I\u2019m having a low energy day?',
        a: 'Every class is designed to meet you where you are. On difficult days, the practice scales back with you \u2014 gentle floating, supported stretches, and breathwork are always available.',
      },
      {
        q: 'Will I really build strength?',
        a: 'Yes, absolutely. Water is denser than air. Holding and moving through yoga poses in water forces your muscles to work in multiple directions, turning a gentle flow into effective strength training.',
      },
      {
        q: 'Will I get my hair wet?',
        a: 'Not necessarily. Getting your hair wet is entirely optional.',
      },
    ] satisfies MenoFaq[],
    location:
      'Serving Hollywood, Fort Lauderdale, Pembroke Pines, Aventura, Sunny Isles and North Miami.',
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
    title: 'Ready to Move Through Menopause with Confidence?',
    body: 'Classes begin September 1st 2026. Express your interest and we\u2019ll be in touch.',
    cta: 'Make an Enquiry',
  },
} as const;
