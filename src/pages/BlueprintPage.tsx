import { useEffect, useState } from "react";

const CHECKOUT_URL = "https://lunixx-hub-0.mymaketou.shop/products/cree-des-visuels-videos-et-fiches-produits-pro-avec-lia-sans-agence-sans-budget-fou/checkout";
const PROGRAM_NAME = "14 Jours pour Vendre Sans Te Montrer";
const PRICE = "62 900 FCFA";

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
      fontSize: "clamp(0.55rem, 1.5vw, 0.72rem)",
    }}>
    <span style={{ whiteSpace: "nowrap" }}>🔥 SEULEMENT 5 PLACES PAR SEMAINE</span>
    <span style={{ whiteSpace: "nowrap" }}>|</span>
    <span className="font-extrabold" style={{ whiteSpace: "nowrap", background: "rgba(0,0,0,0.15)", padding: "2px 6px", borderRadius: "2px" }}>{PRICE}</span>
    <span style={{ whiteSpace: "nowrap" }}>|</span>
    <span style={{ whiteSpace: "nowrap" }}>Paiement unique · Accès à vie</span>
  </div>
);

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
        <span className="font-poppins text-paper text-sm">{PROGRAM_NAME} — <span className="text-gold font-bold">{PRICE}</span></span>
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold w-full sm:w-auto text-center"><span>REJOINDRE LE PROGRAMME →</span></a>
      </div>
    </div>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center mb-6">
    <span className="pill-badge">{children}</span>
  </div>
);

const SectionCTA = ({ label = "REJOINDRE LE PROGRAMME" }: { label?: string }) => (
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

const ScarcityBar = () => (
  <div className="mb-8 flex justify-center">
    <div className="flex items-center gap-3 px-5 py-3 rounded-full"
      style={{ background: "rgba(232,184,92,0.06)", border: "1px solid rgba(232,184,92,0.3)" }}>
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping" style={{ background: "#e8b85c" }} />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "#e8b85c" }} />
      </span>
      <span className="font-poppins text-[0.78rem] sm:text-[0.85rem] text-[#e8b85c] font-semibold">
        Seulement 5 nouvelles élèves par semaine — pour un suivi personnel de chacune
      </span>
    </div>
  </div>
);

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
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, rgba(232,184,92,0.18), rgba(232,184,92,0.06) 35%, transparent 70%)" }} />
    <div className="absolute top-20 right-10 w-[500px] h-[500px] pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(232,184,92,0.1), transparent 60%)" }} />
    <div className="page-container relative max-w-3xl mx-auto">
      <div className="fade-up flex justify-center mb-6">
        <span className="pill-badge">Programme · Édition 2026</span>
      </div>

      <h1 className="fade-up font-poppins font-extrabold leading-[1.05] mb-6 text-[#fafafa] text-center"
        style={{ fontSize: "clamp(1.9rem, 6vw, 3.6rem)", animationDelay: "0.1s" }}>
        14 Jours pour{" "}
        <span className="text-[#e8b85c]">Vendre Sans Te Montrer</span>
      </h1>

      <p className="fade-up text-center text-[#a09a8e] text-[0.95rem] sm:text-[1.05rem] max-w-2xl mx-auto mb-8" style={{ animationDelay: "0.3s" }}>
        Crée ton vendeur IA qui vend tes produits à ta place — la méthode qui m'a permis de générer plus de 3 500 000 FCFA et 700 commandes, sans dépenser 1 F en publicité. Prêt en 14 jours, sans montrer ton visage et sans aucune compétence technique.
      </p>

      <div className="fade-up flex items-center justify-center gap-4 mb-2" style={{ animationDelay: "0.6s" }}>
        <span className="font-poppins font-extrabold text-[2.2rem] sm:text-[2.8rem] text-[#e8b85c]">{PRICE}</span>
      </div>
      <p className="text-[#7a7468] text-[0.8rem] text-center mb-6">Paiement unique · Accès à vie</p>

      <div className="fade-up" style={{ animationDelay: "0.7s" }}>
        <ScarcityBar />
      </div>

      <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="cta-pulse block w-full text-center font-poppins font-bold text-[0.9rem] sm:text-[1rem] uppercase tracking-[0.06em] py-4 sm:py-[18px] px-6 rounded-full mb-3 transition-transform duration-300 cursor-pointer hover:-translate-y-0.5"
        style={{ background: "#e8b85c", color: "#0a0a0f", border: "none" }}
        onMouseEnter={e => (e.currentTarget.style.background = "#f5d488")}
        onMouseLeave={e => (e.currentTarget.style.background = "#e8b85c")}>
        REJOINDRE LE PROGRAMME →
      </a>
      <p className="text-[#7a7468] text-[0.78rem] text-center mb-4">Moyens de paiement disponibles</p>

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

const problems = [
  "La honte de te voir et de t'entendre à l'écran — et la peur que ta famille ou tes amis se moquent.",
  "Tu as déjà tout essayé : tourner, recommencer, tout effacer. Et au final, tu ne publies jamais.",
  "Tu regardes d'autres femmes réussir en ligne et tu te demandes : pourquoi pas moi ?",
  "Tu as peut-être déjà payé pour une formation qui n'a rien changé. Tu as peur que ça recommence.",
];

const Problem = () => (
  <section className="section-padding" style={{ background: "linear-gradient(180deg, transparent, rgba(232,184,92,0.03) 50%, transparent)" }}>
    <div className="max-w-2xl mx-auto page-container text-center">
      <Badge>Le problème</Badge>
      <div className="w-[60px] h-px bg-gold mx-auto mb-8" />
      <h2 className="reveal font-poppins font-bold text-[1.5rem] sm:text-[1.8rem] text-[#c8c2b8] max-w-[600px] mx-auto mb-10 leading-tight">
        Tu sais que tu devrais vendre en vidéo. <span className="text-paper">Mais tu n'oses pas.</span>
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
          Pendant ce temps, tes concurrentes publient, et tes clientes vont chez elles.
        </p>
      </div>
      <SectionCTA />
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
        Et si tu n'avais plus jamais besoin de <span className="text-gold">te filmer ?</span>
      </h2>
      <p className="text-[#a09a8e] text-[0.95rem] sm:text-[1.05rem] max-w-2xl mx-auto leading-relaxed">
        Le problème n'a jamais été toi. Personne ne t'a montré comment créer un vendeur IA qui te ressemble vraiment — qui parle comme toi, bouge comme toi, et vend à ta place, pendant que tu gardes ta tranquillité et ta dignité intactes.
      </p>
    </div>
  </section>
);

const ComparisonVideo = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container">
      <Badge>La preuve en vidéo</Badge>
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper mb-3">
        Avatar générique <span className="text-gold">vs</span> vendeur IA avec ma méthode
      </h2>
      <p className="text-[#7a7468] mb-10">
        Regarde la différence. Ce n'est pas l'outil qui change tout, c'est la méthode.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { src: "/videos/rendu-robotique.mov", type: "video/quicktime", label: "Sans la méthode", badge: "✕ Robotique", badgeBg: "rgba(220,80,80,0.15)", badgeColor: "#e57373", badgeBorder: "rgba(220,80,80,0.4)" },
          { src: "/videos/rendu-humain.mp4", type: "video/mp4", label: "Avec ma méthode anti-robot", badge: "✓ Naturel", badgeBg: "rgba(232,184,92,0.15)", badgeColor: "#e8b85c", badgeBorder: "rgba(232,184,92,0.5)" },
        ].map((v, i) => (
          <div key={i} className="reveal rounded-md overflow-hidden transition-all duration-300"
            style={{ background: "#111118", border: "1px solid rgba(232,184,92,0.25)" }}>
            <div className="w-full" style={{ aspectRatio: "9/16", maxHeight: "560px" }}>
              <video controls preload="metadata" className="w-full h-full object-contain" style={{ background: "#000" }}>
                <source src={v.src} type={v.type} />
              </video>
            </div>
            <div className="p-4 flex items-center justify-between gap-3">
              <p className="font-poppins text-paper text-sm">{v.label}</p>
              <span className="font-poppins text-[0.7rem] font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                style={{ background: v.badgeBg, color: v.badgeColor, border: `1px solid ${v.badgeBorder}` }}>
                {v.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center italic text-[#c8c2b8] text-[0.95rem] mt-10 max-w-2xl mx-auto">
        La différence n'est pas l'outil. C'est le montage. Et c'est exactement ce que je t'apprends dans le programme.
      </p>
      <SectionCTA />
    </div>
  </section>
);

const UrgencyBlock = () => (
  <section className="py-10">
    <div className="max-w-[640px] mx-auto page-container">
      <div className="reveal text-center px-6 py-10 md:px-10 md:py-12"
        style={{
          background: "rgba(232,184,92,0.03)",
          borderTop: "1px solid rgba(232,184,92,0.15)",
          borderBottom: "1px solid rgba(232,184,92,0.15)",
        }}>
        <div className="text-gold text-3xl mb-4">⏳</div>
        <p className="italic text-[#c8c2b8] text-[1rem] md:text-[1.1rem] leading-[1.8]">
          Chaque jour sans ton vendeur IA, c'est un jour de vidéos en moins — et donc de ventes en moins. Dans 14 jours, tu peux déjà avoir ton premier résultat, ou attendre encore un mois de plus à te demander «&nbsp;et si j'essayais&nbsp;?&nbsp;».
        </p>
      </div>
    </div>
  </section>
);

const benefits = [
  "Tu publies chaque jour, sans jamais montrer ton visage",
  "Tu n'as plus à justifier ton activité à ton entourage — tout reste discret et professionnel",
  "Tu vends même pendant que tu dors, sans dépenser en publicité",
  "Tu arrêtes de comparer ta situation à celle des autres — tu avances enfin",
  "Tu deviens la version de toi-même que tu voulais devenir depuis longtemps",
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
          Tu ne ressortiras pas avec une simple formation. Tu ressortiras avec une nouvelle version de toi : prête, sereine, et déjà en train de vendre.
        </p>
      </div>
      <SectionCTA />
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
          <img src="/images/rosine-photo.jpg" alt="Rosine — Formatrice"
            className="w-full h-full object-cover object-top" onError={() => setImgError(true)} />
        )}
      </div>
      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-poppins font-bold text-[0.62rem] md:text-[0.7rem] px-4 md:px-5 py-2 rounded-full"
        style={{ background: "#e8b85c", color: "#0a0a0f" }}>✓ 3 500 000+ FCFA générés sans publicité</span>
    </div>
  );
};

const rosineCredits = [
  "Basée à Abidjan — je connais les réalités du marché africain",
  "Plus de 200 créateurs et e-commerçants africains accompagnés",
  "Plus de 6 500 abonnés sur TikTok",
  "3 500 000+ FCFA générés grâce à mon vendeur IA, sans publicité",
];

const RosineSection = () => (
  <section className="section-padding" style={{ background: "linear-gradient(180deg, transparent, rgba(232,184,92,0.03) 50%, transparent)" }}>
    <div className="max-w-4xl mx-auto page-container">
      <Badge>Ta formatrice</Badge>
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper mb-12">
        Rosine, ton guide pour <span className="text-gold">vendre sans te montrer</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <RosinePhoto />
        <div className="flex-1 mt-6 md:mt-0 space-y-4">
          <p className="text-[0.95rem] md:text-[1.05rem] text-[#c8c2b8] leading-[1.9]">
            Moi aussi, j'ai eu honte de la caméra. Je suis Rosine, créatrice de contenu et formatrice basée à Abidjan. Depuis plusieurs années, j'accompagne des créateurs de contenu et e-commerçants africains — plus de 200 à ce jour — à construire leur présence en ligne, avec plus de 6 500 abonnés sur TikTok.
          </p>
          <p className="text-[0.95rem] md:text-[1.05rem] text-[#c8c2b8] leading-[1.9]">
            Mais avant tout ça, j'ai vécu la même honte que toi devant la caméra. Je recommençais mes vidéos 10 fois, je finissais par tout effacer, et mes produits restaient invisibles.
          </p>
          <p className="text-[0.95rem] md:text-[1.05rem] text-[#c8c2b8] leading-[1.9]">
            Puis j'ai découvert comment créer un vendeur IA qui me ressemble, parle et bouge comme moi — sans jamais me montrer. En quelques mois, il m'a permis de générer plus de 3 500 000 FCFA et 700 commandes, sans dépenser 1 franc en publicité.
          </p>
          <p className="text-[0.95rem] md:text-[1.05rem] text-[#c8c2b8] leading-[1.9]">
            Aujourd'hui, j'ai déjà formé 60 femmes à faire pareil. Et je suis là pour t'apprendre, à toi aussi.
          </p>
          <div className="flex flex-col gap-3.5 pt-2">
            {rosineCredits.map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded bg-gold/15 flex items-center justify-center shrink-0 mt-0.5 text-[#e8b85c] text-[0.75rem] font-bold">✓</span>
                <span className="text-[0.85rem] md:text-[0.9rem] text-[#a09a8e]">{c}</span>
              </div>
            ))}
          </div>
          <blockquote className="text-[1rem] text-paper italic leading-[1.8] p-5 rounded-r-lg mt-6"
            style={{ borderLeft: "3px solid #e8b85c", background: "rgba(232,184,92,0.04)" }}>
            "Mon objectif : que chaque femme qui vend en ligne puisse enfin publier sans honte, et vendre à sa façon."
          </blockquote>
        </div>
      </div>
      <SectionCTA />
    </div>
  </section>
);

const videos = [
  { src: "/videos/video_1.mp4", label: "Dans un magasin d'habits", placeholder: false },
  { src: "/videos/video_2.mp4", label: "Dans une voiture", placeholder: false },
  { src: "/videos/video_3.mp4", label: "En studio", placeholder: false },
  { src: "", label: "En studio — variante 2", placeholder: true },
];

const VideoSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container">
      <Badge>La formation en action</Badge>
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper mb-2">
        Vois par toi-même <span className="text-gold">ce que l'IA produit</span>
      </h2>
      <p className="text-[#7a7468] mb-10">
        Ton vendeur IA peut apparaître partout — magasin, voiture, studio — sans que tu aies à t'y déplacer.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 video-grid">
        {videos.map((v, i) => (
          <div key={i} className="reveal rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,184,92,0.08)]"
            style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.07)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(232,184,92,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
            <div className="w-full" style={{ aspectRatio: "9/16", maxHeight: "480px" }}>
              {v.placeholder ? (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3" style={{ background: "#000" }}>
                  <span className="text-[#e8b85c] text-3xl">🎬</span>
                  <span className="font-poppins text-[#e8b85c] text-[0.8rem] font-semibold uppercase tracking-wider">Vidéo à venir</span>
                </div>
              ) : (
                <video controls preload="metadata" className="w-full h-full object-contain rounded" style={{ background: "#000" }}>
                  <source src={v.src} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="p-4">
              <p className="font-poppins text-paper text-sm">{v.label}</p>
            </div>
          </div>
        ))}
      </div>
      <SectionCTA />
    </div>
  </section>
);

const testimonials = [
  { text: "J'avais honte de me filmer depuis toujours. Avec mon vendeur IA, je poste enfin tous les jours et mes clientes ne se doutent de rien. Mes ventes ont doublé en un mois.", initials: "AM", name: "Awa M.", role: "Boutique mode — Dakar" },
  { text: "Je repoussais mes vidéos depuis des mois par peur du regard des autres. En 14 jours j'ai créé mon vendeur IA et je publie enfin sans stress.", initials: "KD", name: "Khadija D.", role: "Cosmétiques — Abidjan" },
  { text: "Je ne savais rien faire avec la technologie. Rosine explique vraiment simplement. Ma première vidéo était prête en une après-midi, et personne n'a deviné que ce n'était pas moi qui parlais en direct.", initials: "FN", name: "Fatou N.", role: "Bijoux — Douala" },
  { text: "Ce qui m'a convaincue, c'est la garantie. Je n'avais rien à perdre. Aujourd'hui je publie 2 vidéos par jour sans jamais me montrer, et mes ventes suivent.", initials: "BS", name: "Bintou S.", role: "Vente en ligne — Lomé" },
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
      <SectionCTA />
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
      <SectionCTA />
    </div>
  </section>
);

const caCards = [
  { img: "/images/ca-1.jpg", label: "Tableau de bord — Ventes organiques", sub: "0 FCFA dépensé en pub" },
  { img: "/images/ca-2.jpg", label: "Récapitulatif revenus du mois", sub: "100% organique · Contenu IA" },
  { img: "/images/ca-3.jpg", label: "Statistiques sans publicité payante", sub: `Méthode enseignée dans ${PROGRAM_NAME}` },
];

const PreuvesCASection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container">
      <Badge>Preuve concrète</Badge>
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper mb-2">
        Ce que l'IA m'a permis de générer{" "}
        <span className="text-gold">sans pub payante et sans montrer mon visage</span>
      </h2>
      <p style={{ color: "#7a7468", fontSize: "0.9rem", textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
        Captures d'écran réelles de mes tableaux de bord.<br />
        Zéro publicité Facebook. Zéro visage à la caméra.<br />
        Juste l'IA et la méthode enseignée dans <strong style={{ color: "#c8c2b8" }}>{PROGRAM_NAME}</strong>.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {caCards.slice(0, 2).map((c, i) => (
          <div key={i} className="reveal overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{ background: "#111118", border: "1px solid rgba(232,184,92,0.2)", borderRadius: 10 }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,184,92,0.5)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 32px rgba(232,184,92,0.07)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,184,92,0.2)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
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
        <div className="reveal overflow-hidden transition-all duration-300 hover:-translate-y-1 w-full sm:max-w-[60%]"
          style={{ background: "#111118", border: "1px solid rgba(232,184,92,0.2)", borderRadius: 10 }}
          onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,184,92,0.5)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 32px rgba(232,184,92,0.07)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,184,92,0.2)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
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

const valuePacks = [
  {
    tag: "PAQUET 1",
    name: "Le Kit Premier Pas",
    value: "153 700 FCFA",
    items: [
      "Ligne d'Aide Directe",
      "Guide de Démarrage Express",
      "Bibliothèque de Décors",
      "Montage Pas-à-Pas Simplifié",
      "Planning Rattrapable",
      "Modèles Prêts à Copier",
    ],
  },
  {
    tag: "PAQUET 2",
    name: "Le Bon Choix",
    value: "89 800 FCFA",
    items: [
      "Banque de Scripts",
      "Planificateur de Contenu",
      "Pack Audio Mindset & Déclic",
      "Grille de Lecture des Résultats",
      "Suivi Personnalisé de Progression",
    ],
  },
  {
    tag: "PAQUET 3",
    name: "Le Kit Après la Formation",
    value: "108 900 FCFA",
    items: [
      "Plan Post-Formation",
      "Banque d'Idées Illimitée",
      "Tableau de Suivi des Ventes",
      "Guide d'Évolution de l'Avatar",
      "Groupe de Suivi Après-Formation",
    ],
  },
];

const bonusPacks = [
  { tag: "BONUS 1", name: "Le Guide des Erreurs à Éviter", value: "12 800 FCFA" },
  { tag: "BONUS 2", name: "Le SOS Sans Panique", value: "23 800 FCFA" },
];

const Pricing = () => (
  <section id="pricing" className="section-padding">
    <div className="max-w-4xl mx-auto page-container">
      <div className="text-center mb-10">
        <Badge>L'offre complète</Badge>
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper">
          Ton programme complet pour <span className="text-gold">vendre sans te montrer</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {valuePacks.map((pack, i) => (
          <div key={i} className="reveal glow-card rounded-2xl p-6 flex flex-col"
            style={{ background: "#111118", border: "1px solid rgba(232,184,92,0.25)" }}>
            <span className="font-poppins text-[0.65rem] tracking-[0.15em] text-[#e8b85c] font-bold mb-2">{pack.tag}</span>
            <h3 className="font-poppins font-bold text-paper text-[1.1rem] mb-3">{pack.name}</h3>
            <p className="text-[#7a7468] text-[0.75rem] mb-4">
              Valeur : <span className="text-[#e8b85c] font-semibold">{pack.value}</span>
            </p>
            <ul className="space-y-2">
              {pack.items.map((it, j) => (
                <li key={j} className="flex items-start gap-2 text-paper/85 text-[0.82rem]">
                  <span className="text-gold shrink-0 mt-0.5">✓</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {bonusPacks.map((b, i) => (
          <div key={i} className="reveal rounded-2xl p-5 flex items-start gap-4"
            style={{ background: "linear-gradient(135deg, rgba(232,184,92,0.08), rgba(232,184,92,0.02))", border: "1px solid rgba(232,184,92,0.35)" }}>
            <span className="text-2xl">🎁</span>
            <div>
              <span className="font-poppins text-[0.65rem] tracking-[0.15em] text-[#e8b85c] font-bold">{b.tag}</span>
              <h4 className="font-poppins font-bold text-paper text-[0.95rem] mb-1">{b.name}</h4>
              <p className="text-[#7a7468] text-[0.75rem]">
                Valeur : <span className="text-[#e8b85c] font-semibold">{b.value}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal relative pricing-card mx-auto rounded-2xl text-center"
        style={{ border: "1px solid rgba(232,184,92,0.4)", background: "linear-gradient(135deg, rgba(232,184,92,0.08), transparent)" }}>
        <p className="font-poppins text-[#a09a8e] text-[0.85rem] mb-2">Valeur totale</p>
        <p className="font-poppins text-[#7a7468] text-[1.4rem] line-through mb-4">389 000 FCFA</p>
        <p className="font-poppins text-gold uppercase text-[0.7rem] tracking-[0.15em] mb-3">Prix aujourd'hui</p>
        <p className="font-poppins font-extrabold text-[#e8b85c] mb-1 pricing-price">
          {PRICE.split(" ")[0]} <span className="text-[#7a7468] text-xl">FCFA</span>
        </p>
        <p className="text-[#7a7468] text-sm mb-6">Paiement unique · Accès à vie</p>
        <p className="text-paper text-[0.95rem] font-semibold mb-8 italic">
          Tu reçois <span className="text-[#e8b85c]">plus de 6 fois</span> ce que tu payes.
        </p>
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold block w-full text-center py-4 mb-6"><span>Je me lance — {PRICE} →</span></a>
        <div className="flex flex-wrap gap-2 justify-center">
          {["Wave", "Orange Money", "MTN Money"].map(m => (
            <span key={m} className="text-xs px-3 py-1.5 rounded-full text-[#7a7468]" style={{ background: "rgba(255,255,255,0.05)" }}>{m}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Guarantee = () => (
  <section className="section-padding">
    <div className="max-w-2xl mx-auto page-container text-center">
      <Badge>Garantie</Badge>
      <div className="w-[60px] h-px bg-gold mx-auto mb-8" />
      <h2 className="font-poppins font-bold text-2xl md:text-3xl text-paper mb-6">
        La Promesse <span className="text-gold">Zéro Perte</span>
      </h2>
      <div className="reveal p-6 rounded-xl text-left"
        style={{ border: "1px solid rgba(232,184,92,0.25)", background: "linear-gradient(135deg, rgba(232,184,92,0.06), rgba(232,184,92,0.02))" }}>
        <p className="text-[#c8c2b8] text-[0.95rem] leading-relaxed">
          Si tu suis les 3 étapes du programme et que tu n'as pas ton vendeur IA fonctionnel au bout de 14 jours, tu m'envoies un simple message WhatsApp et je te rembourse sous 72h par le même Mobile Money que ton paiement.
        </p>
        <p className="text-[#c8c2b8] text-[0.95rem] leading-relaxed mt-3">
          Pas de question compliquée. Je prends ce risque parce que je sais que ça marche — <span className="text-[#e8b85c] font-semibold">60 femmes l'ont déjà fait avant toi.</span>
        </p>
      </div>
    </div>
  </section>
);

const faqData = [
  { q: "Je ne suis pas douée avec la technologie, est-ce pour moi ?", a: "Oui. Tout est expliqué pas à pas, avec un accompagnement personnel. Le programme est pensé pour les débutantes complètes." },
  { q: "Est-ce que l'avatar a vraiment l'air réel ?", a: "Oui. Tu verras des exemples concrets dans la section vidéos plus haut — magasin, voiture, studio — tous générés par IA." },
  { q: "Est-ce légal ?", a: "Oui : tu crées ton propre vendeur IA et tu clones ta propre voix. Tout t'appartient." },
  { q: "Je n'ai qu'un téléphone, est-ce que ça suffit ?", a: "Oui, un simple smartphone suffit pour suivre tout le programme et créer ton vendeur IA." },
  { q: "Je peux payer avec Mobile Money ?", a: "Oui : Wave, Orange Money, MTN Money." },
  { q: "Et si je bloque pendant les 14 jours ?", a: "Tu as la Ligne d'Aide Directe et le groupe de suivi. Tu n'avances jamais seule." },
  { q: `Combien coûte le programme ?`, a: `${PRICE}, en paiement unique, accès à vie. Plus la garantie Zéro Perte : remboursée sous 72h si tu n'as pas ton vendeur IA au bout de 14 jours en ayant suivi les 3 étapes.` },
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
      <Badge>Dernière étape</Badge>
      <div className="w-[60px] h-px bg-gold mx-auto mb-8" />
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paper max-w-[560px] mx-auto mb-6">
        Tu n'as plus besoin de te montrer pour vendre. <span className="text-gold">Ton vendeur IA s'en charge.</span>
      </h2>
      <p className="text-[#e8b85c] text-[0.9rem] font-semibold mb-2">
        Seulement 5 nouvelles élèves par semaine, pour un suivi personnel de chacune.
      </p>
      <p className="italic text-[#c8c2b8] text-[0.85rem] mb-6">
        Chaque jour d'attente, c'est un jour de ventes en moins.
      </p>
      <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold inline-block mb-4 final-cta-btn"><span>Je me lance — {PRICE} →</span></a>
      <p className="text-[#7a7468] text-[0.78rem]">✓ Wave · Orange Money · MTN Money — Accès immédiat après paiement</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <p className="text-[#4a4840] text-[0.78rem]">© 2026 {PROGRAM_NAME} by Rosine — Tous droits réservés</p>
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
      <ComparisonVideo />
      <Benefits />
      <RosineSection />
      <VideoSection />
      <Testimonials />
      <PreuvesSection />
      <PreuvesCASection />
      <UrgencyBlock />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default BlueprintPage;
