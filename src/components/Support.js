import React from 'react';

function Support() {
  return (
    <div className="bg-eerie-black text-mint-green min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Support</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-eerie-black-600 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">How can we help you?</h3>
            <p className="mb-6">
              Our support team is here to assist you with any questions or issues 
              you may have. Please fill out the form below, and we'll get back to 
              you as soon as possible.
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" className="w-full p-2 rounded bg-eerie-black-400 text-mint-green" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 rounded bg-eerie-black-400 text-mint-green" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full p-2 rounded bg-eerie-black-400 text-mint-green"></textarea>
              </div>
              <button type="submit" className="bg-tropical-indigo hover:bg-tropical-indigo-600 text-white px-4 py-2 rounded transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;