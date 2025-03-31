import BottomBlock from "../ui/BottomBlock";
import FeaturedProducts from "../ui/FeaturedProducts";
import HeroSection from "../ui/HeroSection";
import TeamSection from "../ui/TeamSection";
import UnderlineLink from "../ui/UnderlineLink";
import VideoPlayer from "../ui/VideoPlayer";

function Home() {
  return (
    <>
      <HeroSection
        title="The Desk"
        description="Available now in walnut, oak and maple"
        linkText="Learn More"
        pictures={[
          { size: 1240, img: "/img/hero-section-lg.png" },
          { size: 680, img: "/img/hero-section-md.png" },
          { size: 320, img: "/img/hero-section-sm.png" },
        ]}
        defPicture="/img/hero-section.png"
        pos="end"
      />
      <div className=" text-center font-surveyor tracking-wide flex flex-col items-center w-full h-fit py-20 px-10\ justify-center">
        <h2 className=" text-3xl sm:text-4xl">Design Inspires</h2>
        <br />
        <h6 className="font-urbanist text-black/75 mb-2 px-8">
          Build your dream workspace, so you can get your best work done.
        </h6>
        <br />
        <UnderlineLink to="/" color="black">
          Get started
        </UnderlineLink>
      </div>
      <div className="w-full h-fit flex md:flex-nowrap flex-wrap px-8 mb-24 md:justify-evenly">
        <div className="p-4 flex flex-col items-center">
          <img src="/img/desk-shelf.png" alt="the desk shelf" />
          <h3 className="font-surveyor mb-4 mt-12 text-2xl">The Desk Shelf</h3>
          <UnderlineLink to="/">Learn More</UnderlineLink>
        </div>

        <div className="p-4 flex flex-col items-center ">
          <img src="/img/desk-pad.png" alt="the desk shelf" />
          <h3 className="font-surveyor mb-4 mt-12 text-2xl">The Desk Pads</h3>
          <UnderlineLink to="/">Shop all</UnderlineLink>
        </div>
      </div>
      <FeaturedProducts></FeaturedProducts>
      <HeroSection
        title="The Black Collection"
        description="Introducing a new collection for the minimal workspace"
        linkText="Learn More"
        largeFont
        pictures={[
          { size: 1240, img: "/img/hero-2-lg.png" },
          { size: 680, img: "/img/hero-2-md.png" },
          { size: 320, img: "/img/hero-2-sm.png" },
        ]}
        defPicture="\img\hero-2-lg.png"
      />

      <VideoPlayer>
        <h2 className=" text-3xl sm:text-4xl"> Redefine the Workspace</h2>
        <br />
        <h6 className="font-urbanist text-black/75 mb-2 px-8">
          {" "}
          We believe that the physical environment matters in the pursuit of
          meaningful work. It should be calm, mindful and peaceful—an extension
          of ourselves and the quality we all stand for.
        </h6>
        <br />
      </VideoPlayer>

      <TeamSection />
      <div className=" text-center font-surveyor tracking-wide flex flex-col items-center w-[80%] mx-[10%]  lg:w-[70%] lg:mx-[15%] h-fit py-20  justify-center">
        <h2 className=" text-3xl sm:text-4xl">Make Work Meaningful</h2>
        <br />
        <h6 className="font-urbanist text-black/65 mb-8 px-16">
          We're here because we believe that your work deserves the best. A team
          that loves working together is the magic that makes it all happen.
        </h6>
        <br />
        <UnderlineLink to="/" color="black">
          READ MORE ABOUT OUR STORY
        </UnderlineLink>
      </div>
      <BottomBlock />
    </>
  );
}

export default Home;
