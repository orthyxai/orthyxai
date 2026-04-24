"use client";
import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection";
import { useTranslation } from "../../context/LanguageContext";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <AnimatedSection>
          <h1 className="text-5xl font-extrabold mb-10 text-gray-900">About Us</h1>
          <motion.div className="mb-12 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200" whileHover={{ scale: 1.01 }}>
            <img src="/images/about.jpg" alt="About orthyx AI" className="w-full object-cover aspect-[21/9]" />
          </motion.div>
          <p className="text-2xl text-gray-600 mb-8 leading-relaxed font-light">
            Precision Alignment Through Orthogonality
          </p>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              orthyx AI researches orthogonal decomposition methods for safer artificial intelligence. Our alignment sandbox lets researchers stress-test models against edge cases and distribution shifts before deployment.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
