export default function Header({
  onHome,
  onCollection,
  onProduct,
  cartCount,
}) {
  return (
    <header className="mx-auto flex min-h-[110px] max-w-[1440px] flex-wrap items-center justify-between gap-5 px-6 py-6 sm:px-12 lg:px-20">
      <button
        onClick={onHome}
        className="text-left text-sm font-medium"
      >
        Nombre del sitio
      </button>

      <nav
        aria-label="Navegación principal"
        className="flex items-center gap-5 text-xs sm:gap-8 sm:text-sm"
      >
        <button onClick={onHome} className="hover:text-neutral-500">
          Página
        </button>

        <button
          onClick={onCollection}
          className="hover:text-neutral-500"
        >
          Página
        </button>

        <button
          onClick={onProduct}
          className="hover:text-neutral-500"
        >
          Página
        </button>

        <button
          onClick={onCollection}
          className="rounded-md bg-black px-5 py-3 text-xs text-white transition-colors hover:bg-neutral-800"
        >
          {cartCount > 0 ? `Añadidos: ${cartCount}` : "Botón"}
        </button>
      </nav>
    </header>
  );
}