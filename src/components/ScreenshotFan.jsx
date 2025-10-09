export default function ScreenshotFan({ shots = [] }) {
  if (!Array.isArray(shots) || shots.length < 3) return null;

  return (
    <div className="hero-fan">
      <img
        src={shots[0]}
        alt="App left view"
        className="phone phone--left"
        loading="lazy"
      />
      <img
        src={shots[1]}
        alt="App center view"
        className="phone phone--center"
        loading="lazy"
      />
      <img
        src={shots[2]}
        alt="App right view"
        className="phone phone--right"
        loading="lazy"
      />
    </div>
  );
}
