import React from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);
  
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
