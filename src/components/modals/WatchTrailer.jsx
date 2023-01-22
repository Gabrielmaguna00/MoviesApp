import { IoMdPlay } from "react-icons/io";
import YouTube from "react-youtube";

export default function WatchTrailer({ showTrailer, setShowTrailer, trailer }) {
  let opts = {
    width: "",
    height: "",
  };
  const getCss = () => {
    let element = document.getElementById("modal-box");
    let elementStyle = window.getComputedStyle(element);
    let elementWidth = elementStyle.getPropertyValue("width");
    let elementHeight = elementStyle.getPropertyValue("height");
    opts.width = elementWidth.slice(0, -2) - 50;
    opts.height = elementHeight.slice(0, -2) - 50;
    console.log(opts);
    return <YouTube videoId={trailer && trailer.key} opts={opts} />;
  };
  return (
    <>
      <label
        htmlFor="my-modal-3"
        className="btn"
        onClick={() => setShowTrailer(true)}
      >
        <IoMdPlay />
        Watch Trailer
      </label>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div
          id="modal-box"
          className="modal-box relative w-[85vw] max-w-[98vw] h-[75vh]"
        >
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setShowTrailer(false)}
          >
            ✕
          </label>
          {showTrailer ? getCss() : null}
        </div>
      </div>
    </>
  );
}
