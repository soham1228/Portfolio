import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// =======================
// GSAP ANIMATION HOOKS
// =======================

/**
 * Fade In Up Animation
 * Elements fade in while moving up
 */
export const useFadeInUp = (trigger = true, delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!trigger || !ref.current) return;

    const element = ref.current;
    
    gsap.fromTo(
      element,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [trigger, delay]);

  return ref;
};

/**
 * Stagger Children Animation
 * Animates children with stagger effect
 */
export const useStaggerChildren = (staggerDelay = 0.1) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const children = ref.current.children;
    
    gsap.fromTo(
      children,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: staggerDelay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [staggerDelay]);

  return ref;
};

/**
 * Scale In Animation
 * Elements scale up from 0.8 to 1
 */
export const useScaleIn = (delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [delay]);

  return ref;
};

/**
 * Slide In From Left
 */
export const useSlideInLeft = (delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [delay]);

  return ref;
};

/**
 * Slide In From Right
 */
export const useSlideInRight = (delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [delay]);

  return ref;
};

/**
 * Parallax Effect
 * Element moves slower than scroll
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [speed]);

  return ref;
};

/**
 * Floating Animation
 * Continuous up/down floating motion
 */
export const useFloating = (duration = 3, yOffset = 20) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: yOffset,
      duration,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    return () => {
      gsap.killTweensOf(ref.current);
    };
  }, [duration, yOffset]);

  return ref;
};

/**
 * Glow Pulse Animation
 * Pulsing glow effect
 */
export const useGlowPulse = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      boxShadow: '0 0 40px rgba(0, 240, 255, 0.6), 0 0 80px rgba(168, 85, 247, 0.3)',
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    return () => {
      gsap.killTweensOf(ref.current);
    };
  }, []);

  return ref;
};

/**
 * Text Reveal Animation
 * Characters appear one by one
 */
export const useTextReveal = (delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const text = ref.current.textContent;
    ref.current.textContent = '';
    
    const chars = text.split('');
    chars.forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.opacity = '0';
      ref.current.appendChild(span);
    });

    gsap.to(ref.current.children, {
      opacity: 1,
      duration: 0.05,
      stagger: 0.03,
      delay,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [delay]);

  return ref;
};

/**
 * Counter Animation
 * Animates numbers from 0 to target value
 */
export const useCountUp = (target, duration = 2) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const obj = { value: 0 };

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(obj, {
          value: target,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            ref.current.textContent = Math.round(obj.value);
          },
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [target, duration]);

  return ref;
};

// =======================
// ANIMATION UTILITIES
// =======================

/**
 * Animate Progress Bar
 */
export const animateProgressBar = (element, percentage, delay = 0) => {
  gsap.fromTo(
    element,
    { width: '0%' },
    {
      width: `${percentage}%`,
      duration: 1.5,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Page Load Animation Timeline
 */
export const createPageLoadTimeline = () => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  return tl;
};

/**
 * Smooth Scroll To Section
 */
export const smoothScrollTo = (target) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: target, autoKill: false },
    ease: 'power2.inOut',
  });
};

/**
 * Mouse Follow Effect
 */
export const initMouseFollow = (element) => {
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 10;
    const y = (clientY - top - height / 2) / 10;

    gsap.to(element, {
      x,
      y,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

export default {
  useFadeInUp,
  useStaggerChildren,
  useScaleIn,
  useSlideInLeft,
  useSlideInRight,
  useParallax,
  useFloating,
  useGlowPulse,
  useTextReveal,
  useCountUp,
  animateProgressBar,
  createPageLoadTimeline,
  smoothScrollTo,
  initMouseFollow,
};