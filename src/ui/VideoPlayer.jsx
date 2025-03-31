import { useEffect, useRef, useState } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PictureInPictureAltRoundedIcon from "@mui/icons-material/PictureInPictureAltRounded";

function VideoPlayer({ children }) {
  const player = useRef(null);
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [pictureInPicture, setPictureInPicture] = useState(false);

  useEffect(() => {
    const video = player.current;
    function handleUpdate() {
      if (isHover) {
        const time = video.currentTime / video.duration;
        setProgress(time.toFixed(3) * 100);
      }
    }
    video.addEventListener("timeupdate", handleUpdate);
    return () => video.removeEventListener("timeupdate", handleUpdate);
  }, [isHover]);

  useEffect(() => {
    if (pictureInPicture) {
      player.current.requestPictureInPicture();
    } else {
      document.exitPictureInPicture();
    }
  }, [pictureInPicture]);

  function handleClick() {
    setPlay(!play);
    if (!play) {
      player.current.play();
    } else {
      player.current.pause();
    }
  }
  return (
    <div>
      <div className=" text-center font-surveyor tracking-wide flex flex-col items-center w-full h-fit py-5 mt-20 mb-10  px-10 sm:px-20 md:px-40 justify-center">
        {children}
      </div>
      <div
        className="md:w-[60%] md:mx-[20%]  w-[80%] mx-[10%] relative group/container"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <video
          className="w-full"
          src="/promo-video.mp4"
          loop
          muted
          ref={player}
        />
        <div className="group/btn absolute opacity-0 group-hover/container:opacity-100 duration-200 ease-in transition-opacity bg-black/95 hover:bg-sky-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md">
          <div
            className=" pt-0.5 pb-0.4 px-2.5  text-white flex  justify-center rounded-none"
            onClick={handleClick}
          >
            {!play ? (
              <PlayArrowRoundedIcon
                fontSize="large"
                className="group-hover/btn:text-black text-white"
              />
            ) : (
              <PauseRoundedIcon
                fontSize="large"
                className="group-hover/btn:text-black text-white"
              />
            )}
          </div>
          <div
            style={{ width: `${progress}%` }}
            className="h-1 bg-sky-500 group-hover/btn:bg-black/95 rounded-l-lg "
          ></div>
        </div>
        <div
          onClick={() => setPictureInPicture((e) => !e)}
          className="group/picture absolute bottom-2 right-2  rounded-md opacity-0 group-hover/container:opacity-100 duration-200 ease-in transition-opacity bg-black/95 hover:bg-sky-500 py-1 px-1"
        >
          <PictureInPictureAltRoundedIcon className="group-hover/picture:text-black text-white" />
        </div>
      </div>
      <span className="inline-block w-full text-center my-3 text-sm text-black/70">
        (Video has no sound)
      </span>
    </div>
  );
}

export default VideoPlayer;
