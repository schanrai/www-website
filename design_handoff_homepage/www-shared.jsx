/* Water Woman Wellness — Shared Tokens, Components & Content Data */

/* ── COLOR TOKENS ── */
const C = {
  deepTeal: '#064653', tealDark: '#003D4A',
  aqua: '#62C7C7', aquaLight: '#6FCFD0',
  paleAqua: '#BCE7E4', gold: '#B8962E',
  ivory: '#F7F2EC', ivoryAlt: '#FAF6F1',
  sand: '#D8C7B4', white: '#FFFFFF',
  body: '#3A5058', bodyLight: '#6A7E84'
};

const NAV_LINKS = ['Menopause', 'Seniors'];

/* ── IMAGES ── */
const IMG = {
  aerialWatsu: 'assets/aerial-watsu.png',
  classNoodles: 'assets/class-noodles.png',
  classTreePose: 'assets/class-tree-pose.png',
  sushiPortrait: 'assets/sushi-portrait.jpg',
  underwaterYoga: 'assets/underwater-yoga.jpg',
  underwaterDance: 'assets/underwater-dance.jpg',
  underwaterMeditation: 'assets/underwater-meditation.jpg',
  logo: 'assets/Logo.png',
  mark: 'assets/Mark.png'
};

/* ── CONTENT DATA ── */
const CONTENT = {
  hero: {
    tagline: 'Mindful water-based therapy for women ready to move with freedom again.',
    supporting: 'Restore Strength. Move with Ease.',
    positioning: 'Mindful water-based therapy for women ready to move with freedom again.',
    subheading: 'Mindful, clinically-supported, low-impact aqua yoga for women navigating chronic pain, menopause, and healthy aging.',
    location: 'Serving all areas between Hollywood, Fort Lauderdale, Aventura, Sunny Isles and North Miami.',
    launch: 'Classes begin August 1st 2026.',
    cta: 'Make an Enquiry'
  },
  whyWater: {
    title: 'Why Water',
    subtitle: 'Movement without the weight of gravity',
    intro: 'Water creates a uniquely forgiving environment for therapeutic movement. Here\u2019s what changes the moment you step in:',
    benefits: [
    { bold: 'Joint load reduced by up to 80%', text: 'buoyancy offloads your joints, allowing range of motion that land-based exercise simply cannot offer' },
    { bold: 'No fear of falling', text: 'water supports you while gently challenging your balance and stability' },
    { bold: 'Immediate sensory feedback', text: 'the water tells your body where it is, deepening proprioception and body awareness' },
    { bold: 'Natural resistance without strain', text: 'builds strength and flexibility without impact or bracing' },
    { bold: 'Nervous system regulation', text: 'hydrostatic pressure has a measurable calming effect on the nervous system' }]

  },
  services: {
    group: {
      title: 'Group Classes',
      desc: 'Bringing Water Woman Wellness to your facility \u2014 senior centers, retirement communities, assisted living, and private residential pools.',
      detail: 'Classes are tailored to your residents or members, delivered in your pool on a schedule that works for you.',
      cta: 'Enquire about group classes \u2192'
    },
    priv: {
      title: 'One-on-One Sessions',
      desc: 'Private therapeutic aqua yoga sessions tailored entirely to your body, your conditions, and your goals.',
      detail: 'Sessions can take place at your own pool or at my pool in Broward County \u2014 whatever works best for you.',
      cta: 'Enquire about private sessions \u2192'
    }
  },
  about: {
    title: 'About Your Instructor',
    subtitle: 'Meet Sushi',
    hook: 'I know what it feels like when your body stops cooperating.',
    story: [
    'For years I navigated daily chronic pain, inflammation, and significant loss of mobility \u2014 living with hypermobility, autoimmune conditions including MCAS, Chronic Venous Insufficiency, and Arthritis, and the shifting terrain of menopause.',
    'I had been a yogi for over 15 years, practicing many different styles including Iyengar, Ashtanga and Kundalini, but was drawn particularly to Anusara Yoga upon discovering it just before I moved to Florida in 2014 from the UK.',
    'Having grown up in a Hindu household, yogic philosophy and teachings were simply part of my daily life. Yoga was not simply something I did \u2014 it was how I understood myself and my body.',
    'Which made it even more devastating when, as my conditions worsened, even my practice could no longer help me navigate the inflammation, the pain, and the loss of mobility. Land-based movement had become inaccessible to me.'],

    turning: 'Getting back into the pool changed everything.',
    resolution: [
    'Discovering aqua yoga, I was able to start moving again \u2014 gently, safely, and without bracing against my own body.',
    'The water gave my joints the relief they needed. It gave my nervous system permission to let go. And it gave me back a relationship with my body I thought I had lost.',
    'I am now a certified RYT-200 yoga instructor and certified Aqua Yoga therapist, trained in therapeutic and somatic approaches to movement.',
    'I am also a freediver \u2014 because water is not just where I work. It is where I feel most at home.'],

    closing: 'I created Water Woman Wellness for women who are where I was \u2014 ready to move again, but needing a gentler, smarter way in.',
    signature: 'Sushi Chanrai',
    certifications: ['RYT-200, Yoga Alliance', 'Aqua Yoga Certification, Yoga Alliance'],
    specialization: ['Therapeutic Yoga Training, Soma Yoga Institute'],
    certs: ['RYT-200, Yoga Alliance', 'Aqua Yoga Certification, Yoga Alliance', 'Therapeutic Yoga Training, Soma Yoga Institute']

  },
  faq: {
    individual: [
    { q: 'Do I need to know how to swim?', a: 'No. Classes are practiced in chest-depth water. You will never be asked to go underwater.' },
    { q: 'Do I need prior yoga experience?', a: 'No. Aqua yoga is an excellent entry point for anyone new to yoga.' },
    { q: 'Is aqua yoga suitable for my condition?', a: 'Aqua yoga is gentle enough to be practiced by people living with chronic pain, autoimmune conditions, and menopause-related symptoms — as well as older adults and anyone who finds land-based movement difficult.' },
    { q: 'Where do private sessions take place?', a: 'Sessions can take place at my pool in Hollywood, Broward County, or at your own pool.' },
    { q: 'What should I wear?', a: 'A comfortable swimsuit. Water shoes are optional but recommended.' },
    { q: 'Will I get my hair wet?', a: 'Not necessarily. Getting your hair wet is entirely optional.' },
    { q: 'How much do classes cost?', a: 'Private sessions are offered as an introductory package of 3 \u00d7 60-minute sessions. Please contact me for pricing.' }],

    facility: [
    { q: 'What are your qualifications?', a: 'Certified RYT-200 yoga instructor and certified Aqua Yoga therapist.' },
    { q: 'What pool specifications do you require?', a: 'Chest-depth water, safe pool entry and exit, and adequate space for the group size.' },
    { q: 'How many participants can you teach at once?', a: 'This depends on the pool size and the needs of your residents.' },
    { q: 'Do you carry liability insurance?', a: 'Yes.' },
    { q: 'How much do group classes cost?', a: 'Pricing is discussed directly with the facility.' }]

  },
  footer: {
    tagline: 'Freedom in Movement',
    location: 'Hollywood, Broward County, South Florida',
    brand: 'A Chikitsa LLC brand'
  }
};

/* ── UTILITY COMPONENTS ── */

function WaveLine({ color = C.aqua, width = 200, height = 16, strokeWidth = 1.5, style = {} }) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none"
    style={{ display: 'block', flexShrink: 0, ...style }}>
      <path
        d={`M0 ${height * .5} C${width * .08} ${height * .12},${width * .17} ${height * .12},${width * .25} ${height * .5} S${width * .42} ${height * .88},${width * .5} ${height * .5} S${width * .67} ${height * .12},${width * .75} ${height * .5} S${width * .92} ${height * .88},${width} ${height * .5}`}
        stroke={color} strokeWidth={strokeWidth} />
    </svg>);

}

function GoldCTA({ children, large = false, style = {} }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      padding: large ? '18px 48px' : '14px 36px',
      backgroundColor: C.gold, color: C.white,
      fontFamily: '"Jost", sans-serif', fontWeight: 600,
      fontSize: large ? 16 : 14,
      letterSpacing: '0.1em', textTransform: 'uppercase',
      cursor: 'pointer', ...style
    }}>
      {children}
    </div>);

}

function SectionLabel({ children, color = C.aqua, style = {} }) {
  return (
    <div style={{
      fontSize: 12, fontWeight: 500,
      letterSpacing: '0.25em', textTransform: 'uppercase',
      color, marginBottom: 16, ...style, fontFamily: "\"Futura Now Headline\""
    }}>{children}</div>);

}

function WWH({ children, size = 40, color = C.deepTeal, weight = 600, style = {} }) {
  return (
    <div style={{
      fontFamily: '"Futura Now Headline", "Jost", sans-serif',
      fontSize: size, fontWeight: weight,
      color, lineHeight: 1.15, ...style
    }}>{children}</div>);

}

function WWP({ children, color = C.body, size = 16, style = {} }) {
  return (
    <div style={{
        fontFamily: '"Open Sans", sans-serif', fontSize: size,
        lineHeight: 1.7, color, ...style
      }}>{children}</div>);

}

function HRule({ color = C.sand, style = {} }) {
  return <div style={{ height: 1, backgroundColor: color, opacity: 0.35, ...style }} />;
}

function Photo({ src, height = 400, style = {}, objectPosition = 'center' }) {
  return (
    <div style={{
      width: '100%', height, overflow: 'hidden',
      backgroundColor: '#d0e8e8', ...style
    }}>
      <img src={src} alt="" style={{
        width: '100%', height: '100%', display: 'block', objectPosition, objectFit: "cover"
      }} />
    </div>);

}

function FAQItem({ q, a, open = false }) {
  return (
    <div style={{ borderBottom: `1px solid ${C.sand}40`, padding: '20px 0' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        cursor: 'pointer'
      }}>
        <WWP size={16} color={C.deepTeal} style={{ fontWeight: 600 }}>{q}</WWP>
        <span style={{
          fontFamily: '"Jost", sans-serif', fontSize: 20, color: C.aqua,
          marginLeft: 16, flexShrink: 0
        }}>{open ? '\u2212' : '+'}</span>
      </div>
      {open &&
      <WWP size={15} color={C.bodyLight} style={{ marginTop: 12 }}>{a}</WWP>
      }
    </div>);

}

Object.assign(window, {
  C, NAV_LINKS, IMG, CONTENT,
  WaveLine, GoldCTA, SectionLabel, WWH, WWP, HRule, Photo, FAQItem
});