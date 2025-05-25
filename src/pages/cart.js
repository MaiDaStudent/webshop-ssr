import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="text-center mb-4">Kurv</h1>

        {cartItems.length > 0 && (
          <div className="text-end mb-4">
            <button className="btn btn-outline-danger" onClick={clearCart}>
              Tøm hele kurven
            </button>
          </div>
        )}

        {cartItems.length === 0 ? (
          <p className="text-center">Din kurv er tom.</p>
        ) : (
          <div className="row g-4">
            {cartItems.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="card shadow-sm h-100 border-0 rounded-4">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text fw-semibold">{item.price} DKK × {item.quantity}</p>
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Fjern fra kurv
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <ScrollToTopButton />
    </>
  );
}