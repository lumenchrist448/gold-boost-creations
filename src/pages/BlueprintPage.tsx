import { useEffect, useRef, useState } from "react";

const PromoBanner = () => (
  <div className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-center gap-2 px-4 font-syne font-bold"
    style={{
      background: "linear-gradient(90deg, #7a6230, #c9a84c, #7a6230)",
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
    <span style={{ whiteSpace: "nowrap" }}>🔥 -35%</span>
    <span style={{ whiteSpace: "nowrap" }}>|</span>
    <span style={{ whiteSpace: "nowrap", textDecoration: "line-through", opacity: 0.6 }}>15 200 FCFA</span>
    <span style={{ whiteSpace: "nowrap" }}>→</span>
    <span className="font-extrabold" style={{ whiteSpace: "nowrap", background: "rgba(0,0,0,0.15)", padding: "2px 6px", borderRadius: "2px" }}>9 900 FCFA</span>
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
      style={{ background: "rgba(10,10,15,0.95)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(201,168,76,0.25)" }}>
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-syne text-paper text-sm">Blue Print IA Academy — <span className="text-gold font-bold">9 900 FCFA</span></span>
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold w-full sm:w-auto text-center"><span>J'accède maintenant</span></a>
      </div>
    </div>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="w-8 h-px bg-gold inline-block" />
    <span className="font-syne text-gold uppercase text-[11px] tracking-[0.2em]">{children}</span>
  </div>
);

import heroBannerImg from "@/assets/hero-banner.png";

const HeroBannerImage = () => (
  <img
    src={heroBannerImg}
    alt="Blue Print IA Academy"
    className="w-full object-cover object-center block rounded-xl mb-8"
    style={{ border: "1px solid rgba(201,168,76,0.2)" }}
  />
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    let deadline = localStorage.getItem("blueprint_deadline");
    if (!deadline) {
      const d = new Date();
      d.setDate(d.getDate() + 7);
      deadline = d.toISOString();
      localStorage.setItem("blueprint_deadline", deadline);
    }
    const target = new Date(deadline).getTime();

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

  if (expired) return <p className="font-syne text-[#c9a84c] text-center text-lg font-bold mb-8">⏰ Offre expirée</p>;

  const blocks = [
    { value: timeLeft.days, label: "Jours" },
    { value: timeLeft.hours, label: "Heures" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Secondes" },
  ];

  return (
    <div className="mb-8">
      <p className="font-syne text-[0.85rem] font-semibold text-[#f5f2eb] text-center tracking-[0.05em] mb-4">L'offre se termine dans</p>
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {blocks.map((b, i) => (
          <div key={i} className="flex items-center gap-2 sm:gap-3">
            <div className="flex flex-col items-center justify-center rounded-lg w-14 h-14 sm:w-16 sm:h-16"
              style={{ background: "#111118", border: "1px solid rgba(201,168,76,0.25)" }}>
              <span className="font-syne font-extrabold text-[1.3rem] sm:text-[1.6rem] text-[#f5f2eb]">{String(b.value).padStart(2, "0")}</span>
              <span className="text-[0.58rem] text-[#7a7468] uppercase tracking-[0.1em]">{b.label}</span>
            </div>
            {i < 3 && <span className="font-extrabold text-[#c9a84c] text-lg">:</span>}
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
  <section className="relative pt-[88px] sm:pt-[92px] pb-12 sm:pb-16">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
      style={{ background: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.08), transparent 60%)" }} />
    <div className="page-container relative max-w-2xl mx-auto">
      {/* Title */}
      <h1 className="fade-up font-syne font-extrabold leading-[1.15] mb-4 text-[#f5f2eb]"
        style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>
        Crée des visuels, vidéos et fiches produits{" "}
        <span className="text-[#c9a84c]">pro avec l'IA</span> — sans agence, sans budget fou
      </h1>

      {/* Badge Formation */}
      <div className="fade-up flex items-center gap-2 mb-6" style={{ animationDelay: "0.2s" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7a7468" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/>
        </svg>
        <span className="text-[#7a7468] text-[0.9rem]">Formation</span>
      </div>

      {/* Banner Image */}
      <div className="fade-up" style={{ animationDelay: "0.4s" }}>
        <HeroBannerImage />
      </div>

      {/* Prix */}
      <div className="fade-up flex items-center justify-center gap-4 mb-2" style={{ animationDelay: "0.6s" }}>
        <span className="font-syne text-[1.1rem] sm:text-[1.4rem] text-[#7a7468] line-through">15 200 FCFA</span>
        <span className="font-syne font-extrabold text-[2.2rem] sm:text-[2.8rem] text-[#c9a84c]">9 900 FCFA</span>
      </div>
      <p className="text-[#7a7468] text-[0.8rem] text-center mb-6">Paiement unique · Accès à vie</p>

      {/* Countdown */}
      <div className="fade-up" style={{ animationDelay: "0.7s" }}>
        <CountdownTimer />
      </div>

      {/* CTA Button */}
      <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="fade-up block w-full text-center font-syne font-bold text-[0.9rem] sm:text-[1rem] uppercase tracking-[0.05em] py-4 sm:py-[18px] px-6 rounded-lg mb-3 transition-colors duration-200 cursor-pointer"
        style={{ background: "#c9a84c", color: "#0a0a0f", animationDelay: "0.8s", border: "none" }}
        onMouseEnter={e => (e.currentTarget.style.background = "#e8cc7e")}
        onMouseLeave={e => (e.currentTarget.style.background = "#c9a84c")}>
        Rejoindre la formation →
      </a>
      <p className="text-[#7a7468] text-[0.78rem] text-center mb-4">Moyens de paiement disponibles</p>

      {/* Payment Badges */}
      <div className="flex flex-wrap justify-center gap-2">
        {paymentBadges.map((b, i) => (
          <div key={i} className="flex items-center justify-center rounded-lg w-10 h-7 sm:w-12 sm:h-8 font-syne font-bold text-[0.55rem] text-[#f5f2eb]"
            style={{ background: b.bg, border: `1px solid ${b.border}` }}>
            {b.label}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const proofItems = [
  { icon: "👥", text: "+200 e-commerçants formés" },
  { icon: "⭐", text: "4 modules pratiques complets" },
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
  "Tu passes des heures à rédiger des fiches produits qui ne convertissent pas",
  "Tes visuels publicitaires manquent de pro et tu ne peux pas payer un graphiste chaque fois",
  "Tu ne sais pas créer des vidéos produits attractives sans apparaître à la caméra",
  "Ta page produit ne donne pas envie d'acheter — tu perds des ventes chaque jour",
  "Les agences demandent 50 000 FCFA+ pour ce que l'IA peut faire en 10 minutes",
];

const Problem = () => (
  <section className="section-padding" style={{ background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.03) 50%, transparent)" }}>
    <div className="max-w-2xl mx-auto page-container text-center">
      <Badge>Le vrai problème</Badge>
      <div className="w-[60px] h-px bg-gold mx-auto mb-8" />
      <p className="reveal text-[1.3rem] text-[#c8c2b8] max-w-[600px] mx-auto mb-10">
        Tu as une boutique en ligne, des produits qui méritent d'être vus. Mais{" "}
        <span className="text-paper font-medium">les visuels, les vidéos, les descriptions</span>{" "}
        — ça prend un temps fou ou ça coûte une fortune à sous-traiter.
      </p>
    </div>
    <div className="max-w-2xl mx-auto page-container space-y-3">
      {problems.map((p, i) => (
        <div key={i} className="reveal flex items-start gap-3 p-5 rounded"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", transition: "border-color 0.3s" }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
          <span className="text-red-500 font-bold shrink-0">✕</span>
          <span className="text-paper/80">{p}</span>
        </div>
      ))}
    </div>
  </section>
);

const modules = [
  { num: "01", title: "Création de vidéos produits avec l'IA", tag: "HeyGen · CapCut · Runway", desc: "Génère des vidéos produits professionnelles sans caméra, sans monteur. De l'avatar IA au voiceover, jusqu'au rendu final prêt à publier." },
  { num: "02", title: "Affiches publicitaires qui vendent", tag: "Canva AI · Adobe Firefly · DALL-E", desc: "Crée des visuels pub percutants pour Facebook, TikTok et Instagram avec l'IA. Fini le graphiste à chaque promo." },
  { num: "03", title: "Fiches produits ultra-convaincantes", tag: "ChatGPT · Claude · Prompts inclus", desc: "Rédige en quelques minutes des descriptions qui rassurent, séduisent et poussent à l'achat. Avec les bons prompts adaptés à l'Afrique." },
  { num: "04", title: "Page produit complète et convertissante", tag: "Structure · Copywriting · Templates", desc: "Structure ta page produit comme un pro du e-commerce : hiérarchie visuelle, copywriting, preuves sociales et CTA optimisés." },
];

const Modules = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto page-container">
      <Badge>Ce que tu vas maîtriser</Badge>
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper mb-10">
        4 modules. <span className="text-gold">Des résultats concrets.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] rounded overflow-hidden" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}>
        {modules.map((m, i) => (
          <div key={i} className="module-card reveal bg-ink p-8 md:p-9">
            <span className="font-syne text-gold text-sm tracking-wider mb-1 block">Module {m.num}</span>
            <h3 className="font-syne font-bold text-paper text-lg mb-2">{m.title}</h3>
            <span className="inline-block text-[0.7rem] text-gold/70 border border-gold/20 rounded-sm px-2 py-0.5 mb-3 font-syne">{m.tag}</span>
            <p className="text-[#a09a8e] text-sm leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const yesItems = [
  "Tu vends des produits en ligne en Afrique francophone",
  "Tu veux des visuels pro sans dépenser 50 000 FCFA+ par mois",
  "Tu es débutant avec l'IA mais motivé à apprendre",
  "Tu veux aller vite et avoir des résultats dès la semaine 1",
  "Tu veux rester compétitif face aux grandes boutiques",
];
const noItems = [
  "Tu cherches une formation théorique sans pratique",
  "Tu n'as aucun produit ou boutique en ligne",
  "Tu veux des résultats sans faire aucun effort",
  "Tu n'es pas prêt à investir 10 min par jour",
];

const WhoIsItFor = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto page-container">
      <Badge>Pour qui ?</Badge>
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper mb-10">
        Cette formation est <span className="text-gold">faite pour toi</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="reveal rounded p-8" style={{ border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.04)" }}>
          <h3 className="font-syne text-gold uppercase text-sm tracking-wider mb-4">✓ C'est pour toi si...</h3>
          <ul className="space-y-3">
            {yesItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-paper/80 text-sm"><span className="text-gold shrink-0">✓</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="reveal rounded p-8" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
          <h3 className="font-syne text-[#7a7468] uppercase text-sm tracking-wider mb-4">✕ Ce n'est pas pour toi si...</h3>
          <ul className="space-y-3">
            {noItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-paper/60 text-sm"><span className="text-[#7a7468] shrink-0">✕</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const bonusCards = [
  { icon: "📋", title: "Pack 50 Prompts Prêts à Copier", desc: "50 prompts ChatGPT et Claude testés et validés pour fiches produits, descriptions, relances clients et pages de vente — adaptés au marché africain. Copie, colle, publie.", value: "Valeur : 5 000 FCFA", valueMuted: true },
  { icon: "🎨", title: "20 Templates Canva AI Modifiables", desc: "20 gabarits d'affiches publicitaires prêts à l'emploi sur Canva. Change les couleurs, le texte, ton logo — en 5 minutes tu as une affiche pro pour ta promo.", value: "Valeur : 8 000 FCFA", valueMuted: true },
  { icon: "💬", title: "Accès au Groupe WhatsApp Privé", desc: "Rejoins la communauté d'apprenants actifs. Partage tes créations, pose tes questions, reçois des retours directs de Rosine. Un réseau de e-commerçants africains qui avancent.", value: "Valeur : Inestimable", valueMuted: false },
];

const BonusSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container text-center">
      <Badge>Bonus offerts</Badge>
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper mb-4">
        Tu ne paies pas que la formation. Tu reçois <span className="text-gold">tout ça en plus.</span>
      </h2>
      <p className="text-[#7a7468] text-[0.95rem] max-w-[560px] mx-auto mb-12">
        Ces bonus sont inclus dans ton accès. Aucun paiement supplémentaire.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {bonusCards.map((b, i) => (
          <div key={i} className="reveal relative rounded-lg p-8 text-left transition-all duration-300 hover:shadow-[0_0_24px_rgba(201,168,76,0.06)]"
            style={{ background: "#111118", border: "1px solid rgba(201,168,76,0.25)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)")}>
            <span className="absolute top-0 right-0 font-syne text-[0.6rem] font-bold tracking-[0.15em] px-2.5 py-1 rounded-tr-lg rounded-bl"
              style={{ background: "#c9a84c", color: "#0a0a0f" }}>OFFERT</span>
            <span className="text-3xl mb-4 block">{b.icon}</span>
            <h3 className="font-syne font-bold text-paper text-base mb-3">{b.title}</h3>
            <p className="text-[#a09a8e] text-sm leading-relaxed mb-4">{b.desc}</p>
            <p className={`text-[0.8rem] ${b.valueMuted ? "text-[#7a7468] line-through" : "text-[#c9a84c] font-semibold"}`}>{b.value}</p>
          </div>
        ))}
      </div>
      {/* Bloc valeur totale */}
      <div className="mt-8 mx-auto max-w-[480px] rounded-lg p-7 text-center"
        style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02))", border: "1px solid rgba(201,168,76,0.3)" }}>
        <p className="font-syne text-[0.8rem] text-[#7a7468] tracking-[0.1em] uppercase mb-2">Valeur totale de ce que tu reçois</p>
        <p className="font-syne font-extrabold text-[2rem] text-[#7a7468] line-through mb-1">32 900 FCFA</p>
        <p className="font-syne font-extrabold text-[1.4rem] text-[#c9a84c] mb-2">→ Ton prix aujourd'hui : 9 900 FCFA</p>
        <p className="text-[0.78rem] text-[#7a7468]">Soit 70% de remise sur la valeur réelle</p>
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
        style={{ border: "2px solid rgba(201,168,76,0.3)", boxShadow: "0 24px 48px rgba(0,0,0,0.4)" }}>
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: "linear-gradient(135deg, #1a1a2e, #111118)" }}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="text-[#7a7468] text-[0.8rem]">[ Votre photo ici ]</span>
          </div>
        ) : (
          <img src="/images/rosine-photo.jpg" alt="Rosine — Expert IA"
            className="w-full h-full object-cover object-top" onError={() => setImgError(true)} />
        )}
      </div>
      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-syne font-bold text-[0.65rem] md:text-[0.72rem] px-4 md:px-5 py-2 rounded-full"
        style={{ background: "#c9a84c", color: "#0a0a0f" }}>✓ Certifiée Expert IA</span>
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
  <section className="section-padding" style={{ background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.03) 50%, transparent)" }}>
    <div className="max-w-4xl mx-auto page-container">
      <Badge>Ta formatrice</Badge>
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper mb-12">
        Rosine, <span className="text-gold">Expert IA</span> pour e-commerçants africains
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <RosinePhoto />
        <div className="flex-1 mt-6 md:mt-0">
          <p className="text-[0.95rem] md:text-[1.05rem] text-[#c8c2b8] leading-[1.9] mb-6">
            Je suis Rosine, créatrice de contenu IA et formatrice spécialisée dans l'e-commerce africain. J'ai aidé plus de 200 entrepreneurs à transformer leur boutique en ligne grâce à l'intelligence artificielle — sans agence, sans budget fou.
          </p>
          <div className="flex flex-col gap-3.5 mb-8">
            {rosineCredits.map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded bg-gold/15 flex items-center justify-center shrink-0 mt-0.5 text-[#c9a84c] text-[0.75rem] font-bold">✓</span>
                <span className="text-[0.85rem] md:text-[0.9rem] text-[#a09a8e]">{c}</span>
              </div>
            ))}
          </div>
          <blockquote className="text-[1rem] text-paper italic leading-[1.8] p-5 rounded-r-lg"
            style={{ borderLeft: "3px solid #c9a84c", background: "rgba(201,168,76,0.04)" }}>
            "Mon objectif : que chaque e-commerçant africain ait accès aux mêmes outils que les grandes marques — sans les mêmes budgets."
          </blockquote>
        </div>
      </div>
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
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper mb-2">
        Vois par toi-même <span className="text-gold">ce que l'IA produit</span>
      </h2>
      <p className="text-[#7a7468] mb-10">Des vidéos produits 100% générées avec les outils enseignés dans la formation.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 video-grid">
        {videos.map((v, i) => (
          <div key={i} className="reveal rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.08)]"
            style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.07)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
            <div className="w-full" style={{ aspectRatio: "9/16", maxHeight: "480px" }}>
              <video controls preload="metadata" className="w-full h-full object-contain rounded" style={{ background: "#000" }}>
                <source src={v.src} type="video/mp4" />
              </video>
            </div>
            <div className="p-4">
              <p className="font-syne text-paper text-sm">{v.label}</p>
              <p className="text-[#7a7468] text-xs">{v.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AffichesSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container">
      <Badge>Résultats visuels</Badge>
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper mb-2">
        Des affiches pub <span className="text-gold">créées en 5 minutes</span>
      </h2>
      <p className="text-[#7a7468] mb-10">Toutes ces affiches ont été générées avec les outils du Module 02 — sans graphiste, sans agence.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {[1, 2, 3, 4, 5, 6].map(n => (
          <div key={n} className="reveal overflow-hidden rounded-lg bg-[#111118] transition-transform duration-300 hover:scale-[1.02]"
            style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
            <img src={`/images/affiche-${n}.jpg`} alt={`Affiche publicitaire IA ${n}`} className="w-full h-auto block" />
          </div>
        ))}
      </div>
      <p className="text-center text-[0.78rem] text-[#7a7468] mt-5">💡 Tu apprendras à créer exactement ce type de visuels dans le Module 02</p>
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
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper mb-10">
        Ce qu'ils disent après <span className="text-gold">la formation</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <div key={i} className="reveal relative rounded p-8" style={{ background: "#111118", border: "1px solid rgba(201,168,76,0.25)" }}>
            <span className="absolute top-4 left-6 font-syne text-[5rem] leading-none text-gold/15 select-none">"</span>
            <div className="relative">
              <div className="flex text-gold text-sm mb-3">★★★★★</div>
              <p className="text-paper/80 text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-ink"
                  style={{ background: "linear-gradient(135deg, #c9a84c, #e8cc7e)" }}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-syne text-paper text-sm font-semibold">{t.name}</p>
                  <p className="text-[#7a7468] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PreuvesSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto page-container">
      <Badge>Ils l'ont fait</Badge>
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper mb-2">
        <span className="text-gold">Preuves réelles</span> de résultats
      </h2>
      <p className="text-[#7a7468] mb-10">Des captures d'écran envoyées par des apprenants après avoir appliqué les modules. Non retouchées.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map(n => (
          <div key={n} className="reveal overflow-hidden rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.08)]"
            style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.07)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
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
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper mb-2">
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
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: 10,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.5)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 32px rgba(201,168,76,0.07)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.2)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            <div style={{ width: "100%", background: "#0a0a0f" }}>
              <img src={c.img} alt={c.label} className="w-full h-auto block" />
            </div>
            <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(201,168,76,0.03)" }}>
              <p className="font-syne font-bold" style={{ fontSize: "0.85rem", color: "#f5f2eb" }}>{c.label}</p>
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
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: 10,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.5)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 32px rgba(201,168,76,0.07)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.2)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          }}
        >
          <div style={{ width: "100%", background: "#0a0a0f" }}>
            <img src={caCards[2].img} alt={caCards[2].label} className="w-full h-auto block" />
          </div>
          <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(201,168,76,0.03)" }}>
            <p className="font-syne font-bold" style={{ fontSize: "0.85rem", color: "#f5f2eb" }}>{caCards[2].label}</p>
            <p style={{ fontSize: "0.75rem", color: "#7a7468", marginTop: 4 }}>{caCards[2].sub}</p>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 560, margin: "40px auto 0", textAlign: "center" }}>
        <div style={{ width: 40, height: 1, background: "#c9a84c", margin: "0 auto 16px" }} />
        <p style={{ fontSize: "0.82rem", color: "#7a7468", lineHeight: 1.8 }}>
          Ces captures sont issues de mes propres tableaux de bord.<br />
          Les résultats varient selon l'effort et la régularité.<br />
          Ce que j'enseigne, je le pratique.
        </p>
      </div>
    </div>
  </section>
);

const pricingItems = [
  "Module 1 — Création vidéos produits IA",
  "Module 2 — Affiches publicitaires IA",
  "Module 3 — Fiches produits ultra-convaincantes",
  "Module 4 — Page produit complète et convertissante",
  "Tous les prompts utilisés dans la formation",
  "Accès à vie + mises à jour gratuites",
  "Support communauté WhatsApp",
];

const Pricing = () => (
  <section id="pricing" className="section-padding">
    <div className="max-w-2xl mx-auto page-container">
      <div className="text-center mb-10">
        <Badge>Tarif</Badge>
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper">
          Un seul investissement. <span className="text-gold">Des résultats durables.</span>
        </h2>
      </div>
      <div className="reveal relative pricing-card mx-auto rounded"
        style={{ border: "1px solid rgba(201,168,76,0.25)", background: "linear-gradient(135deg, rgba(201,168,76,0.04), transparent)" }}>
        <div className="absolute inset-0 rounded pointer-events-none" style={{ boxShadow: "0 0 40px rgba(201,168,76,0.05)" }} />
        <div className="relative">
          <p className="font-syne text-gold uppercase text-[0.7rem] tracking-[0.15em] mb-4">Blue Print IA Academy — Accès complet</p>
          <p className="font-syne font-extrabold text-paper mb-1 pricing-price">
            9 900 <span className="text-[#7a7468] text-xl">FCFA</span>
          </p>
          <p className="text-[#7a7468] text-sm mb-8">Paiement unique · Accès à vie</p>
          {/* Guarantee Block */}
          <div className="flex items-start gap-4 rounded-lg p-5 mb-6"
            style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" className="w-10 h-10 shrink-0">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <div>
              <p className="font-syne font-bold text-[0.9rem] text-paper mb-1.5">Garantie 7 jours satisfait ou remboursé</p>
              <p className="text-[0.82rem] text-[#a09a8e] leading-[1.7]">Tu appliques les méthodes. Si dans les 7 jours tu n'es pas satisfait, je te rembourse intégralement. Sans question posée.</p>
            </div>
          </div>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold block w-full text-center py-4 mb-8"><span>Je veux accéder maintenant →</span></a>
          <ul className="space-y-3 mb-8">
            {pricingItems.map((item, i) => (
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
  { q: "Je suis débutant avec l'IA, est-ce que je peux suivre ?", a: "Oui, la formation est conçue pour les débutants complets. Chaque outil est expliqué étape par étape avec des exemples concrets adaptés au contexte africain." },
  { q: "Est-ce que les outils utilisés sont gratuits ?", a: "La majorité des outils enseignés ont une version gratuite suffisante pour démarrer. Certains ont des plans payants optionnels pour plus de volume, mais tu peux obtenir de vrais résultats sans débourser plus." },
  { q: "Combien de temps faut-il pour voir les premiers résultats ?", a: "Dès le premier module appliqué, tu peux créer ta première vidéo ou affiche produit. La plupart des apprenants voient des résultats concrets en moins d'une semaine." },
  { q: "Comment j'accède à la formation après paiement ?", a: "Après confirmation du paiement, tu reçois instantanément un lien d'accès par WhatsApp ou email. L'accès est immédiat, 24h/24." },
  { q: "Y a-t-il un remboursement possible ?", a: "Oui, si tu appliques les méthodes et que tu n'obtiens aucun résultat dans les 7 jours, on examine ton cas et on trouve une solution ensemble. On veut que tu réussisses." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="section-padding">
      <div className="max-w-[620px] mx-auto page-container">
        <Badge>FAQ</Badge>
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper mb-10">Questions fréquentes</h2>
        {faqData.map((item, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "24px 0" }}>
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between text-left text-paper font-syne font-semibold text-sm faq-question">
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
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.06), transparent 60%)" }} />
    <div className="max-w-xl mx-auto page-container relative">
      <Badge>Dernière chance</Badge>
      <div className="w-[60px] h-px bg-gold mx-auto mb-8" />
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper max-w-[560px] mx-auto mb-6">
        L'IA ne va pas attendre que tu sois prêt. <span className="text-gold">Tes concurrents, eux, avancent.</span>
      </h2>
      <p className="text-[#7a7468] max-w-[480px] mx-auto mb-8">
        Pour 9 900 FCFA — soit moins qu'une affiche sous-traitée — tu accèdes à 4 modules complets qui vont transformer ta façon de vendre en ligne.
      </p>
      <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold inline-block mb-4 final-cta-btn"><span>Accéder à Blue Print IA Academy →</span></a>
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
      <ProofBar />
      <Problem />
      <Modules />
      <WhoIsItFor />
      <BonusSection />
      <RosineSection />
      <VideoSection />
      <AffichesSection />
      <Testimonials />
      <PreuvesSection />
      <PreuvesCASection />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default BlueprintPage;
