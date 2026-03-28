import React from "react";

export default function Home() {
  return (
    <main style={styles.page}>
      <section style={styles.heroSection}>
        <div style={styles.heroGlow} />

        <div style={styles.navbar}>
          <div style={styles.logoWrap}>
            <div style={styles.logoBadge}>L</div>
            <div>
              <div style={styles.logoText}>Locky</div>
              <div style={styles.logoSubtext}>Bloqueio e proteção para celular</div>
            </div>
          </div>

          <a href="#planos" style={styles.navButton}>
            Ver planos
          </a>
        </div>

        <div style={styles.heroContent}>
          <div style={styles.heroLeft}>
            <div style={styles.heroPill}>Proteção rápida contra roubo e furto</div>

            <h1 style={styles.heroTitle}>
              Bloqueie seu celular em minutos e evite prejuízos maiores.
            </h1>

            <p style={styles.heroDescription}>
              A Locky ajuda você a agir rápido em caso de roubo ou furto do seu
              celular. Com poucos passos, você aciona o bloqueio do aparelho e,
              se quiser, ainda conta com seguro complementar para mais
              tranquilidade no dia a dia.
            </p>

            <div style={styles.priceRow}>
              <div style={styles.priceCardPrimary}>
                <div style={styles.priceLabel}>A partir de</div>
                <div style={styles.priceValue}>R$10</div>
                <div style={styles.priceDescription}>
                  por mês no plano de bloqueio rápido
                </div>
              </div>

              <div style={styles.priceCardSecondary}>
                <div style={styles.priceLabel}>Até</div>
                <div style={styles.priceValue}>R$35</div>
                <div style={styles.priceDescription}>
                  por mês com seguro para o celular incluído
                </div>
              </div>
            </div>

            <div style={styles.ctaRow}>
              <a href="#planos" style={styles.primaryButton}>
                Conhecer planos
              </a>
              <a href="#como-funciona" style={styles.secondaryButton}>
                Como funciona
              </a>
            </div>

            <div style={styles.heroFootnote}>
              Sem burocracia. Sem complicação. Resposta rápida quando você mais
              precisa.
            </div>
          </div>

          <div style={styles.heroRight}>
            <div style={styles.phoneCard}>
              <div style={styles.phoneTopRow}>
                <div>
                  <div style={styles.cardEyebrow}>Acionamento imediato</div>
                  <div style={styles.cardTitle}>Sua proteção em ação</div>
                </div>
                <div style={styles.statusDot} />
              </div>

              <div style={styles.timelineList}>
                <div style={styles.timelineItem}>
                  <div style={styles.timelineNumber}>1</div>
                  <div>
                    <div style={styles.timelineTitle}>Você avisa a Locky</div>
                    <div style={styles.timelineText}>
                      Comunique o roubo ou furto assim que perceber o ocorrido.
                    </div>
                  </div>
                </div>

                <div style={styles.timelineItem}>
                  <div style={styles.timelineNumber}>2</div>
                  <div>
                    <div style={styles.timelineTitle}>Bloqueio rápido</div>
                    <div style={styles.timelineText}>
                      Orientamos e aceleramos o processo para bloquear o aparelho.
                    </div>
                  </div>
                </div>

                <div style={styles.timelineItem}>
                  <div style={styles.timelineNumber}>3</div>
                  <div>
                    <div style={styles.timelineTitle}>Cobertura opcional</div>
                    <div style={styles.timelineText}>
                      Nos planos com seguro, você ganha uma camada extra de
                      proteção financeira.
                    </div>
                  </div>
                </div>
              </div>

              <div style={styles.infoBanner}>
                Plano essencial por <strong>R$10</strong> • Plano com seguro por
                até <strong>R$35</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionPill}>Como funciona</div>
          <h2 style={styles.sectionTitle}>Proteção simples, clara e rápida</h2>
          <p style={styles.sectionDescription}>
            A Locky foi criada para reduzir o tempo entre o susto e a ação.
            Quanto mais rápido você bloqueia o celular, maiores as chances de
            limitar golpes, acessos indevidos e dores de cabeça.
          </p>
        </div>

        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>⚡</div>
            <h3 style={styles.featureTitle}>Agilidade no bloqueio</h3>
            <p style={styles.featureText}>
              Um fluxo direto para você agir sem perder tempo em um momento de
              estresse.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔒</div>
            <h3 style={styles.featureTitle}>Mais segurança digital</h3>
            <p style={styles.featureText}>
              Reduza o risco de uso indevido do aparelho e proteja melhor seus
              acessos e informações.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🛡️</div>
            <h3 style={styles.featureTitle}>Seguro complementar</h3>
            <p style={styles.featureText}>
              Escolha um plano com cobertura para contar com proteção adicional
              para o seu celular.
            </p>
          </div>
        </div>
      </section>

      <section id="planos" style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionPill}>Planos</div>
          <h2 style={styles.sectionTitle}>Preço acessível para cada necessidade</h2>
          <p style={styles.sectionDescription}>
            Comece com o essencial ou contrate a versão com seguro incluso.
          </p>
        </div>

        <div style={styles.plansGrid}>
          <div style={styles.planCard}>
            <div style={styles.planHeader}>
              <div>
                <div style={styles.planName}>Locky Essencial</div>
                <div style={styles.planTag}>Só bloqueio</div>
              </div>
              <div style={styles.planPriceWrap}>
                <div style={styles.planPrice}>R$10</div>
                <div style={styles.planPeriod}>/mês</div>
              </div>
            </div>

            <div style={styles.planDivider} />

            <div style={styles.planList}>
              <div style={styles.planItem}>✓ Acionamento rápido em caso de roubo ou furto</div>
              <div style={styles.planItem}>✓ Suporte para bloqueio do aparelho</div>
              <div style={styles.planItem}>✓ Ideal para quem quer proteção essencial</div>
            </div>

            <a href="#contato" style={styles.planButtonSecondary}>
              Quero esse plano
            </a>
          </div>

          <div style={styles.planCardFeatured}>
            <div style={styles.featuredBadge}>Mais completo</div>

            <div style={styles.planHeader}>
              <div>
                <div style={styles.planName}>Locky Protegido</div>
                <div style={styles.planTag}>Bloqueio + seguro</div>
              </div>
              <div style={styles.planPriceWrap}>
                <div style={styles.planPrice}>até R$35</div>
                <div style={styles.planPeriod}>/mês</div>
              </div>
            </div>

            <div style={styles.planDivider} />

            <div style={styles.planList}>
              <div style={styles.planItem}>✓ Tudo do plano Essencial</div>
              <div style={styles.planItem}>✓ Seguro complementar para o celular</div>
              <div style={styles.planItem}>✓ Mais tranquilidade financeira em caso de sinistro</div>
            </div>

            <a href="#contato" style={styles.planButtonPrimary}>
              Quero proteção completa
            </a>
          </div>
        </div>
      </section>

      <section style={styles.ctaSection} id="contato">
        <div style={styles.ctaCard}>
          <div style={styles.sectionPill}>Locky</div>
          <h2 style={styles.ctaTitle}>Seu celular protegido por um valor que cabe no bolso</h2>
          <p style={styles.ctaDescription}>
            Tenha bloqueio rápido a partir de <strong>R$10 por mês</strong> ou
            escolha o plano com seguro por até <strong>R$35 por mês</strong>.
          </p>

          <div style={styles.ctaRowCenter}>
            <a href="mailto:contato@locky.com.br" style={styles.primaryButton}>
              Falar com a Locky
            </a>
            <a href="#planos" style={styles.secondaryButton}>
              Comparar planos
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#07111F",
    color: "#FFFFFF",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  heroSection: {
    position: "relative",
    overflow: "hidden",
    padding: "24px 20px 72px",
    maxWidth: 1280,
    margin: "0 auto",
  },

  heroGlow: {
    position: "absolute",
    top: -120,
    right: -80,
    width: 320,
    height: 320,
    borderRadius: 999,
    background:
      "radial-gradient(circle, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0) 70%)",
    pointerEvents: "none",
  },

  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    padding: "8px 0 28px",
    flexWrap: "wrap",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  logoBadge: {
    width: 42,
    height: 42,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2563EB",
    color: "#FFFFFF",
    fontWeight: 800,
    fontSize: 20,
    boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
  },

  logoText: {
    fontSize: 20,
    fontWeight: 800,
    lineHeight: 1.1,
  },

  logoSubtext: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 2,
  },

  navButton: {
    textDecoration: "none",
    color: "#FFFFFF",
    backgroundColor: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 999,
    padding: "12px 18px",
    fontWeight: 600,
  },

  heroContent: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 28,
    alignItems: "center",
    marginTop: 12,
  },

  heroLeft: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },

  heroRight: {
    display: "flex",
    justifyContent: "center",
  },

  heroPill: {
    alignSelf: "flex-start",
    padding: "8px 14px",
    borderRadius: 999,
    backgroundColor: "rgba(37,99,235,0.16)",
    border: "1px solid rgba(96,165,250,0.28)",
    color: "#BFDBFE",
    fontSize: 14,
    fontWeight: 600,
  },

  heroTitle: {
    margin: 0,
    fontSize: "clamp(2.2rem, 5vw, 4.6rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.04em",
    fontWeight: 800,
    maxWidth: 720,
  },

  heroDescription: {
    margin: 0,
    fontSize: 18,
    lineHeight: 1.7,
    color: "#D1D5DB",
    maxWidth: 680,
  },

  priceRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14,
    marginTop: 6,
  },

  priceCardPrimary: {
    borderRadius: 18,
    padding: 20,
    backgroundColor: "#0F1B2D",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  priceCardSecondary: {
    borderRadius: 18,
    padding: 20,
    backgroundColor: "rgba(37,99,235,0.14)",
    border: "1px solid rgba(96,165,250,0.28)",
  },

  priceLabel: {
    color: "#9CA3AF",
    fontSize: 14,
    marginBottom: 8,
  },

  priceValue: {
    fontSize: 40,
    fontWeight: 800,
    lineHeight: 1,
    marginBottom: 8,
  },

  priceDescription: {
    color: "#D1D5DB",
    fontSize: 15,
    lineHeight: 1.5,
  },

  ctaRow: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 8,
  },

  ctaRowCenter: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },

  primaryButton: {
    textDecoration: "none",
    backgroundColor: "#2563EB",
    color: "#FFFFFF",
    padding: "14px 22px",
    borderRadius: 12,
    fontWeight: 700,
    boxShadow: "0 14px 36px rgba(37,99,235,0.28)",
  },

  secondaryButton: {
    textDecoration: "none",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    padding: "14px 22px",
    borderRadius: 12,
    fontWeight: 700,
    border: "1px solid rgba(255,255,255,0.14)",
  },

  heroFootnote: {
    color: "#9CA3AF",
    fontSize: 14,
    lineHeight: 1.6,
  },

  phoneCard: {
    width: "100%",
    maxWidth: 460,
    borderRadius: 28,
    padding: 24,
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.95) 0%, rgba(12,18,31,0.98) 100%)",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 18px 60px rgba(0,0,0,0.28)",
  },

  phoneTopRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 20,
  },

  cardEyebrow: {
    color: "#93C5FD",
    fontSize: 13,
    marginBottom: 6,
    fontWeight: 600,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: 800,
    lineHeight: 1.2,
  },

  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 999,
    backgroundColor: "#22C55E",
    boxShadow: "0 0 0 8px rgba(34,197,94,0.12)",
    flexShrink: 0,
  },

  timelineList: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  timelineItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    padding: 14,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
  },

  timelineNumber: {
    minWidth: 32,
    height: 32,
    borderRadius: 999,
    backgroundColor: "#2563EB",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 14,
  },

  timelineTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 4,
  },

  timelineText: {
    color: "#D1D5DB",
    fontSize: 14,
    lineHeight: 1.6,
  },

  infoBanner: {
    marginTop: 18,
    padding: 14,
    borderRadius: 16,
    backgroundColor: "rgba(37,99,235,0.12)",
    color: "#DBEAFE",
    lineHeight: 1.6,
    border: "1px solid rgba(96,165,250,0.22)",
  },

  section: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 20px 72px",
  },

  sectionHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 12,
    marginBottom: 28,
  },

  sectionPill: {
    display: "inline-flex",
    alignSelf: "center",
    padding: "7px 12px",
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    color: "#BFDBFE",
    fontSize: 13,
    fontWeight: 700,
  },

  sectionTitle: {
    margin: 0,
    fontSize: "clamp(1.9rem, 3vw, 3rem)",
    lineHeight: 1.1,
    fontWeight: 800,
    letterSpacing: "-0.03em",
  },

  sectionDescription: {
    margin: 0,
    maxWidth: 760,
    color: "#D1D5DB",
    fontSize: 17,
    lineHeight: 1.7,
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
  },

  featureCard: {
    borderRadius: 20,
    padding: 22,
    backgroundColor: "#0D1728",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  featureIcon: {
    fontSize: 28,
    marginBottom: 12,
  },

  featureTitle: {
    margin: 0,
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 10,
  },

  featureText: {
    margin: 0,
    color: "#D1D5DB",
    fontSize: 15,
    lineHeight: 1.7,
  },

  plansGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 18,
    alignItems: "stretch",
  },

  planCard: {
    borderRadius: 22,
    padding: 22,
    backgroundColor: "#0E1828",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },

  planCardFeatured: {
    position: "relative",
    borderRadius: 22,
    padding: 22,
    background:
      "linear-gradient(180deg, rgba(37,99,235,0.18) 0%, rgba(14,24,40,1) 22%)",
    border: "1px solid rgba(96,165,250,0.28)",
    display: "flex",
    flexDirection: "column",
    gap: 18,
    boxShadow: "0 18px 50px rgba(37,99,235,0.18)",
  },

  featuredBadge: {
    position: "absolute",
    top: -12,
    left: 20,
    padding: "7px 12px",
    borderRadius: 999,
    backgroundColor: "#2563EB",
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: 800,
  },

  planHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
  },

  planName: {
    fontSize: 24,
    fontWeight: 800,
    lineHeight: 1.1,
  },

  planTag: {
    marginTop: 6,
    color: "#9CA3AF",
    fontSize: 14,
  },

  planPriceWrap: {
    textAlign: "right",
    flexShrink: 0,
  },

  planPrice: {
    fontSize: 30,
    fontWeight: 800,
    lineHeight: 1,
  },

  planPeriod: {
    color: "#9CA3AF",
    fontSize: 14,
    marginTop: 6,
  },

  planDivider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.08)",
  },

  planList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    color: "#E5E7EB",
    fontSize: 15,
    lineHeight: 1.6,
  },

  planItem: {},

  planButtonSecondary: {
    marginTop: "auto",
    textDecoration: "none",
    textAlign: "center",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    padding: "14px 18px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: 700,
  },

  planButtonPrimary: {
    marginTop: "auto",
    textDecoration: "none",
    textAlign: "center",
    backgroundColor: "#2563EB",
    color: "#FFFFFF",
    padding: "14px 18px",
    borderRadius: 12,
    fontWeight: 800,
    boxShadow: "0 14px 36px rgba(37,99,235,0.28)",
  },

  ctaSection: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 20px 80px",
  },

  ctaCard: {
    borderRadius: 28,
    padding: "32px 24px",
    textAlign: "center",
    background:
      "linear-gradient(180deg, rgba(37,99,235,0.18) 0%, rgba(15,23,42,0.96) 100%)",
    border: "1px solid rgba(96,165,250,0.22)",
  },

  ctaTitle: {
    margin: "14px 0 10px",
    fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
    lineHeight: 1.1,
    fontWeight: 800,
  },

  ctaDescription: {
    margin: "0 auto",
    maxWidth: 720,
    color: "#D1D5DB",
    fontSize: 17,
    lineHeight: 1.7,
  },
};