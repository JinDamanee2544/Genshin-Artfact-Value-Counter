import { motion } from 'framer-motion'
export default function Spinner() {
  // animation effect while waiting for rendering
  return (
    <motion.span
      className="flex justify-center items-center my-10"
      initial={{ opacity: 0, scale: 0, height: 0 }}
      animate={{ opacity: 1, scale: 1, height: 20 }}
    >
      <span className="animate-ping relative flex h-10 w-10  rounded-full bg-black opacity-75"></span>
    </motion.span>
  );
}

