import React from "react";

export default function Home() {
  return (
    <main style={styles.page}>
      <section style={styles.heroSection}>
        <div style={styles.heroGlowLarge} />
        <div style={styles.heroGlowSmall} />

        <div style={styles.navbar}>
          <div style={styles.logoWrap}>
            <div style={styles.logoBadge}>L</div>
            <div>
              <div style={styles.logoText}>Locky</div>
              <div style={styles.logoSubtext}>Lockdown total em segundos</div>
            </div>
          </div>

          <div style={styles.navActions}>
            <div style={styles.trustMiniPill}>Cancele quando quiser</div>
            <a href="#planos" style={styles.navButton}>
              Ver planos
            </a>
          </div>
        </div>

        <div style={styles.heroContent}>
          <div style={styles.heroLeft}>
            <div style={styles.heroPill}>Proteção rápida para o que mais importa</div>

            <h1 style={styles.heroTitle}>
              Se roubarem seu celular hoje, quanto tempo você leva para retomar o
              controle?
            </h1>

            <p style={styles.heroSubtitle}>Com a Locky: segundos.</p>

            <p style={styles.heroDescription}>
              Ser roubado já é traumático. O que vem depois pode ser pior:
              bloquear bancos, cancelar linha, proteger o WhatsApp, avisar
              contatos, correr atrás de outro aparelho. A Locky existe para
              encurtar esse caos e devolver controle em segundos.
            </p>

            <div style={styles.heroInsightCard}>
              <div style={styles.heroInsightTitle}>Lockdown total em segundos</div>
              <p style={styles.heroInsightText}>
                Com um acionamento simples, a Locky ajuda você a bloquear as
                frentes mais urgentes, proteger acessos críticos e seguir com
                apoio real até a situação sair do modo crise.
              </p>
            </div>

            <div style={styles.ctaRow}>
              <a href="#planos" style={styles.primaryButton}>
                Conhecer planos
              </a>
              <a href="#como-funciona" style={styles.secondaryButton}>
                Como funciona
              </a>
            </div>

            <div style={styles.heroTrustRow}>
              <div style={styles.trustPill}>Sem fidelidade</div>
              <div style={styles.trustPill}>Atendimento humano 24h</div>
              <div style={styles.trustPill}>Bloqueio rápido</div>
            </div>
          </div>

          <div style={styles.heroRight}>
            <div style={styles.controlCard}>
              <div style={styles.controlTopRow}>
                <div>
                  <div style={styles.cardEyebrow}>Apoio imediato</div>
                  <div style={styles.cardTitle}>Você recupera o controle</div>
                </div>
                <div style={styles.statusDot} />
              </div>

              <div style={styles.timelineList}>
                <div style={styles.timelineItem}>
                  <div style={styles.timelineNumber}>1</div>
                  <div>
                    <div style={styles.timelineTitle}>Acione a Locky</div>
                    <div style={styles.timelineText}>
                      Um fluxo simples para começar a proteção sem depender de
                      dezenas de ligações no pior momento.
                    </div>
                  </div>
                </div>

                <div style={styles.timelineItem}>
                  <div style={styles.timelineNumber}>2</div>
                  <div>
                    <div style={styles.timelineTitle}>Bloqueie o que é urgente</div>
                    <div style={styles.timelineText}>
                      Bancos, linha, WhatsApp e acessos críticos entram em modo
                      de proteção rapidamente.
                    </div>
                  </div>
                </div>

                <div style={styles.timelineItem}>
                  <div style={styles.timelineNumber}>3</div>
                  <div>
                    <div style={styles.timelineTitle}>Siga com apoio real</div>
                    <div style={styles.timelineText}>
                      No plano completo, você ainda conta com seguro e celular
                      reserva no dia seguinte.
                    </div>
                  </div>
                </div>
              </div>

              <div style={styles.infoBanner}>
                Porque ninguém deveria gastar horas resolvendo a burocracia de
                quem a assaltou.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionPill}>Como a Locky ajuda</div>
          <h2 style={styles.sectionTitle}>Resolva o que mais importa primeiro</h2>
          <p style={styles.sectionDescription}>
            Quando tudo acontece ao mesmo tempo, prioridade é tudo. A Locky foi
            desenhada para agir nas frentes mais críticas sem transformar o seu
            problema em mais horas de burocracia.
          </p>
        </div>

        <div style={styles.solutionGrid}>
          <div style={styles.solutionCardHighlight}>
            <div style={styles.solutionIcon}>🔐</div>
            <h3 style={styles.solutionTitle}>Lockdown digital imediato</h3>
            <p style={styles.solutionText}>
              Bloqueio rápido das frentes que mais importam no pior momento:
              bancos, linha, WhatsApp e acessos críticos.
            </p>
          </div>

          <div style={styles.solutionCard}>
            <div style={styles.solutionIcon}>🛡️</div>
            <h3 style={styles.solutionTitle}>Seguro complementar</h3>
            <p style={styles.solutionText}>
              Uma camada adicional de proteção para quem quer mais tranquilidade
              no dia a dia.
            </p>
          </div>

          <div style={styles.solutionCard}>
            <div style={styles.solutionIcon}>📱</div>
            <h3 style={styles.solutionTitle}>Celular reserva no dia seguinte</h3>
            <p style={styles.solutionText}>
              No plano completo, você reduz o tempo sem aparelho e retoma a sua
              rotina mais rápido.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.trustSection}>
        <div style={styles.trustBand}>
          <div style={styles.trustBandItem}>
            <div style={styles.trustBandTitle}>Cancele quando quiser</div>
            <div style={styles.trustBandText}>
              Sem fidelidade, sem travas e sem complicação.
            </div>
          </div>

          <div style={styles.trustBandItem}>
            <div style={styles.trustBandTitle}>Suporte 24h no WhatsApp</div>
            <div style={styles.trustBandText}>
              Ajuda humana no canal mais prático no momento mais difícil.
            </div>
          </div>

          <div style={styles.trustBandItem}>
            <div style={styles.trustBandTitle}>Proteção pensada para a vida real</div>
            <div style={styles.trustBandText}>
              Menos burocracia, mais clareza e ação rápida quando tudo sai do
              controle.
            </div>
          </div>
        </div>
      </section>

      <section id="planos" style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionPill}>Planos</div>
          <h2 style={styles.sectionTitle}>Escolha o nível de proteção ideal para você</h2>
          <p style={styles.sectionDescription}>
            Comece com o essencial para agir rápido ou escolha a cobertura mais
            completa para proteger também o aparelho e a sua rotina.
          </p>
        </div>

        <div style={styles.pricingIntroRow}>
          <div style={styles.pricingIntroCard}>
            <div style={styles.pricingIntroLabel}>Plano base</div>
            <div style={styles.pricingIntroValue}>R$19,90/mês</div>
            <div style={styles.pricingIntroText}>
              Lockdown digital para agir rápido e reduzir o dano imediato.
            </div>
          </div>

          <div style={styles.pricingIntroCardHighlight}>
            <div style={styles.pricingIntroLabel}>Plano completo</div>
            <div style={styles.pricingIntroValue}>R$29,90/mês</div>
            <div style={styles.pricingIntroText}>
              Lockdown + seguro do aparelho + celular reserva no dia seguinte.
            </div>
          </div>
        </div>

        <div style={styles.plansGrid}>
          <div style={styles.planCard}>
            <div style={styles.planHeader}>
              <div>
                <div style={styles.planName}>Locky Base</div>
                <div style={styles.planTag}>Para quem quer agir rápido</div>
              </div>
              <div style={styles.planPriceWrap}>
                <div style={styles.planPrice}>R$19,90</div>
                <div style={styles.planPeriod}>/mês</div>
              </div>
            </div>

            <div style={styles.planDivider} />

            <div style={styles.planList}>
              <div style={styles.planItem}>✓ Lockdown digital imediato</div>
              <div style={styles.planItem}>✓ Apoio para bloquear bancos, linha e WhatsApp</div>
              <div style={styles.planItem}>✓ Notificação de contatos de emergência</div>
              <div style={styles.planItem}>✓ Suporte 24h pelo WhatsApp</div>
              <div style={styles.planItem}>✓ Cancele quando quiser</div>
            </div>

            <a href="#contato" style={styles.planButtonSecondary}>
              Quero o plano base
            </a>
          </div>

          <div style={styles.planCardFeatured}>
            <div style={styles.featuredBadge}>Mais completo</div>

            <div style={styles.planHeader}>
              <div>
                <div style={styles.planName}>Locky Total</div>
                <div style={styles.planTag}>Proteção completa para a rotina continuar</div>
              </div>
              <div style={styles.planPriceWrap}>
                <div style={styles.planPrice}>R$29,90</div>
                <div style={styles.planPeriod}>/mês</div>
              </div>
            </div>

            <div style={styles.planDivider} />

            <div style={styles.planList}>
              <div style={styles.planItem}>✓ Tudo do plano Locky Base</div>
              <div style={styles.planItem}>✓ Seguro complementar do aparelho</div>
              <div style={styles.planItem}>✓ Celular reserva no dia seguinte</div>
              <div style={styles.planItem}>✓ Prioridade de atendimento</div>
              <div style={styles.planItem}>✓ Cancele quando quiser</div>
            </div>

            <a href="#contato" style={styles.planButtonPrimary}>
              Quero a proteção completa
            </a>
          </div>
        </div>
      </section>

      <section style={styles.testimonialSection}>
        <div style={styles.testimonialCard}>
          <div style={styles.quoteMark}>“</div>
          <p style={styles.testimonialText}>
            Você não precisa saber exatamente o que fazer nos primeiros minutos.
            Precisa de uma solução que cuide disso com você.
          </p>
          <div style={styles.testimonialMeta}>
            A Locky cuida do que é urgente para você recuperar o controle com
            mais rapidez, clareza e tranquilidade.
          </div>
        </div>
      </section>

      <section style={styles.ctaSection} id="contato">
        <div style={styles.ctaCard}>
          <div style={styles.sectionPill}>Locky</div>
          <h2 style={styles.ctaTitle}>
            Cuidado real para um momento em que ninguém deveria estar sozinho
          </h2>
          <p style={styles.ctaDescription}>
            A Locky existe para reduzir burocracia, acelerar decisões e devolver
            sensação de controle com uma experiência simples, humana e
            confortável.
          </p>

          <div style={styles.ctaHighlights}>
            <div style={styles.ctaHighlight}>Cancele quando quiser</div>
            <div style={styles.ctaHighlight}>Suporte 24h pelo WhatsApp</div>
            <div style={styles.ctaHighlight}>Plano base por R$19,90/mês</div>
          </div>

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
    backgroundColor: "#FFFBEF",
    color: "#3F3520",
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

  heroGlowLarge: {
    position: "absolute",
    top: -120,
    right: -60,
    width: 380,
    height: 380,
    borderRadius: 999,
    background:
      "radial-gradient(circle, rgba(255,210,74,0.42) 0%, rgba(255,210,74,0) 72%)",
    pointerEvents: "none",
  },

  heroGlowSmall: {
    position: "absolute",
    bottom: 20,
    left: -60,
    width: 220,
    height: 220,
    borderRadius: 999,
    background:
      "radial-gradient(circle, rgba(255,234,167,0.65) 0%, rgba(255,234,167,0) 74%)",
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
    width: 46,
    height: 46,
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFD24A",
    color: "#6E5710",
    fontWeight: 800,
    fontSize: 20,
    boxShadow: "0 12px 30px rgba(255,210,74,0.35)",
  },

  logoText: {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 1.05,
    letterSpacing: "-0.03em",
  },

  logoSubtext: {
    fontSize: 12,
    color: "#8A7B58",
    marginTop: 4,
  },

  navActions: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },

  trustMiniPill: {
    padding: "10px 14px",
    borderRadius: 999,
    backgroundColor: "rgba(255,210,74,0.26)",
    color: "#7A6111",
    fontSize: 13,
    fontWeight: 600,
  },

  navButton: {
    textDecoration: "none",
    color: "#5C4A11",
    backgroundColor: "#FFFFFF",
    border: "1px solid rgba(214,181,76,0.22)",
    borderRadius: 999,
    padding: "12px 18px",
    fontWeight: 600,
    boxShadow: "0 10px 22px rgba(75,57,7,0.06)",
  },

  heroContent: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 30,
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
    padding: "9px 15px",
    borderRadius: 999,
    backgroundColor: "#FFF2BF",
    border: "1px solid rgba(214,181,76,0.24)",
    color: "#8A6A12",
    fontSize: 14,
    fontWeight: 600,
  },

  heroTitle: {
    margin: 0,
    fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.05em",
    fontWeight: 700,
    maxWidth: 760,
  },

  heroSubtitle: {
    margin: 0,
    fontSize: 28,
    lineHeight: 1.1,
    color: "#B88A00",
    fontWeight: 600,
    letterSpacing: "-0.03em",
  },

  heroDescription: {
    margin: 0,
    fontSize: 18,
    lineHeight: 1.8,
    color: "#6A5A37",
    maxWidth: 700,
    fontWeight: 400,
  },

  heroInsightCard: {
    borderRadius: 24,
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.72)",
    border: "1px solid rgba(214,181,76,0.18)",
    boxShadow: "0 18px 36px rgba(90,71,14,0.05)",
    maxWidth: 720,
  },

  heroInsightTitle: {
    fontSize: 14,
    color: "#9A7A18",
    fontWeight: 700,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  heroInsightText: {
    margin: 0,
    color: "#5F5233",
    fontSize: 16,
    lineHeight: 1.75,
  },

  ctaRow: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 4,
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
    backgroundColor: "#FFD24A",
    color: "#4F3F0E",
    padding: "15px 24px",
    borderRadius: 999,
    fontWeight: 700,
    boxShadow: "0 16px 34px rgba(255,210,74,0.32)",
  },

  secondaryButton: {
    textDecoration: "none",
    backgroundColor: "rgba(255,255,255,0.72)",
    color: "#5F4D19",
    padding: "15px 24px",
    borderRadius: 999,
    fontWeight: 600,
    border: "1px solid rgba(214,181,76,0.18)",
  },

  heroTrustRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 2,
  },

  trustPill: {
    padding: "10px 14px",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    color: "#7A6A42",
    fontSize: 13,
    fontWeight: 500,
    border: "1px solid rgba(214,181,76,0.14)",
  },

  controlCard: {
    width: "100%",
    maxWidth: 470,
    borderRadius: 34,
    padding: 24,
    background: "linear-gradient(180deg, #FFFDF8 0%, #FFF7D9 100%)",
    border: "1px solid rgba(214,181,76,0.16)",
    boxShadow: "0 22px 60px rgba(118,92,21,0.10)",
  },

  controlTopRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 20,
  },

  cardEyebrow: {
    color: "#A27B10",
    fontSize: 13,
    marginBottom: 6,
    fontWeight: 700,
  },

  cardTitle: {
    fontSize: 26,
    fontWeight: 650,
    lineHeight: 1.15,
    letterSpacing: "-0.03em",
  },

  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 999,
    backgroundColor: "#74C365",
    boxShadow: "0 0 0 8px rgba(116,195,101,0.12)",
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
    padding: 16,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.84)",
    border: "1px solid rgba(214,181,76,0.16)",
  },

  timelineNumber: {
    minWidth: 34,
    height: 34,
    borderRadius: 999,
    backgroundColor: "#FFD24A",
    color: "#6A5613",
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
    color: "#6A5B39",
    fontSize: 14,
    lineHeight: 1.7,
  },

  infoBanner: {
    marginTop: 18,
    padding: 16,
    borderRadius: 22,
    backgroundColor: "#FFF1B8",
    color: "#6A5513",
    lineHeight: 1.65,
    border: "1px solid rgba(214,181,76,0.14)",
    fontWeight: 500,
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
    padding: "8px 13px",
    borderRadius: 999,
    backgroundColor: "#FFF2BF",
    border: "1px solid rgba(214,181,76,0.18)",
    color: "#A27B10",
    fontSize: 13,
    fontWeight: 700,
  },

  sectionTitle: {
    margin: 0,
    fontSize: "clamp(2rem, 3vw, 3.2rem)",
    lineHeight: 1.08,
    fontWeight: 650,
    letterSpacing: "-0.04em",
    maxWidth: 900,
  },

  sectionDescription: {
    margin: 0,
    maxWidth: 760,
    color: "#6A5A37",
    fontSize: 17,
    lineHeight: 1.8,
    fontWeight: 400,
  },

  solutionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
  },

  solutionCardHighlight: {
    borderRadius: 30,
    padding: 24,
    background: "linear-gradient(180deg, #FFE57D 0%, #FFF4C9 100%)",
    border: "1px solid rgba(214,181,76,0.18)",
    boxShadow: "0 18px 34px rgba(255,210,74,0.18)",
  },

  solutionCard: {
    borderRadius: 30,
    padding: 24,
    backgroundColor: "rgba(255,255,255,0.72)",
    border: "1px solid rgba(214,181,76,0.16)",
  },

  solutionIcon: {
    fontSize: 28,
    marginBottom: 12,
  },

  solutionTitle: {
    margin: 0,
    fontSize: 22,
    lineHeight: 1.2,
    fontWeight: 650,
    marginBottom: 10,
    letterSpacing: "-0.02em",
  },

  solutionText: {
    margin: 0,
    color: "#6B5B38",
    fontSize: 15,
    lineHeight: 1.75,
  },

  trustSection: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 20px 72px",
  },

  trustBand: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 14,
    borderRadius: 30,
    padding: 18,
    backgroundColor: "rgba(255,255,255,0.72)",
    border: "1px solid rgba(214,181,76,0.16)",
  },

  trustBandItem: {
    borderRadius: 22,
    padding: 18,
    backgroundColor: "#FFFFFF",
    border: "1px solid rgba(214,181,76,0.12)",
  },

  trustBandTitle: {
    fontSize: 17,
    fontWeight: 650,
    marginBottom: 6,
    color: "#4B3F22",
  },

  trustBandText: {
    fontSize: 14,
    lineHeight: 1.7,
    color: "#6A5A37",
  },

  pricingIntroRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
    marginBottom: 18,
  },

  pricingIntroCard: {
    borderRadius: 28,
    padding: 22,
    backgroundColor: "#FFFFFF",
    border: "1px solid rgba(214,181,76,0.16)",
  },

  pricingIntroCardHighlight: {
    borderRadius: 28,
    padding: 22,
    background: "linear-gradient(180deg, #FFF2BF 0%, #FFFFFF 100%)",
    border: "1px solid rgba(214,181,76,0.18)",
    boxShadow: "0 14px 28px rgba(255,210,74,0.14)",
  },

  pricingIntroLabel: {
    color: "#A27B10",
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 700,
  },

  pricingIntroValue: {
    fontSize: 36,
    fontWeight: 700,
    lineHeight: 1,
    marginBottom: 8,
    letterSpacing: "-0.04em",
  },

  pricingIntroText: {
    color: "#6B5B39",
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
    borderRadius: 30,
    padding: 24,
    backgroundColor: "rgba(255,255,255,0.78)",
    border: "1px solid rgba(214,181,76,0.16)",
    display: "flex",
    flexDirection: "column",
    gap: 18,
    boxShadow: "0 16px 28px rgba(86,66,11,0.04)",
  },

  planCardFeatured: {
    position: "relative",
    borderRadius: 30,
    padding: 24,
    background: "linear-gradient(180deg, #FFE57D 0%, #FFF9E5 100%)",
    border: "1px solid rgba(214,181,76,0.20)",
    display: "flex",
    flexDirection: "column",
    gap: 18,
    boxShadow: "0 20px 38px rgba(255,210,74,0.18)",
  },

  featuredBadge: {
    position: "absolute",
    top: -12,
    left: 20,
    padding: "8px 13px",
    borderRadius: 999,
    backgroundColor: "#B88A00",
    color: "#FFFDF4",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "0.02em",
  },

  planHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
  },

  planName: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
  },

  planTag: {
    marginTop: 6,
    color: "#8A7B58",
    fontSize: 14,
  },

  planPriceWrap: {
    textAlign: "right",
    flexShrink: 0,
  },

  planPrice: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: "-0.04em",
  },

  planPeriod: {
    color: "#8A7B58",
    fontSize: 14,
    marginTop: 6,
  },

  planDivider: {
    height: 1,
    backgroundColor: "rgba(180,141,26,0.14)",
  },

  planList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    color: "#554A2A",
    fontSize: 15,
    lineHeight: 1.7,
  },

  planItem: {},

  planButtonSecondary: {
    marginTop: "auto",
    textDecoration: "none",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    color: "#5F4D19",
    padding: "15px 18px",
    borderRadius: 999,
    border: "1px solid rgba(214,181,76,0.18)",
    fontWeight: 700,
  },

  planButtonPrimary: {
    marginTop: "auto",
    textDecoration: "none",
    textAlign: "center",
    backgroundColor: "#B88A00",
    color: "#FFFDF4",
    padding: "15px 18px",
    borderRadius: 999,
    fontWeight: 800,
    boxShadow: "0 16px 32px rgba(184,138,0,0.20)",
  },

  testimonialSection: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 20px 72px",
  },

  testimonialCard: {
    position: "relative",
    borderRadius: 34,
    padding: "34px 28px",
    background: "linear-gradient(180deg, #FFF7D9 0%, #FFFFFF 100%)",
    border: "1px solid rgba(214,181,76,0.16)",
    textAlign: "center",
  },

  quoteMark: {
    fontSize: 58,
    lineHeight: 1,
    color: "#D8B442",
    marginBottom: 10,
  },

  testimonialText: {
    margin: "0 auto",
    maxWidth: 780,
    fontSize: 28,
    lineHeight: 1.35,
    fontWeight: 500,
    letterSpacing: "-0.03em",
    color: "#4B3F22",
  },

  testimonialMeta: {
    marginTop: 14,
    color: "#8A7B58",
    fontSize: 14,
    lineHeight: 1.7,
  },

  ctaSection: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 20px 90px",
  },

  ctaCard: {
    borderRadius: 34,
    padding: "36px 24px",
    textAlign: "center",
    background: "linear-gradient(180deg, #FFE57D 0%, #FFF8E3 100%)",
    border: "1px solid rgba(214,181,76,0.18)",
    boxShadow: "0 20px 40px rgba(255,210,74,0.16)",
  },

  ctaTitle: {
    margin: "14px 0 10px",
    fontSize: "clamp(2rem, 3vw, 3rem)",
    lineHeight: 1.08,
    fontWeight: 650,
    letterSpacing: "-0.04em",
  },

  ctaDescription: {
    margin: "0 auto",
    maxWidth: 760,
    color: "#5E5234",
    fontSize: 17,
    lineHeight: 1.8,
  },

  ctaHighlights: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 18,
    marginBottom: 8,
  },

  ctaHighlight: {
    padding: "11px 14px",
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.72)",
    border: "1px solid rgba(214,181,76,0.16)",
    color: "#6A5A37",
    fontSize: 14,
    fontWeight: 500,
  },
};
