import care from "../assets/care1.webp";
import { motion } from "framer-motion";
import care2 from "../assets/care2.webp";

const PrabhaFoundationCare = () => {
  return (
    <div>
      {/* 🌟 HERO SECTION */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center md:justify-start px-6 md:px-16 lg:px-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.3)), url(${care2})`,
        }}
      ></section>

      {/* 💚 ABOUT SECTION */}
      <section className="py-20 pt-28 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={care}
              alt="About Prabha Foundation"
              className="rounded-xl shadow-xl object-cover w-full max-w-lg h-[330px] md:h-[450px] hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
              Prabha Foundation Care & Support
            </h2>
            <p className="text-gray-600 text-[22px] py-5 leading-relaxed">
              <span className="font-semibold text-gray-800">
                Prabha Foundation
              </span>{" "}
              Care & Support Initiative aims to provide comprehensive care and
              support to elderly individuals, especially those who are
              vulnerable and underserved. The project will focus on healthcare
              services, social support, nutrition, physical activity, and
              financial and legal assistance. It will also offer companionship,
              skill development, and transportation for medical appointments or
              social activities, with a goal to enhance the overall well-being
              of seniors and promote their dignity, independence, and community
              engagement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-16 px-6 md:px-16 flex justify-center items-center font-[Poppins]">
        <div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white w-full max-w-4xl rounded-2xl shadow-lg p-10 md:p-14 border-t-8 border-green-500"
        >
          {/* Header */}
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
            Project Details
          </h2>

          {/* Expiry Date Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Expiry Date
            </h3>
            <ul className="text-gray-700 text-lg space-y-2 ml-4 list-disc">
              <li>
                <span className="font-semibold text-gray-900">Year:</span> 2026
              </li>
              <li>
                <span className="font-semibold text-gray-900">Month:</span>{" "}
                December
              </li>
              <li>
                <span className="font-semibold text-gray-900">Day:</span> 31
              </li>
            </ul>
          </div>

          {/* Goal Amount Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Goal Amount
            </h3>
            <p className="text-gray-600 text-base mb-3">
              Goal or threshold amount for the project. For display purposes
              only.
            </p>
            <div className="bg-green-100 px-5 py-3 rounded-lg inline-block shadow-sm">
              <p className="text-2xl font-bold text-green-800">$ 500000.00</p>
            </div>
          </div>

          {/* Project Location Section */}
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Project Location
            </h3>
            <p className="text-gray-600 text-base mb-3 leading-relaxed">
              You must select a country for your project. Please also ensure you
              pick the most accurate country possible; this will ensure your
              project is discoverable and available to as many donors as
              possible.
            </p>
            <ul className="text-gray-700 text-lg space-y-2 ml-4 list-disc">
              <li>
                <span className="font-semibold text-gray-900">Country:</span>{" "}
                India
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Office Address:
                </span>{" "}
                1/2 Sourav Colony, Chandbad, 462010, Bhopal, Madhya Pradesh
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrabhaFoundationCare;
