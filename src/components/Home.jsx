
import heroImage from "../assets/encil.png";

export default function Home({ products, onSelect }) {
  function goToCollection() {
    document.getElementById("collection")?.scrollIntoView({
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "auto"
        : "smooth",
    });
  }

  return (
    <div className="mx-auto max-w-[1440px] pb-20">
      <section className="px-6 pb-8 pt-7 sm:px-12 lg:px-20 lg:pt-12">
        <h1 className="max-w-4xl text-[34px] font-semibold leading-[1.15] tracking-[-0.035em] sm:text-[44px] lg:text-[56px]">
          Título de la página de inicio
        </h1>

        <p className="mt-5 max-w-[700px] text-base leading-[1.6] text-neutral-600 sm:text-lg">
          Subtítulo que establece el contexto, comparte más información
          sobre el sitio web o, en general, motiva a la gente a seguir
          navegando.
        </p>

        <button
          onClick={goToCollection}
          className="mt-7 rounded-md bg-black px-6 py-3.5 text-sm text-white transition-colors hover:bg-neutral-800 sm:text-base"
        >
          Botón
        </button>
      </section>

      <div className="px-4 sm:px-8 lg:px-14">
        <div className="aspect-[1.97/1] overflow-hidden rounded-md bg-[#eeece6]">
          <img
            src={heroImage}
            alt="Fruta fresca y un vaso sobre la mesa"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <section
        id="collection"
        className="scroll-mt-8 px-6 pt-8 sm:px-12 lg:px-20"
      >
        <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.03em] sm:text-[34px] lg:text-[40px]">
          Encabezado de sección
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:mt-14 lg:gap-8">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => onSelect(product)}
              aria-label={`Ver ${product.title}`}
              className="group block w-full rounded-md text-left"
            >
              <div className="aspect-square overflow-hidden rounded-md bg-[#eeece6]">
                <img
                  src={product.cardImage}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-5 text-base font-medium">
                {product.subtitle}
              </h3>

              <p className="mt-2 max-w-[300px] text-sm leading-[1.6] text-neutral-500 sm:text-base">
                {product.cardDescription}
              </p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}