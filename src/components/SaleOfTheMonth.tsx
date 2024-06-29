import React from "react";

const SaleOfTheMonth: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Sale of the Month</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Sale of the Month</h3>
            <p>Ends in 2 days</p>
            <a
              href="#"
              className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded"
            >
              Shop Now
            </a>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Materials Doctor</h3>
            <p>Starting at $79.99</p>
            <a
              href="#"
              className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded"
            >
              Shop Now
            </a>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Discount</h3>
            <p>Up to 64% OFF</p>
            <a
              href="#"
              className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleOfTheMonth;
