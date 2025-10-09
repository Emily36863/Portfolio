import { useEffect, useRef, useState } from "react";

export default function StickyMiniHero({ title, image }) {
  const [show, setShow] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      // Show when scrolled past ~400px, hide near top
      setShow(current > 400);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`mini-hero ${show ? "mini-hero--show" : ""}`}>
      <div className="mini-hero__inner">
        {image && (
          <img src={image} alt="" className="mini-hero__img" loading="lazy" />
        )}
        <span className="mini-hero__title">{title}</span>
      </div>
    </div>
  );
}
