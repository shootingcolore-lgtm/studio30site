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
    title: "1. Objet",
    content: (
      <>
        <p>
          Les présentes conditions générales de vente encadrent les prestations
          proposées par <strong>Shooting Colore</strong>, entreprise
          individuelle appartenant à <strong>Nawel Temmar</strong>,
          immatriculée sous le numéro SIRET :
          <strong> 83027472600025</strong>, spécialisée dans la réalisation de
          books pour comédiens.
        </p>
        <p className="mt-4">
          L’activité est exercée en France, basée à Paris (12e).
        </p>
      </>
    ),
  },
  {
    title: "2. Réservation",
    content: (
      <p>
        La réservation s’effectue via un appel préalable, suivi de la
        validation d’un formulaire et du paiement d’un acompte de
        <strong> 55€</strong>. La réservation est confirmée uniquement à
        réception de cet acompte.
      </p>
    ),
  },
  {
    title: "3. Acompte",
    content: (
      <p>
        L’acompte versé est non remboursable. Il peut toutefois être conservé
        sous forme d’avoir permettant de reprogrammer une séance dans un délai
        maximum de <strong>12 mois</strong>, notamment en cas de force majeure.
      </p>
    ),
  },
  {
    title: "4. Paiement",
    content: (
      <>
        <p>
          Le solde de la prestation doit être réglé dans les jours suivant la
          réalisation du shooting.
        </p>
        <p className="mt-4">
          La transmission des photos non retouchées pour sélection est
          conditionnée au paiement intégral.
        </p>
        <p className="mt-4">
          Moyens de paiement acceptés : <strong>virement</strong>,
          <strong> paiement en ligne</strong>,
          <strong> espèces</strong>.
        </p>
        <p className="mt-4">TVA non applicable (article 293B du CGI).</p>
      </>
    ),
  },
  {
    title: "5. Annulation et report",
    content: (
      <>
        <p>
          Toute annulation à moins de <strong>7 jours</strong> entraîne la perte
          de l’acompte.
        </p>
        <p className="mt-4">Le client peut demander un report de séance.</p>
        <p className="mt-4">
          En cas de retard supérieur à une heure le jour du shooting, et si cela
          impacte l’organisation prévue, la séance pourra être reportée. Des
          frais de <strong>20€</strong> pourront alors être appliqués afin de
          couvrir les frais engagés (préparation, déplacement, prestataires).
        </p>
        <p className="mt-4">
          En cas de situation exceptionnelle (maladie, imprévu majeur), un
          report sera proposé.
        </p>
      </>
    ),
  },
  {
    title: "6. Déroulement de la séance",
    content: (
      <>
        <p>
          La prestation se déroule au studio situé à l’adresse suivante :
          <strong> 7 impasse de la Vallée de Fécamp, 75012 Paris</strong>, dans
          les locaux du <strong>Wanderlust Escape Game</strong>.
        </p>
        <p className="mt-4">
          La durée maximale de la séance est de <strong>4 heures</strong>.
        </p>
        <p className="mt-4">
          La présence et la ponctualité du client sont nécessaires au bon
          déroulement de la prestation.
        </p>
      </>
    ),
  },
  {
    title: "7. Livraison des photos",
    content: (
      <>
        <p>
          Les photos sont livrées via un lien de téléchargement sécurisé dans un
          délai de <strong>1 à 2 semaines</strong>.
        </p>
        <p className="mt-4">
          Le client est invité à télécharger et sauvegarder ses fichiers sur
          plusieurs supports (ordinateur, disque dur) pour plus de sécurité.
        </p>
        <p className="mt-4">
          Les photos restent disponibles pendant <strong>30 jours</strong> via
          le lien.
        </p>
        <p className="mt-4">
          Le photographe garantit la conservation des photos retouchées pendant
          <strong> 1 an</strong> et des photos non retouchées pendant
          <strong> 6 mois</strong> après la prestation.
        </p>
        <p className="mt-4">
          Un minimum de <strong>5 photos retouchées</strong> est garanti.
        </p>
      </>
    ),
  },
  {
    title: "8. Sélection des photos",
    content: (
      <>
        <p>
          Une pré-sélection est réalisée conjointement entre la photographe
          Nawel Temmar et le client lors du shooting.
        </p>
        <p className="mt-4">
          Le client dispose ensuite d’un délai de <strong>deux semaines</strong>{" "}
          pour effectuer son choix final.
        </p>
        <p className="mt-4">
          En cas de besoin, ce délai peut être prolongé sur simple demande.
        </p>
        <p className="mt-4">
          Sans réponse au-delà d’un mois, la photographe se réserve le droit
          d’effectuer la sélection finale.
        </p>
      </>
    ),
  },
  {
    title: "9. Droits d’auteur et utilisation",
    content: (
      <>
        <p>Nawel Temmar reste propriétaire des images réalisées.</p>
        <p className="mt-4">
          Le client bénéficie d’un droit d’utilisation des photos retouchées
          pour ses supports personnels et professionnels (casting, réseaux
          sociaux, communication), sous réserve de mention du crédit du
          photographe.
        </p>
        <p className="mt-4">
          Toute modification des images est interdite sans accord préalable.
        </p>
        <p className="mt-4">
          Toute utilisation commerciale d’envergure (campagne publicitaire,
          affichage, diffusion à grande échelle, etc.) devra faire l’objet d’un
          accord préalable et d’une tarification complémentaire.
        </p>
      </>
    ),
  },
  {
    title: "10. Droit à l’image",
    content: (
      <p>
        Le photographe s’engage à ne diffuser aucune image sans l’accord
        préalable du client.
      </p>
    ),
  },
  {
    title: "11. Responsabilité",
    content: (
      <>
        <p>
          En cas de problème technique exceptionnel entraînant la perte des
          images, le photographe proposera soit une nouvelle séance avec des
          conditions avantageuses, soit un remboursement intégral.
        </p>
        <p className="mt-4">
          La responsabilité du photographe est limitée au montant de la
          prestation.
        </p>
      </>
    ),
  },
  {
    title: "12. Prestations complémentaires",
    content: (
      <>
        <p>
          Les prestations de maquillage et coiffure sont incluses dans l’offre
          et réalisées sous la responsabilité du photographe.
        </p>
        <p className="mt-4">
          Toute réclamation sera traitée directement avec celui-ci.
        </p>
        <p className="mt-4">
          Aucun remboursement ne pourra être exigé pour des motifs purement
          esthétiques.
        </p>
      </>
    ),
  },
  {
    title: "13. Données personnelles",
    content: (
      <p>
        Les données collectées (email, réseaux sociaux) sont utilisées
        uniquement dans le cadre de la relation client et ne sont ni revendues
        ni exploitées à des fins commerciales externes.
      </p>
    ),
  },
]

export default function CGVPage() {
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
                Conditions générales de vente
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
                Cette page précise les modalités de réservation, de paiement,
                d’utilisation des images et le cadre général des prestations
                proposées par Shooting Colore pour la réalisation de books photo
                comédiens.
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
                  Un appel permet de faire le point sur ton besoin, le
                  déroulement de la séance et les modalités de réservation avant
                  toute validation.
                </p>
              </div>

              <div className="rounded-[28px] bg-white p-6 text-neutral-900 shadow-xl">
                <div className="text-lg font-semibold">Prendre rendez-vous</div>
                <p className="mt-3 leading-7 text-neutral-600">
                  Un premier échange pour poser tes questions, clarifier ton
                  besoin et vérifier que la formule correspond bien à ton
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

