import { useEffect, useRef, useState } from "react";
import renduRobotique from "@/assets/rendu-robotique.mp4.asset.json";
import renduHumain from "@/assets/rendu-humain.mp4.asset.json";
import paymentMethods from "@/assets/payment-methods.jpeg.asset.json";
import monVendeurBanner from "@/assets/mon-vendeur-ia-banner.png.asset.json";

const CHECKOUT_URL =
  "https://lunixxhub.mychariow.com/prd_c10mhd8c/checkout";
const PROGRAM_NAME = "Méthode MIRAGE™";
const PRODUCT_TAGLINE = "Mon Vendeur IA™";
const PRICE = "14 900 FCFA";

/* ================================================================
   AUTO VIDEO — autoplay muet, IntersectionObserver, toggle son
   ================================================================ */
type AutoVideoProps = {
  src: string;
  type?: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
};
const AutoVideo = ({ src, type = "video/mp4", poster, className, style }: AutoVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setMuted(v.muted);
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className={className}
        style={style}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} type={type} />
      </video>
      <button
        type="button"
        onClick={toggleSound}
        aria-label={muted ? "Activer le son" : "Couper le son"}
        className="absolute bottom-2 right-2 font-poppins text-[0.68rem] font-semibold px-2.5 py-1.5 rounded-full backdrop-blur transition-opacity hover:opacity-100"
        style={{
          background: "rgba(10,10,15,0.72)",
          color: "#FF6D29",
          border: "1px solid rgba(255, 109, 41,0.4)",
          opacity: 0.85,
        }}
      >
        {muted ? "🔇 Activer le son" : "🔊 Couper le son"}
      </button>
    </div>
  );
};

/* ================================================================
   UI PRIMITIVES
   ================================================================ */
const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center mb-6">
    <span className="pill-badge">{children}</span>
  </div>
);

const SectionCTA = ({ label = "Oui, je veux créer mon vendeur IA" }: { label?: string }) => (
  <div className="flex justify-center mt-12">
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block font-poppins font-bold text-[0.82rem] sm:text-[0.9rem] uppercase tracking-[0.06em] py-[15px] px-8 rounded-full transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        background: "#FF6D29",
        color: "#161316",
        boxShadow: "0 8px 24px rgba(255, 109, 41,0.25), 0 0 0 1px rgba(255, 109, 41,0.4)",
        border: "none",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = "#FF8A52")}
      onMouseLeave={e => (e.currentTarget.style.background = "#FF6D29")}
    >
      👉 {label}
    </a>
  </div>
);

const SectionDivider = () => (
  <div className="max-w-[80px] mx-auto my-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255, 109, 41,0.5), transparent)" }} />
);

/* ================================================================
   PROMO BANNER + STICKY BAR
   ================================================================ */
const PromoBanner = () => (
  <div
    className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-center gap-2 px-4 font-poppins font-bold"
    style={{
      background: "linear-gradient(90deg, #453027, #FF6D29, #453027)",
      backgroundSize: "200% 100%",
      animation: "shimmer 3s linear infinite",
      height: "36px",
      minHeight: "36px",
      maxHeight: "36px",
      overflow: "hidden",
      flexWrap: "nowrap",
      color: "#161316",
      fontSize: "clamp(0.55rem, 1.5vw, 0.72rem)",
    }}
  >
    <span style={{ whiteSpace: "nowrap" }}>🔥 5 PLACES / SEMAINE</span>
    <span style={{ whiteSpace: "nowrap" }}>|</span>
    <span
      className="font-extrabold"
      style={{ whiteSpace: "nowrap", background: "rgba(0,0,0,0.15)", padding: "2px 6px", borderRadius: "2px" }}
    >
      {PRICE}
    </span>
    <span style={{ whiteSpace: "nowrap" }}>|</span>
    <span style={{ whiteSpace: "nowrap" }}>Paiement unique · Accès à vie</span>
  </div>
);

const StickyBar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`sticky-bar fixed bottom-0 left-0 right-0 z-[100] ${show ? "show" : ""}`}
      style={{
        background: "rgba(10,10,15,0.95)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255, 109, 41,0.25)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-poppins text-paper text-sm">
          {PRODUCT_TAGLINE} — <span className="text-gold font-bold">{PRICE}</span>
        </span>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold w-full sm:w-auto text-center"
        >
          <span>REJOINDRE LE PROGRAMME →</span>
        </a>
      </div>
    </div>
  );
};

/* ================================================================
   HERO
   ================================================================ */
const PaymentMethodsImage = () => (
  <div className="fade-up flex justify-center" style={{ animationDelay: "0.8s" }}>
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#1E191B",
        border: "1px solid rgba(255, 109, 41,0.25)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
        maxWidth: "520px",
        width: "100%",
      }}
    >
      <img src={paymentMethods.url} alt="Moyens de paiement sécurisés" className="w-full h-auto block" loading="lazy" />
    </div>
  </div>
);

const Hero = () => (
  <section className="relative pt-[80px] sm:pt-[92px] pb-14 sm:pb-20 overflow-hidden">
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(255, 109, 41,0.18), rgba(255, 109, 41,0.06) 35%, transparent 70%)",
      }}
    />
    <div className="page-container relative max-w-3xl mx-auto">
      <div className="fade-up flex justify-center mb-6">
        <span className="pill-badge">{PRODUCT_TAGLINE} · Édition 2026</span>
      </div>

      <h1
        className="fade-up font-poppins font-extrabold leading-[1.05] mb-6 text-[#FFFFFF] text-center"
        style={{ fontSize: "clamp(1.9rem, 6vw, 3.6rem)", animationDelay: "0.1s" }}
      >
        Arrête de perdre des ventes parce que{" "}
        <span className="text-[#FF6D29]">tu refuses de te montrer.</span>
      </h1>

      <h2
        className="fade-up font-poppins font-semibold text-center text-[#e6dfd0] text-[1.05rem] sm:text-[1.25rem] leading-[1.4] max-w-2xl mx-auto mb-6"
        style={{ animationDelay: "0.2s" }}
      >
        Crée ton premier vendeur IA en 14 jours et publie des vidéos qui inspirent confiance, même si tu détestes être devant une caméra.
      </h2>

      <div
        className="fade-up w-full mx-auto my-12 px-6 sm:px-0"
        style={{ animationDelay: "0.25s", animationDuration: "500ms", maxWidth: "1180px" }}
      >
        <img
          src={monVendeurBanner.url}
          alt="Mon Vendeur IA — Méthode MIRAGE™ : formation complète, avatar IA, vidéos, scripts, checklist de démarrage"
          className="w-full h-auto block"
          style={{ borderRadius: "20px", boxShadow: "0 20px 60px -20px rgba(0,0,0,0.6), 0 8px 24px -12px rgba(255, 109, 41,0.15)" }}
          loading="lazy"
        />
      </div>

      <p
        className="fade-up text-center text-[#a09a8e] text-[0.95rem] sm:text-[1.02rem] leading-[1.7] max-w-2xl mx-auto mb-8"
        style={{ animationDelay: "0.3s" }}
      >
        Tu apprendras à créer un avatar IA qui parle naturellement, présente tes produits à ta place et publie des vidéos professionnelles pour attirer des clients sur TikTok, Facebook et WhatsApp, sans avoir besoin d'être photogénique, de savoir monter des vidéos ou de payer une agence.
      </p>

      <p
        className="fade-up text-center text-[#c8c2b8] text-[0.8rem] uppercase tracking-[0.14em] font-poppins font-semibold mb-8"
        style={{ animationDelay: "0.4s" }}
      >
        Compatible Android et iPhone · Paiement unique · Accès à vie
      </p>

      <div
        className="fade-up flex flex-col items-center justify-center mb-6"
        style={{ animationDelay: "0.5s" }}
      >
        <span className="font-poppins uppercase text-[0.68rem] tracking-[0.18em] text-[#FF6D29] mb-1">
          Prix de lancement
        </span>
        <span className="font-poppins font-extrabold text-[2.4rem] sm:text-[3rem] text-[#FF6D29] leading-none">
          {PRICE}
        </span>
      </div>

      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-pulse block w-full text-center font-poppins font-bold text-[0.9rem] sm:text-[1rem] uppercase tracking-[0.06em] py-4 sm:py-[18px] px-6 rounded-full mb-3 transition-transform duration-300 cursor-pointer hover:-translate-y-0.5"
        style={{ background: "#FF6D29", color: "#161316", border: "none" }}
        onMouseEnter={e => (e.currentTarget.style.background = "#FF8A52")}
        onMouseLeave={e => (e.currentTarget.style.background = "#FF6D29")}
      >
        👉 OUI, JE VEUX CRÉER MON VENDEUR IA
      </a>
      <p className="text-[#BABABA] text-[0.78rem] text-center mb-6">
        ⭐️ Rejoint par 200+ créateurs et e-commerçants africains
      </p>

      <PaymentMethodsImage />
    </div>
  </section>
);

/* ================================================================
   SECTION 2 — PROBLEM (copy verbatim)
   ================================================================ */
const problemParagraphs: string[] = [
  "Tu penses peut-être que ton problème, c'est la caméra.",
  "En réalité, ce n'est pas ça.",
  "Ton vrai problème, c'est que chaque fois que tu veux publier une vidéo, tu repousses.",
];

const painPoints: string[] = [
  "Tu attends d'avoir une meilleure lumière.",
  "Tu attends d'avoir le bon téléphone.",
  "Tu attends de perdre quelques kilos.",
  "Tu attends de mieux parler.",
  "Tu attends que personne ne soit à la maison.",
  "Tu recommences plusieurs prises.",
  "Tu regardes le résultat.",
  "Tu trouves que ta voix est bizarre.",
  "Tu trouves que ton visage n'est pas naturel.",
  "Tu supprimes tout.",
];

const Problem = () => (
  <section
    className="section-padding"
    style={{ background: "linear-gradient(180deg, transparent, rgba(255, 109, 41,0.03) 50%, transparent)" }}
  >
    <div className="max-w-2xl mx-auto page-container">
      <Badge>Le vrai problème</Badge>

      <div className="space-y-4 text-center mb-10">
        {problemParagraphs.map((p, i) => (
          <p
            key={i}
            className={`reveal font-poppins ${
              i === 0 ? "text-[1.5rem] sm:text-[1.8rem] font-bold text-paper leading-tight" : "text-[#c8c2b8] text-[1rem] sm:text-[1.1rem]"
            }`}
          >
            {p}
          </p>
        ))}
      </div>

      <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
        {painPoints.map((p, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-4 rounded"
            style={{
              border: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
            <span className="text-paper/80 text-[0.9rem] leading-snug">{p}</span>
          </div>
        ))}
      </div>

      <div className="reveal text-center space-y-4 mb-10">
        <p className="text-[#c8c2b8] italic">Puis tu te promets :</p>
        <blockquote
          className="text-paper text-[1.05rem] font-poppins italic px-6 py-4 mx-auto max-w-md rounded"
          style={{ borderLeft: "3px solid #FF6D29", background: "rgba(255, 109, 41,0.05)" }}
        >
          « Je publierai demain. »
        </blockquote>
        <p className="text-[#a09a8e] text-[0.95rem]">Mais demain devient la semaine prochaine.</p>
        <p className="text-[#a09a8e] text-[0.95rem]">Puis le mois suivant.</p>
      </div>

      <div
        className="reveal p-6 rounded-lg text-center mb-10"
        style={{
          border: "1px solid rgba(255, 109, 41,0.25)",
          background: "linear-gradient(135deg, rgba(255, 109, 41,0.06), rgba(255, 109, 41,0.02))",
        }}
      >
        <p className="text-[#e6dfd0] text-[0.98rem] leading-relaxed">
          Pendant ce temps, tes concurrents publient tous les jours.
          <br />
          Et chaque vidéo qu'ils mettent en ligne attire des personnes qui auraient pu devenir <span className="text-[#FF6D29] font-semibold">TES clients</span>.
        </p>
      </div>

      <div className="reveal space-y-3 text-center">
        <p className="text-[#c8c2b8] text-[1rem]">Le problème n'est donc pas ton produit.</p>
        <p className="text-[#c8c2b8] text-[1rem]">Le problème n'est pas ton intelligence.</p>
        <p className="text-[#c8c2b8] text-[1rem]">Le problème n'est même pas ton manque de motivation.</p>
        <p className="text-paper font-poppins font-semibold text-[1.1rem] pt-4">
          Le problème, c'est que tu dépends encore de <span className="text-[#FF6D29]">toi-même</span> pour créer du contenu.
        </p>
        <p className="text-[#a09a8e] text-[0.95rem] leading-relaxed max-w-xl mx-auto pt-3">
          Et tant que tu dépendras de ton humeur, de ta confiance en toi ou de ton courage pour publier, tu publieras toujours moins que ceux qui ont un système.
        </p>
      </div>
    </div>
  </section>
);

/* ================================================================
   SECTION 3 — MIRAGE METHOD
   ================================================================ */
const mirageSteps = [
  {
    letter: "M",
    name: "Modéliser",
    lead: "Créer un avatar crédible qui représente ton activité.",
    detail: "Pas un personnage de dessin animé. Un véritable vendeur numérique.",
  },
  {
    letter: "I",
    name: "Incarner",
    lead: "Lui donner une voix naturelle.",
    detail: "Des expressions réalistes. Une manière de parler qui inspire confiance.",
  },
  {
    letter: "R",
    name: "Raconter",
    lead: "Transformer une simple idée en vidéo qui donne envie d'acheter.",
    detail: "Même si tu n'as jamais écrit un script de ta vie.",
  },
  {
    letter: "A",
    name: "Automatiser",
    lead: "Créer plusieurs vidéos à partir d'un seul produit.",
    detail: "Sans recommencer tout le travail.",
  },
  {
    letter: "G",
    name: "Générer",
    lead: "Publier régulièrement. Attirer des prospects.",
    detail: "Transformer ton contenu en conversations sur WhatsApp, Messenger ou TikTok.",
  },
];

const MirageMethod = () => (
  <section className="section-padding relative">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255, 109, 41,0.08), transparent 60%)" }}
    />
    <div className="max-w-4xl mx-auto page-container relative">
      <div className="text-center mb-14">
        <Badge>La méthode</Badge>
        <h2 className="font-poppins font-bold text-[2rem] sm:text-[2.6rem] md:text-[3rem] text-paper leading-[1.1] mb-6">
          Voici la méthode <span className="text-gold">MIRAGE™</span>
        </h2>
        <p className="text-[#c8c2b8] text-[1.02rem] leading-[1.7] max-w-xl mx-auto mb-2">
          Pourquoi ce nom ?
        </p>
        <p className="text-[#a09a8e] text-[0.98rem] leading-[1.7] max-w-xl mx-auto">
          Parce que ton client ne doit pas voir une intelligence artificielle. Il doit voir <span className="text-paper font-semibold">une personne crédible</span>.
        </p>
        <p className="text-[#c8c2b8] text-[0.95rem] mt-4">
          La méthode MIRAGE™ repose sur cinq étapes simples.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {mirageSteps.map((s, i) => (
          <div
            key={i}
            className={`reveal module-card p-6 rounded-lg ${i === 4 ? "md:col-span-2 md:max-w-[calc(50%-10px)] md:mx-auto md:w-full" : ""}`}
            style={{ background: "#1E191B", border: "1px solid rgba(255, 109, 41,0.2)" }}
          >
            <div className="flex items-start gap-5">
              <span className="big-num shrink-0" style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", minWidth: "60px" }}>
                {s.letter}
              </span>
              <div>
                <h3 className="font-poppins font-bold text-paper text-[1.15rem] mb-2">
                  {s.letter} — {s.name}
                </h3>
                <p className="text-paper/85 text-[0.95rem] leading-relaxed mb-2">{s.lead}</p>
                <p className="text-[#a09a8e] text-[0.88rem] leading-relaxed">{s.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto mt-16 text-center">
        <h3 className="font-poppins font-bold text-paper text-[1.4rem] mb-6">
          Pourquoi cette méthode <span className="text-gold">fonctionne ?</span>
        </h3>
        <p className="text-[#c8c2b8] text-[1rem] leading-[1.85] mb-4">
          Parce qu'elle ne te demande pas de devenir créateur de contenu.
        </p>
        <p className="text-[#c8c2b8] text-[1rem] leading-[1.85] mb-8">
          Elle te permet de construire un système qui crée du contenu <span className="text-paper font-semibold">avec toi... ou sans toi</span>.
        </p>
        <div className="space-y-2 mb-8">
          <p className="text-[#a09a8e] text-[0.95rem]">Tu n'as plus besoin d'attendre le bon moment.</p>
          <p className="text-[#a09a8e] text-[0.95rem]">Tu n'as plus besoin d'attendre d'avoir confiance.</p>
          <p className="text-[#a09a8e] text-[0.95rem]">Tu n'as plus besoin de trouver le courage de te filmer.</p>
        </div>
        <div
          className="p-6 rounded-xl"
          style={{
            border: "1px solid rgba(255, 109, 41,0.3)",
            background: "linear-gradient(135deg, rgba(255, 109, 41,0.08), rgba(255, 109, 41,0.02))",
          }}
        >
          <p className="text-paper italic text-[1.05rem] leading-relaxed">
            Ton vendeur IA travaille pendant que toi tu t'occupes de ton activité.
          </p>
        </div>
      </div>

      <SectionCTA />
    </div>
  </section>
);

/* ================================================================
   COMPARISON VIDEO
   ================================================================ */
const ComparisonVideo = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container text-center">
      <Badge>La preuve en vidéo</Badge>
      <h2 className="font-poppins font-bold text-[1.8rem] sm:text-[2.4rem] text-paper mb-3 leading-tight">
        Avatar générique <span className="text-gold">vs</span> vendeur IA avec la méthode MIRAGE™
      </h2>
      <p className="text-[#a09a8e] mb-10 text-[0.98rem] max-w-xl mx-auto">
        Regarde la différence. Ce n'est pas l'outil qui change tout, c'est la méthode.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          {
            src: renduRobotique.url,
            label: "Sans la méthode",
            sub: "Outil IA par défaut, prompts génériques",
            badge: "✕ Robotique",
            badgeBg: "rgba(220,80,80,0.15)",
            badgeColor: "#e57373",
            badgeBorder: "rgba(220,80,80,0.4)",
          },
          {
            src: renduHumain.url,
            label: "Avec la méthode MIRAGE™",
            sub: "Prompts, réglages et montage enseignés",
            badge: "✓ Naturel",
            badgeBg: "rgba(255, 109, 41,0.15)",
            badgeColor: "#FF6D29",
            badgeBorder: "rgba(255, 109, 41,0.5)",
          },
        ].map((v, i) => (
          <div
            key={i}
            className="reveal rounded-md overflow-hidden transition-all duration-300"
            style={{ background: "#1E191B", border: "1px solid rgba(255, 109, 41,0.25)" }}
          >
            <div className="w-full" style={{ aspectRatio: "9/16", maxHeight: "560px" }}>
              <AutoVideo src={v.src} className="w-full h-full object-contain" style={{ background: "#000" }} />
            </div>
            <div className="p-4 flex items-center justify-between gap-3 text-left">
              <div>
                <p className="font-poppins text-paper text-[0.95rem] font-semibold">{v.label}</p>
                <p className="text-[#BABABA] text-[0.75rem] mt-0.5">{v.sub}</p>
              </div>
              <span
                className="font-poppins text-[0.7rem] font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                style={{ background: v.badgeBg, color: v.badgeColor, border: `1px solid ${v.badgeBorder}` }}
              >
                {v.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="italic text-[#c8c2b8] text-[0.95rem] mt-10 max-w-2xl mx-auto">
        La différence n'est pas l'outil. C'est la méthode. Et c'est exactement ce que tu apprends dans MIRAGE™.
      </p>
    </div>
  </section>
);

/* ================================================================
   ROSINE — CREDIBILITY (section 4 début)
   ================================================================ */
const RosinePhoto = () => {
  const [imgError, setImgError] = useState(false);
  return (
    <div
      className="relative mx-auto md:mx-0 w-full max-w-[260px] md:max-w-[300px] shrink-0"
      style={{ height: "clamp(280px, 32vw, 360px)" }}
    >
      <div
        className="w-full h-full rounded-xl overflow-hidden"
        style={{ border: "2px solid rgba(255, 109, 41,0.3)", boxShadow: "0 24px 48px rgba(0,0,0,0.4)" }}
      >
        {imgError ? (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: "linear-gradient(135deg, #1a1a2e, #1E191B)" }}
          >
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 109, 41,0.3)" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-[#BABABA] text-[0.8rem]">[ Photo Rosine ]</span>
          </div>
        ) : (
          <img
            src="/images/rosine-photo.jpg"
            alt="Rosine — Formatrice Méthode MIRAGE™"
            className="w-full h-full object-cover object-top"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <span
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-poppins font-bold text-[0.62rem] md:text-[0.7rem] px-4 md:px-5 py-2 rounded-full"
        style={{ background: "#FF6D29", color: "#161316" }}
      >
        ✓ +3 500 000 FCFA générés · sans publicité
      </span>
    </div>
  );
};

const CredibilitySection = () => (
  <section
    className="section-padding"
    style={{ background: "linear-gradient(180deg, transparent, rgba(255, 109, 41,0.03) 50%, transparent)" }}
  >
    <div className="max-w-4xl mx-auto page-container">
      <div className="text-center mb-12">
        <Badge>Je sais ce que tu penses</Badge>
        <h2 className="font-poppins font-bold text-[1.8rem] sm:text-[2.4rem] text-paper leading-tight max-w-2xl mx-auto">
          Je sais exactement ce que <span className="text-gold">tu es en train de penser.</span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-5 mb-12">
        <p className="text-[#c8c2b8]">Tu te dis peut-être :</p>
        {[
          "« J'ai déjà acheté une formation qui promettait monts et merveilles. »",
          "« Les captures d'écran, ça se fabrique. »",
          "« Les témoignages sont peut-être inventés. »",
        ].map((q, i) => (
          <blockquote
            key={i}
            className="reveal text-paper italic px-5 py-4 rounded"
            style={{ borderLeft: "3px solid rgba(255, 109, 41,0.5)", background: "rgba(255, 109, 41,0.04)" }}
          >
            {q}
          </blockquote>
        ))}
        <p className="text-[#c8c2b8] pt-2">Franchement... tu as raison d'être méfiant.</p>
        <p className="text-[#a09a8e] text-[0.95rem] leading-[1.8]">
          Aujourd'hui, n'importe qui peut afficher un faux chiffre d'affaires ou acheter de faux commentaires.
        </p>
        <p className="text-paper font-poppins font-semibold text-[1.05rem]">
          Je ne vais donc pas te demander de me croire sur parole.
        </p>
        <p className="text-[#c8c2b8]">Je vais simplement te montrer ce que je fais réellement.</p>
      </div>

      <SectionDivider />

      <div className="mt-14">
        <h3 className="font-poppins font-bold text-paper text-[1.4rem] sm:text-[1.7rem] text-center mb-10 leading-tight max-w-2xl mx-auto">
          Avant d'enseigner cette méthode, <span className="text-gold">je l'ai utilisée pour moi-même.</span>
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-12">
          <RosinePhoto />
          <div className="flex-1 mt-6 md:mt-0 space-y-4">
            <p className="text-[#c8c2b8] text-[0.98rem] leading-[1.9]">
              Je ne me suis pas réveillée un matin en décidant de vendre une formation sur l'IA.
            </p>
            <p className="text-[#c8c2b8] text-[0.98rem] leading-[1.9]">
              J'ai commencé parce que j'avais exactement le problème que tu rencontres aujourd'hui.
            </p>
            <p className="text-paper text-[1.02rem] font-poppins font-semibold leading-[1.7]">
              Je voulais vendre davantage... mais je refusais d'être constamment devant une caméra.
            </p>
            <p className="text-[#a09a8e] text-[0.95rem] leading-[1.9]">
              J'ai donc testé des dizaines d'outils. Des dizaines de prompts. Des dizaines de méthodes. La majorité ne fonctionnaient pas.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-4 mb-12">
          <p className="text-[#c8c2b8] text-[0.98rem] leading-[1.9]">
            Certaines produisaient des vidéos magnifiques... mais personne ne regardait jusqu'au bout.
          </p>
          <p className="text-[#c8c2b8] text-[0.98rem] leading-[1.9]">
            D'autres donnaient des vidéos réalistes... mais elles ne faisaient pas vendre.
          </p>
          <p className="text-[#c8c2b8] text-[0.98rem] leading-[1.9]">
            Il m'a fallu des mois de tests avant de comprendre ce qui faisait réellement la différence.
          </p>

          <div
            className="p-6 rounded-lg space-y-2 mt-6"
            style={{
              border: "1px solid rgba(255, 109, 41,0.25)",
              background: "rgba(255, 109, 41,0.04)",
            }}
          >
            <p className="text-[#a09a8e] text-[0.9rem]">Ce n'est pas l'outil.</p>
            <p className="text-paper font-poppins font-semibold text-[1.05rem]">
              C'est la manière de raconter une histoire.
            </p>
            <p className="text-paper text-[0.98rem]">La manière de faire parler un avatar.</p>
            <p className="text-paper text-[0.98rem]">La manière de construire une vidéo qui donne envie d'envoyer un message.</p>
            <p className="text-[#FF6D29] font-poppins font-semibold text-[1rem] pt-3">
              C'est cette méthode que tu vas apprendre.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ================================================================
   VIDEO SECTION — l'IA en action
   ================================================================ */
const videos = [
  { src: "/videos/magasin.mp4", label: "Dans un magasin d'habits" },
  { src: "/videos/voiture.mp4", label: "Dans une voiture" },
  { src: "/videos/studio-2.mp4", label: "En studio" },
];

const VideoSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container">
      <div className="text-center mb-10">
        <Badge>La formation en action</Badge>
        <h2 className="font-poppins font-bold text-[1.8rem] sm:text-[2.4rem] text-paper mb-3 leading-tight">
          Vois par toi-même <span className="text-gold">ce que l'IA produit</span>
        </h2>
        <p className="text-[#a09a8e] max-w-xl mx-auto text-[0.98rem]">
          Ton vendeur IA peut apparaître partout — magasin, voiture, studio — sans que tu aies à t'y déplacer.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {videos.map((v, i) => (
          <div
            key={i}
            className="reveal rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255, 109, 41,0.08)]"
            style={{ background: "#1E191B", border: "1px solid rgba(255, 109, 41,0.25)" }}
          >
            <div className="w-full" style={{ aspectRatio: "9/16", maxHeight: "480px" }}>
              <AutoVideo src={v.src} className="w-full h-full object-contain rounded" style={{ background: "#000" }} />
            </div>
            <div className="p-4">
              <p className="font-poppins text-paper text-sm">{v.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ================================================================
   PROOF — Elles l'ont appliquée (Awa/Khadija/Fatou)
   ================================================================ */
const students = [
  {
    initials: "AW",
    name: "Awa",
    activity: "Boutique de vêtements",
    before: "Une vidéo publiée toutes les deux semaines",
    after: "Publication quotidienne et plus de conversations WhatsApp",
    days: "21 jours",
  },
  {
    initials: "KH",
    name: "Khadija",
    activity: "Produits cosmétiques",
    before: "Impossible de se filmer",
    after: "Son avatar IA publie plusieurs vidéos chaque semaine",
    days: "Après le programme",
  },
  {
    initials: "FT",
    name: "Fatou",
    activity: "Bijoux",
    before: "Débutante complète",
    after: "Premier avatar créé le premier week-end. Premières vidéos publiées quelques jours plus tard",
    days: "Premier week-end",
  },
];

const StudentsProofSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container">
      <div className="text-center mb-12">
        <Badge>Des élèves l'ont aussi appliquée</Badge>
        <h2 className="font-poppins font-bold text-[1.8rem] sm:text-[2.4rem] text-paper mb-4 leading-tight">
          Ce que la méthode a changé pour elles
        </h2>
        <p className="text-[#a09a8e] text-[0.95rem] max-w-xl mx-auto">
          Trois profils réels — pour que tu ne penses pas <em>« oui... mais elles étaient déjà fortes. »</em> La majorité des personnes que j'accompagne commencent exactement comme toi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {students.map((s, i) => (
          <div
            key={i}
            className="reveal glow-card rounded-lg p-6"
            style={{ background: "#1E191B", border: "1px solid rgba(255, 109, 41,0.25)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-ink font-poppins"
                style={{ background: "linear-gradient(135deg, #FF6D29, #FF8A52)" }}
              >
                {s.initials}
              </div>
              <div>
                <p className="font-poppins font-bold text-paper text-[1rem]">{s.name}</p>
                <p className="text-[#BABABA] text-[0.78rem]">{s.activity}</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-poppins uppercase text-[0.65rem] tracking-[0.14em] text-[#BABABA] mb-1">Avant</p>
              <p className="text-[#c8c2b8] text-[0.9rem] leading-snug">{s.before}</p>
            </div>
            <div className="mb-4">
              <p className="font-poppins uppercase text-[0.65rem] tracking-[0.14em] text-[#FF6D29] mb-1">Après</p>
              <p className="text-paper text-[0.92rem] leading-snug">{s.after}</p>
            </div>
            <div
              className="mt-5 pt-3 text-center font-poppins text-[0.72rem] tracking-wider uppercase text-[#FF6D29] font-semibold"
              style={{ borderTop: "1px solid rgba(255, 109, 41,0.15)" }}
            >
              ⏱ {s.days}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="reveal p-8 rounded-xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(255, 109, 41,0.1), rgba(255, 109, 41,0.03))",
            border: "1px solid rgba(255, 109, 41,0.35)",
          }}
        >
          <p className="font-poppins uppercase text-[0.68rem] tracking-[0.15em] text-[#FF6D29] mb-3">À ce jour</p>
          <p className="font-poppins font-extrabold text-[2.8rem] leading-none text-paper mb-2">200+</p>
          <p className="text-[#c8c2b8] text-[0.92rem] leading-snug">
            créateurs et e-commerçants africains accompagnés
          </p>
        </div>
        <div
          className="reveal p-8 rounded-xl"
          style={{
            background: "#1E191B",
            border: "1px solid rgba(255, 109, 41,0.2)",
          }}
        >
          <p className="text-[#c8c2b8] text-[0.95rem] leading-[1.8] italic">
            « Je préfère annoncer un chiffre précis plutôt qu'un énorme chiffre impressionnant. Parce qu'il est <span className="text-[#FF6D29] font-semibold not-italic">vérifiable</span>. »
          </p>
          <p className="font-poppins text-paper text-[0.85rem] font-semibold mt-4">— Rosine</p>
        </div>
      </div>
    </div>
  </section>
);

/* ================================================================
   PROOF — Screenshots (preuves visuelles élèves)
   ================================================================ */
const PreuvesSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container">
      <div className="text-center mb-10">
        <Badge>Ils l'ont fait</Badge>
        <h2 className="font-poppins font-bold text-[1.8rem] sm:text-[2.4rem] text-paper mb-3 leading-tight">
          <span className="text-gold">Captures réelles</span> envoyées par les élèves
        </h2>
        <p className="text-[#a09a8e] text-[0.95rem] max-w-xl mx-auto">
          Non retouchées. Partagées avec leur accord. Contexte : messages WhatsApp, ventes, commandes après application des modules.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map(n => (
          <div
            key={n}
            className="reveal overflow-hidden rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(255, 109, 41,0.08)]"
            style={{ background: "#1E191B", border: "1px solid rgba(255,255,255,0.07)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255, 109, 41,0.4)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
          >
            <img src={`/images/preuve-${n}.jpg`} alt={`Preuve résultat apprenant ${n}`} className="w-full h-auto block" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <span
          className="text-[0.75rem] text-[#BABABA] px-5 py-2.5 rounded-sm"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          🔒 Captures partagées avec accord des apprenants · Résultats non garantis et variables selon l'effort
        </span>
      </div>
    </div>
  </section>
);

/* ================================================================
   PROOF — Dashboards Rosine (CA)
   ================================================================ */
const caCards = [
  { img: "/images/ca-1.jpg", label: "Tableau de bord — Ventes organiques", sub: "0 FCFA dépensé en publicité" },
  { img: "/images/ca-2.jpg", label: "Récapitulatif revenus du mois", sub: "100 % organique · Contenu IA" },
  { img: "/images/ca-3.jpg", label: "Statistiques sans publicité payante", sub: "Méthode enseignée dans MIRAGE™" },
];

const PreuvesCASection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container">
      <div className="text-center mb-10">
        <Badge>Preuve concrète — mes propres dashboards</Badge>
        <h2 className="font-poppins font-bold text-[1.8rem] sm:text-[2.4rem] text-paper mb-3 leading-tight">
          Ce que la méthode m'a permis de générer <span className="text-gold">sans publicité et sans me montrer</span>
        </h2>
        <p className="text-[#a09a8e] text-[0.92rem] max-w-lg mx-auto">
          Captures volontairement non masquées. Je préfère que tu vérifies par toi-même plutôt que de me croire aveuglément.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {caCards.slice(0, 2).map((c, i) => (
          <div
            key={i}
            className="reveal overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{ background: "#1E191B", border: "1px solid rgba(255, 109, 41,0.2)", borderRadius: 10 }}
          >
            <img src={c.img} alt={c.label} className="w-full h-auto block" />
            <div
              style={{
                padding: "16px 20px",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(255, 109, 41,0.03)",
              }}
            >
              <p className="font-poppins font-bold" style={{ fontSize: "0.9rem", color: "#FFFFFF" }}>
                {c.label}
              </p>
              <p style={{ fontSize: "0.78rem", color: "#BABABA", marginTop: 4 }}>{c.sub}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <div
          className="reveal overflow-hidden transition-all duration-300 hover:-translate-y-1 w-full sm:max-w-[60%]"
          style={{ background: "#1E191B", border: "1px solid rgba(255, 109, 41,0.2)", borderRadius: 10 }}
        >
          <img src={caCards[2].img} alt={caCards[2].label} className="w-full h-auto block" />
          <div
            style={{
              padding: "16px 20px",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              background: "rgba(255, 109, 41,0.03)",
            }}
          >
            <p className="font-poppins font-bold" style={{ fontSize: "0.9rem", color: "#FFFFFF" }}>
              {caCards[2].label}
            </p>
            <p style={{ fontSize: "0.78rem", color: "#BABABA", marginTop: 4 }}>{caCards[2].sub}</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-14 text-center">
        <SectionDivider />
        <h3 className="font-poppins font-bold text-paper text-[1.3rem] mt-6 mb-4">
          Pourquoi cette méthode est <span className="text-gold">différente ?</span>
        </h3>
        <div className="space-y-2 text-[#c8c2b8] text-[0.98rem]">
          <p>Parce que tu n'achètes pas une formation sur ChatGPT.</p>
          <p>Tu n'achètes pas une formation sur HeyGen.</p>
          <p>Tu n'achètes pas une formation sur CapCut.</p>
          <p className="text-paper font-poppins font-semibold pt-3 text-[1.05rem]">
            Tu apprends un <span className="text-[#FF6D29]">système complet</span>.
          </p>
          <p className="text-[#a09a8e] text-[0.92rem] pt-4">
            Les outils évolueront. Ils changeront. Certains disparaîtront. Mais la méthode restera la même. C'est exactement pour cette raison que les mises à jour de la formation sont incluses.
          </p>
        </div>
      </div>

      <SectionCTA />
    </div>
  </section>
);

/* ================================================================
   OBJECTIONS (section 5 — full copy)
   ================================================================ */
const objections = [
  {
    q: "C'est quoi exactement un vendeur IA ?",
    a: (
      <>
        <p>Je ne parle pas d'un chatbot. Je ne parle pas non plus d'un simple avatar qui lit un texte avec une voix robotique.</p>
        <p className="mt-3">Un vendeur IA est un personnage numérique capable de présenter tes produits dans des vidéos qui ressemblent à celles d'un vrai créateur de contenu.</p>
        <p className="mt-3">Il peut :</p>
        <ul className="mt-2 space-y-1 list-none">
          <li>· parler naturellement,</li>
          <li>· présenter un produit,</li>
          <li>· apparaître dans différents décors,</li>
          <li>· publier du contenu qui attire des prospects.</li>
        </ul>
        <p className="mt-3">L'objectif n'est pas de remplacer ton entreprise. L'objectif est de remplacer la partie la plus difficile pour beaucoup d'entre nous : <span className="text-paper">être constamment devant une caméra</span>.</p>
      </>
    ),
  },
  {
    q: "Est-ce que je vais vraiment réussir à créer ça ? Je suis nul en informatique.",
    a: (
      <>
        <p>Tu n'as pas besoin d'être bon en informatique. Tu n'as pas besoin de coder. Tu n'as pas besoin de comprendre l'intelligence artificielle.</p>
        <p className="mt-3">Si tu sais installer une application, envoyer un message WhatsApp, utiliser TikTok, alors tu peux suivre cette méthode.</p>
        <p className="mt-3">Chaque étape est filmée. Tu vois exactement où cliquer. Tu reproduis simplement ce que je fais.</p>
      </>
    ),
  },
  {
    q: "Je n'ai qu'un téléphone Android. Est-ce que ça fonctionne ?",
    a: (
      <>
        <p>Oui.</p>
        <p className="mt-3">Le programme a été conçu pour les réalités du marché africain. Tu peux suivre la majorité des modules directement depuis Android ou iPhone.</p>
        <p className="mt-3">Certaines manipulations sont plus confortables sur ordinateur, mais elles ne sont pas obligatoires pour commencer.</p>
      </>
    ),
  },
  {
    q: "Est-ce que je vais devoir payer plusieurs abonnements tous les mois ?",
    a: (
      <>
        <p>Non.</p>
        <p className="mt-3">Pour chaque outil, je t'indique :</p>
        <ul className="mt-2 space-y-1 list-none">
          <li>· sa version gratuite,</li>
          <li>· sa version payante,</li>
          <li>· dans quel cas il est utile de payer,</li>
          <li>· et surtout quelles alternatives gratuites existent.</li>
        </ul>
        <p className="mt-3">Tu peux démarrer avec un budget très faible. Puis évoluer uniquement lorsque ton activité commencera à générer des revenus.</p>
      </>
    ),
  },
  {
    q: "Quels logiciels vais-je utiliser exactement ?",
    a: (
      <>
        <p>Tu apprendras à utiliser plusieurs outils modernes comme :</p>
        <ul className="mt-2 space-y-1 list-none">
          <li>· ChatGPT,</li>
          <li>· Google Gemini,</li>
          <li>· CapCut,</li>
          <li>· HeyGen ou un équivalent selon les évolutions du marché,</li>
          <li>· ElevenLabs lorsque cela apporte une vraie valeur.</li>
        </ul>
        <p className="mt-3">Mais retiens une chose importante : les outils changent chaque année. La méthode reste la même.</p>
      </>
    ),
  },
  {
    q: "Est-ce que cette méthode fonctionne seulement pour les vêtements ?",
    a: (
      <>
        <p>Non. Le vendeur IA peut présenter pratiquement tout ce qui se vend grâce à la vidéo.</p>
        <p className="mt-3">Par exemple : vêtements, cosmétiques, bijoux, produits digitaux, formations, coaching, immobilier, restaurants, instituts de beauté, artisans, services.</p>
        <p className="mt-3">Tu adaptes simplement le message. La méthode reste identique.</p>
      </>
    ),
  },
  {
    q: "Et si je n'ai même pas encore de produit à vendre ?",
    a: (
      <>
        <p>Tu peux malgré tout suivre la formation.</p>
        <p className="mt-3">Pourquoi ? Parce que tu apprendras d'abord à créer ton vendeur IA. Ensuite, tu pourras utiliser ce système pour vendre ton futur produit, une prestation, un service, une formation ou un produit physique.</p>
      </>
    ),
  },
  {
    q: "Pourquoi la formation coûte seulement 14 900 FCFA ?",
    a: (
      <>
        <p>J'ai volontairement choisi un prix plus accessible.</p>
        <p className="mt-3">Pourquoi ? Parce que je préfère former davantage d'entrepreneurs africains plutôt que de réserver cette méthode à une minorité.</p>
      </>
    ),
  },
  {
    q: "Est-ce que je vais gagner 3 500 000 FCFA comme toi ?",
    a: (
      <>
        <p>Non. Et personne ne peut te le promettre honnêtement.</p>
        <p className="mt-3">Les 3 500 000 FCFA correspondent à mes propres résultats.</p>
        <p className="mt-3">Ce que je peux te garantir, c'est que tu apprendras exactement la méthode que j'utilise pour créer mes vidéos et développer mon activité.</p>
      </>
    ),
  },
  {
    q: "Et si mes vidéos ressemblent quand même à un robot ?",
    a: (
      <>
        <p>C'est justement ce que la méthode évite. La plupart des personnes utilisent les outils avec leurs réglages par défaut.</p>
        <p className="mt-3">Dans la méthode MIRAGE™, tu apprends :</p>
        <ul className="mt-2 space-y-1 list-none">
          <li>· comment écrire les bons prompts,</li>
          <li>· comment régler les mouvements,</li>
          <li>· comment améliorer la voix,</li>
          <li>· comment monter les vidéos pour obtenir un rendu naturel.</li>
        </ul>
      </>
    ),
  },
  {
    q: "Et si ma famille découvre mes vidéos ?",
    a: (
      <>
        <p>Tu décides de ce que tu veux montrer.</p>
        <p className="mt-3">Tu peux créer un vendeur IA qui te ressemble, qui représente uniquement ta marque, ou qui ne te ressemble pas du tout.</p>
        <p className="mt-3">Tu gardes le contrôle de ton image.</p>
      </>
    ),
  },
  {
    q: "Combien de temps faut-il chaque jour ?",
    a: (
      <>
        <p>La majorité des élèves consacrent entre 30 et 60 minutes par jour.</p>
        <p className="mt-3">L'objectif n'est pas de passer des journées entières devant ton téléphone. L'objectif est de construire progressivement ton système.</p>
      </>
    ),
  },
  {
    q: "Pourquoi seulement 5 nouvelles places par semaine ?",
    a: (
      <>
        <p>Parce que chaque nouvel élève reçoit un accompagnement.</p>
        <p className="mt-3">Je préfère limiter le nombre d'inscriptions plutôt que de vendre des centaines d'accès sans pouvoir assurer un suivi de qualité.</p>
      </>
    ),
  },
  {
    q: "Et si je ne suis vraiment pas fait pour ça ?",
    a: (
      <>
        <p>Alors cette formation n'est probablement pas faite pour toi.</p>
        <p className="mt-3">Mais si tu es arrivé jusqu'ici, c'est probablement parce qu'<span className="text-paper">une partie de toi en a assez de regarder les autres publier pendant que tu repousses encore.</span></p>
      </>
    ),
  },
];

const Objections = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="section-padding" style={{ background: "linear-gradient(180deg, transparent, rgba(255, 109, 41,0.03), transparent)" }}>
      <div className="max-w-3xl mx-auto page-container">
        <div className="text-center mb-12">
          <Badge>Objections traitées</Badge>
          <h2 className="font-poppins font-bold text-[1.8rem] sm:text-[2.4rem] text-paper leading-tight max-w-2xl mx-auto">
            Avant de continuer, laisse-moi répondre aux questions que la plupart <span className="text-gold">se posent avant de rejoindre.</span>
          </h2>
        </div>
        <div className="space-y-3">
          {objections.map((o, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                className="reveal rounded-lg overflow-hidden transition-all"
                style={{
                  background: "#1E191B",
                  border: open ? "1px solid rgba(255, 109, 41,0.4)" : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between text-left px-5 py-5 font-poppins font-semibold text-paper text-[0.95rem] sm:text-[1rem] leading-snug gap-4"
                >
                  <span>« {o.q} »</span>
                  <span
                    className="text-gold text-xl shrink-0 transition-transform duration-300"
                    style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}
                  >
                    +
                  </span>
                </button>
                {open && (
                  <div className="px-5 pb-6 text-[#c8c2b8] text-[0.93rem] leading-[1.85]">{o.a}</div>
                )}
              </div>
            );
          })}
        </div>
        <SectionCTA />
      </div>
    </section>
  );
};

/* ================================================================
   OFFER — value stack
   ================================================================ */
const modules = [
  { n: "01", name: "Les fondations invisibles", tagline: "Construis une stratégie avant de toucher à un seul outil.", body: "Tu définis ton positionnement, ton client idéal, le style de ton vendeur IA et le type de vidéos qui fonctionnent dans ton secteur.", value: "25 000 FCFA" },
  { n: "02", name: "Crée un vendeur IA crédible", tagline: "Ton avatar ne doit pas ressembler à un robot.", body: "Tu apprends à créer un personnage numérique qui inspire confiance.", value: "40 000 FCFA" },
  { n: "03", name: "Donne-lui une voix humaine", tagline: "Une mauvaise voix détruit toute la crédibilité d'une vidéo.", body: "Tu découvres comment produire une voix naturelle.", value: "35 000 FCFA" },
  { n: "04", name: "Les scripts qui donnent envie d'acheter", tagline: "Tu ne regarderas plus jamais une page blanche.", body: "Tu apprends à créer des hooks, vidéos TikTok, vidéos Facebook, vidéos WhatsApp et vidéos publicitaires.", value: "45 000 FCFA" },
  { n: "05", name: "Produire une vidéo en moins de 20 minutes", tagline: "Passe d'une idée à une vidéo prête à publier.", body: "Chaque clic, chaque manipulation, chaque réglage est montré.", value: "35 000 FCFA" },
  { n: "06", name: "Publier pour attirer des prospects", tagline: "Parce qu'une belle vidéo qui ne génère aucun message ne sert à rien.", body: "Tu découvres où publier, à quelle fréquence, quelles vidéos privilégier, et comment transformer une vue en conversation.", value: "40 000 FCFA" },
  { n: "07", name: "Les erreurs qui coûtent des ventes", tagline: "Évite les pièges qui font abandonner 80 % des débutants.", body: "Tu apprends les erreurs à éviter pour avancer plus vite.", value: "20 000 FCFA" },
];

const bonuses = [
  { n: "01", name: "Les 100 prompts qui créent les meilleures vidéos IA", value: "30 000 FCFA" },
  { n: "02", name: "Les 50 scripts TikTok qui fonctionnent déjà", value: "25 000 FCFA" },
  { n: "03", name: "La bibliothèque de vendeurs IA", value: "35 000 FCFA" },
  { n: "04", name: "Les outils gratuits que j'utiliserais si je recommençais aujourd'hui", value: "20 000 FCFA" },
  { n: "05", name: "Les checklists de publication", value: "15 000 FCFA" },
];

const recap = [
  { label: "Formation complète", value: "95 000 FCFA" },
  { label: "Bonus", value: "40 000 FCFA" },
  { label: "Templates", value: "20 000 FCFA" },
  { label: "Mises à jour", value: "15 000 FCFA" },
  { label: "Support", value: "20 000 FCFA" },
];

const Offer = () => (
  <section id="offre" className="section-padding relative">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255, 109, 41,0.08), transparent 60%)" }}
    />
    <div className="max-w-5xl mx-auto page-container relative">
      <div className="text-center mb-14">
        <Badge>L'offre complète</Badge>
        <h2 className="font-poppins font-bold text-[2rem] sm:text-[2.8rem] text-paper mb-4 leading-tight">
          Tu n'achètes pas une formation.
        </h2>
        <p className="text-[#c8c2b8] text-[1.05rem] sm:text-[1.2rem] max-w-2xl mx-auto leading-[1.6]">
          Tu construis un <span className="text-gold font-semibold">vendeur IA qui pourra travailler pour toi pendant des années</span>.
        </p>
        <p className="text-[#a09a8e] text-[0.95rem] mt-6 max-w-2xl mx-auto leading-[1.8]">
          En rejoignant la <strong className="text-paper">Méthode MIRAGE™</strong>, tu suis un parcours conçu pour t'emmener d'un simple débutant à une personne capable de créer des vidéos professionnelles qui attirent des prospects sans avoir besoin de se filmer.
        </p>
        <p className="font-poppins uppercase text-[0.72rem] tracking-[0.18em] text-[#FF6D29] mt-8">
          Voici exactement ce que tu reçois
        </p>
      </div>

      {/* Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {modules.map((m, i) => (
          <div
            key={i}
            className="reveal module-card p-6 rounded-lg"
            style={{ background: "#1E191B", border: "1px solid rgba(255, 109, 41,0.2)" }}
          >
            <div className="flex items-start gap-4">
              <span className="big-num shrink-0" style={{ fontSize: "clamp(2.6rem, 5vw, 3.6rem)", minWidth: "55px" }}>
                {m.n}
              </span>
              <div className="flex-1">
                <p className="font-poppins uppercase text-[0.62rem] tracking-[0.15em] text-[#BABABA] mb-1">
                  Module {m.n}
                </p>
                <h3 className="font-poppins font-bold text-paper text-[1.05rem] mb-1 leading-tight">{m.name}</h3>
                <p className="text-[#FF6D29] italic text-[0.85rem] mb-3">{m.tagline}</p>
                <p className="text-[#a09a8e] text-[0.88rem] leading-[1.7]">{m.body}</p>
                <p className="mt-4 text-[0.78rem] text-[#BABABA]">
                  Valeur estimée : <span className="text-[#FF6D29] font-semibold">{m.value}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bonuses */}
      <div className="text-center mb-8">
        <span className="pill-badge">🎁 Les bonus offerts</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {bonuses.map((b, i) => (
          <div
            key={i}
            className="reveal p-5 rounded-xl"
            style={{
              background: "linear-gradient(135deg, rgba(255, 109, 41,0.08), rgba(255, 109, 41,0.02))",
              border: "1px solid rgba(255, 109, 41,0.3)",
            }}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">🎁</span>
              <div>
                <p className="font-poppins uppercase text-[0.62rem] tracking-[0.15em] text-[#FF6D29] font-bold mb-1">
                  Bonus {b.n}
                </p>
                <h4 className="font-poppins font-semibold text-paper text-[0.95rem] leading-snug mb-2">{b.name}</h4>
                <p className="text-[0.75rem] text-[#BABABA]">
                  Valeur : <span className="text-[#FF6D29] font-semibold">{b.value}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Récapitulatif valeur */}
      <div className="max-w-xl mx-auto mb-8">
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: "1px solid rgba(255, 109, 41,0.25)", background: "#1E191B" }}
        >
          <div
            className="px-6 py-4 font-poppins font-bold text-paper text-[0.95rem] uppercase tracking-wider"
            style={{ background: "rgba(255, 109, 41,0.06)", borderBottom: "1px solid rgba(255, 109, 41,0.15)" }}
          >
            Récapitulatif de la valeur
          </div>
          {recap.map((r, i) => (
            <div
              key={i}
              className="flex justify-between items-center px-6 py-3"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              <span className="text-[#c8c2b8] text-[0.92rem]">{r.label}</span>
              <span className="font-poppins font-semibold text-paper text-[0.92rem]">{r.value}</span>
            </div>
          ))}
          <div
            className="flex justify-between items-center px-6 py-5"
            style={{ background: "linear-gradient(90deg, rgba(255, 109, 41,0.1), rgba(255, 109, 41,0.02))" }}
          >
            <span className="font-poppins uppercase text-[0.75rem] tracking-[0.14em] text-[#FF6D29] font-bold">
              Valeur totale
            </span>
            <span className="font-poppins font-extrabold text-paper text-[1.4rem]">190 000 FCFA</span>
          </div>
        </div>
      </div>

      {/* Prix final */}
      <div
        className="reveal max-w-xl mx-auto rounded-2xl text-center px-6 py-10 sm:px-10"
        style={{
          border: "1px solid rgba(255, 109, 41,0.5)",
          background: "linear-gradient(135deg, rgba(255, 109, 41,0.1), rgba(255, 109, 41,0.02))",
          boxShadow: "0 20px 60px rgba(255, 109, 41,0.1)",
        }}
      >
        <div className="space-y-1 mb-6">
          <p className="text-[#c8c2b8] text-[0.9rem]">Aujourd'hui, tu ne paies pas <span className="line-through text-[#BABABA]">190 000 FCFA</span>.</p>
          <p className="text-[#c8c2b8] text-[0.9rem]">Tu ne paies pas <span className="line-through text-[#BABABA]">50 000 FCFA</span>.</p>
          <p className="text-[#c8c2b8] text-[0.9rem]">Tu ne paies même pas <span className="line-through text-[#BABABA]">24 700 FCFA</span>.</p>
        </div>
        <p className="font-poppins uppercase text-[0.72rem] tracking-[0.18em] text-[#FF6D29] mb-2">
          Tu investis seulement
        </p>
        <p className="font-poppins font-extrabold text-[#FF6D29] leading-none mb-3" style={{ fontSize: "clamp(3rem, 9vw, 4.5rem)" }}>
          {PRICE}
        </p>
        <p className="text-[#c8c2b8] text-[0.88rem] mb-8">
          Paiement unique · Accès immédiat · Accès à vie
        </p>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold block w-full text-center py-4 mb-5"
        >
          <span>👉 OUI, JE VEUX CRÉER MON VENDEUR IA</span>
        </a>
        <div className="flex flex-wrap gap-2 justify-center">
          {["Wave", "Orange Money", "MTN Money"].map(m => (
            <span
              key={m}
              className="text-xs px-3 py-1.5 rounded-full text-[#BABABA]"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ================================================================
   AMPLIFIERS — Rareté / Urgence
   ================================================================ */
const Amplifiers = () => (
  <section className="py-14">
    <div className="max-w-4xl mx-auto page-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          className="reveal p-6 rounded-xl"
          style={{ background: "#1E191B", border: "1px solid rgba(255, 109, 41,0.25)" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping" style={{ background: "#FF6D29" }} />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "#FF6D29" }} />
            </span>
            <span className="font-poppins uppercase text-[0.7rem] tracking-[0.15em] text-[#FF6D29] font-bold">Rareté</span>
          </div>
          <p className="text-paper font-poppins font-semibold text-[1.02rem] mb-2">
            Seulement 5 nouvelles places par semaine
          </p>
          <p className="text-[#a09a8e] text-[0.9rem] leading-relaxed">
            Nous ouvrons seulement 5 nouvelles places par semaine pour garder un accompagnement de qualité.
          </p>
        </div>
        <div
          className="reveal p-6 rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(255, 109, 41,0.08), rgba(255, 109, 41,0.02))",
            border: "1px solid rgba(255, 109, 41,0.35)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#FF6D29]">⏳</span>
            <span className="font-poppins uppercase text-[0.7rem] tracking-[0.15em] text-[#FF6D29] font-bold">Urgence</span>
          </div>
          <p className="text-paper font-poppins font-semibold text-[1.02rem] mb-2">
            Fermeture dimanche à 23h59
          </p>
          <p className="text-[#a09a8e] text-[0.9rem] leading-relaxed">
            Les inscriptions de la semaine en cours ferment dimanche à 23h59 ou dès que les places sont remplies.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ================================================================
   GUARANTEE — 7 jours
   ================================================================ */
const Guarantee = () => (
  <section className="section-padding">
    <div className="max-w-2xl mx-auto page-container text-center">
      <Badge>Garantie</Badge>
      <h2 className="font-poppins font-bold text-[1.6rem] sm:text-[2.2rem] text-paper mb-8 leading-tight">
        Garantie <span className="text-gold">« Teste Sans Risque »</span> de 7 jours
      </h2>
      <div
        className="reveal p-8 rounded-2xl text-left relative overflow-hidden"
        style={{
          border: "1px solid rgba(255, 109, 41,0.35)",
          background: "linear-gradient(135deg, rgba(255, 109, 41,0.08), rgba(255, 109, 41,0.02))",
        }}
      >
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #FF6D29, transparent 70%)" }}
        />
        <div className="relative space-y-3 text-[#c8c2b8] text-[0.98rem] leading-[1.85]">
          <p className="font-poppins font-semibold text-paper text-[1.05rem]">Inscris-toi.</p>
          <p>Suis les premiers modules.</p>
          <p>
            Si tu estimes que cette formation ne correspond pas à ce qui est présenté sur cette page, envoie simplement un message dans les{" "}
            <span className="text-[#FF6D29] font-semibold">7 jours</span> suivant ton achat.
          </p>
          <p className="text-paper font-semibold pt-2">
            Nous te remboursons intégralement, sans procédure compliquée.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ================================================================
   FINAL CTA
   ================================================================ */
const FinalCTA = () => (
  <section className="section-padding text-center relative">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 109, 41,0.08), transparent 60%)" }}
    />
    <div className="max-w-2xl mx-auto page-container relative">
      <Badge>Dernière étape</Badge>
      <h2 className="font-poppins font-bold text-[2rem] sm:text-[2.8rem] text-paper leading-[1.1] mb-8">
        Oui, je veux créer <span className="text-gold">mon vendeur IA</span>
      </h2>
      <div className="mb-8">
        <p className="font-poppins uppercase text-[0.7rem] tracking-[0.18em] text-[#FF6D29] mb-2">Prix unique</p>
        <p className="font-poppins font-extrabold text-[#FF6D29] leading-none" style={{ fontSize: "clamp(2.6rem, 9vw, 4rem)" }}>
          {PRICE}
        </p>
        <p className="font-poppins text-[#c8c2b8] text-[0.85rem] uppercase tracking-[0.12em] mt-3">
          Accès immédiat · Accès à vie · Compatible téléphone
        </p>
      </div>
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold inline-block mb-6 final-cta-btn cta-pulse"
      >
        <span>👉 OUI, JE VEUX CRÉER MON VENDEUR IA</span>
      </a>
      <p className="text-[#BABABA] text-[0.78rem]">
        ✓ Wave · Orange Money · MTN Money — Paiement 100 % sécurisé
      </p>
    </div>
  </section>
);

/* ================================================================
   FOOTER
   ================================================================ */
const Footer = () => (
  <footer className="py-10 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <p className="text-[#BABABA] font-poppins text-[0.85rem] mb-1">
      {PRODUCT_TAGLINE} — {PROGRAM_NAME}
    </p>
    <p className="text-[#4a4840] text-[0.75rem]">© 2026 by Rosine — Tous droits réservés</p>
  </footer>
);

/* ================================================================
   PAGE
   ================================================================ */
const BlueprintPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PromoBanner />
      <StickyBar />
      <main>
        <Hero />
        <Problem />
        <MirageMethod />
        <ComparisonVideo />
        <CredibilitySection />
        <VideoSection />
        <StudentsProofSection />
        <PreuvesSection />
        <PreuvesCASection />
        <Objections />
        <Offer />
        <Amplifiers />
        <Guarantee />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default BlueprintPage;
