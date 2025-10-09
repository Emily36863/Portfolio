/* eslint-env browser */
import { useEffect, useRef, useState } from "react";

export default function SectionReveal({
  children,
  as: Tag = "section",
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Respect "reduced motion" accessibility setting
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
          setVisible(true);
          io.unobserve(el); // reveal once
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
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
