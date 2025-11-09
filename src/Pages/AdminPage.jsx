import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { motion } from "framer-motion";

export default function AdminPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "joinUsFormData"),
          orderBy("timestamp", "desc"),
          limit(20)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubmissions(data);
      } catch (err) {
        console.error("Error fetching submissions:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900 text-center mb-12"
        >
          🧑‍💻 Admin Dashboard
        </motion.h1>

        {loading ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 text-lg"
          >
            Loading data...
          </motion.p>
        ) : error ? (
          <p className="text-center text-red-600 font-semibold">{error}</p>
        ) : submissions.length === 0 ? (
          <p className="text-center text-gray-700 text-lg">
            No submissions found yet.
          </p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-gray-200"
          >
            <table className="min-w-full border-collapse">
              <thead className="bg-green-600 text-white rounded-t-2xl">
                <tr>
                  <th className="py-3 px-4 text-left w-20">Sr. No</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Phone</th>
                  <th className="py-3 px-4 text-left">Message</th>
                  <th className="py-3 px-4 text-left">Submitted On</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((entry, index) => (
                  <motion.tr
                    key={entry.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`border-b transition-all duration-200 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-green-50 hover:shadow-md`}
                  >
                    <td className="py-3 px-4 font-semibold text-gray-700 text-center">
                      {index + 1}
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-900">
                      {entry.name || "-"}
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      {entry.email || "-"}
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      {entry.phone || "-"}
                    </td>
                    <td
                      className="py-3 px-4 text-gray-700 max-w-[280px] truncate cursor-pointer"
                      title={entry.message}
                    >
                      {entry.message || "-"}
                    </td>
                    <td className="py-3 px-4 text-gray-600 text-sm">
                      {entry.timestamp
                        ? new Date(
                            entry.timestamp.seconds * 1000
                          ).toLocaleString()
                        : "-"}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </section>
  );
}
