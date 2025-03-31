/* eslint-disable react/prop-types */

import UnderlineLink from "./UnderlineLink";

function HeroSection({
  title,
  description,
  linkText,
  href = "/",
  color = "white",
  pictures,
  defPicture,
  pos = "center",
  largeFont,
}) {
  return (
    <div className="w-full h-fit  relative">
      <picture className="w-full">
        {pictures.map((source, i) => (
          <source
            key={i}
            media={`(min-width:${source.size}px)`}
            srcSet={source.img}
          />
        ))}
        <img src={defPicture} />
      </picture>
      <div
        className={`flex w-full h-full absolute top-0 left-0 bottom-0 right-0 z-1  px-12 justify-center${
          pos === "end" ? " sm:justify-end" : " sm:justify-center"
        } items-center`}
      >
        <div
          className={`h-fit text-${color} text-center font-surveyor tracking-wide flex flex-col items-center ${
            pos === "end" ? " sm:items-end" : " sm:items-center"
          }`}
        >
          <h2
            className={`${
              largeFont
                ? "sm:text-7xl md:tetx-5xl text-3xl"
                : "sm:text-5xl text-4xl"
            }`}
          >
            {title}
          </h2>
          <br />
          <h6 className="font-urbanist">{description}</h6>
          <br />
          <UnderlineLink to={href} color={color}>
            {linkText}
          </UnderlineLink>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
