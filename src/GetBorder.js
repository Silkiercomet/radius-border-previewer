const GetBorder = ({ topLeft, topRight, bottomR, bottomL }) => {
  return (
    <p className="box">
      border-radius: {topLeft}% {bottomL}% {topRight}% {bottomR}%
    </p>
  );
};
export default GetBorder;
