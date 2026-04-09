import Link from "next/link"

const bookingLink =
  "https://cal.com/shooting-colore-k3gevz/appel-decouverte-30min"

type SiteHeaderProps = {
  aboutHref?: string
  currentPage?: "coiffure-maquillage" | "tarif" | "book-photo"
}

export default function SiteHeader({
  aboutHref = "/#apropos",
  currentPage,
}: SiteHeaderProps) {
  return (
    <header className="relative z-20 rounded-2xl border border-black/5 bg-white/90 px-5 py-4 shadow-sm md:sticky md:top-4 md:bg-white/80 md:backdrop-blur">
      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-start justify-between gap-3">
          <Link
            href="/"
            className="min-w-0 flex-1 cursor-pointer transition-opacity hover:opacity-80"
          >
            <div className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Studio Photo • Paris
            </div>
            <div className="text-lg font-semibold leading-tight text-neutral-950">
              Studio 30 / Nawel Temmar
            </div>
          </Link>

          <a
            href={bookingLink}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
          >
            Réserver un appel
          </a>
        </div>

        <details className="group mt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl border border-black/5 bg-neutral-100 px-4 py-3 text-sm font-medium text-neutral-800 [&::-webkit-details-marker]:hidden">
            Menu
            <span className="text-base text-neutral-500 transition-transform group-open:rotate-180">
              ▾
            </span>
          </summary>

          <div className="mt-3 grid gap-3">
            <Link
              href="/coiffure-maquillage"
              className={`rounded-2xl px-4 py-3 text-sm ${
                currentPage === "coiffure-maquillage"
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-700"
              }`}
            >
              Coiffure Maquillage avec Yũ
            </Link>

            <Link
              href="/tarif"
              className={`rounded-2xl px-4 py-3 text-sm ${
                currentPage === "tarif"
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-700"
              }`}
            >
              Tarif
            </Link>

            <Link
              href="/book-photo"
              className={`rounded-2xl px-4 py-3 text-sm ${
                currentPage === "book-photo"
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-700"
              }`}
            >
              Book Photo
            </Link>

            <a
              href={aboutHref}
              className="rounded-2xl bg-neutral-100 px-4 py-3 text-sm text-neutral-700"
            >
              À propos
            </a>
          </div>
        </details>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex md:items-center md:justify-between md:gap-6">
        <Link
          href="/"
          className="block cursor-pointer transition-opacity hover:opacity-80"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Studio Photo • Paris
          </div>
          <div className="text-lg font-semibold">Studio 30 / Nawel Temmar</div>
        </Link>

        <nav className="flex flex-wrap gap-3 text-sm">
          <Link
            href="/coiffure-maquillage"
            className={`rounded-full px-3 py-1 ${
              currentPage === "coiffure-maquillage"
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-700"
            }`}
          >
            Coiffure Maquillage avec Yũ
          </Link>

          <Link
            href="/tarif"
            className={`rounded-full px-3 py-1 ${
              currentPage === "tarif"
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-700"
            }`}
          >
            Tarif
          </Link>

          <Link
            href="/book-photo"
            className={`rounded-full px-3 py-1 ${
              currentPage === "book-photo"
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-700"
            }`}
          >
            Book Photo
          </Link>

          <a
            href={aboutHref}
            className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-700"
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