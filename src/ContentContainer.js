const ContentContainer = ({ topLeft, topRight, bottomR, bottomL }) => {
  return (
    <section className="borderContainer">
      <figure>
        <img
          src="https://source.unsplash.com/random/200x200"
          style={{
            borderRadius: `${topLeft}% ${bottomL}% ${topRight}% ${bottomR}%`
          }}
        />
      </figure>
    </section>
  );
};
export default ContentContainer;
