// transition.js
import { motion } from 'framer-motion';

const transition = (OgComponent) => {
  return () => (
    <motion.div
      key="transition"
      className="transition-container"
      initial={{ opacity: 0 }}    
      animate={{ opacity: 1 }}    
      exit={{ opacity: 0 }}      
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} 
    >
      <OgComponent />
    </motion.div>
  );
};

export default transition;
