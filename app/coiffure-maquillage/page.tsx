import Link from "next/link"
import type { ReactNode } from "react"
import SiteFooter from "@/app/components/SiteFooter"

const bookingLink =
  "https://cal.com/shooting-colore-k3gevz/appel-decouverte-30min"

const singularities = [
  "Un nez proéminent",
  "Des oreilles décollées",
  "Une peau texturée",
  "Des cernes marqués",
  "Des cheveux mousseux, volumineux, indisciplinés",
  "Un grand front",
  "Une mâchoire affirmée",
]

const benefits = [
  "Renforcer la cohérence de chaque personnage incarné",
  "Affiner ton positionnement visuel",
  "Travailler ton visage comme un vrai support d’expression",
  "Créer des images plus incarnées, plus mémorables et plus singulières",
]

const methodItems = [
  "Ton visage",
  "Ton énergie",
  "Ton niveau de confort avec ton image",
  "Ton objectif artistique",
  "Les personnages que tu veux incarner",
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
              className="rounded-2xl bg-neutral-100 px-4 py-3 text-[15px] text-neutral-700"
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
            Studio 30 • Paris
          </div>
          <div className="text-lg font-semibold">
            Coiffure, maquillage & mise en beauté
          </div>
        </Link>

        <nav className="flex flex-wrap gap-3 text-sm text-neutral-600">
          <Link
            href="/coiffure-maquillage"
            className="rounded-full bg-neutral-900 px-3 py-1 text-white"
          >
            Coiffure Maquillage avec Yũ
          </Link>
          <Link
            href="/tarif"
            className="rounded-full bg-neutral-100 px-3 py-1"
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
        <p className="mt-4 text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
          {desc}
        </p>
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
      <div className="text-neutral-700 transition-colors duration-300 group-hover:text-white">
        {children}
      </div>
    </div>
  )
}

function PrimaryButton() {
  return (
    <a
      href={bookingLink}
      target="_blank"
      rel="noreferrer"
      className="inline-flex rounded-2xl bg-neutral-950 px-6 py-4 text-base font-medium text-white shadow-lg"
    >
      Réserver un appel
    </a>
  )
}

function ImageCard({
  src,
  alt,
  tall = false,
}: {
  src: string
  alt: string
  tall?: boolean
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
      <div className={tall ? "aspect-[0.9]" : "aspect-[0.82]"}>
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  )
}


export default function BeautyCastingPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-10 md:py-6">
        <PageHeader />

        <main className="space-y-16 py-6 md:space-y-24 md:py-10">
          <section className="grid items-start gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <div className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600 shadow-sm">
                Mise en beauté & singularité
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-neutral-950 md:text-6xl">
                La différence entre une belle photo et une photo inoubliable se
                joue ici.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700 md:text-xl">
                Une mise en beauté pensée pour révéler ta singularité, affirmer
                ta présence, et donner encore plus de force aux images.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                Ici, coiffure et maquillage ne servent pas à te lisser. Ils
                servent à construire une image cohérente avec les rôles que tu
                peux défendre.
              </p>

              <div className="mt-8">
                <PrimaryButton />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              <div className="md:col-span-2">
                <ImageCard
                  src="/photo/mac/helene1.jpg"
                  alt="Portrait coiffure maquillage en studio"
                  tall
                />
              </div>
              <ImageCard
                src="/photo/AAichanoir.jpg"
                alt="Portrait dramatique avec mise en beauté"
              />
            </div>
          </section>

          <section className="grid items-start gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
            <div>
              <SectionTitle
                eyebrow="Pourquoi"
                title="Une belle photo ne suffit pas toujours à marquer les esprits."
                desc="Une lumière juste et un bon cadrage créent une belle image. Ce qui la rend mémorable, c’est souvent ce qui se joue dans l’allure, la matière, la structure et la singularité assumée."
              />

              <div className="mt-8 space-y-4">
                <HoverCard>
                  <p className="text-base leading-7 md:text-lg md:leading-8">
                    Trop souvent, la mise en beauté cherche à uniformiser, lisser
                    ou corriger jusqu’à faire disparaître ce qui rend un visage
                    vraiment distinct.
                  </p>
                </HoverCard>

                <HoverCard>
                  <p className="text-base leading-7 md:text-lg md:leading-8">
                    Le risque, c’est d’obtenir une image propre mais
                    interchangeable. Et dans un milieu où il faut être perçu
                    vite, une image trop lisse devient facile à oublier.
                  </p>
                </HoverCard>

                <HoverCard>
                  <p className="text-base font-semibold leading-7 md:text-lg md:leading-8">
                    Ici, la mise en beauté sert à renforcer ce que l’image doit
                    raconter, pas à effacer ta personnalité.
                  </p>
                </HoverCard>
              </div>

              <div className="mt-8">
                <PrimaryButton />
              </div>
            </div>
          </section>

          <section>
            <SectionTitle
              eyebrow="Le parti pris de Yũ"
              title="La singularité."
              desc="Ce qui te distingue peut devenir ce qui te rend inoubliable."
            />

            <div className="mt-8 max-w-4xl space-y-5 text-base leading-7 text-neutral-700 md:text-lg md:leading-8">
              <p>
                Il n’existe pas de visage insipide. Il existe surtout des
                singularités qu’on n’a pas encore appris à regarder autrement.
              </p>
              <p>
                Ce que les standards de beauté ont appris à cacher peut aussi
                devenir un vrai point d’appui visuel.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {singularities.map((item) => (
                <div
                  key={item}
                  className="border-b border-black/10 pb-3 text-base leading-7 text-neutral-700 md:text-lg"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
                  Harmoniser
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-700 md:text-lg md:leading-8">
                  Adoucir, équilibrer, camoufler certains traits pour aller vers
                  une image plus consensuelle. Une approche rassurante, élégante
                  et parfois nécessaire selon le projet.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
                  Valoriser
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-700 md:text-lg md:leading-8">
                  Mettre en avant ce qui fait ton identité. Une mâchoire
                  affirmée, un grand front, un trait atypique peuvent devenir
                  une signature visuelle forte.
                </p>
              </div>
            </div>

            <div className="mt-8 max-w-4xl text-base leading-7 text-neutral-700 md:text-lg md:leading-8">
              Cette approche ne te rend pas simplement “présentable”. Elle
              affirme une présence et donne une vraie cohérence à l’image.
            </div>

            <div className="mt-8">
              <PrimaryButton />
            </div>
          </section>

          <section className="grid items-start gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
            <div>
              <SectionTitle
                eyebrow="Personnalisation"
                title="Une mise en beauté entièrement pensée pour toi."
                desc="Le travail de Yũ n’est jamais automatique. Chaque visage demande une lecture différente."
              />

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {methodItems.map((item) => (
                  <div
                    key={item}
                    className="border-b border-black/10 pb-3 text-base leading-7 text-neutral-700 md:text-lg"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="border-b border-black/10 pb-3 text-base leading-7 text-neutral-700 md:text-lg"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 max-w-4xl text-base leading-7 text-neutral-700 md:text-lg md:leading-8">
                Cette option s’intègre pleinement à l’expérience du shooting et
                renforce la direction artistique globale des images.
              </div>

              <div className="mt-8">
                <PrimaryButton />
              </div>
            </div>

            <div className="grid gap-4 md:gap-5">
              
              <ImageCard
                src="/photo/mac/yu2.jpg"
                alt="Portrait éditorial de Yũ"
                tall
              />
            </div>

            <div className="mt-8">
              <PrimaryButton />
            </div>
          </section>

          <section className="rounded-[36px] bg-neutral-950 px-8 py-12 text-white shadow-2xl md:px-14 md:py-16">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                  CTA final
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                  Tu veux savoir si l’option coiffure / maquillage est faite
                  pour toi ?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                  Réserve un appel pour échanger sur ton image, ton
                  positionnement et le niveau de mise en beauté le plus juste
                  pour ton projet.
                </p>
              </div>

              <div className="rounded-[28px] bg-white p-6 text-neutral-900 shadow-xl">
                <div className="text-lg font-semibold">Bloc réservation</div>
                <p className="mt-3 leading-7 text-neutral-600">
                  Un premier échange pour faire le point sur ton image, tes
                  objectifs et la manière dont cette option peut renforcer la
                  puissance du shooting.
                </p>
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block w-full rounded-2xl bg-neutral-950 px-5 py-4 text-center font-medium text-white"
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