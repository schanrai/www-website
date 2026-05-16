/* Variation D — Mixed: Best of A + B + C
 * 1. Hero (C) — large class photo, gradient overlay
 * 2. Hero Body Copy (C) — subheading, location, launch, CTA
 * 3. Why Water (A) — centered, editorial, light
 * 4. What I Offer (C) — rounded cards
 * 5. About Your Instructor (C) — warm, personal, rounded portrait
 * 6. FAQ (B) — dark teal, two-column
 * + CTA band (C wave style) + footer (A light)
 */
function HomepageD() {
  const D = CONTENT;
  const cx = { textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' };

  return (
    <div style={{ width: 1440, backgroundColor: C.ivoryAlt, fontFamily: '"Open Sans", sans-serif' }}>

      {/* ── NAV (C style — warm ivory, sand border) ── */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '28px 80px', backgroundColor: C.ivoryAlt,
        borderBottom: `1px solid ${C.sand}30`, height: "105px"
      }}>
        <img src={IMG.logo} style={{ height: '96px', width: 'auto' }} alt="Water Woman Wellness" />
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {NAV_LINKS.map((l) =>
          <span key={l} style={{
            fontFamily: '"Futura Now Headline", "Jost", sans-serif', fontSize: 14, fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase', color: C.deepTeal
          }}>{l}</span>
          )}
        </div>
      </nav>

      {/* ── 1. HERO from C — large class photo, gradient overlay ── */}
      <section style={{ position: 'relative' }}>
        <Photo src={IMG.classNoodles} height={600} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(0deg, rgba(0,61,74,0.88) 0%, rgba(0,61,74,0) 100%)',
          padding: '140px 80px 52px'
        }}>
          <WWH size={60} color={C.white} weight={700} style={{ marginBottom: 10 }}>
            {D.hero.tagline}
          </WWH>
          <WWH size={22} color={C.paleAqua} weight={400}>
            {D.hero.supporting}
          </WWH>
        </div>
      </section>

      {/* ── 1b. HERO BODY COPY from C ── */}
      <section style={{ padding: '48px 80px 72px', backgroundColor: C.ivory }}>
        <div style={{ display: 'flex', gap: 60, alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <WWP size={18} style={{ color: C.body, marginBottom: 16, lineHeight: 1.7 }}>
              {D.hero.subheading}
            </WWP>
            <WWP style={{ color: C.bodyLight, marginBottom: 8 }}>{D.hero.location}</WWP>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginTop: 8,
              backgroundColor: C.paleAqua + '60',
              border: `1px solid ${C.aqua}40`,
              borderRadius: 100,
              padding: '6px 14px',
              fontFamily: '"Futura Now Headline", "Jost", sans-serif',
              fontSize: 13, fontWeight: 600, letterSpacing: '0.04em',
              color: C.deepTeal
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                backgroundColor: C.aqua, flexShrink: 0
              }} />
              {D.hero.launch}
            </span>
          </div>
          <div style={{ flex: '0 0 auto', paddingTop: 4 }}>
            <GoldCTA large>{D.hero.cta}</GoldCTA>
          </div>
        </div>
      </section>

      {/* ── 2. WHY WATER — pale aqua bg, centered, spacious ── */}
      <section style={{ padding: '100px 120px', ...cx, backgroundColor: C.paleAqua + '40' }}>
        <SectionLabel color={C.deepTeal}>{D.whyWater.title}</SectionLabel>
        <WWH size={36} color={C.deepTeal} style={{ marginBottom: 16 }}>{D.whyWater.subtitle}</WWH>
        <WaveLine width={100} height={12} color={C.aqua} style={{ marginBottom: 32 }} />
        <WWP color={C.body} style={{ textAlign: 'center', maxWidth: 680, marginBottom: 48 }}>
          {D.whyWater.intro}
        </WWP>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 720, width: '100%' }}>
          {D.whyWater.benefits.map((b, i) =>
          <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{
              width: 8, height: 8, borderRadius: '50%', backgroundColor: C.deepTeal,
              marginTop: 8, flexShrink: 0
            }} />
              <WWP size={15} color={C.body}>
                <strong style={{ color: C.deepTeal }}>{b.bold}</strong>
                <span style={{ color: C.body }}> — {b.text}</span>
              </WWP>
            </div>
          )}
        </div>
      </section>

      {/* ── 3. WHAT I OFFER from C — rounded cards ── */}
      <section style={{ padding: '100px 80px', backgroundColor: C.ivory }}>
        <div style={{ ...cx, marginBottom: 60 }}>
          <SectionLabel color={C.deepTeal}>What I Offer</SectionLabel>
          <WWH size={36}>Move with Support</WWH>
        </div>
        <div style={{ display: 'flex', gap: 32 }}>
          <div style={{ flex: 1, borderRadius: 12, overflow: 'hidden', backgroundColor: C.ivoryAlt, border: `1px solid ${C.sand}25` }}>
            <Photo src={IMG.classTreePose} height={300} />
            <div style={{ padding: '32px 32px 36px' }}>
              <WWH size={24} style={{ marginBottom: 14 }}>{D.services.group.title}</WWH>
              <WWP size={15} style={{ color: C.bodyLight, marginBottom: 10 }}>{D.services.group.desc}</WWP>
              <WWP size={15} style={{ color: C.bodyLight, marginBottom: 24 }}>{D.services.group.detail}</WWP>
              <span style={{
                fontFamily: '"Futura Now Headline", "Jost", sans-serif', fontSize: 14, fontWeight: 600,
                color: C.gold, letterSpacing: '0.04em'
              }}>{D.services.group.cta}</span>
            </div>
          </div>
          <div style={{ flex: 1, borderRadius: 12, overflow: 'hidden', backgroundColor: C.ivoryAlt, border: `1px solid ${C.sand}25` }}>
            <Photo src={IMG.aerialWatsu} height={300} />
            <div style={{ padding: '32px 32px 36px' }}>
              <WWH size={24} style={{ marginBottom: 14 }}>{D.services.priv.title}</WWH>
              <WWP size={15} style={{ color: C.bodyLight, marginBottom: 10 }}>{D.services.priv.desc}</WWP>
              <WWP size={15} style={{ color: C.bodyLight, marginBottom: 24 }}>{D.services.priv.detail}</WWP>
              <span style={{
                fontFamily: '"Futura Now Headline", "Jost", sans-serif', fontSize: 14, fontWeight: 600,
                color: C.gold, letterSpacing: '0.04em'
              }}>{D.services.priv.cta}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image divider */}
      <Photo src={IMG.underwaterDance} height={480} objectPosition='center 24%' />

      {/* ── 4. ABOUT from C — warm, personal, rounded portrait ── */}
      <section style={{ padding: '100px 80px', backgroundColor: C.ivory }}>
        <div style={{ display: 'flex', gap: 60, alignItems: 'flex-start' }}>
          <div style={{ flex: '0 0 360px' }}>
            <Photo src={IMG.sushiPortrait} height={380} objectPosition='center bottom' style={{ borderRadius: 16 }} />
            <div style={{
              marginTop: 28,
              backgroundColor: C.paleAqua + '40',
              border: `1px solid ${C.aqua}25`,
              borderRadius: 16,
              padding: '26px 28px'
            }}>
              <div style={{ marginBottom: 22 }}>
                <WWH size={11} style={{ letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14, color: C.aqua }}>Certifications</WWH>
                {D.about.certifications.map((c, i) => {
                  const [name, ...rest] = c.split(',');
                  const issuer = rest.join(',').trim();
                  return (
                    <div key={i} style={{ marginBottom: i === D.about.certifications.length - 1 ? 0 : 14 }}>
                      <WWP size={14} style={{ color: C.deepTeal, fontWeight: 600, lineHeight: 1.35 }}>{name.trim()}</WWP>
                      {issuer && <WWP size={12} style={{ color: C.bodyLight, marginTop: 2 }}>{issuer}</WWP>}
                    </div>);

                })}
              </div>
              <div style={{ borderTop: `1px solid ${C.aqua}25`, paddingTop: 20 }}>
                <WWH size={11} style={{ letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14, color: C.aqua }}>Specialization</WWH>
                {D.about.specialization.map((c, i) => {
                  const [name, ...rest] = c.split(',');
                  const issuer = rest.join(',').trim();
                  return (
                    <div key={i} style={{ marginBottom: i === D.about.specialization.length - 1 ? 0 : 14 }}>
                      <WWP size={14} style={{ color: C.deepTeal, fontWeight: 600, lineHeight: 1.35 }}>{name.trim()}</WWP>
                      {issuer && <WWP size={12} style={{ color: C.bodyLight, marginTop: 2 }}>{issuer}</WWP>}
                    </div>);

                })}
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <SectionLabel color={C.deepTeal}>{D.about.title}</SectionLabel>
            <WWH size={36} style={{ marginBottom: 28 }}>{D.about.subtitle}</WWH>
            <div style={{ borderLeft: `3px solid ${C.aqua}`, paddingLeft: 24, marginBottom: 28 }}>
              <WWP size={20} style={{ fontStyle: 'italic', color: C.deepTeal, lineHeight: 1.5 }}>
                {D.about.hook}
              </WWP>
            </div>
            {D.about.story.slice(0, 4).map((p, i) =>
            <WWP key={i} style={{ color: C.bodyLight, marginBottom: 16 }}>{p}</WWP>
            )}
            <WWP style={{ color: C.deepTeal, fontWeight: 600, fontSize: 18, marginBottom: 16, marginTop: 8 }}>
              {D.about.turning}
            </WWP>
            {D.about.resolution.slice(0, 4).map((p, i) =>
            <WWP key={i} style={{ color: C.bodyLight, marginBottom: 16 }}>{p}</WWP>
            )}
            <WWP style={{ fontStyle: 'italic', color: C.deepTeal, fontWeight: 600, marginTop: 8 }}>
              {D.about.closing}
            </WWP>
            <WWP style={{ fontFamily: '"Dancing Script", cursive', fontSize: 38, fontWeight: 700, color: C.deepTeal, marginTop: 32, marginBottom: 24, lineHeight: 1.3 }}>{D.about.signature}</WWP>
          </div>
        </div>
      </section>

      {/* ── 5. FAQ — pale ivory background, two-column ── */}
      <section style={{ backgroundColor: C.ivory, padding: '80px 80px' }}>
        <div style={{ ...cx, marginBottom: 48 }}>
          <SectionLabel color={C.deepTeal}>Frequently Asked Questions</SectionLabel>
        </div>
        <div style={{ display: 'flex', gap: 60 }}>
          <div style={{ flex: 1 }}>
            <WWH size={18} color={C.deepTeal} style={{ marginBottom: 16 }}>For Individuals</WWH>
            {D.faq.individual.map((f, i) =>
            <div key={i} style={{ borderBottom: `1px solid ${C.sand}50`, padding: '18px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <WWP size={15} color={C.deepTeal} style={{ fontWeight: 600 }}>{f.q}</WWP>
                  <span style={{ color: C.aqua, fontSize: 18, marginLeft: 12, flexShrink: 0 }}>
                    {i === 0 ? '−' : '+'}
                  </span>
                </div>
                {i === 0 && <WWP size={14} color={C.bodyLight} style={{ marginTop: 10 }}>{f.a}</WWP>}
              </div>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <WWH size={18} color={C.deepTeal} style={{ marginBottom: 16 }}>For Facilities</WWH>
            {D.faq.facility.map((f, i) =>
            <div key={i} style={{ borderBottom: `1px solid ${C.sand}50`, padding: '18px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <WWP size={15} color={C.deepTeal} style={{ fontWeight: 600 }}>{f.q}</WWP>
                  <span style={{ color: C.aqua, fontSize: 18, marginLeft: 12, flexShrink: 0 }}>
                    {i === 0 ? '−' : '+'}
                  </span>
                </div>
                {i === 0 && <WWP size={14} color={C.bodyLight} style={{ marginTop: 10 }}>{f.a}</WWP>}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA BAND — pale aqua background ── */}
      <section style={{
        backgroundColor: C.paleAqua + '40', padding: '80px 80px', ...cx,
        position: 'relative', overflow: 'hidden'
      }}>
        <WaveLine width={900} height={24} color={C.aqua}
        style={{ position: 'absolute', top: 16, left: '50%', transform: 'translateX(-50%)', opacity: 0.25 }} />
        <WaveLine width={700} height={18} color={C.aqua}
        style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', opacity: 0.15 }} />
        <WWH size={36} color={C.deepTeal} style={{ marginBottom: 12, textAlign: 'center', position: 'relative' }}>
          Ready to Move with Freedom Again?
        </WWH>
        <WWP color={C.body} style={{ marginBottom: 36, textAlign: 'center', position: 'relative' }}>
          {D.hero.launch} Express your interest and we'll be in touch.
        </WWP>
        <GoldCTA large style={{ position: 'relative' }}>{D.hero.cta}</GoldCTA>
      </section>

      {/* ── FOOTER — dark teal ── */}
      <footer style={{ padding: '48px 80px 32px', backgroundColor: C.deepTeal }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
              <img src={IMG.mark} style={{ height: 44, width: 'auto', filter: 'brightness(0) invert(1)' }} alt="" />
              <WWP size={14} style={{ color: C.white, fontStyle: 'italic' }}>{D.footer.tagline}</WWP>
            </div>
            <WWP size={13} style={{ color: C.bodyLight, marginTop: 4 }}>{D.footer.location}</WWP>
          </div>
          <div style={{ display: 'flex', gap: 60 }}>
            <div>
              <WWH size={12} style={{ letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14, color: C.aqua }}>Navigate</WWH>
              {NAV_LINKS.map((l) =>
              <WWP key={l} size={14} style={{ marginBottom: 6, color: C.paleAqua }}>{l}</WWP>
              )}
            </div>
            <div>
              <WWH size={12} style={{ letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14, color: C.aqua }}>Connect</WWH>
              {['Instagram', 'Phone'].map((l) =>
              <WWP key={l} size={14} style={{ marginBottom: 6, color: C.paleAqua }}>{l}</WWP>
              )}
            </div>
          </div>
        </div>
        <HRule color={C.aqua} style={{ opacity: 0.15, marginBottom: 20 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <WWP size={12} style={{ color: C.bodyLight }}>© 2026 Water Woman Wellness. All rights reserved.</WWP>
          <WWP size={12} style={{ color: C.bodyLight }}>{D.footer.brand}</WWP>
        </div>
      </footer>
    </div>);

}

window.HomepageD = HomepageD;