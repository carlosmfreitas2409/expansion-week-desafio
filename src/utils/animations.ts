export const BANNER_ANIMATION = {
  unMounted: { opacity: 0, x: 50 },
  mounted: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 35 },
  },
};

export const BANNER_HEADER_ANIMATION = {
  unMounted: { opacity: 0, x: -50 },
  mounted: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, type: 'spring', mass: 1 },
  },
};

export const RECOMMENDED_ANIMATION = {
  unMounted: { y: -30, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.2,
      type: 'spring',
      mass: 1.3,
    },
  },
};

export const HEADER_ANIMATION = {
  unMounted: { y: -50, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

export const ABOUT_ANIMATION = {
  unMounted: { y: 50, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};
