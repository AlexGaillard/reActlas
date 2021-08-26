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
  },
  down: {
    y: "20vh"
  },
  up: {
    y: 0
  }
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1
};

const buttonTransition = {
  type: "tween",
  ease: "anticipate",
  duration: .8
}

module.exports = {
  pageVariants,
  pageTransition,
  buttonTransition
}