import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import useWindowDimensions from "../services/useWindowDimensions";
import { useEffect, useState } from "react";
import Error from "./Error";
import { getPersonDetails } from "../services/getTeamInfo";
import { FourSquare } from "react-loading-indicators";
function TeamDetails({ current, setCurrent, id }) {
  const [personData, setPersonData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const screen = useWindowDimensions();
  const columns = screen.width >= 768 ? 6 : 3;
  const row = Math.ceil((current + 1) / columns) + 1;

  function handleClick(value) {
    if (current + value < 0 || current + value > 24) return;

    setCurrent((c) => c + value);
  }

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      console.log(id);
      const data = await getPersonDetails(id);
      setPersonData(data[0]);
      setIsLoading(false);
    }

    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <div
        style={{ gridRowStart: row }}
        className="col-start-1 col-end-[-1] py-20 px-4 flex justify-center items-center"
      >
        <FourSquare color="#000000" size="large" />
      </div>
    );
  }

  if (!personData || personData.id !== id) {
    return (
      <div
        style={{ gridRowStart: row }}
        className="col-start-1 col-end-[-1] animate-pulse "
      >
        <Error />
      </div>
    );
  }

  return (
    <div
      style={{ gridRowStart: row }}
      className="col-start-1 col-end-[-1] grid md:grid-cols-6 grid-cols-3 gap-5"
    >
      <div className="hidden md:block md:col-start-1 md:col-end-3">
        <img src={personData.imgHover} alt="name" />
      </div>
      <div className=" col-start-1 md:col-start-3 col-end-[-1] flex px-10 items-center justify-around">
        <ArrowBackIosNewRoundedIcon
          fontSize="large"
          onClick={() => handleClick(-1)}
        />
        <div className="w-[60%] text-center font-surveyor leading-loose">
          <h4 className="text-4xl text-black/85">{personData.name}</h4>
          <p className="text-md  text-black mt-3 mb-5">
            {personData.description}
          </p>
          {personData.phrases.split("\n").map((v, i) => (
            <span
              key={i}
              className="block text-wrap font-urbanist font-extrabold text-black/60 text-sm tracking-wider"
            >
              {v.replace(/\\n/, "")}
            </span>
          ))}
        </div>
        <ArrowForwardIosRoundedIcon
          fontSize="large"
          onClick={() => handleClick(1)}
        />
      </div>
    </div>
  );
}

export default TeamDetails;
