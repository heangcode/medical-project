import React from "react";
import Container from "./Container";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import PinterestIcon from "./icons/PinterestIcon";
import InstagramIcon from "./icons/InstagramIcon";
import MailIcon from "./icons/MailIcon"; // Assuming you have this icon component
import SmartPhoneIcon from "./icons/SmartPhoneIcon"; // Assuming you have this icon component

const Footer: React.FC = () => {
  return (
    <div className="w-full container mx-auto">
      <div className="h-[88px] bg-[#F7F7F7] w-full flex items-center justify-center">
        <Container>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-[16px]">
              <span className="text-[16px] font-medium text-gray-900">
                Terms
              </span>
              <span className="text-[16px] font-medium text-gray-900">
                Privacy
              </span>
              <span className="text-[16px] font-medium text-gray-900">
                Cookies
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                <FacebookIcon className="w-6 h-6" />
              </button>
              <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                <TwitterIcon className="w-6 h-6" />
              </button>
              <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                <PinterestIcon className="w-6 h-6" />
              </button>
              <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                <InstagramIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </div>
      <footer
        className="bg-gray-800 text-white py-[60px] h-auto"
        style={{
          backgroundImage: `url('/footer-bg.png')`,
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div className="flex items-center">
            <div className="flex flex-col items-start space-y-[16px] w-[336px] mr-20">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-[40px] w-[40px] mb-4"
              />
              <p className="text-[16px] font-medium">
                Address: No.2A, Down Town Road No 7, Phum Kork Chambak, Phnom
                Penh
              </p>
              <div className="flex items-center">
                <SmartPhoneIcon className="w-6 h-6 mr-2" />
                <p>Office: (+855) 088 5654 093</p>
              </div>
              <div className="flex items-center">
                <MailIcon className="w-6 h-6 mr-2" />
                <p>Support: info@medi.com</p>
              </div>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-20">
              <div>
                <h4 className="font-semibold text-[16px] text-white mb-[20px]">
                  My Account
                </h4>
                <div className="flex flex-col items-start space-y-[12px]">
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    My Account
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Order History
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Shopping Cart
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Wishlist
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[16px] text-white mb-[20px]">
                  Helps
                </h4>
                <div className="flex flex-col items-start space-y-[12px]">
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Contact
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Faqs
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Terms & Condition
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Privacy Policy
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[16px] text-white mb-[20px]">
                  Proxy
                </h4>
                <div className="flex flex-col items-start space-y-[12px]">
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    About
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Shop
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Product
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Track Order
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[16px] text-white mb-[20px]">
                  Categories
                </h4>
                <div className="flex flex-col items-start space-y-[12px]">
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Fruit & Vegetables
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Meat & Fish
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Bread & Bakery
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Beauty & Health
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center  border-t border-gray-700 pt-4 mt-[60px]">
            <p className="text-[#808080]">Developed by Digital Solution</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
