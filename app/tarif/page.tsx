import Link from "next/link"
import type { ReactNode } from "react"
import SiteFooter from "@/app/components/SiteFooter"

const bookingLink =
  "https://cal.com/shooting-colore-k3gevz/appel-decouverte-30min"

const offerItems = [
  {
    title: "Diagnostic de ton book actuel",
    text: "Analyse de tes images existantes et pistes concrètes pour l’optimiser.",
  },
  {
    title: "3 personnages à incarner",
    text: "Trois propositions distinctes, avec une ambiance propre à chacune, pour montrer plusieurs facettes cohérentes de ton profil.",
  },
  {
    title: "Préparation physique",
    text: "Pour chaque personnage, un maquillage et une coiffure qui incarnent l’archétype.",
  },
  {
    title: "Direction de metteuse en scène pendant le shooting",
    text: "Un accompagnement précis pour aller chercher des expressions, des intentions et des nuances justes.",
  },
  {
    title: "Sélection des images ensemble",
    text: "On choisit ensemble les photos les plus justes, les plus fortes et les plus stratégiques pour ton book.",
  },
  {
    title: "23 photos finales retouchées",
    text: "Des images prêtes à être utilisées pour tes castings, ton book ou ta communication professionnelle.",
  },
]

const testimonials = [
  {
    quote:
      "Merci à toi et Yũ pour ce bel après midi de shooting, merci pour ta douceur, ta patience et ton professionnalisme et à Yũ pour sa bonne humeur sa belle énergie et pour les jolies coiffures, les photos sont superbes !",
    author: "Aicha Ameddah",
  },
  {
    quote:
      "Nawel, merci beaucoup pour ta direction artistique, ta bienveillance et ton regard et tes paroles valorisantes pour me mettre à l'aise",
    author: "Aurélie Laffont",
  },
  {
    quote:
      "L'accompagnement m'a beaucoup aidé, j'ai pu venir préparé et dans les conditions d'un tournage. L'intention de jouer un personnage m'a rassuré et c'est aligné avec ma façon de travailler en tant que comédien, merci Nawel pour cet exercice !",
    author: "Ludovic Chatin",
  },
]

const partners = [
  {
    name: "Studio Muller",
    image: "/photo/muller.jpg",
    alt: "Logo Studio Muller",
  },
  {
    name: "Le Geiq Île-de-France",
    image: "/photo/geq.jpg",
    alt: "Logo Geiq Île-de-France",
  },
  {
    name: "L'association Kinorama77",
    image: "/photo/kino.jpg",
    alt: "Logo Kinorama77",
  },
  {
    name: "Le Festival La Nuit du Court-Métrage",
    image: "/photo/ncm.jpg",
    alt: "Logo La Nuit du Court-Métrage",
  },
]

const faqs = [
  {
    q: "Je ne suis pas à l’aise devant l’objectif, est-ce un problème ?",
    a: "Pas du tout. La direction fait partie intégrante de la séance. Le but est justement de t’accompagner pour obtenir des images justes, sans te laisser seul face à l’appareil.",
  },
  {
    q: "Est-ce adapté si tu débutes ?",
    a: "Oui. Cette offre peut aussi bien servir à construire un book qu’à le réorienter.",
  },
  {
    q: "Est-ce adapté si tu as déjà un book ?",
    a: "Oui. Le diagnostic permet justement de voir ce qui fonctionne déjà et ce qu’il faut renforcer, clarifier ou faire évoluer.",
  },
  {
    q: "Comment se passe la préparation ?",
    a: "En amont, on fait le point sur ton profil, tes objectifs, ton image actuelle et les rôles vers lesquels tu veux aller. Cela permet de définir les personnages et les ambiances de la séance.",
  },
  {
    q: "Combien de temps dure la séance ?",
    a: "La durée dépend de la formule choisie et de la préparation, mais l’objectif reste toujours le même : prendre le temps nécessaire pour obtenir des images fortes et cohérentes.",
  },
  {
    q: "Sous quel délai les photos sont-elles livrées ?",
    a: "Le délai exact t’est précisé au moment de la réservation.",
  },
  {
    q: "Peut-on choisir ensemble les images ?",
    a: "Oui. La sélection se fait ensemble pour garder les photos les plus pertinentes pour ton book et tes objectifs.",
  },
  {
    q: "Comment réserver ?",
    a: "Il suffit de cliquer sur “Réserver un appel” pour faire un premier point sur ton besoin, ton positionnement et la formule la plus adaptée.",
  },
]

const menuLinks = [
  { label: "Coiffure Maquillage avec Yũ", href: "/coiffure-maquillage" },
  { label: "Tarif", href: "/tarif" },
  { label: "Book Photo", href: "/book-photo" },
  { label: "À propos", href: "/#apropos" },
]

function PageHeader() {
  return (
    <header className="relative z-20">
      <details className="group rounded-[24px] border border-black/5 bg-white/90 px-4 py-4 shadow-sm md:hidden">
        <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
          <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4">
            <div className="text-[14px] font-medium uppercase leading-[1.05] tracking-[0.08em] text-neutral-950">
              <div>Studio</div>
              <div className="mt-1.5">Photo</div>
              <div className="mt-1.5">Paris</div>
            </div>

            <div className="pt-0.5 text-center">
              <div className="text-[16px] font-semibold leading-[1.15] text-neutral-950">
                Studio 30 /
              </div>
              <div className="mt-1 text-[16px] font-semibold leading-[1.15] text-neutral-950">
                Nawel Temmar
              </div>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100">
              <div className="flex flex-col gap-1.5">
                <span className="block h-[2px] w-5 rounded-full bg-neutral-900" />
                <span className="block h-[2px] w-5 rounded-full bg-neutral-900" />
                <span className="block h-[2px] w-5 rounded-full bg-neutral-900" />
              </div>
            </div>
          </div>
        </summary>

        <div className="mt-4 grid gap-2.5">
          {menuLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-2xl px-4 py-3 text-[15px] ${
                link.label === "Tarif"
                  ? "bg-neutral-950 text-white"
                  : "bg-neutral-100 text-neutral-700"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={bookingLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-neutral-950 px-4 py-3 text-center text-[15px] font-medium text-white"
          >
            Réserver un appel
          </a>
        </div>
      </details>

      <div className="hidden rounded-2xl border border-black/5 bg-white/80 px-5 py-4 shadow-sm backdrop-blur md:sticky md:top-4 md:flex md:items-center md:justify-between md:gap-6">
        <Link href="/" className="block transition-opacity hover:opacity-80">
          <div className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Studio Photo • Paris
          </div>
          <div className="text-lg font-semibold">Studio 30 / Nawel Temmar</div>
        </Link>

        <nav className="flex flex-wrap gap-3 text-sm text-neutral-600">
          <Link
            href="/coiffure-maquillage"
            className="rounded-full bg-neutral-100 px-3 py-1"
          >
            Coiffure Maquillage avec Yũ
          </Link>
          <Link
            href="/tarif"
            className="rounded-full bg-neutral-900 px-3 py-1 text-white"
          >
            Tarif
          </Link>
          <Link
            href="/book-photo"
            className="rounded-full bg-neutral-100 px-3 py-1"
          >
            Book Photo
          </Link>
          <a
            href="/#apropos"
            className="rounded-full bg-neutral-100 px-3 py-1"
          >
            À propos
          </a>
          <a
            href={bookingLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-neutral-900 px-4 py-1.5 text-white"
          >
            Réserver un appel
          </a>
        </nav>
      </div>
    </header>
  )
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string
  title: string
  desc?: string
}) {
  return (
    <div className="max-w-4xl">
      <div className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-5 text-lg leading-8 text-neutral-600">{desc}</p>
      ) : null}
    </div>
  )
}

function HoverCard({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`group rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:bg-neutral-950 hover:shadow-xl ${className}`}
    >
      <div className="text-neutral-700 transition-colors duration-300 group-hover:!text-white">
        {children}
      </div>
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="w-full overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-sm">
      <div className="aspect-square w-full">
        <img
          src="/photo/tarifvisuel.png"
          alt="Visuel de la page tarif"
          className="h-full w-full object-cover object-[58%_50%]"
        />
      </div>
    </div>
  )
}

function PartnerLogo({
  image,
  alt,
}: {
  image: string
  alt: string
}) {
  return (
    <div className="flex items-center justify-center">
      <img
        src={image}
        alt={alt}
          className="h-auto max-h-[130px] w-auto max-w-full rounded-2xl object-contain md:max-h-[170px]"
      />
    </div>
  )
}

function TestimonialCard({
  quote,
  author,
}: {
  quote: string
  author: string
}) {
  return (
    <HoverCard>
      <div className="text-lg leading-8">“{quote}”</div>
      <div className="mt-4 flex items-end justify-between gap-4">
        <div className="text-sm font-semibold text-neutral-900 transition-colors duration-300 group-hover:!text-white">
          {author}
        </div>
        <div className="shrink-0 text-[24px] leading-none text-neutral-900 transition-colors duration-300 group-hover:!text-white">
          ★★★★★
        </div>
      </div>
    </HoverCard>
  )
}

export default function TarifPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-10 md:py-6">
        <PageHeader />

        <main className="space-y-24 py-10 md:space-y-32 md:py-14">
          <section className="grid items-start gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
            <div>
              <div className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600 shadow-sm">
                Tarifs
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-neutral-950 md:text-6xl">
                Pas juste de belles photos. Des photos pensées pour les castings.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700 md:text-xl">
                Un shooting studio à Paris conçu pour aider les directeurs de
                casting à te projeter plus vite dans des rôles justes pour toi.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600">
                Diagnostic de book, travail de positionnement, 3 personnages à
                incarner, direction de jeu, 23 photos finales retouchées.
              </p>

              <div className="mt-8">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-2xl bg-neutral-950 px-6 py-4 text-base font-medium text-white shadow-lg"
                >
                  Réserver un appel
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Diagnostic de book",
                  "3 personnages à incarner",
                  "Direction de jeu",
                  "23 photos finales retouchées",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/5 bg-white px-4 py-4 text-sm text-neutral-700 shadow-sm transition-all duration-300 hover:bg-neutral-950 hover:!text-white hover:shadow-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <HeroVisual />
            </div>
          </section>

          <section>
            <SectionTitle
              eyebrow="L’offre"
              title="L’offre de lancement"
              desc="Une séance pensée pour nourrir ton book de manière cohérente, ciblée et professionnelle."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {offerItems.map((item) => (
                <HoverCard key={item.title}>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-300 group-hover:!text-white">
                    Inclus
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-neutral-950 transition-colors duration-300 group-hover:!text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8">{item.text}</p>
                </HoverCard>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <div className="group w-full max-w-xl rounded-[32px] bg-neutral-950 px-8 py-10 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                <div className="text-center">
                  <div className="text-sm uppercase tracking-[0.25em] text-white/60">
                    Offre signature
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                    Shooting Signature — 280€
                  </h3>
                </div>

                <div className="mt-8 flex justify-center">
                  <a
                    href={bookingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-2xl bg-white px-6 py-4 font-medium text-neutral-950 transition-all duration-300 group-hover:bg-white/95"
                  >
                    Réserver un appel
                  </a>
                </div>
              </div>
            </div>
          </section>

<section>
  <SectionTitle
    eyebrow="Partenariats"
    title="Ils m’ont fait confiance"
    desc="Écoles, entreprises, associations et structures qui ont déjà collaboré avec le studio."
  />

  <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-10 md:gap-y-12">
    {partners.map((partner) => (
      <PartnerLogo
        key={partner.name}
        image={partner.image}
        alt={partner.alt}
      />
    ))}
  </div>
</section>

          <section>
            <SectionTitle
              eyebrow="Témoignages"
              title="Ils parlent de l’accompagnement"
              desc="Retours d’expérience, ressentis et impact du shooting sur la confiance, le jeu et la préparation."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <TestimonialCard
                  key={item.author}
                  quote={item.quote}
                  author={item.author}
                />
              ))}
            </div>
          </section>

          <section>
            <SectionTitle eyebrow="FAQ" title="Questions fréquentes" />
            <div className="mt-10 grid gap-5">
              {faqs.map((item) => (
                <HoverCard key={item.q}>
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-950 transition-colors duration-300 group-hover:!text-white">
                    {item.q}
                  </h3>
                  <p className="mt-4 leading-8">{item.a}</p>
                </HoverCard>
              ))}
            </div>
          </section>

          <section className="rounded-[36px] bg-neutral-950 px-6 py-8 text-white shadow-2xl md:px-14 md:py-16">
            <div className="md:hidden space-y-6">
              <h2 className="text-[28px] font-semibold leading-[1.18] tracking-tight">
                Tu veux savoir si cette formule est faite pour toi ?
              </h2>

              <p className="text-[16px] leading-[1.45] text-white/90">
                Un appel de 30 min avec Nawel : un diagnostic gratuit sur ton
                book artistique actuel
              </p>

              <div className="rounded-[28px] bg-white p-5 text-neutral-900 shadow-xl">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-full bg-neutral-950 px-4 py-3.5 text-center text-[16px] font-medium text-white"
                >
                  Réserver un appel
                </a>
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-10">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                  CTA final
                </div>
                <h2 className="mt-4 text-5xl font-semibold tracking-tight">
                  Tu veux savoir si cette formule est faite pour toi ?
                </h2>
                <p className="mt-6 max-w-2xl text-[20px] leading-[1.45] text-white/90">
                  Réserve un appel pour faire le point sur ton book, ton
                  positionnement et la formule la plus adaptée à tes objectifs.
                </p>
              </div>

              <div className="rounded-[28px] bg-white p-5 text-neutral-900 shadow-xl">
                <div className="text-[18px] leading-[1.45]">
                  Un appel de 30 min avec Nawel : un diagnostic gratuit sur ton
                  book artistique actuel
                </div>
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block w-full rounded-full bg-neutral-950 px-4 py-4 text-center text-[18px] font-medium text-white"
                >
                  Réserver un appel
                </a>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}