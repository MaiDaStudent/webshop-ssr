import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import Navbar from '../components/Navbar';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>Webshop with SSR</title>
        <meta name="description" content="Explore Korean skincare products with server-side rendering in Next.js" />
      </Head>

      <Navbar />

      <main className="container py-4">
        <h1 className="text-center mb-5">K-Beauty Produkter</h1>

        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </main>

      <ScrollToTopButton />
    </>
  );
}