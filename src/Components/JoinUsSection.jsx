import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function JoinUsSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ✅ Modern industry-grade validation
  const validateForm = () => {
    const { name, email, phone, message } = form;
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!name.trim() || !email.trim() || !message.trim()) {
      return "Please fill in all required fields.";
    }
    if (!nameRegex.test(name)) {
      return "Name should contain only letters and be 3–50 characters long.";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    if (phone && !phoneRegex.test(phone)) {
      return "Please enter a valid 10-digit phone number.";
    }
    if (message.length < 10) {
      return "Message should be at least 10 characters long.";
    }
    return null;
  };

  // ✅ Auto-remove messages after 3 seconds
  useEffect(() => {
    if (status.error || status.success) {
      const timer = setTimeout(() => {
        setStatus((prev) => ({ ...prev, error: "", success: "" }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status.error, status.success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    const validationError = validateForm();
    if (validationError) {
      setStatus({ loading: false, success: "", error: validationError });
      return;
    }

    try {
      // ✅ Store form data in Firestore
      await addDoc(collection(db, "joinUsFormData"), {
        ...form,
        timestamp: new Date(),
      });

      setStatus({
        loading: false,
        success: "✅ Message sent successfully! We'll reach out soon.",
        error: "",
      });

      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error adding document:", error);
      setStatus({
        loading: false,
        success: "",
        error: "Something went wrong. Please try again later.",
      });
    }
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
            {status.error && (
              <p className="text-red-600 bg-red-50 border border-red-200 p-2 rounded-md text-sm">
                {status.error}
              </p>
            )}
            {status.success && (
              <p className="text-green-600 bg-green-50 border border-green-200 p-2 rounded-md text-sm">
                {status.success}
              </p>
            )}

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
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
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone number (optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your 10-digit phone number"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message <span className="text-red-500">*</span>
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
              disabled={status.loading}
              className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition-all duration-300 ${
                status.loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {status.loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side - Map & Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <div className="w-full h-[60vh] overflow-hidden">
            <iframe
              title="Prabha Foundation Location - Shahpura Bhopal"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3144262578095!2d77.41268477497774!3d23.19279017906296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69008b97a891%3A0x3b4b0283734e87a0!2sManisha%20Market%2C%20BDA%20Complex%2C%20Shahpura%2C%20Bhopal%2C%20Madhya%20Pradesh%20462016!5e0!3m2!1sen!2sin!4v1730910000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 uppercase">
              You Can Join Us!
            </h3>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-green-600">📧</span>
              <a
                href="mailto:Prabhafoundation11@gmail.com"
                className="text-green-700 hover:underline"
              >
                Prabhafoundation11@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mt-4 mb-1">
                Location
              </h4>
              <p className="text-gray-600 leading-relaxed">
                h/o: Jrm 34, Second floor bda complex, Manisha market shahpura,
                Bhopal M.P
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
