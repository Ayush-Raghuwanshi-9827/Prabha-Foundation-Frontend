import { motion } from "framer-motion";
import { useState } from "react";

export default function JoinUsSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Thank you for reaching out! We'll contact you soon.");
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-green-600 font-semibold text-lg mb-2 uppercase tracking-wide">
            You Can Join Us!
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
            We'd love to hear from you!
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-md"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition-all duration-300"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side - Map & Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <div className="w-full h-[60vh] overflow-hidden">
            <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Prabha Foundation Location - Bhopal"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.997935197818!2d77.4226720749912!3d23.248247279017894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c693c8f2c2c31%3A0x8df1f1f1c42bdb53!2sSubhash%20Colony%2C%20Bhopal%2C%20Madhya%20Pradesh%20462001!5e0!3m2!1sen!2sin!4v1730905500000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 uppercase">
              You Can Join Us!
            </h3>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-green-600">📧</span>
              <a
                href="mailto:remzyfoundation01@gmail.com"
                className="text-green-700 hover:underline"
              >
                remzyfoundation01@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mt-4 mb-1">
                Location
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Sourabh Colony, JK Road, Bhopal, Madhya Pradesh, India
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
