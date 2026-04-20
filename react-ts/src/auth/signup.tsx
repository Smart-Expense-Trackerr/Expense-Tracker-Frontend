import { motion } from "framer-motion";
import { Link } from "react-router";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-white shadow-xl"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Account
        </h2>

        {/* Form */}
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 hover:scale-105 transition p-3 rounded-lg font-medium"
          >
            Sign Up
          </button>

        </form>

        <p className="text-sm text-center mt-4 text-gray-300">
          Already have an account? <Link to="/login" className="text-green-500 hover:text-green-600">Log In</Link>
        </p>

      </motion.div>

    </div>
  );
}