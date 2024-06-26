import { useEffect } from 'react';

// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //
/* Not completely sure what this does /Victor */

interface NavigationScrollProps {
  children: React.ReactNode;
}

const NavigationScroll = ({ children }: NavigationScrollProps) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return children || null;
};

export default NavigationScroll;
