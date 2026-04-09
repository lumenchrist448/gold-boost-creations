import { useEffect, useRef, useState } from "react";

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
        <a href="#pricing" className="btn-gold"><span>J'accède maintenant</span></a>
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

const Hero = () => (
  <section className="relative min-h-screen flex items-center" style={{ padding: "100px 0 60px" }}>
    <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
      style={{ background: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.08), transparent 60%)" }} />
    <div className="max-w-3xl mx-auto px-4 relative">
      <div className="fade-up" style={{ animationDelay: "0.2s" }}>
        <Badge>Blue Print IA Academy</Badge>
      </div>
      <h1 className="fade-up font-syne font-extrabold leading-[1.1] mb-6" style={{ animationDelay: "0.4s", fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
        Crée des visuels, vidéos et fiches produits{" "}
        <span className="text-gold">pro avec l'IA</span> — sans agence, sans budget fou
      </h1>
      <p className="fade-up text-[#a09a8e] text-lg max-w-[560px] mb-8" style={{ animationDelay: "0.6s" }}>
        La formation complète pour les e-commerçants africains qui veulent utiliser l'intelligence artificielle pour booster leurs ventes — vidéos, affiches pub, fiches produits, pages produits clés en main.
      </p>
      <div className="fade-up flex flex-wrap items-center gap-4 mb-3" style={{ animationDelay: "0.8s" }}>
        <a href="#pricing" className="btn-gold"><span>Accéder à la formation →</span></a>
        <span className="font-syne font-extrabold text-gold text-xl">9 900 FCFA</span>
      </div>
      <p className="fade-up text-[#7a7468] text-[0.78rem]" style={{ animationDelay: "0.8s" }}>
        ✓ Accès immédiat · Wave & Orange Money acceptés
      </p>
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
    <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-8">
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
  <section className="py-20 md:py-24" style={{ background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.03) 50%, transparent)" }}>
    <div className="max-w-2xl mx-auto px-4 text-center">
      <Badge>Le vrai problème</Badge>
      <div className="w-[60px] h-px bg-gold mx-auto mb-8" />
      <p className="reveal text-[1.3rem] text-[#c8c2b8] max-w-[600px] mx-auto mb-10">
        Tu as une boutique en ligne, des produits qui méritent d'être vus. Mais{" "}
        <span className="text-paper font-medium">les visuels, les vidéos, les descriptions</span>{" "}
        — ça prend un temps fou ou ça coûte une fortune à sous-traiter.
      </p>
    </div>
    <div className="max-w-2xl mx-auto px-4 space-y-3">
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
  <section className="py-20 md:py-24">
    <div className="max-w-4xl mx-auto px-4">
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
  <section className="py-20 md:py-24">
    <div className="max-w-4xl mx-auto px-4">
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

const videos = [
  { src: "/videos/video-1.mp4", label: "Vidéo produit IA · Module 01", sub: "Créé avec HeyGen + CapCut" },
  { src: "/videos/video-2.mp4", label: "Affiche animée pub · Module 02", sub: "Créé avec Canva AI + Runway" },
  { src: "/videos/video-3.mp4", label: "Présentation page produit · Module 04", sub: "Créé avec les templates fournis" },
];

const VideoSection = () => (
  <section className="py-20 md:py-24">
    <div className="max-w-5xl mx-auto px-4">
      <Badge>La formation en action</Badge>
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper mb-2">
        Vois par toi-même <span className="text-gold">ce que l'IA produit</span>
      </h2>
      <p className="text-[#7a7468] mb-10">Des vidéos produits 100% générées avec les outils enseignés dans la formation.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {videos.map((v, i) => (
          <div key={i} className="reveal rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.08)]"
            style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.07)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
            <div style={{ aspectRatio: "9/16" }}>
              <video controls preload="metadata" className="w-full h-full object-cover">
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
  <section className="py-20 md:py-24">
    <div className="max-w-5xl mx-auto px-4">
      <Badge>Résultats visuels</Badge>
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper mb-2">
        Des affiches pub <span className="text-gold">créées en 5 minutes</span>
      </h2>
      <p className="text-[#7a7468] mb-10">Toutes ces affiches ont été générées avec les outils du Module 02 — sans graphiste, sans agence.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6].map(n => (
          <div key={n} className="reveal overflow-hidden rounded transition-transform duration-300 hover:scale-[1.02]"
            style={{ aspectRatio: "4/5", border: "1px solid rgba(255,255,255,0.06)" }}>
            <img src={`/images/affiche-${n}.jpg`} alt={`Affiche publicitaire IA ${n}`} className="w-full h-full object-cover" />
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
  <section className="py-20 md:py-24">
    <div className="max-w-4xl mx-auto px-4">
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
  <section className="py-20 md:py-24">
    <div className="max-w-5xl mx-auto px-4">
      <Badge>Ils l'ont fait</Badge>
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper mb-2">
        <span className="text-gold">Preuves réelles</span> de résultats
      </h2>
      <p className="text-[#7a7468] mb-10">Des captures d'écran envoyées par des apprenants après avoir appliqué les modules. Non retouchées.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map(n => (
          <div key={n} className="reveal overflow-hidden rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.08)]"
            style={{ aspectRatio: "9/16", background: "#111118", border: "1px solid rgba(255,255,255,0.07)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
            <img src={`/images/preuve-${n}.jpg`} alt={`Preuve résultat apprenant ${n}`} className="w-full h-full object-cover object-top" />
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
  <section id="pricing" className="py-20 md:py-24">
    <div className="max-w-2xl mx-auto px-4">
      <div className="text-center mb-10">
        <Badge>Tarif</Badge>
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper">
          Un seul investissement. <span className="text-gold">Des résultats durables.</span>
        </h2>
      </div>
      <div className="reveal relative max-w-[480px] mx-auto rounded p-12 md:p-14"
        style={{ border: "1px solid rgba(201,168,76,0.25)", background: "linear-gradient(135deg, rgba(201,168,76,0.04), transparent)" }}>
        <div className="absolute inset-0 rounded pointer-events-none" style={{ boxShadow: "0 0 40px rgba(201,168,76,0.05)" }} />
        <div className="relative">
          <p className="font-syne text-gold uppercase text-[0.7rem] tracking-[0.15em] mb-4">Blue Print IA Academy — Accès complet</p>
          <p className="font-syne font-extrabold text-paper mb-1" style={{ fontSize: "3.5rem", lineHeight: 1 }}>
            9 900 <span className="text-[#7a7468] text-xl">FCFA</span>
          </p>
          <p className="text-[#7a7468] text-sm mb-8">Paiement unique · Accès à vie</p>
          <a href="LIEN_PAIEMENT" className="btn-gold block w-full text-center py-4 mb-8"><span>Je veux accéder maintenant →</span></a>
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
    <section className="py-20 md:py-24">
      <div className="max-w-[620px] mx-auto px-4">
        <Badge>FAQ</Badge>
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper mb-10">Questions fréquentes</h2>
        {faqData.map((item, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "24px 0" }}>
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between text-left text-paper font-syne font-semibold text-sm">
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
  <section className="py-20 md:py-24 text-center relative">
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.06), transparent 60%)" }} />
    <div className="max-w-xl mx-auto px-4 relative">
      <Badge>Dernière chance</Badge>
      <div className="w-[60px] h-px bg-gold mx-auto mb-8" />
      <h2 className="font-syne font-bold text-3xl md:text-4xl text-paper max-w-[560px] mx-auto mb-6">
        L'IA ne va pas attendre que tu sois prêt. <span className="text-gold">Tes concurrents, eux, avancent.</span>
      </h2>
      <p className="text-[#7a7468] max-w-[480px] mx-auto mb-8">
        Pour 9 900 FCFA — soit moins qu'une affiche sous-traitée — tu accèdes à 4 modules complets qui vont transformer ta façon de vendre en ligne.
      </p>
      <a href="#pricing" className="btn-gold inline-block mb-4"><span>Accéder à Blue Print IA Academy →</span></a>
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
      <StickyBar />
      <Hero />
      <ProofBar />
      <Problem />
      <Modules />
      <WhoIsItFor />
      <VideoSection />
      <AffichesSection />
      <Testimonials />
      <PreuvesSection />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default BlueprintPage;
