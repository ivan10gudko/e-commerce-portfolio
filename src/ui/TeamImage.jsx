function TeamImage({ setIsOpen, setCurrent, data, index }) {
  const { img, imgHover, id, name } = data;
  function handleClick() {
    setIsOpen(true);
    setCurrent(index);
  }
  return (
    <div className="rounded-sm " onClick={handleClick}>
      <div className=" group relative pb-[130%] h-fit rounded-sm overflow-hidden">
        <img
          src={img}
          alt={name}
          className="opacity-100 absolute top-1/2 -translate-y-1/2 w-full group-hover:opacity-0 z-10 transition-opacity duration-500"
        />
        <img
          src={imgHover}
          alt={name}
          className="absolute top-1/2 -translate-y-1/2 w-full z-0"
        />
      </div>
    </div>
  );
}

export default TeamImage;
