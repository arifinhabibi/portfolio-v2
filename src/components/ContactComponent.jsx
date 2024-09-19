import React from "react";

function ContactComponent() {
  return (
    <div className="px-5" data-aos="fade-up">
      <h3 className="py-5 text-2xl font-bold">Contact Me</h3>

      {/* Social Media Links */}
      <div className="mb-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
        <a
          href="https://www.linkedin.com/in/arifinhabibi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://www.github.com/arifinhabibi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.cvarifinhabibi.my.id"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline"
        >
          Website
        </a>
      </div>

      {/* Email Form */}
      <div className="mx-auto max-w-md">
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactComponent;
