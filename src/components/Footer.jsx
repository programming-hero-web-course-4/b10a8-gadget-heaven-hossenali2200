import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-2xl font-bold">Gadget Heaven</h2>
        <p className=" text-gray-500">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>

      <hr className="text-gray-500" />

      <div className="w-8/12 mx-auto text-center">
        <div className="p-4 mt-16 gap-12 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-8">
            <div>
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                Services
              </h3>
              <ul role="list" className="mt-6 space-y-2">
                <li>
                  <a
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    Product Support{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    Order Tracking
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    Shipping & Delivery
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                Company
              </h3>
              <ul role="list" className="mt-6 space-y-2">
                <li>
                  <a
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    {" "}
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                Legal
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    Terms of service
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
