import AnimatedSection from "../../components/AnimatedSection";

export default function About() {
  return (
    <div className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h1 className="text-5xl font-extrabold mb-10 text-gray-900 dark:text-white">About Us</h1>
          <div className="mb-12 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
            <img src="/images/about.jpg" alt="About orthyx AI" className="w-full object-cover aspect-[21/9]" />
          </div>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-light">
            Orthogonal intelligence for safer AI.
          </p>
          <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 space-y-6">
            <p className="text-lg">
              orthyx AI researches orthogonal decomposition methods for safer artificial intelligence. By representing goals as independent, non-interfering dimensions, we reduce the risk of unexpected instrumental convergence.
            </p>
            <p className="text-lg">
              Our alignment sandbox lets researchers stress-test models against edge cases, adversarial inputs, and distribution shifts before deployment. Safety is not an afterthought; it is the architecture.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
