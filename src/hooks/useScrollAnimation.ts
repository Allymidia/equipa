import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return {
    ref,
    className: `transition-all duration-700 ease-out ${
      inView 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'
    }`
  };
};