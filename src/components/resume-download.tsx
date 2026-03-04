"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export function ResumeDownload() {
  const handleDownloadResume = () => {
    // Download resume from public directory
    const link = document.createElement('a');
    link.href = '/andrew-yuan_20260302_1346.pdf';
    link.download = 'Andrew-Yuan-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      <Button
        onClick={handleDownloadResume}
        className="flex items-center gap-2 relative overflow-hidden group"
        size="lg"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Download className="w-4 h-4" />
        </motion.div>
        Download Resume
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <FileText className="w-4 h-4" />
        </motion.div>
      </Button>
    </motion.div>
  );
}
