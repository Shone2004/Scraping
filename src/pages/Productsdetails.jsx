import React from "react";

function SectionTitle({ children }) {
  return (
    <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-green-600 mb-3">
      {children}
      <span className="flex-1 h-px bg-green-100" />
    </h3>
  );
}

function ProductDetails({ product }) {
  if (!product) {
    return (
      <div className="bg-white border border-green-200 rounded-2xl p-8">
        <p className="text-gray-600 text-[15px] leading-relaxed">
          Select a product to view its details.
        </p>
      </div>
    );
  }

  const paddedNumber = String(product.id).padStart(2, "0");

  return (
    <article
      aria-live="polite"
      className="bg-white border border-green-200 rounded-2xl p-6 md:p-8"
    >
      <header className="flex justify-between items-start gap-4 border-b-2 border-green-800 pb-5 mb-6">
        <div>
          <span className="font-mono text-xs tracking-wide text-green-600">
            No. {paddedNumber}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-green-900 leading-tight mt-1 mb-2">
            {product.name}
          </h2>
          <p className="text-sm text-gray-600">{product.tagline}</p>
        </div>
        <span className="whitespace-nowrap font-mono text-xs uppercase tracking-wide bg-green-100 text-green-800 border border-green-700 rounded-md px-3 py-1">
          {product.category}
        </span>
      </header>

      {product.image && (
        <div className="mb-7 rounded-xl overflow-hidden border border-green-200 bg-green-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[420px] object-contain"
          />
        </div>
      )}

      <section className="mb-7">
        <SectionTitle>Introduction</SectionTitle>
        <p className="text-[15px] leading-relaxed text-gray-700">
          {product.introduction}
        </p>
      </section>

      <section className="mb-7">
        <SectionTitle>Usefulness</SectionTitle>
        <p className="text-[15px] leading-relaxed text-gray-700">
          {product.usefulness}
        </p>
      </section>

      <section>
        <SectionTitle>Specifications</SectionTitle>
        <div className="relative bg-green-900 text-white rounded-xl p-5">
          <span className="absolute top-3 left-3 w-2 h-2 rounded-full bg-green-700" />
          <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-700" />
          <div className="divide-y divide-green-700">
            {product.specifications.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-1 sm:grid-cols-[40%_1fr] gap-1 sm:gap-4 py-2 font-mono text-[13px]"
              >
                <span className="text-green-300">{spec.label}</span>
                <span className="text-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

export default ProductDetails;