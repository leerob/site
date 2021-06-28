// inspired by https://kevinsimper.medium.com/full-width-youtube-embed-with-react-js-responsive-embed-509de7e7c3bf
const ResponsiveIframe = ({ aspectRatio, src }) => {
  return (
    <div
      className="iframe-container"
      style={{
        position: "relative",
        paddingBottom: `${aspectRatio}` /* eg "56.25%" for 16:9 */,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          width: "100%",
          height: "100%"
        }}
        src={src}
        frameBorder="0"
      />
    </div>
  );
};

export default ResponsiveIframe;
