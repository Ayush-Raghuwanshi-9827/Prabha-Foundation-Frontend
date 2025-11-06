import { motion } from "framer-motion";
import heroImage from "../assets/main-home-slider.png";
import aboutImg from "../assets/main-1.webp";
import service1 from "../assets/service-1.webp";
import service2 from "../assets/service-2.webp";
import card1 from "../assets/card-1.webp";
import card2 from "../assets/card-2.webp";
import { useNavigate } from "react-router-dom";
import JoinUsSection from "../Components/JoinUsSection";

export default function Home() {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate("/prabha-foundation-care");
  };

  const initiatives = [
    {
      title: "Animal Welfare",
      description: "Advocating for the well-being of animals in our community.",
      image: card1,
    },
    {
      title: "Elder Care",
      description: "Providing compassionate support and care for the elderly.",
      image: service2,
    },
    {
      title: "Health Education",
      description: "Promoting health awareness and education for everyone.",
      image: card2,
    },
  ];

  return (
    <div className="font-[Poppins] text-gray-800 overflow-x-hidden">
      {/* 🌟 HERO SECTION */}
      <section
        className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center md:justify-start px-6 md:px-16 lg:px-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroImage})`,
        }}
      >
        <div className="max-w-3xl text-center md:text-left text-white space-y-6">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering <br />
            <span className="text-green-400">Communities</span> for a Better
            Tomorrow
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-200 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join hands with Prabha Foundation Care in transforming lives through
            health, education, and compassion.
          </motion.p>

          <motion.button
            className="bg-green-500 hover:bg-green-700 text-white text-base md:text-lg font-semibold px-6 py-3 rounded-md shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            View Services
          </motion.button>
        </div>
      </section>

      {/* 💚 ABOUT SECTION */}
      <section className="py-20 pt-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-green-600 text-lg md:text-xl font-semibold mb-3 tracking-wide">
              Empowering Communities
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 leading-snug">
              A Commitment to Social Well-being
            </h2>
            <p className="text-gray-600 text-[17px] leading-relaxed">
              <span className="font-semibold text-gray-800">
                Prabha Foundation Care
              </span>{" "}
              is a non-profit organization based in Bhopal, India. We’re
              dedicated to improving lives through initiatives that promote
              health, education, elder care, and animal welfare — building a
              more compassionate and sustainable society for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={aboutImg}
              alt="About Prabha Foundation"
              className="rounded-xl shadow-xl object-cover w-full max-w-lg h-[350px] md:h-[450px] hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* 🌍 MISSION SECTION */}
      <section className="py-16 bg-gray-50 px-6 md:px-12 lg:px-20 text-center">
        <motion.h3
          className="text-green-600 text-lg font-semibold mb-2 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empowering Change
        </motion.h3>

        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fostering Health, Education & Welfare
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={service1}
            alt="Community Mission"
            className="rounded-2xl shadow-md w-full object-cover h-[250px] md:h-[350px] hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-5">
              Hunger-Free & Swasthya Jyoti Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-[18px]">
              We’re committed to improving lives through{" "}
              <span className="text-green-700 font-semibold">
                nutrition and healthcare
              </span>
              . Our Hunger-Free Mission provides nutritious meals to the needy,
              while our Swasthya Jyoti initiative delivers free health camps and
              medicines to underserved communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 💫 INITIATIVE CARDS */}
      <section className="py-24 bg-white flex flex-col items-center px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Key Initiatives
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {initiatives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-5 text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <button
            onClick={handleDonateClick}
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Food Donate Schedule
          </button>
        </motion.div>
      </section>

      <div className="join-us-section">
        <JoinUsSection />
      </div>
    </div>
  );
}
