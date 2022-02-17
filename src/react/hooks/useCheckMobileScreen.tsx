import * as React from "react";

/**
 * This custom React hook was an open-source solution I found for
 * specifying if we are dealing with a desktop or mobile device. Most
 * solutions followed similar parameters, as far as `window` width.
 *
 * @author Jay Mayu
 * @link https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto
 *
 * @returns boolean stating if screen is smaller than or equal to 768 pixels
 */

const useCheckMobileScreen = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 768;
};

export default useCheckMobileScreen;
