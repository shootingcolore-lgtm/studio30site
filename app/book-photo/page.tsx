import Link from "next/link"
import SiteFooter from "@/app/components/SiteFooter"

const bookingLink =
  "https://cal.com/shooting-colore-k3gevz/appel-decouverte-30min"

type PhotoItem = {
  src?: string
  alt: string
  label?: string
  imgClassName?: string
}

type SeriesItem = {
  title: string
  actor: string
  roles: string
  energy: string
  photos: PhotoItem[]
}

const series: SeriesItem[] = [
  {
    title: "Série 01",
    actor: "Aicha Ameddah",
    roles: "Élégance • Artiste • Sociale",
    energy:
      "Trois mises en beauté de Yũ pour montrer la palette de jeu, la capacité d’incarnation d’Aicha et les rôles où elle se spécialise.",
    photos: [
      {
        src: "/photo/aicha-vert.jpg",
        alt: "Portrait d’Aicha sur fond vert",
      },
      {
        src: "/photo/AAichanoir.jpg",
        alt: "Portrait d’Aicha sur fond noir",
      },
      {
        src: "/photo/AAicharose.jpg",
        alt: "Portrait d’Aicha sur fond rose",
      },
    ],
  },
  {
    title: "Série 02",
    actor: "Mathieu Montbroussous",
    roles: "Gentleman • Rêveur • Policier",
    energy:
      "Le point de départ avec Mathieu est l’accessoire d’une barbe, moustache, ou d’un visage rasé de près. La différence est forte et permet d’aller vers des archétypes très différents.",
    photos: [
      {
        src: "/photo/Mathieubleu.jpg",
        alt: "Portrait de Mathieu sur fond bleu",
      },
      {
        src: "/photo/Mathieurose.jpg",
        alt: "Portrait de Mathieu sur fond rose",
      },
      {
        src: "/photo/mathieumous.jpg",
        alt: "Portrait de Mathieu avec moustache",
      },
    ],
  },
  {
    title: "Série 03",
    actor: "Selma Ould Braham",
    roles: "Douceur • Force • Mélancolie",
    energy:
      "Selma est une talentueuse comédienne. Ce shooting était le premier depuis plusieurs années. Nous avons travaillé des rôles sensibles légers, puis plus ancrés.",
    photos: [
      {
        src: "/photo/selma1.jpg",
        alt: "Portrait de Selma sur fond gris",
      },
      {
        src: "/photo/selma2.jpg",
        alt: "Portrait de Selma sur fond noir",
      },
      {
        src: "/photo/selma3.jpg",
        alt: "Portrait de Selma sur fond brun",
      },
    ],
  },
  {
    title: "Série 04",
    actor: "Guillaume Brismontier",
    roles: "Introverti • Libre • Intime",
    energy:
      "Les photos servent aussi à se découvrir soi-même. Guillaume, rôliste expérimenté, travaille sa voix et son jeu, mais rencontre plus rarement son corps et son image. Ici, elle se déploie.",
    photos: [
      {
        src: "/photo/Guillaumeblanc.jpg",
        alt: "Portrait de Guillaume sur fond clair",
      },
      {
        src: "/photo/Guillaumebleu.jpg",
        alt: "Portrait de Guillaume sur fond bleu",
      },
      {
        src: "/photo/Guillaumerouge.jpg",
        alt: "Portrait de Guillaume sur fond rouge",
      },
    ],
  },
  {
    title: "Série 05",
    actor: "Mariia Romanova",
    roles: "Femme forte • Légère • Film d’époque",
    energy:
      "Trois personnages marqués par des attitudes différentes : l’autorité, la légèreté, puis une femme d’époque axée sur la douceur.",
    photos: [
      {
        src: "/photo/marriabrun.jpg",
        alt: "Portrait de Mariia aux tons bruns",
      },
      {
        src: "/photo/mariiagris.jpg",
        alt: "Portrait de Mariia sur fond gris",
      },
      {
        src: "/photo/mariianoir.jpg",
        alt: "Portrait de Mariia sur fond sombre",
      },
    ],
  },
  {
    title: "Série 06",
    actor: "Ludovic Chatin",
    roles: "Charisme • Précision du regard • Présence intérieure",
    energy:
      "Ludovic a joué avec ce qu’il maîtrise le mieux : son regard. Le point de départ était la colère, qui a débouché sur quelque chose de beaucoup plus léger et attractif.",
    photos: [
      {
        src: "/photo/Ludo1.png",
        alt: "Portrait de Ludovic 1",
        imgClassName: "object-[50%_20%]",
      },
      {
        src: "/photo/Ludo2.png",
        alt: "Portrait de Ludovic 2",
        imgClassName: "object-[50%_20%]",
      },
      {
        src: "/photo/Ludo3.png",
        alt: "Portrait de Ludovic 3",
        imgClassName: "object-[50%_50%]",
      },
    ],
  },
  {
    title: "Série 07",
    actor: "Robin Entreinger",
    roles: "Tension • Magnétisme • Distance",
    energy:
      "Réalisateur de science-fiction, Robin a travaillé une figure sobre qui joue sur la retenue, le sérieux, mais aussi la rêverie assumée.",
    photos: [
      {
        src: "/photo/RobinGris.jpg",
        alt: "Portrait de Robin sur fond gris",
        imgClassName: "object-[50%_20%]",
      },
      {
        src: "/photo/RobinCouleur.jpg",
        alt: "Portrait de Robin en couleur",
        imgClassName: "object-[50%_20%]",
      },
    ],
  },
  {
    title: "Série 08",
    actor: "Aurélie Laffont",
    roles: "Solaire • Intensité • Projection casting",
    energy:
      "Une série pensée pour renforcer les codes de casting cinéma et publicité. Aurélie incarne des rôles de comédie dramatique tout en rayonnant.",
    photos: [
      {
        src: "/photo/Aurelie1.jpg",
        alt: "Portrait d’Aurélie 1",
      },
      {
        src: "/photo/Aurelie2.jpg",
        alt: "Portrait d’Aurélie 2",
      },
      {
        src: "/photo/Aurelie3.jpg",
        alt: "Portrait d’Aurélie 3",
      },
    ],
  },
  {
    title: "Série 09",
    actor: "Fabienne Maillot",
    roles: "Romantique • Intensité • Présence forte et douce",
    energy:
      "Fabienne a exploré la candeur, la rêverie et le lâcher-prise. Son personnage se rapproche d’une femme idéaliste et passionnée, inspirée par l’univers du Cercle des poètes disparus.",
    photos: [
      {
        src: "/photo/FabienneNoir.jpg",
        alt: "Portrait de Fabienne 1",
      },
      {
        src: "/photo/FabienneNoir2.jpg",
        alt: "Portrait de Fabienne 2",
      },
      {
        src: "/photo/FabienneNoir3.jpg",
        alt: "Portrait de Fabienne 3",
      },
    ],
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
                link.label === "Book Photo"
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
            className="rounded-full bg-neutral-100 px-3 py-1"
          >
            Tarif
          </Link>
          <Link
            href="/book-photo"
            className="rounded-full bg-neutral-900 px-3 py-1 text-white"
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

function PhotoCard({ photo }: { photo: PhotoItem }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm">
      {photo.src ? (
        <div className="aspect-[1365/2048] w-full">
          <img
            src={photo.src}
            alt={photo.alt}
            className={`h-full w-full object-cover ${photo.imgClassName ?? ""}`}
          />
        </div>
      ) : (
        <div className="flex aspect-[1365/2048] w-full items-center justify-center border-2 border-dashed border-neutral-300 bg-neutral-100/80 p-6 text-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              Emplacement photo
            </div>
            <div className="mt-3 text-lg font-medium text-neutral-700">
              {photo.label || "Photo"}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function BookPhotoPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-10 md:py-6">
        <PageHeader />

        <main className="space-y-24 py-10 md:space-y-28 md:py-14">
          <section className="max-w-5xl">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Book photo comédien
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl">
              Des séries pensées pour rendre les personnages immédiatement
              lisibles
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              Chaque série est conçue pour aider un directeur de casting à se
              projeter plus vite : une présence, une énergie, une direction de
              rôle lisible dès les premières images.
            </p>
          </section>

          {series.map((serie) => (
            <section
              key={serie.title}
              className="rounded-[32px] border border-black/5 bg-white p-6 shadow-sm md:p-10"
            >
              <div
                className={`grid gap-5 ${
                  serie.photos.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-3"
                }`}
              >
                {serie.photos.map((photo, index) => (
                  <PhotoCard key={`${serie.title}-${index}`} photo={photo} />
                ))}
              </div>

              <div className="mt-8 border-t border-black/5 pt-6 md:pt-8">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  {serie.title}
                </div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
                  {serie.actor}
                </h2>
                <div className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                  {serie.roles}
                </div>
                <p className="mt-4 max-w-4xl text-base leading-8 text-neutral-600 md:text-lg">
                  {serie.energy}
                </p>
              </div>
            </section>
          ))}

          <section className="rounded-[36px] bg-neutral-950 px-6 py-8 text-white shadow-2xl md:px-14 md:py-16">
            <div className="md:hidden space-y-6">
              <h2 className="text-[28px] font-semibold leading-[1.18] tracking-tight">
                Réserve un appel pour construire un book plus clair, plus fort
                et plus castable
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
                  Prise de contact
                </div>
                <h2 className="mt-4 text-5xl font-semibold tracking-tight">
                  Réserve un appel pour construire un book plus clair, plus fort
                  et plus castable
                </h2>
                <p className="mt-6 max-w-2xl text-[20px] leading-[1.45] text-white/90">
                  Un échange simple pour faire le point sur ton image actuelle,
                  les rôles que tu vises, et la direction la plus juste pour ton
                  book.
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