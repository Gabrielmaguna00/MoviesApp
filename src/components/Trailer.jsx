import YouTube from "react-youtube";

export default function Trailer({videoId}) {
  return (
    <div>
      <div>
        <button>X</button>
        <YouTube
        videoId={videoId}/>
      </div>
    </div>
  );
}
