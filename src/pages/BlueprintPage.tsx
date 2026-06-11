import { useEffect, useRef, useState } from "react";

const PromoBanner = () => (
  <div className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-center gap-2 px-4 font-poppins font-bold"
    style={{
      background: "linear-gradient(90deg, #7a6230, #e8b85c, #7a6230)",
      backgroundSize: "200% 100%",
      animation: "shimmer 3s linear infinite",
      height: "36px",
      minHeight: "36px",
      maxHeight: "36px",
      overflow: "hidden",
      flexWrap: "nowrap",
      color: "#0a0a0f",
      fontSize: "clamp(0.58rem, 1.5vw, 0.72rem)",
    }}>
    <span style={{ whiteSpace: "nowrap" }}>🔥 OFFRE SPÉCIALE</span>
    <span style={{ whiteSpace: "nowrap" }}>|</span>
    <span className="font-extrabold" style={{ whiteSpace: "nowrap", background: "rgba(0,0,0,0.15)", padding: "2px 6px", borderRadius: "2px" }}>9 700 FCFA</span>
    <span style={{ whiteSpace: "nowrap" }}>|</span>
    <span style={{ whiteSpace: "nowrap" }}>⏳ Expire bientôt</span>
  </div>
);

const CHECKOUT_URL = "https://lunixx-hub-0.mymaketou.store/products/cree-des-visuels-videos-et-fiches-produits-pro-avec-lia-sans-agence-sans-budget-fou/checkout";


const StickyBar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`sticky-bar fixed bottom-0 left-0 right-0 z-[100] ${show ? "show" : ""}`}
      style={{ background: "rgba(10,10,15,0.95)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(232,184,92,0.25)" }}>
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-poppins text-paper text-sm">Blue Print IA Academy — <span className="text-gold font-bold">9 700 FCFA</span></span>
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold w-full sm:w-auto text-center"><span>Je crée mon avatar IA</span></a>
      </div>
    </div>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center mb-6">
    <span className="pill-badge">{children}</span>
  </div>
);

const SectionCTA = ({ label }: { label: string }) => (
  <div className="flex justify-center mt-10">
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block font-poppins font-bold text-[0.85rem] sm:text-[0.95rem] uppercase tracking-[0.06em] py-[14px] px-8 rounded-full transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        background: "#e8b85c",
        color: "#0a0a0f",
        boxShadow: "0 8px 24px rgba(232,184,92,0.25), 0 0 0 1px rgba(232,184,92,0.4)",
        border: "none",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = "#f5d488")}
      onMouseLeave={e => (e.currentTarget.style.background = "#e8b85c")}
    >
      {label} →
    </a>
  </div>
);

import heroBannerImg from "@/assets/hero-banner.png";

const HeroBannerImage = () => (
  <img
    src={heroBannerImg}
    alt="Blue Print IA Academy"
    className="w-full object-cover object-center block rounded-xl mb-8"
    style={{ border: "1px solid rgba(232,184,92,0.2)" }}
  />
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    // Compte à rebours fixe : 48h, réinitialisé à chaque visite
    const target = Date.now() + 48 * 3600 * 1000;

    const update = () => {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) { setExpired(true); return; }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (expired) return <p className="font-poppins text-[#e8b85c] text-center text-lg font-bold mb-8">⏰ Offre expirée</p>;

  const blocks = [
    { value: timeLeft.hours + timeLeft.days * 24, label: "Heures" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Secondes" },
  ];

  return (
    <div className="mb-8">
      <p className="font-poppins text-[0.85rem] font-semibold text-[#fafafa] text-center tracking-[0.05em] mb-4">L'offre se termine dans</p>
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {blocks.map((b, i) => (
          <div key={i} className="flex items-center gap-2 sm:gap-3">
            <div className="flex flex-col items-center justify-center rounded-lg w-14 h-14 sm:w-16 sm:h-16"
              style={{ background: "#111118", border: "1px solid rgba(232,184,92,0.25)" }}>
              <span className="font-poppins font-extrabold text-[1.3rem] sm:text-[1.6rem] text-[#fafafa]">{String(b.value).padStart(2, "0")}</span>
              <span className="text-[0.58rem] text-[#7a7468] uppercase tracking-[0.1em]">{b.label}</span>
            </div>
            {i < 2 && <span className="font-extrabold text-[#e8b85c] text-lg">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

const paymentBadges = [
  { label: "WAVE", bg: "rgba(0,100,255,0.15)", border: "rgba(0,100,255,0.3)" },
  { label: "ORANGE", bg: "rgba(255,140,0,0.15)", border: "rgba(255,140,0,0.3)" },
  { label: "MTN", bg: "rgba(255,200,0,0.15)", border: "rgba(255,200,0,0.3)" },
  { label: "MOOV", bg: "rgba(0,180,100,0.15)", border: "rgba(0,180,100,0.3)" },
  { label: "VISA", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.15)" },
  { label: "MASTERCARD", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.15)" },
  { label: "PAYPAL", bg: "rgba(0,80,200,0.1)", border: "rgba(0,80,200,0.2)" },
  { label: "CARTE", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" },
];

const Hero = () => (
  <section className="relative pt-[88px] sm:pt-[92px] pb-12 sm:pb-16 overflow-hidden">
    {/* Halo radial doré Wilson-style */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, rgba(232,184,92,0.18), rgba(232,184,92,0.06) 35%, transparent 70%)" }} />
    <div className="absolute top-20 right-10 w-[500px] h-[500px] pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(232,184,92,0.1), transparent 60%)" }} />
    <div className="page-container relative max-w-3xl mx-auto">
      {/* Pill badge top */}
      <div className="fade-up flex justify-center mb-6">
        <span className="pill-badge">Formation IA · Édition 2026</span>
      </div>

      {/* Title */}
      <h1 className="fade-up font-poppins font-extrabold leading-[1.05] mb-6 text-[#fafafa] text-center"
        style={{ fontSize: "clamp(1.9rem, 6vw, 3.6rem)", animationDelay: "0.1s" }}>
        Bientôt, tu vendras tous les jours sur TikTok…{" "}
        <span className="text-[#e8b85c]">sans jamais montrer ton visage ni ta voix.</span>
      </h1>

      {/* Subtitle */}
      <p className="fade-up text-center text-[#a09a8e] text-[0.95rem] sm:text-[1.05rem] max-w-xl mx-auto mb-8" style={{ animationDelay: "0.3s" }}>
        Ton avatar IA et ta voix clonée créent ton contenu à ta place. Toi, tu attires des clients et tu vends tes produits — sans caméra, sans honte, sans perdre de temps.
      </p>


      {/* Prix */}
      <div className="fade-up flex items-center justify-center gap-4 mb-2" style={{ animationDelay: "0.6s" }}>
        <span className="font-poppins font-extrabold text-[2.2rem] sm:text-[2.8rem] text-[#e8b85c]">9 700 FCFA</span>
      </div>
      <p className="text-[#7a7468] text-[0.8rem] text-center mb-6">Paiement unique · Accès à vie</p>

      {/* Countdown */}
      <div className="fade-up" style={{ animationDelay: "0.7s" }}>
        <CountdownTimer />
      </div>

      {/* CTA Button — pill style Wilson */}
      <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="cta-pulse block w-full text-center font-poppins font-bold text-[0.9rem] sm:text-[1rem] uppercase tracking-[0.06em] py-4 sm:py-[18px] px-6 rounded-full mb-3 transition-transform duration-300 cursor-pointer hover:-translate-y-0.5"
        style={{ background: "#e8b85c", color: "#0a0a0f", border: "none" }}
        onMouseEnter={e => (e.currentTarget.style.background = "#f5d488")}
        onMouseLeave={e => (e.currentTarget.style.background = "#e8b85c")}>
        Je crée mon avatar IA →
      </a>
      <p className="text-[#7a7468] text-[0.78rem] text-center mb-4">Moyens de paiement disponibles</p>

      {/* Payment Badges */}
      <div className="flex flex-wrap justify-center gap-2">
        {paymentBadges.map((b, i) => (
          <div key={i} className="flex items-center justify-center rounded-lg w-10 h-7 sm:w-12 sm:h-8 font-poppins font-bold text-[0.55rem] text-[#fafafa]"
            style={{ background: b.bg, border: `1px solid ${b.border}` }}>
            {b.label}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const proofItems = [
  { icon: "👥", text: "+200 créateurs et e-commerçants formés" },
  { icon: "⭐", text: "3 modules pratiques complets" },
  { icon: "🕐", text: "Accès à vie · Mises à jour incluses" },
  { icon: "💳", text: "Wave · Orange Money · MTN Money" },
];

const ProofBar = () => (
  <section className="py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="page-container flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-8">
      {proofItems.map((item, i) => (
        <div key={i} className="reveal flex items-center gap-2 text-sm text-[#7a7468]">
          <span className="text-gold text-lg">{item.icon}</span>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  </section>
);

const problems = [
  "La peur du regard des autres : « et si on se moque de moi ? »",
  "La honte de te filmer, d'entendre ta propre voix.",
  "Le manque de temps, de matériel, de confiance.",
];

const Problem = () => (
  <section className="section-padding" style={{ background: "linear-gradient(180deg, transparent, rgba(232,184,92,0.03) 50%, transparent)" }}>
    <div className="max-w-2xl mx-auto page-container text-center">
      <Badge>Le vrai problème</Badge>
      <div className="w-[60px] h-px bg-gold mx-auto mb-8" />
      <h2 className="reveal font-poppins font-bold text-[1.5rem] sm:text-[1.8rem] text-[#c8c2b8] max-w-[600px] mx-auto mb-10 leading-tight">
        Tu sais que tes clients sont sur TikTok. <span className="text-paper">Mais tu n'oses pas.</span>
      </h2>
    </div>
    <div className="max-w-2xl mx-auto page-container space-y-3">
      {problems.map((p, i) => (
        <div key={i} className="reveal flex items-start gap-3 p-5 rounded"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", transition: "border-color 0.3s" }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(232,184,92,0.2)")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
          <span className="text-red-500 font-bold shrink-0">✕</span>
          <span className="text-paper/80">{p}</span>
        </div>
      ))}
      <div className="reveal p-5 rounded text-center"
        style={{ border: "1px solid rgba(232,184,92,0.25)", background: "linear-gradient(135deg, rgba(232,184,92,0.06), rgba(232,184,92,0.02))" }}>
        <p className="text-[#c8c2b8] italic text-sm">
          Alors tu attends. Et chaque jour qui passe, ce sont des clients que tu laisses à tes concurrents.
        </p>
      </div>
      <SectionCTA label="Je crée mon avatar IA" />
    </div>
  </section>
);

const Transformation = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(232,184,92,0.06), transparent 60%)" }} />
    <div className="max-w-3xl mx-auto page-container relative text-center">
      <Badge>Le déclic</Badge>
      <div className="w-[60px] h-px bg-gold mx-auto mb-8" />
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper mb-6 leading-[1.15]">
        Imagine maintenant <span className="text-gold">l'inverse…</span>
      </h2>
      <p className="text-[#a09a8e] text-[0.95rem] sm:text-[1.05rem] max-w-2xl mx-auto leading-relaxed">
        Ton contenu tourne chaque jour. Tes clients affluent. Et personne ne sait que ce n'est pas toi devant la caméra — parce que c'est ton avatar IA qui parle, avec ta voix. C'est exactement ce que tu vas savoir faire.
      </p>
    </div>
  </section>
);

const benefits = [
  "Tu publies chaque jour, sans jamais te filmer",
  "Tu attires des clients même pendant que tu dors",
  "Tu te lances enfin, libéré(e) de la honte et du regard des autres",
  "Tu vends tes produits, services et formations en toute confiance",
  "Tu deviens l'entrepreneur moderne que tu rêvais d'être",
];

const Benefits = () => (
  <section className="section-padding">
    <div className="max-w-3xl mx-auto page-container text-center">
      <Badge>Ce que tu deviens</Badge>
      <div className="w-[60px] h-px bg-gold mx-auto mb-8" />
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper mb-10 leading-[1.15]">
        Ce que tu <span className="text-gold">deviens</span>
      </h2>
      <div className="max-w-xl mx-auto space-y-4 mb-10 text-left">
        {benefits.map((b, i) => (
          <div key={i} className="reveal flex items-start gap-3 p-4 rounded"
            style={{ border: "1px solid rgba(232,184,92,0.18)", background: "rgba(232,184,92,0.03)" }}>
            <span className="text-gold font-bold shrink-0 text-lg">✓</span>
            <span className="text-paper/90 text-sm">{b}</span>
          </div>
        ))}
      </div>
      <div className="reveal p-6 rounded-xl text-center"
        style={{ border: "1px solid rgba(232,184,92,0.35)", background: "linear-gradient(135deg, rgba(232,184,92,0.08), rgba(232,184,92,0.02))", boxShadow: "0 8px 32px rgba(232,184,92,0.08)" }}>
        <p className="text-[#c8c2b8] text-sm leading-relaxed">
          Tu ne ressortiras pas avec une simple formation. Tu ressortiras avec une nouvelle version de toi : prêt(e), confiant(e), et déjà en train de vendre.
        </p>
      </div>
      <SectionCTA label="Je deviens cette version de moi" />
    </div>
  </section>
);

const Guarantee = () => (
  <section className="section-padding">
    <div className="max-w-2xl mx-auto page-container text-center">
      <Badge>Garantie</Badge>
      <div className="w-[60px] h-px bg-gold mx-auto mb-8" />
      <div className="reveal p-6 rounded-xl"
        style={{ border: "1px solid rgba(232,184,92,0.25)", background: "linear-gradient(135deg, rgba(232,184,92,0.06), rgba(232,184,92,0.02))" }}>
        <p className="text-[#a09a8e] text-[0.95rem] leading-relaxed">
          Lance-toi sans risque : suis la formation, et si tu n'arrives pas à créer ton premier avatar, on t'accompagne en privé jusqu'à ce que tu y arrives.
        </p>
      </div>
    </div>
  </section>
);

const RosinePhoto = () => {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="relative mx-auto md:mx-0 w-full max-w-[240px] md:max-w-[280px] shrink-0"
      style={{ height: "clamp(260px, 30vw, 320px)" }}>
      <div className="w-full h-full rounded-xl overflow-hidden"
        style={{ border: "2px solid rgba(232,184,92,0.3)", boxShadow: "0 24px 48px rgba(0,0,0,0.4)" }}>
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: "linear-gradient(135deg, #1a1a2e, #111118)" }}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(232,184,92,0.3)" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="text-[#7a7468] text-[0.8rem]">[ Votre photo ici ]</span>
          </div>
        ) : (
          <img src="/images/rosine-photo.jpg" alt="Rosine — Expert IA"
            className="w-full h-full object-cover object-top" onError={() => setImgError(true)} />
        )}
      </div>
      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-poppins font-bold text-[0.65rem] md:text-[0.72rem] px-4 md:px-5 py-2 rounded-full"
        style={{ background: "#e8b85c", color: "#0a0a0f" }}>✓ Certifiée Expert IA</span>
    </div>
  );
};

const rosineCredits = [
  "+200 e-commerçants africains formés à l'IA",
  "Spécialiste HeyGen, Canva AI, ChatGPT appliqués au e-commerce",
  "Créatrice de contenu faceless avec +X abonnés sur TikTok",
  "Basée à Abidjan — je connais les réalités du marché africain",
];

const RosineSection = () => (
  <section className="section-padding" style={{ background: "linear-gradient(180deg, transparent, rgba(232,184,92,0.03) 50%, transparent)" }}>
    <div className="max-w-4xl mx-auto page-container">
      <Badge>Ta formatrice</Badge>
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper mb-12">
        Rosine, <span className="text-gold">Expert IA</span> pour e-commerçants africains
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <RosinePhoto />
        <div className="flex-1 mt-6 md:mt-0">
          <p className="text-[0.95rem] md:text-[1.05rem] text-[#c8c2b8] leading-[1.9] mb-6">
            Je suis Rosine, créatrice de contenu IA et formatrice spécialisée dans l'e-commerce africain. J'ai aidé plus de 200 créateurs de contenu et e-commerçants africains à construire leur présence en ligne et booster leurs ventes grâce à l'IA — sans agence, sans caméra, sans budget fou.
          </p>
          <div className="flex flex-col gap-3.5 mb-8">
            {rosineCredits.map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded bg-gold/15 flex items-center justify-center shrink-0 mt-0.5 text-[#e8b85c] text-[0.75rem] font-bold">✓</span>
                <span className="text-[0.85rem] md:text-[0.9rem] text-[#a09a8e]">{c}</span>
              </div>
            ))}
          </div>
          <blockquote className="text-[1rem] text-paper italic leading-[1.8] p-5 rounded-r-lg"
            style={{ borderLeft: "3px solid #e8b85c", background: "rgba(232,184,92,0.04)" }}>
            "Mon objectif : que chaque e-commerçant africain ait accès aux mêmes outils que les grandes marques — sans les mêmes budgets."
          </blockquote>
        </div>
      </div>
      <SectionCTA label="Je rejoins la formation de Rosine" />
    </div>
  </section>
);

const videos = [
  { src: "/videos/video_1.mp4", label: "Exemple de vidéo générée avec l'IA", sub: "" },
  { src: "/videos/video_2.mp4", label: "Exemple de vidéo générée avec l'IA", sub: "" },
  { src: "/videos/video_3.mp4", label: "Exemple de vidéo générée avec l'IA", sub: "" },
];

const VideoSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container">
      <Badge>La formation en action</Badge>
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper mb-2">
        Vois par toi-même <span className="text-gold">ce que l'IA produit</span>
      </h2>
      <p className="text-[#7a7468] mb-10">Des vidéos produits 100% générées avec les outils enseignés dans la formation.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 video-grid">
        {videos.map((v, i) => (
          <div key={i} className="reveal rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,184,92,0.08)]"
            style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.07)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(232,184,92,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
            <div className="w-full" style={{ aspectRatio: "9/16", maxHeight: "480px" }}>
              <video controls preload="metadata" className="w-full h-full object-contain rounded" style={{ background: "#000" }}>
                <source src={v.src} type="video/mp4" />
              </video>
            </div>
            <div className="p-4">
              <p className="font-poppins text-paper text-sm">{v.label}</p>
              <p className="text-[#7a7468] text-xs">{v.sub}</p>
            </div>
          </div>
        ))}
      </div>
      <SectionCTA label="Je crée mes vidéos IA dès maintenant" />
    </div>
  </section>
);

const AffichesSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container">
      <Badge>Résultats visuels</Badge>
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper mb-2">
        Des affiches pub <span className="text-gold">créées en 5 minutes</span>
      </h2>
      <p className="text-[#7a7468] mb-10">Toutes ces affiches ont été générées avec les outils du Module 02 — sans graphiste, sans agence.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {[1, 2, 3, 4, 5, 6].map(n => (
          <div key={n} className="reveal overflow-hidden rounded-lg bg-[#111118] transition-transform duration-300 hover:scale-[1.02]"
            style={{ border: "1px solid rgba(232,184,92,0.15)" }}>
            <img src={`/images/affiche-${n}.jpg`} alt={`Affiche publicitaire IA ${n}`} className="w-full h-auto block" />
          </div>
        ))}
      </div>
      <p className="text-center text-[0.78rem] text-[#7a7468] mt-5">💡 Tu apprendras à créer exactement ce type de visuels dans le Module 02</p>
      <SectionCTA label="Je crée mes affiches en 5 minutes" />
    </div>
  </section>
);

const testimonials = [
  { text: "Avant je payais un graphiste 15 000 FCFA par affiche. Maintenant je crée mes visuels en 5 minutes avec l'IA. Cette formation m'a rentabilisée dès la première semaine.", initials: "AM", name: "Awa M.", role: "Boutique mode — Dakar" },
  { text: "Mes fiches produits étaient nulles avant. Après le module 3, mon taux de conversion a augmenté. Les clients me disent que la description leur a donné envie d'acheter.", initials: "KD", name: "Kofi D.", role: "E-commerce cosmétiques — Abidjan" },
  { text: "Je ne savais pas utiliser l'IA du tout. Rosine explique vraiment simplement. J'ai fait ma première vidéo produit en 2 heures. Mes followers ont adoré le rendu.", initials: "FN", name: "Fatou N.", role: "Boutique bijoux — Douala" },
  { text: "La partie page produit complète m'a vraiment aidé. J'ai refait toutes mes pages en appliquant la méthode et mes ventes ont augmenté ce mois-ci. Je recommande à 100%.", initials: "BS", name: "Brice S.", role: "Drop shipping — Lomé" },
];

const Testimonials = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto page-container">
      <Badge>Ils témoignent</Badge>
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper mb-10">
        Ce qu'ils disent après <span className="text-gold">la formation</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <div key={i} className="reveal relative rounded p-8" style={{ background: "#111118", border: "1px solid rgba(232,184,92,0.25)" }}>
            <span className="absolute top-4 left-6 font-poppins text-[5rem] leading-none text-gold/15 select-none">"</span>
            <div className="relative">
              <div className="flex text-gold text-sm mb-3">★★★★★</div>
              <p className="text-paper/80 text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-ink"
                  style={{ background: "linear-gradient(135deg, #e8b85c, #f5d488)" }}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-poppins text-paper text-sm font-semibold">{t.name}</p>
                  <p className="text-[#7a7468] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SectionCTA label="Je veux les mêmes résultats" />
    </div>
  </section>
);

const PreuvesSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container">
      <Badge>Ils l'ont fait</Badge>
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper mb-2">
        <span className="text-gold">Preuves réelles</span> de résultats
      </h2>
      <p className="text-[#7a7468] mb-10">Des captures d'écran envoyées par des apprenants après avoir appliqué les modules. Non retouchées.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map(n => (
          <div key={n} className="reveal overflow-hidden rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,184,92,0.08)]"
            style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.07)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(232,184,92,0.4)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
            <img src={`/images/preuve-${n}.jpg`} alt={`Preuve résultat apprenant ${n}`} className="w-full h-auto block" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <span className="text-[0.75rem] text-[#7a7468] px-5 py-2.5 rounded-sm" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          🔒 Captures partagées avec accord des apprenants · Résultats non garantis et variables selon l'effort
        </span>
      </div>
      <SectionCTA label="Je copie cette méthode" />
    </div>
  </section>
);
const caCards = [
  { img: "/images/ca-1.jpg", label: "Tableau de bord — Ventes organiques", sub: "0 FCFA dépensé en pub" },
  { img: "/images/ca-2.jpg", label: "Récapitulatif revenus du mois", sub: "100% organique · Contenu IA" },
  { img: "/images/ca-3.jpg", label: "Statistiques sans publicité payante", sub: "Méthode Blue Print IA Academy" },
];

const PreuvesCASection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container">
      <Badge>Preuve concrète</Badge>
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper mb-2">
        Ce que l'IA m'a permis de générer{" "}
        <span className="text-gold">sans pub payante et sans montrer mon visage</span>
      </h2>
      <p style={{ color: "#7a7468", fontSize: "0.9rem", textAlign: "center", maxWidth: 540, margin: "0 auto 48px" }}>
        Captures d'écran réelles de mes tableaux de bord.<br />
        Zéro publicité Facebook. Zéro visage à la caméra.<br />
        Juste l'IA et les méthodes que j'enseigne dans Blue Print IA Academy.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {caCards.slice(0, 2).map((c, i) => (
          <div
            key={i}
            className="reveal overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "#111118",
              border: "1px solid rgba(232,184,92,0.2)",
              borderRadius: 10,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,184,92,0.5)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 32px rgba(232,184,92,0.07)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,184,92,0.2)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            <div style={{ width: "100%", background: "#0a0a0f" }}>
              <img src={c.img} alt={c.label} className="w-full h-auto block" />
            </div>
            <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(232,184,92,0.03)" }}>
              <p className="font-poppins font-bold" style={{ fontSize: "0.85rem", color: "#fafafa" }}>{c.label}</p>
              <p style={{ fontSize: "0.75rem", color: "#7a7468", marginTop: 4 }}>{c.sub}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <div
          className="reveal overflow-hidden transition-all duration-300 hover:-translate-y-1 w-full sm:max-w-[60%]"
          style={{
            background: "#111118",
            border: "1px solid rgba(232,184,92,0.2)",
            borderRadius: 10,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,184,92,0.5)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 32px rgba(232,184,92,0.07)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,184,92,0.2)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          }}
        >
          <div style={{ width: "100%", background: "#0a0a0f" }}>
            <img src={caCards[2].img} alt={caCards[2].label} className="w-full h-auto block" />
          </div>
          <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(232,184,92,0.03)" }}>
            <p className="font-poppins font-bold" style={{ fontSize: "0.85rem", color: "#fafafa" }}>{caCards[2].label}</p>
            <p style={{ fontSize: "0.75rem", color: "#7a7468", marginTop: 4 }}>{caCards[2].sub}</p>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 560, margin: "40px auto 0", textAlign: "center" }}>
        <div style={{ width: 40, height: 1, background: "#e8b85c", margin: "0 auto 16px" }} />
        <p style={{ fontSize: "0.82rem", color: "#7a7468", lineHeight: 1.8 }}>
          Ces captures sont issues de mes propres tableaux de bord.<br />
          Les résultats varient selon l'effort et la régularité.<br />
          Ce que j'enseigne, je le pratique.
        </p>
      </div>
    </div>
  </section>
);

const offerItems = [
  "La méthode complète en vidéo pour créer ton avatar IA et cloner ta voix — pas à pas, même pour débutant",
  "BONUS : accompagnement dans un groupe WhatsApp privé — tu n'avances jamais seul(e)",
  "Accès à vie",
];

const Pricing = () => (
  <section id="pricing" className="section-padding">
    <div className="max-w-2xl mx-auto page-container">
      <div className="text-center mb-10">
        <Badge>L'offre</Badge>
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper">
          Ton raccourci vers <span className="text-gold">cette transformation</span>
        </h2>
      </div>
      <div className="reveal relative pricing-card mx-auto rounded"
        style={{ border: "1px solid rgba(232,184,92,0.25)", background: "linear-gradient(135deg, rgba(232,184,92,0.04), transparent)" }}>
        <div className="absolute inset-0 rounded pointer-events-none" style={{ boxShadow: "0 0 40px rgba(232,184,92,0.05)" }} />
        <div className="relative">
          <p className="font-poppins text-gold uppercase text-[0.7rem] tracking-[0.15em] mb-4">Accès complet · Paiement unique</p>
          <p className="font-poppins font-extrabold text-paper mb-1 pricing-price">
            7 900 <span className="text-[#7a7468] text-xl">FCFA</span>
          </p>
          <p className="text-[#7a7468] text-sm mb-8">Paiement unique · Accès à vie</p>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold block w-full text-center py-4 mb-8"><span>Je commande maintenant →</span></a>
          <ul className="space-y-3 mb-8">
            {offerItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-paper/80 text-sm">
                <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Wave", "Orange Money", "MTN Money"].map(m => (
              <span key={m} className="text-xs px-3 py-1.5 rounded-full text-[#7a7468]" style={{ background: "rgba(255,255,255,0.05)" }}>{m}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const faqData = [
  { q: "Je ne suis pas doué(e) avec la technologie.", a: "Tout est expliqué pas à pas, c'est pensé pour les débutants." },
  { q: "Est-ce que l'avatar a vraiment l'air réel ?", a: "Oui, et tu en verras des exemples concrets." },
  { q: "Est-ce légal ?", a: "Oui : tu crées ton propre avatar et tu clones ta propre voix." },
  { q: "Je n'ai qu'un téléphone, est-ce que ça suffit ?", a: "Oui, un simple smartphone suffit." },
  { q: "Comment payer ?", a: "Mobile Money, Wave, et autres moyens de paiement disponibles." },
  { q: "Et si je bloque ?", a: "Le groupe WhatsApp privé répond à toutes tes questions." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="section-padding">
      <div className="max-w-[620px] mx-auto page-container">
        <Badge>FAQ</Badge>
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper mb-10">Questions fréquentes</h2>
        {faqData.map((item, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "24px 0" }}>
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between text-left text-paper font-poppins font-semibold text-sm faq-question">
              {item.q}
              <span className="faq-icon text-gold text-xl ml-4 shrink-0">+</span>
            </button>
            <div className="faq-answer">
              <p className="text-[#a09a8e] text-sm pt-4 leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="section-padding text-center relative">
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(232,184,92,0.06), transparent 60%)" }} />
    <div className="max-w-xl mx-auto page-container relative">
      <Badge>Dernière chance</Badge>
      <div className="w-[60px] h-px bg-gold mx-auto mb-8" />
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper max-w-[560px] mx-auto mb-6">
        Tu n'as plus besoin de te montrer pour vendre. <span className="text-gold">Ton avatar IA s'en charge.</span>
      </h2>
      <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold inline-block mb-4 final-cta-btn"><span>Je me lance — 9 700 FCFA →</span></a>
      <p className="text-[#7a7468] text-[0.78rem]">✓ Wave · Orange Money · MTN Money — Accès immédiat après paiement</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <p className="text-[#4a4840] text-[0.78rem]">© 2025 Blue Print IA Academy by Rosine — Tous droits réservés</p>
  </footer>
);

const BlueprintPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PromoBanner />
      <StickyBar />
      <Hero />
      <Problem />
      <Transformation />
      <Benefits />
      <RosineSection />
      <VideoSection />
      <Testimonials />
      <PreuvesSection />
      <PreuvesCASection />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default BlueprintPage;
