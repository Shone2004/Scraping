import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsData from "../data/productsdata";
import ProductDetails from "../pages/Productsdetails";

function Products() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Resolve the product from the URL slug (e.g. /products/pet-bottle-shredder-machine).
  // Falls back to the first product when mounted at the bare /products route
  // or when the slug in the URL doesn't match anything.
  const productFromSlug = useMemo(
    () => productsData.find((product) => product.slug === slug),
    [slug]
  );

  const [selectedId, setSelectedId] = useState(
    (productFromSlug || productsData[0]).id
  );

  // Keep local selection in sync whenever the URL slug changes — this is
  // what makes clicking a product in the Navbar's Products mega menu (which
  // navigates straight to /products/:slug) actually show that product.
  useEffect(() => {
    if (productFromSlug) {
      setSelectedId(productFromSlug.id);
    } else if (!slug) {
      setSelectedId(productsData[0].id);
    }
    // if slug is present but doesn't match any product, keep current
    // selection rather than silently resetting it
  }, [slug, productFromSlug]);

  const selectedProduct =
    productsData.find((product) => product.id === selectedId) ||
    productsData[0];

  // Selecting a product (via dropdown or catalog list) updates both local
  // state and the URL, so the address bar, browser back/forward, and any
  // links elsewhere in the app stay consistent with what's on screen.
  const selectProduct = (product) => {
    setSelectedId(product.id);
    navigate(`/products/${product.slug}`);
  };

  const handleChange = (event) => {
    const product = productsData.find(
      (p) => p.id === Number(event.target.value)
    );
    if (product) selectProduct(product);
  };

  return (
    <div className="min-h-screen bg-white pt-[88px]">
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-8 border-b-2 border-green-800">
        <span className="block font-mono text-xs uppercase tracking-[0.2em] text-green-600 mb-2">
          Verdant
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-green-900 leading-tight">
          Product Catalog
        </h1>
        <p className="mt-2 max-w-xl text-sm md:text-base text-gray-600">
          Waste management, women's hygiene, and allied equipment. Choose a
          product below to view its full introduction, specifications, and
          usefulness.
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-[320px_1fr] gap-8 items-start">
        <nav
          aria-label="Product selector"
          className="bg-green-50 border border-green-200 rounded-2xl p-5"
        >
          <label
            htmlFor="product-select"
            className="block text-xs font-semibold uppercase tracking-wide text-green-700 mb-2"
          >
            Select a product
          </label>

          <div className="relative">
            <select
              id="product-select"
              value={selectedId}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg border-2 border-green-800 bg-white px-4 py-3 pr-10 font-semibold text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {productsData.map((product) => (
                <option key={product.id} value={product.id}>
                  {String(product.id).padStart(2, "0")} — {product.name}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-green-800">
              ▾
            </span>
          </div>

          <ul className="mt-5 border-t border-green-200 divide-y divide-green-100">
            {productsData.map((product) => {
              const isActive = product.id === selectedId;
              return (
                <li key={product.id}>
                  <button
                    type="button"
                    onClick={() => selectProduct(product)}
                    className={`w-full flex items-center gap-3 text-left px-2 py-3 rounded-md transition-colors ${
                      isActive
                        ? "bg-green-100 text-green-900 font-bold"
                        : "text-gray-600 hover:text-green-800 hover:bg-green-50"
                    }`}
                  >
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`w-10 h-10 object-contain rounded-md bg-white border ${
                          isActive ? "border-green-700" : "border-green-200"
                        }`}
                      />
                    )}
                    <span
                      className={`font-mono text-xs min-w-[22px] ${
                        isActive ? "text-green-700" : "text-green-400"
                      }`}
                    >
                      {String(product.id).padStart(2, "0")}
                    </span>
                    <span className="text-sm">{product.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <ProductDetails product={selectedProduct} />
      </div>

      <footer className="max-w-6xl mx-auto px-6 pt-4 pb-10 border-t border-green-100 text-xs text-gray-500">
        Verdant--Salvage PVT. LTD.
      </footer>
    </div>
  );
}

export default Products;