import Link from "next/link"

const bookingLink =
  "https://cal.com/shooting-colore-k3gevz/appel-decouverte-30min"

const instagramLink = "https://www.instagram.com/nawel_temmar/"
const youtubeLink = "https://www.youtube.com/@nawel5750"

type FooterLink = {
  label: string
  href: string
  external?: boolean
}

type FooterColumn = {
  title: string
  links: FooterLink[]
}

const footerColumns: FooterColumn[] = [
  {
    title: "Découvrir",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Tarifs", href: "/tarif" },
      { label: "Book photo", href: "/book-photo" },
      { label: "Coiffure-maquillage", href: "/coiffure-maquillage" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "Conditions générales de vente", href: "/cgv" },
      { label: "Mentions légales", href: "/mentions-legales" },
      {
        label: "Politique de confidentialité",
        href: "/politique-confidentialite",
      },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Réseaux & contact",
    links: [
      { label: "Instagram", href: instagramLink, external: true },
      { label: "YouTube", href: youtubeLink, external: true },
      { label: "Réserver un appel", href: bookingLink, external: true },
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="mt-6 rounded-[28px] border border-black/5 bg-white px-4 py-7 shadow-sm md:mt-8 md:rounded-[32px] md:px-10 md:py-12">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr] md:gap-10">
        <div className="max-w-sm">
          <div className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 md:text-sm md:tracking-[0.3em]">
            Studio Photo • Paris
          </div>
          <div className="mt-2 text-xl font-semibold tracking-tight text-neutral-950 md:mt-3 md:text-2xl">
            Studio 30 / Nawel Temmar
          </div>
          <p className="mt-3 text-[14px] leading-6 text-neutral-600 md:mt-4 md:text-base md:leading-8">
            Un studio photo pensé pour les comédien·nes et artistes qui veulent
            construire une image plus forte, plus lisible et plus utile en
            casting.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500 md:text-sm md:tracking-[0.22em]">
              {column.title}
            </div>
            <div className="mt-3 space-y-2 md:mt-4 md:space-y-3">
              {column.links.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-[14px] text-neutral-700 transition-opacity hover:opacity-70 md:text-base"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-[14px] text-neutral-700 transition-opacity hover:opacity-70 md:text-base"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-black/5 pt-4 text-[12px] text-neutral-500 md:mt-10 md:pt-6 md:text-sm">
        © Studio 30 / Nawel Temmar — Tous droits réservés.
      </div>
    </footer>
  )
}