"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PageAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up every [data-scroll-fade] element
      gsap.utils.toArray<HTMLElement>("[data-scroll-fade]").forEach((el) => {
        const delay = Number(el.dataset.delay ?? 0) / 1000;
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      // Stagger children inside [data-scroll-stagger]
      gsap.utils
        .toArray<HTMLElement>("[data-scroll-stagger]")
        .forEach((container) => {
          const children = container.querySelectorAll<HTMLElement>(
            "[data-stagger-item]",
          );
          gsap.from(children, {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              once: true,
            },
          });
        });

      // Section headings — slide up with clip
      gsap.utils.toArray<HTMLElement>("[data-scroll-heading]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      // Horizontal line grow
      gsap.utils.toArray<HTMLElement>("[data-scroll-line]").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        });
      });

      // Animated counters
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = Number(el.dataset.counter);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + (el.dataset.suffix ?? "");
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
