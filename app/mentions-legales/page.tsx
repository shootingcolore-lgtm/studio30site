import Link from "next/link"
import SiteFooter from "@/app/components/SiteFooter"

const bookingLink =
  "https://cal.com/shooting-colore-k3gevz/appel-decouverte-30min"

const navItems = [
  "Coiffure Maquillage avec Yũ",
  "Tarif",
  "Book Photo",
  "À propos",
]

const sections = [
  {
    title: "Éditeur du site",
    content: (
      <div className="rounded-[24px] border border-black/5 bg-[#faf7f2] p-5">
        <p>
          <strong>Nawel Temmar</strong>
        </p>
        <p>Micro-entreprise</p>
        <p>
          Nom commercial : <strong>Shooting Colore</strong>
        </p>
        <p>
          SIRET : <strong>83027472600025</strong>
        </p>
        <p>Siège social : 62 avenue Claude Vellefaux, 75010 Paris</p>
        <p>Téléphone : 06 64 48 41 16</p>
        <p>Email : shootingcolore@gmail.com</p>
      </div>
    ),
  },
  {
    title: "Statut fiscal",
    content: <p>Entreprise exonérée de TVA.</p>,
  },
  {
    title: "Directrice de la publication",
    content: <p>Nawel Temmar</p>,
  },
  {
    title: "Hébergement",
    content: (
      <div className="rounded-[24px] border border-black/5 bg-[#faf7f2] p-5">
        <p>
          Le site est hébergé par <strong>Vercel Inc.</strong>
        </p>
        <p>440 N Barranca Ave #4133</p>
        <p>Covina, CA 91723</p>
        <p>États-Unis</p>
        <p>
          Site web :{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            https://vercel.com
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Propriété intellectuelle",
    content: (
      <>
        <p>
          L’ensemble des contenus présents sur ce site, notamment les textes,
          images, photographies, logos, éléments graphiques et éléments de
          structure, sont protégés par le droit de la propriété intellectuelle.
        </p>
        <p className="mt-4">
          Sauf autorisation écrite préalable, toute reproduction,
          représentation, diffusion, adaptation ou exploitation, totale ou
          partielle, de tout ou partie du site est interdite.
        </p>
      </>
    ),
  },
  {
    title: "Responsabilité",
    content: (
      <p>
        Shooting Colore s’efforce de fournir sur ce site des informations aussi
        précises que possible. Toutefois, l’éditrice ne pourra être tenue
        responsable des omissions, inexactitudes ou carences dans la mise à
        jour des informations.
      </p>
    ),
  },
  {
    title: "Données personnelles",
    content: (
      <p>
        Les informations relatives au traitement des données personnelles sont
        disponibles dans la{" "}
        <Link
          href="/politique-confidentialite"
          className="font-medium underline underline-offset-4"
        >
          Politique de confidentialité
        </Link>{" "}
        accessible en bas de page.
      </p>
    ),
  },
]

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-6 md:px-10">
        <header className="sticky top-4 z-20 rounded-2xl border border-black/5 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Link
              href="/"
              className="block cursor-pointer transition-opacity hover:opacity-80"
            >
              <div className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Studio Photo • Paris
              </div>
              <div className="text-lg font-semibold">
                Studio 30 / Nawel Temmar
              </div>
            </Link>

            <nav className="flex flex-wrap gap-3 text-sm text-neutral-600">
              {navItems.map((item) =>
                item === "Coiffure Maquillage avec Yũ" ? (
                  <Link
                    key={item}
                    href="/coiffure-maquillage"
                    className="rounded-full bg-neutral-100 px-3 py-1"
                  >
                    {item}
                  </Link>
                ) : item === "Tarif" ? (
                  <Link
                    key={item}
                    href="/tarif"
                    className="rounded-full bg-neutral-100 px-3 py-1"
                  >
                    {item}
                  </Link>
                ) : item === "Book Photo" ? (
                  <Link
                    key={item}
                    href="/book-photo"
                    className="rounded-full bg-neutral-100 px-3 py-1"
                  >
                    {item}
                  </Link>
                ) : item === "À propos" ? (
                  <a
                    key={item}
                    href="/#apropos"
                    className="rounded-full bg-neutral-100 px-3 py-1"
                  >
                    {item}
                  </a>
                ) : (
                  <span
                    key={item}
                    className="rounded-full bg-neutral-100 px-3 py-1"
                  >
                    {item}
                  </span>
                )
              )}

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

        <main className="space-y-12 py-10 md:space-y-16 md:py-14">
          <section className="rounded-[36px] border border-black/5 bg-white px-6 py-10 shadow-sm md:px-10 md:py-14">
            <div className="max-w-4xl">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Informations légales
              </div>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl">
                Mentions légales
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
                Cette page rassemble les informations légales relatives à
                l’édition, l’hébergement et l’exploitation du site Shooting
                Colore.
              </p>
            </div>
          </section>

          <section className="grid gap-6">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm md:p-8"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-5 max-w-4xl text-base leading-8 text-neutral-700 md:text-lg">
                  {section.content}
                </div>
              </article>
            ))}
          </section>

          <section className="rounded-[36px] bg-neutral-950 px-8 py-12 text-white shadow-2xl md:px-14 md:py-16">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Contact
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                  Une question avant de réserver ?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                  Si vous souhaitez en savoir plus sur le fonctionnement du
                  studio, les modalités de réservation ou votre projet, un appel
                  découverte permet de faire le point simplement.
                </p>
              </div>

              <div className="rounded-[28px] bg-white p-6 text-neutral-900 shadow-xl">
                <div className="text-lg font-semibold">Prendre rendez-vous</div>
                <p className="mt-3 leading-7 text-neutral-600">
                  Un premier échange pour parler de votre besoin, poser vos
                  questions et vérifier que la formule correspond à votre
                  objectif.
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

