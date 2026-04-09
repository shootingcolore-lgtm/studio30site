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
    title: "1. Qui est responsable du traitement de vos données ?",
    content: (
      <>
        <p>Le responsable du traitement est :</p>
        <div className="mt-4 rounded-[24px] border border-black/5 bg-[#faf7f2] p-5">
          <p>
            <strong>Shooting Colore</strong>
          </p>
          <p>
            <strong>Nawel Temmar</strong>
          </p>
          <p>Micro-entreprise</p>
          <p>62 avenue Claude Vellefaux, 75010 Paris</p>
          <p>
            Email : <strong>shootingcolore@gmail.com</strong>
          </p>
        </div>
      </>
    ),
  },
  {
    title: "2. Quelles données sont collectées ?",
    content: (
      <>
        <p>
          Dans le cadre de l’utilisation du site et de la prise de rendez-vous,
          les données suivantes peuvent être collectées :
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-neutral-400">
          <li>nom et prénom ;</li>
          <li>adresse email ;</li>
          <li>numéro de téléphone ;</li>
          <li>lien vers votre book ;</li>
          <li>liens vers vos réseaux sociaux ;</li>
          <li>
            informations communiquées dans votre message de réservation
            concernant vos besoins, votre projet ou vos attentes ;
          </li>
          <li>
            données de navigation et de mesure d’audience via des outils
            statistiques.
          </li>
        </ul>
        <p className="mt-4">
          Aucun fichier, photo, CV ou pièce jointe n’est transmis directement
          via le site.
        </p>
      </>
    ),
  },
  {
    title: "3. Comment vos données sont-elles collectées ?",
    content: (
      <>
        <p>Vos données peuvent être collectées lorsque :</p>
        <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-neutral-400">
          <li>vous naviguez sur le site ;</li>
          <li>vous cliquez vers l’outil de réservation Cal.com ;</li>
          <li>vous réservez un appel téléphonique ou un shooting photo ;</li>
          <li>vous versez un acompte via Stripe ;</li>
          <li>
            vous communiquez vos informations dans le cadre de la préparation de
            votre séance ;
          </li>
          <li>
            vous acceptez de recevoir des actualités, offres ou communications
            commerciales de Shooting Colore.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Pourquoi vos données sont-elles utilisées ?",
    content: (
      <>
        <p>Vos données sont utilisées pour les finalités suivantes :</p>
        <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-neutral-400">
          <li>gérer les prises de rendez-vous ;</li>
          <li>organiser les appels découverte et les séances photo ;</li>
          <li>
            échanger avec vous avant la prestation pour comprendre vos besoins ;
          </li>
          <li>
            gérer l’acompte et, plus largement, la relation commerciale ;
          </li>
          <li>préparer artistiquement la séance ;</li>
          <li>améliorer le site et suivre sa fréquentation ;</li>
          <li>
            envoyer, lorsque vous y avez consenti ou lorsque la loi le permet,
            des actualités, relances ou offres commerciales.
          </li>
        </ul>
        <p className="mt-4">
          La CNIL rappelle que les personnes doivent être informées de manière
          claire sur les finalités du traitement et sur leurs droits.
        </p>
      </>
    ),
  },
  {
    title: "5. Quelle est la base légale du traitement ?",
    content: (
      <>
        <p>Selon les cas, vos données sont traitées sur les bases suivantes :</p>
        <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-neutral-400">
          <li>
            l’exécution de mesures précontractuelles ou contractuelles, lorsque
            vous réservez un appel, un shooting ou réglez un acompte ;
          </li>
          <li>
            l’intérêt légitime, pour l’organisation de l’activité, la
            préparation des séances et certains suivis internes ;
          </li>
          <li>
            le consentement, lorsqu’il est requis, notamment pour certains
            cookies et pour l’envoi de prospection commerciale par email à des
            particuliers.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Avec qui vos données sont-elles partagées ?",
    content: (
      <>
        <p>
          Vos données peuvent être accessibles, dans la limite de ce qui est
          nécessaire, aux destinataires suivants :
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-neutral-400">
          <li>Nawel Temmar / Shooting Colore ;</li>
          <li>Cal.com, pour la réservation ;</li>
          <li>Stripe, pour le paiement de l’acompte ;</li>
          <li>
            SumUp, lorsque le paiement du solde passe par un lien de paiement ;
          </li>
          <li>Vercel, en tant qu’outil d’hébergement du site ;</li>
          <li>Google Analytics, pour la mesure d’audience du site ;</li>
          <li>
            la maquilleuse / coiffeuse partenaire, uniquement dans le cadre de
            la préparation de votre séance, afin d’adapter au mieux
            l’accompagnement à votre image, votre book et vos besoins.
          </li>
        </ul>
        <p className="mt-4">
          Les données partagées avec la maquilleuse sont utilisées uniquement
          pour la préparation de la prestation et l’organisation du shooting.
        </p>
      </>
    ),
  },
  {
    title: "7. Combien de temps vos données sont-elles conservées ?",
    content: (
      <>
        <p>
          Les données ne sont pas conservées indéfiniment. La CNIL rappelle que
          la durée de conservation doit être limitée à ce qui est nécessaire à
          la finalité poursuivie.
        </p>
        <p className="mt-4">
          À ce titre, Shooting Colore peut conserver les données selon les
          principes suivants :
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-neutral-400">
          <li>
            les données liées à une demande de contact, un appel découverte ou
            une réservation non suivie d’une prestation : jusqu’à 3 ans à
            compter du dernier contact émanant de la personne ;
          </li>
          <li>
            les données des clients : pendant la durée nécessaire à la relation
            commerciale, puis archivées pendant les durées nécessaires au
            respect des obligations légales, comptables et fiscales ;
          </li>
          <li>
            les données utilisées à des fins de prospection commerciale :
            jusqu’à 3 ans à compter du dernier contact ou de la fin de la
            relation commerciale, sauf opposition ou retrait du consentement
            avant ce délai.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Newsletter et prospection commerciale",
    content: (
      <>
        <p>
          Si vous êtes un particulier, les messages commerciaux par email
          nécessitent en principe votre consentement préalable. La CNIL le
          rappelle expressément pour la prospection électronique à destination
          des particuliers.
        </p>
        <p className="mt-4">
          Si vous acceptez de recevoir les actualités, offres ou relances de
          Shooting Colore, vous pouvez vous désinscrire à tout moment en
          écrivant à : <strong>shootingcolore@gmail.com</strong>
        </p>
      </>
    ),
  },
  {
    title: "9. Cookies et mesure d’audience",
    content: (
      <>
        <p>
          Le site peut utiliser des cookies ou autres traceurs nécessaires à son
          fonctionnement ainsi que des outils de mesure d’audience.
        </p>
        <p className="mt-4">
          La CNIL précise que certains traceurs de mesure d’audience peuvent
          être exemptés de consentement uniquement s’ils respectent des
          conditions strictes, notamment une finalité limitée à la seule mesure
          d’audience du site, pour le compte exclusif de l’éditeur, sans suivi
          global de la navigation sur plusieurs sites.
        </p>
        <p className="mt-4">
          Si les outils utilisés ne respectent pas ces conditions, le
          consentement préalable de l’utilisateur est nécessaire. La CNIL
          rappelle également que le retrait du consentement doit être simple.
        </p>
      </>
    ),
  },
  {
    title: "10. Vos droits",
    content: (
      <>
        <p>
          Conformément à la réglementation applicable, vous disposez notamment
          des droits suivants :
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-neutral-400">
          <li>droit d’accès ;</li>
          <li>droit de rectification ;</li>
          <li>droit d’effacement ;</li>
          <li>droit d’opposition ;</li>
          <li>droit à la limitation du traitement ;</li>
          <li>
            droit de retirer votre consentement à tout moment lorsque le
            traitement repose sur celui-ci.
          </li>
        </ul>
        <p className="mt-4">
          Pour exercer vos droits, vous pouvez écrire à :
          <strong> shootingcolore@gmail.com</strong>
        </p>
        <p className="mt-4">
          Vous pouvez également introduire une réclamation auprès de la CNIL si
          vous estimez que vos droits ne sont pas respectés. La CNIL rappelle
          l’importance d’une information concise, transparente et accessible
          pour les personnes concernées.
        </p>
      </>
    ),
  },
  {
    title: "11. Public concerné",
    content: <p>Le site et les services proposés s’adressent à un public adulte.</p>,
  },
  {
    title: "12. Sécurité",
    content: (
      <p>
        Shooting Colore met en œuvre des mesures raisonnables pour protéger les
        données personnelles contre l’accès non autorisé, la perte,
        l’altération ou la divulgation non autorisée, dans la limite des outils
        techniques utilisés pour l’activité.
      </p>
    ),
  },
  {
    title: "13. Outils et services tiers",
    content: (
      <>
        <p>
          Le site peut rediriger ou s’appuyer sur des services tiers pour
          certaines fonctionnalités :
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-neutral-400">
          <li>Cal.com pour la réservation ;</li>
          <li>Stripe pour l’acompte ;</li>
          <li>SumUp pour certains paiements ;</li>
          <li>Vercel pour l’hébergement du site ;</li>
          <li>Google Analytics pour la mesure d’audience.</li>
        </ul>
        <p className="mt-4">
          Ces services disposent de leurs propres politiques de confidentialité,
          que nous vous invitons à consulter.
        </p>
      </>
    ),
  },
]

export default function PolitiqueConfidentialitePage() {
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
                Données personnelles
              </div>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl">
                Politique de confidentialité
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
                Cette politique de confidentialité a pour but de vous informer
                de manière claire sur la façon dont vos données personnelles
                sont collectées et utilisées lorsque vous naviguez sur le site
                de Shooting Colore et lorsque vous réservez un appel découverte
                ou une séance photo.
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
                  Une question sur vos données ou sur votre réservation ?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                  Vous pouvez écrire à Shooting Colore pour toute question
                  relative à vos données personnelles, à vos droits ou au
                  fonctionnement du site.
                </p>
              </div>

              <div className="rounded-[28px] bg-white p-6 text-neutral-900 shadow-xl">
                <div className="text-lg font-semibold">Prendre contact</div>
                <p className="mt-3 leading-7 text-neutral-600">
                  Pour toute demande liée à la confidentialité, à votre
                  réservation ou à la gestion de vos informations.
                </p>
                <a
                  href="mailto:shootingcolore@gmail.com"
                  className="mt-6 block w-full rounded-2xl bg-neutral-950 px-5 py-4 text-center font-medium text-white"
                >
                  shootingcolore@gmail.com
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

