"use client"

import Link from "next/link"
import { useEffect, useRef, type ReactNode } from "react"
import SiteFooter from "@/app/components/SiteFooter"

const bookingLink =
  "https://cal.com/shooting-colore-k3gevz/appel-decouverte-30min"

const heroCarouselImages = [
  {
    src: "/photo/webp/portrait-bliss1.webp",
    alt: "Portrait artistique de musicien pour un book casting",
  },
  {
    src: "/photo/webp/portrait-baptiste.webp",
    alt: "Portrait duo pour un book photo comédien",
  },
  {
    src: "/photo/webp/portrait-aureliebleu.webp",
    alt: "Portrait de comédienne en lumière douce",
  },
  {
    src: "/photo/webp/portrait-fabienne-noir.webp",
    alt: "Portrait dramatique en studio pour directeurs de casting",
  },
  {
    src: "/photo/webp/portrait-guillaume-rouge.webp",
    alt: "Portrait intense de comédien sur fond rouge",
  },
  {
    src: "/photo/webp/portrait-aicha-vert.webp",
    alt: "Portrait de comédienne sur fond vert",
  },
]

const testimonials = [
  {
    quote:
      "J’étais détendue, Nawel me guidait, me montrait régulièrement les photos et cela m’aidait à maîtriser ma pose, mon regard. On a exploré ma part de rêve et de féminité, j’ai passé un excellent moment et les photos sont superbes !",
    author: "Fabienne Maillot",
  },
  {
    quote:
      "C’est une vraie partie de plaisir. Nawel a beaucoup d’idées, moi qui avait du mal à positionner mes bras par exemple. Et j’ai découvert que je pouvais interpréter des rôles que je n’aurais jamais imaginé avant. Ça m’ouvre des perspectives.",
    author: "Mathieu Montbroussous",
  },
  {
    quote:
      "Nawel m’a mis en confiance et c’est très précieux. Je déteste être pris en photo d’habitude, mais on a pris le temps de déconstruire certaines peurs, et à me situer dans l’espace, à ne plus craindre l’objectif. J’ai enfin des belles photos de moi en tant que musicien !",
    author: "Olivier • Bliss On The Star",
  },
]

const menuLinks = [
  { label: "Coiffure Maquillage avec Yũ", href: "/coiffure-maquillage" },
  { label: "Tarif", href: "/tarif" },
  { label: "Book Photo", href: "/book-photo" },
  { label: "À propos", href: "#apropos" },
]

function HomeHeader() {
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
          {menuLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                className="rounded-2xl bg-neutral-100 px-4 py-3 text-[15px] text-neutral-700"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-2xl bg-neutral-100 px-4 py-3 text-[15px] text-neutral-700"
              >
                {link.label}
              </Link>
            )
          )}

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
          <Link href="/tarif" className="rounded-full bg-neutral-100 px-3 py-1">
            Tarif
          </Link>
          <Link
            href="/book-photo"
            className="rounded-full bg-neutral-100 px-3 py-1"
          >
            Book Photo
          </Link>
          <a href="#apropos" className="rounded-full bg-neutral-100 px-3 py-1">
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

function HeroCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (window.innerWidth >= 768) return
    const node = carouselRef.current
    if (!node) return

    const maxScroll = node.scrollWidth - node.clientWidth
    if (maxScroll <= 0) return

    const firstMove = Math.min(140, maxScroll)

    const timer = window.setTimeout(() => {
      node.scrollTo({ left: firstMove, behavior: "smooth" })

      window.setTimeout(() => {
        node.scrollTo({ left: 0, behavior: "smooth" })
      }, 1100)
    }, 700)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="md:grid md:grid-cols-6 md:gap-4">
      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:contents"
      >
        {heroCarouselImages.map((image) => (
          <div
            key={image.src}
            className="min-w-[48%] snap-start overflow-hidden rounded-[28px] md:min-w-0"
          >
            <div className="aspect-[0.72] w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PrimaryButton({
  children,
  href = bookingLink,
}: {
  children: ReactNode
  href?: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex rounded-full bg-neutral-950 px-7 py-4 text-center text-[16px] font-medium text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 md:px-8 md:py-5 md:text-[18px]"
    >
      {children}
    </a>
  )
}

function WhiteCard({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-[28px] border border-black/5 bg-white p-5 shadow-sm md:p-6 ${className}`}
    >
      {children}
    </div>
  )
}

function DuoImages({
  leftSrc,
  leftAlt,
  rightSrc,
  rightAlt,
}: {
  leftSrc: string
  leftAlt: string
  rightSrc: string
  rightAlt: string
}) {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-6">
      <div className="overflow-hidden rounded-[28px]">
        <div className="aspect-[0.72] w-full">
          <img
            src={leftSrc}
            alt={leftAlt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="overflow-hidden rounded-[28px]">
        <div className="aspect-[0.72] w-full">
          <img
            src={rightSrc}
            alt={rightAlt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
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
    <WhiteCard className="p-6 md:p-7">
      <p className="text-[16px] leading-[1.42] text-neutral-900 md:text-[18px]">
        “{quote}”
      </p>
      <div className="mt-5 flex items-end justify-between gap-4">
        <div className="text-[16px] font-medium text-neutral-900 md:text-[18px]">
          {author}
        </div>
        <div className="shrink-0 text-[24px] leading-none text-neutral-900 md:text-[28px]">
          ★★★★★
        </div>
      </div>
    </WhiteCard>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-10 md:py-6">
        <HomeHeader />

        <main className="space-y-16 py-6 md:space-y-24 md:py-10">
          <section className="space-y-6">
            <h1 className="text-[34px] font-semibold leading-[1.12] tracking-tight text-neutral-950 md:max-w-4xl md:text-7xl">
              <span>Pour les comédiens qui</span>
              <br />
              <span>ne veulent plus être</span>
              <br />
              <span className="italic">invisibles en casting</span>
            </h1>

            <HeroCarousel />

            <WhiteCard className="text-[16px] leading-[1.4] text-neutral-900 md:max-w-3xl md:text-[20px]">
              J’aide les comédiens à créer un book artistique plus fort et plus{" "}
              <strong>percutant</strong>, grâce à des <strong>portraits</strong>{" "}
              centrés sur l’incarnation de <strong>personnages</strong> et une{" "}
              <strong>mise en valeur</strong> professionnelle.
            </WhiteCard>

            <div className="flex justify-center md:justify-start">
              <PrimaryButton>Réserver un appel</PrimaryButton>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="max-w-4xl text-[34px] font-semibold leading-[1.14] tracking-tight text-neutral-950 md:text-6xl">
              Ton talent ne suffit pas s’il n’est pas immédiatement lisible.
            </h2>

            <WhiteCard className="text-[16px] leading-[1.4] text-neutral-900 md:max-w-3xl md:text-[20px]">
              100% de client satisfaits une approche bienveillante et l’exigence
              artistique d’une photographe réalisatrice récompensée en festival.
            </WhiteCard>

            <DuoImages
              leftSrc="/photo/webp/portrait-marievert.webp"
              leftAlt="Portrait studio de comédienne sur fond vert"
              rightSrc="/photo/webp/portrait-mariiagris.webp"
              rightAlt="Portrait studio de comédienne sur fond gris"
            />

            <div className="flex justify-center md:justify-start">
              <PrimaryButton>Réserver un appel</PrimaryButton>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="max-w-4xl text-[34px] font-semibold leading-[1.14] tracking-tight text-neutral-950 md:text-6xl">
              A quoi bon avoir un book artistique s’il ne te reflète pas?
            </h2>

            <WhiteCard className="text-[16px] leading-[1.4] text-neutral-900 md:max-w-4xl md:text-[20px]">
              Aujourd’hui, tout le monde peut avoir un book artistique. Il
              suffit de demander à un ami de te prendre en photo pour avoir des
              portraits de toi qualitatifs sans dépenser le moindre sous. Mais
              ce qu’on remarque, et ce qui différencie le comédien amateur du
              professionnel, ce n’est pas la qualité de la photo, mais la
              palette de jeu démontrée par l’image, et son positionnement dans
              le milieu audiovisuel : quel genre te va le mieux, quel
              personnage, etc.
            </WhiteCard>

            <div className="space-y-4 text-[16px] leading-[1.35] text-neutral-900 md:grid md:grid-cols-3 md:gap-4 md:space-y-0 md:text-[18px]">
              <WhiteCard className="max-w-[88%] md:max-w-none">
                Tu réponds aux castings, mais peu reviennent?
              </WhiteCard>
              <WhiteCard className="ml-auto max-w-[82%] md:max-w-none">
                Tu tournes parfois pour l’expérience, sans que ça fasse décoller
                ton image.
              </WhiteCard>
              <WhiteCard className="max-w-[86%] md:max-w-none">
                Tu as peut-être des photos... mais pas un vrai book qui te
                positionne.
              </WhiteCard>
            </div>

            <div className="flex justify-center md:justify-start">
              <PrimaryButton>Réserver un appel</PrimaryButton>
            </div>
          </section>

          <section className="space-y-6" id="methode">
            <h2 className="max-w-4xl text-[34px] font-semibold leading-[1.14] tracking-tight text-neutral-950 md:text-6xl">
              Un book n’est pas seulement là pour te montrer. Il doit te
              positionner.
            </h2>

            <div className="max-w-4xl space-y-6 text-[16px] leading-[1.45] text-neutral-900 md:text-[20px]">
              <p>
                Être comédien·ne, c'est avoir envie d'exprimer quelque chose.
                Une sensibilité, une présence, un message aussi.
              </p>
              <p>
                Et là où le positionnement prend tout son sens, c'est quand tu
                sais ce que tu renvoies, à quel “média” tu corresponds (télé,
                cinéma, théâtre, série) et quel genre (auteur, SF, comédie,
                drame, etc.).
              </p>
              <p>
                Tu peux donc cibler des projets où tu seras le plus marquant, et
                où tu auras plus de chances d'être repéré.
              </p>
              <p>
                Si tu n'as pas encore ce recul, notre échange va exactement
                servir à ça. Je t'aide à cibler, avec mon regard et mon point de
                vue de réalisatrice, tes personnages de prédilection. En
                reprenant les codes des genres et médias visés, on optimise pour
                plaire aux bonnes personnes.
              </p>
            </div>

            <DuoImages
              leftSrc="/photo/webp/portrait-ange.webp"
              leftAlt="Portrait artistique de comédien sur fond bleu"
              rightSrc="/photo/webp/portrait-demon.webp"
              rightAlt="Portrait artistique de comédien sur fond rouge"
            />

            <div className="flex justify-center md:justify-start">
              <PrimaryButton>Réserver un appel</PrimaryButton>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="max-w-4xl text-[34px] font-semibold leading-[1.14] tracking-tight text-neutral-950 md:text-6xl">
              Ils n’avaient pas besoin de plus de photos. Ils avaient besoin
              d’une image plus juste.
            </h2>

            <div className="space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
              {testimonials.map((item) => (
                <TestimonialCard
                  key={item.author}
                  quote={item.quote}
                  author={item.author}
                />
              ))}
            </div>
          </section>

          <section id="apropos" className="space-y-6">
            <h2 className="text-[34px] font-semibold leading-[1.14] tracking-tight text-neutral-950 md:text-6xl">
              A Propos
            </h2>

            <div className="md:hidden space-y-6">
              <div className="mx-auto max-w-2xl text-center text-[16px] leading-[1.45] text-neutral-900">
                En tant que réalisatrice, j'ai analysé énormément de profils,
                organisé des castings et dirigé des comédiens pro comme
                amateurs. J'ai observé ce qui rend un acteur visible ou non,
                plus percutant que les autres. Tout est aussi une question de
                marketing. En me formant depuis 2 ans sur ce sujet, ainsi que
                sur le closing et l’entrepreneuriat, j’ai réalisé que ces
                notions pouvaient s’appliquer à l’acting et à la culture.
              </div>

              <div className="mx-auto flex max-w-sm flex-col gap-4">
                <div className="overflow-hidden rounded-[32px]">
                  <div className="aspect-square w-full">
                    <img
                      src="/photo/webp/portrait-marievert.webp"
                      alt="Portrait de Nawel Temmar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="overflow-hidden rounded-[32px]">
                  <div className="aspect-square w-full">
                    <img
                      src="/photo/webp/portrait-ruthless.webp"
                      alt="Portrait éditorial en studio"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-2 md:items-start md:gap-10">
              <div className="text-[20px] leading-[1.45] text-neutral-900">
                En tant que réalisatrice, j'ai analysé énormément de profils,
                organisé des castings et dirigé des comédiens pro comme
                amateurs. J'ai observé ce qui rend un acteur visible ou non,
                plus percutant que les autres. Tout est aussi une question de
                marketing. En me formant depuis 2 ans sur ce sujet, ainsi que
                sur le closing et l’entrepreneuriat, j’ai réalisé que ces
                notions pouvaient s’appliquer à l’acting et à la culture.
              </div>

              <div className="overflow-hidden rounded-[32px]">
                <div className="aspect-square w-full">
                  <img
                    src="/photo/home/nawel2.jpg"
                    alt="Portrait de Nawel Temmar"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[36px] bg-neutral-950 px-6 py-8 text-white shadow-2xl md:px-14 md:py-16">
            <div className="md:hidden space-y-6">
              <h2 className="text-[28px] font-semibold leading-[1.18] tracking-tight">
                Réserve un appel pour voir comment rendre ton image plus forte.
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
                <h2 className="text-5xl font-semibold leading-[1.18] tracking-tight">
                  Réserve un appel pour voir comment rendre ton image plus
                  forte.
                </h2>
                <p className="mt-6 max-w-2xl text-[20px] leading-[1.45] text-white/90">
                  Avant de réserver ton appel : prépare tes objectifs, les rôles
                  que tu vises, fais un point sur ton expérience globale, et
                  prends du recul pour être le plus juste possible sur ton
                  niveau de jeu et tes ambitions.
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