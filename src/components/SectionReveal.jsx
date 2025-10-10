/* eslint-env browser */
import { useEffect, useRef, useState } from "react";

export default function SectionReveal({
  children,
  as: Tag = "section",
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // track scroll direction
  const scrollDir = useRef("down");
  useEffect(() => {
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;
    const onScroll = () => {
      const y = window.scrollY;
      scrollDir.current = y > lastY ? "down" : "up";
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Respect reduced motion: keep everything visible
    const mm =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;

    if (mm && mm.matches) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // fade in when the section enters the viewport
          setVisible(true);
        } else {
          // fade out ONLY when the user is scrolling up
          if (scrollDir.current === "up") {
            setVisible(false);
          }
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`section sr ${visible ? "sr--in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
