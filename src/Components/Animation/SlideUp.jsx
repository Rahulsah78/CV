const SlideUp = (delay) => {
    return {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay,
            },
        },
    };
};
export default SlideUp
export const SlideLeft = (delay) => {
    return {
      initial: {
        x: 800,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay,
        },
      },
    };
  };
//   export default SlideLeft