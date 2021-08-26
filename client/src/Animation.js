const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  }
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1
};

module.exports = {
  pageVariants,
  pageTransition
}