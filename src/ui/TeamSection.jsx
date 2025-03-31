import { useEffect, useState } from "react";
import TeamDetails from "./TeamDetails";
import TeamImage from "./TeamImage";
import { getPersonDetails, getTeamPhotos } from "../services/getTeamInfo";

function TeamSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTeamPhotos();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <section>
      <div className=" text-center font-urbanist tracking-wide flex flex-col items-center w-full h-fit py-5 my-16 px-20 sm:px-30 md:px-60 justify-center font-normal text-black/80">
        Since 2009, we've been obsessed with the process of human centric
        product innovation, leading the wave of home workspace design. We're
        proud to be small and innovative, to bring you products that couldn't
        exist otherwise.
      </div>
      <div className="my-10 sm:px-10 px-5 grid md:grid-cols-6  grid-cols-3 gap-5">
        {data.map((person, i) => (
          <TeamImage
            key={person.id}
            setIsOpen={setIsOpen}
            setCurrent={setCurrent}
            index={i}
            data={person}
          />
        ))}
        {isOpen && (
          <TeamDetails
            current={current}
            setCurrent={setCurrent}
            id={data[current].id}
          />
        )}
      </div>
    </section>
  );
}

export default TeamSection;
