import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function Home({ products }) {
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
          {products && products.map((product) => (
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

export async function getServerSideProps() {
  const productModule = await import('../data/products.js');
  const products = productModule.default;

  return {
    props: {
      products,
    },
  };
}