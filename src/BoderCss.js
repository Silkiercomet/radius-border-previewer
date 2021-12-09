const BorderCss = ({
  topLeft,
  setTopL,
  topRight,
  setTopR,
  bottomR,
  setBottomR,
  bottomL,
  setBottomL
}) => {
  return (
    <section className="inputs">
      <input
        type="range"
        id="top-right"
        name="points1"
        min="0"
        max="100"
        value={topRight}
        onChange={(e) => setTopR(e.target.value)}
      />
      <input
        type="range"
        id="bottom-right"
        name="points2"
        min="0"
        max="100"
        value={bottomR}
        onChange={(e) => setBottomR(e.target.value)}
      />
      <input
        type="range"
        id="bottom-left"
        name="points3"
        min="0"
        max="100"
        value={bottomL}
        onChange={(e) => setBottomL(e.target.value)}
      />
      <input
        type="range"
        id="top-left"
        name="points4"
        min="0"
        max="100"
        value={topLeft}
        onChange={(e) => setTopL(e.target.value)}
      />
    </section>
  );
};
export default BorderCss;
