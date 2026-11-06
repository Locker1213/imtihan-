import { useState } from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import ProductDetail from "./components/ProductDetail.jsx";

import card1 from "./assets/Image-4.png";
import card2 from "./assets/Image-5.png";
import card3 from "./assets/Image-6.png";

const products = [
  {
    id: 1,
    title: "Nombre del producto",
    subtitle: "Subtítulo",
    price: "10,99 $",
    cardImage: card1,
    detailImage: card1,
    cardDescription:
      "Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo.",
    description:
      "Cuerpo del texto para describir qué es este producto y por qué es una compra imprescindible.",
  },
  {
    id: 2,
    title: "Selección de temporada",
    subtitle: "Subtítulo",
    price: "14,99 $",
    cardImage: card2,
    detailImage: card2,
    cardDescription:
      "Cuerpo del texto para lo que desees ampliar sobre el tema principal.",
    description:
      "Una selección especial para disfrutar de los pequeños momentos. Descubre sus sabores y encuentra tu nuevo favorito.",
  },
  {
    id: 3,
    title: "Una combinación especial",
    subtitle: "Subtítulo",
    price: "12,99 $",
    cardImage: card3,
    detailImage: card3,
    cardDescription:
      "Cuerpo del texto para lo que desees compartir adicionalmente.",
    description:
      "Una propuesta pensada para compartir. Una presentación sencilla para disfrutar en cualquier ocasión.",
  },
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  function goHome() {
    setSelectedProduct(null);
  }

  function openProduct(product) {
    setSelectedProduct(product);
    window.scrollTo(0, 0);
  }

  function addToCart() {
    setCartCount((count) => count + 1);
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Header
        onHome={goHome}
        onCollection={goHome}
        onProduct={() => openProduct(products[0])}
        cartCount={cartCount}
      />

      <main>
        {selectedProduct === null ? (
          <Home
            products={products}
            onSelect={openProduct}
          />
        ) : (
          <ProductDetail
            product={selectedProduct}
            onBack={goHome}
            onAddToCart={addToCart}
          />
        )}
      </main>
    </div>
  );
}