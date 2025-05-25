import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card shadow-sm h-100 border-0 rounded-4">
      <img
        src={product.image}
        className="card-img-top product-img"
        alt={product.name}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text fw-semibold">{product.price} DKK</p>
        <button
          className="btn btn-primary mt-auto"
          onClick={() => addToCart(product)}
        >
          Læg i kurv 🛒
        </button>
      </div>
    </div>
  );
}
