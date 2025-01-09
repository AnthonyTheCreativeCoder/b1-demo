

// export default VideoSection

import { useRef, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../../../styles/video-style.css";

  const VideoPlayer = ({ video_url }) => {
  // console.log("Video URL "+video_url);
     const location = useLocation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { postVideo } = location.state || {};

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };


  
  const videoudlll = `${video_url}?v=${Math.floor(Math.random() * 1000000000000000)}`;
  
  return (
    <section className="video_section">
      <div className="container-fluid">
        <div className="video-container">
          {/* <video
            playsInline
            ref={videoRef}
            id="videoPlayer"
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
          >
           <source
              src={videoudlll}
              type="video/mp4"
            />*
            {<source
              src={video_url}
              type="video/mp4"
            />}
          </video> */}
          <video
            playsInline
            ref={videoRef}
            id="videoPlayer"
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
          >
            <source
              src={postVideo}
              type="video/mp4"
            />
          </video>
          <div
            className="play-pause-button"
            onClick={togglePlayPause}
            style={{ opacity: isPlaying ? "0" : "1" }}
          >
            {isPlaying ? (
              <svg
                id="pauseIcon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            ) : (
              <svg
                id="playIcon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
