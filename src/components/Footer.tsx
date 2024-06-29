import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between">
        <div>
          <p>© 2024 Medical Equipment Store</p>
          <p>Address: No.2A, Down Town Road No 7, Phnom Penh</p>
          <p>Phone: +855 088 5654 093</p>
          <p>Email: info@example.com</p>
        </div>
        <div>
          <a href="#" className="text-gray-400 px-2">
            Privacy
          </a>
          <a href="#" className="text-gray-400 px-2">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
