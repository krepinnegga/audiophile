import { useRouteError, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface RouteError {
  statusText?: string;
  message?: string;
  status?: number;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  const [showDetails, setShowDetails] = useState(false);

  // Animation variants using design system spacing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Log error to console
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white-off text-foreground flex flex-col items-center justify-center p-6"
    >
      <motion.div
        variants={itemVariants}
        className="max-w-2xl w-full bg-white border border-gray-light rounded-lg p-8 shadow-sm"
      >
        {/* Animated 404 text */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <span className="text-h1 font-bold text-primary">
              404
            </span>
          </div>
        </motion.div>

        {/* Main message */}
        <motion.h1
          variants={itemVariants}
          className="h3 text-center mb-4"
        >
          Oops! Something went wrong
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-body text-center mb-8 opacity-75"
        >
          {error.statusText || error.message || "The page you're looking for doesn't exist."}
        </motion.p>

        {/* Interactive buttons using design system buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="btn-1"
          >
            <span className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Return Home
            </span>
          </Link>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="btn-2 flex gap-2 items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </motion.div>

        {/* Error details (collapsible) */}
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="mt-8 bg-gray-light rounded-lg p-4 overflow-hidden"
          >
            <h3 className="subtitle text-primary mb-2">Error Details:</h3>
            <pre className="body text-foreground overflow-x-auto">
              {JSON.stringify(error, null, 2)}
            </pre>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}