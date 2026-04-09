import Link from "next/link"
import SiteFooter from "@/app/components/SiteFooter"

const bookingLink =
  "https://cal.com/shooting-colore-k3gevz/appel-decouverte-30min"

const contactEmail = "shootingcolore@gmail.com"

const navItems = [
  "Coiffure Maquillage avec Yũ",
  "Tarif",
  "Book Photo",
  "À propos",
]

const messageTips = [
  "présenter votre projet ou votre besoin",
  "préciser si vous êtes comédien·ne, artiste ou modèle",
  "indiquer si vous avez déjà un book ou non",
  "expliquer ce que vous souhaitez améliorer",
  "ajouter éventuellement un lien vers votre book ou vos réseaux",
]

export default function ContactPage() {
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
                Prise de contact
              </div>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl">
                Parlons de votre projet
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
                Vous pouvez me contacter par mail pour me parler d’un projet
                spécifique, d’un besoin particulier, d’une envie de shooting ou
                d’une question avant réservation. Si votre demande sort du cadre
                habituel, c’est aussi le bon endroit pour m’expliquer ce que
                vous cherchez.
              </p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm md:p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Contact direct
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">
                Écrire par mail
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-700 md:text-lg">
                Pour toute demande personnalisée, collaboration, besoin
                particulier ou question sur le studio, vous pouvez écrire
                directement à :
              </p>

              <a
                href={`mailto:${contactEmail}`}
                className="mt-6 inline-block rounded-2xl bg-neutral-950 px-6 py-4 text-base font-medium text-white"
              >
                {contactEmail}
              </a>

              <p className="mt-6 leading-8 text-neutral-600">
                Décrivez simplement votre besoin, vos objectifs, votre situation
                actuelle et ce que vous aimeriez améliorer dans votre image ou
                votre book.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm md:p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Pour aller plus vite
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">
                Que mettre dans votre message ?
              </h2>

              <div className="mt-6 space-y-4">
                {messageTips.map((tip) => (
                  <div
                    key={tip}
                    className="group rounded-2xl border border-black/5 bg-[#faf7f2] px-4 py-4 text-neutral-700 shadow-sm transition-all duration-300 hover:bg-neutral-950 hover:shadow-xl"
                  >
                    <span className="transition-colors duration-300 group-hover:!text-white">
                      {tip}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 leading-8 text-neutral-600">
                Plus votre message est clair, plus je peux vous répondre de
                manière précise et vous orienter vers la formule la plus adaptée.
              </p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm md:p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Demande rapide
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">
                Formulaire de contact
              </h2>
              <p className="mt-5 leading-8 text-neutral-600">
                Vous pouvez aussi utiliser ce modèle pour préparer votre
                message, puis l’envoyer par mail.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-700">
                    Nom
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full rounded-2xl border border-black/10 bg-[#faf7f2] px-4 py-3 text-neutral-900 outline-none"
                    readOnly
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full rounded-2xl border border-black/10 bg-[#faf7f2] px-4 py-3 text-neutral-900 outline-none"
                    readOnly
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-700">
                    Sujet
                  </label>
                  <input
                    type="text"
                    placeholder="Votre demande"
                    className="w-full rounded-2xl border border-black/10 bg-[#faf7f2] px-4 py-3 text-neutral-900 outline-none"
                    readOnly
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-700">
                    Message
                  </label>
                  <textarea
                    placeholder="Parlez-moi de votre projet, de vos besoins et de vos objectifs."
                    rows={6}
                    className="w-full rounded-2xl border border-black/10 bg-[#faf7f2] px-4 py-3 text-neutral-900 outline-none"
                    readOnly
                  />
                </div>
              </div>

              <a
                href={`mailto:${contactEmail}`}
                className="mt-6 inline-block rounded-2xl bg-neutral-950 px-6 py-4 font-medium text-white"
              >
                Envoyer par mail
              </a>
            </div>

            <div className="rounded-[36px] bg-neutral-950 px-8 py-12 text-white shadow-2xl md:px-10 md:py-14">
              <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                Autre option
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Vous préférez un échange direct ?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                Si vous voulez faire le point sur votre image, votre book ou vos
                objectifs avant de réserver, vous pouvez aussi passer par un
                appel découverte.
              </p>

              <div className="mt-8 rounded-[28px] bg-white p-6 text-neutral-900 shadow-xl">
                <div className="text-lg font-semibold">Appel découverte</div>
                <p className="mt-3 leading-7 text-neutral-600">
                  Un échange simple pour parler de votre profil, de votre
                  projet, de vos besoins et de la meilleure manière de construire
                  une séance utile pour vous.
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

