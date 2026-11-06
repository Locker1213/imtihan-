export default function ProductDetail({
  product,
  
  onAddToCart,
}) {
  return (
    <section className="mx-auto min-h-[70vh] max-w-[1440px] px-6 pb-20 sm:px-12 lg:px-20">
      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
        <div className="aspect-square overflow-hidden rounded-lg bg-[#eeece6]">
          <img
            src={product.detailImage}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="pt-1">
          <h1 className="text-[28px] font-semibold leading-tight tracking-[-0.025em] lg:text-[36px]">
            {product.title}
          </h1>

          <p className="mt-5 text-base text-neutral-400">
            {product.subtitle}
          </p>

          <p className="mt-5 text-base font-medium">
            {product.price}
          </p>

          <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
            {product.description}
          </p>

          <button
            onClick={() => onAddToCart(product)}
            className="mt-5 min-h-[44px] w-full rounded-md bg-black px-6 py-3 text-sm text-white transition-colors hover:bg-neutral-800"
          >
            Añadir al carrito
          </button>

          
        </div>
      </div>
    </section>
  );
}