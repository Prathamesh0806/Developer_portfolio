import { useEffect } from "react";
import AOS from "aos";

const useScrollAnimation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
};

export default useScrollAnimation;