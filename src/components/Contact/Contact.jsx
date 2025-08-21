import React from "react";
import image from "../../assets/cd.jpg";

const ContactForm = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="lg:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Kapcsolat</h2>
            <p className="text-gray-600 mb-4">
              Kérdése van vagy segítségre van szüksége? 
              </p>
              <p className="mb-4">Örömmel segítünk!</p>
        
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Név
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Adja meg a nevét"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Adja meg az e-mail címét"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telefonszám
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Adja meg a telefonszámát"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tárgy
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Adja meg az üzenet tárgyát"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Üzenet
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Írja meg az üzenetét"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                >
                  Üzenet küldése
                </button>
              </div>
            </form>
          </div>

          <div className="hidden lg:block lg:w-1/2">
            <img
              src={image}
              alt="Csapatmunka"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
