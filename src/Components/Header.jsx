// Header.jsx
import Nevbar from "./Nevbar";

const Header = () => {
  return (
    <div>
      <header className="relative text-white min-h-screen flex items-center justify-center max-w-1920px max-h-936px mt-0">
        <video className="absolute object-cover" autoPlay muted loop>
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/907900026577014002/TEAM/2e15/b653/-bba7-4454-a5cc-3ca982ed3987?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TVw9soNo9XQ0-SkoJE~7OyIzqkvFT~bzz6lrnIq38U-IEDo41GJ54p4tZj21MXytDQcrRGJGcB18VXlQMNo-COasLzjVCntETBXo03QuPbPkh7SJ-x~mb5~Ydk~E6-evOKQ67GdxpawwJB8h3F9d5Qzob6FwpWe1TFFClczTbYuUJcSp3ShuMSC2xaSx4izKEX8MCrUC6VXVrh85-wU5ADve6Ctdgin6Kq8AbXPs3NeGObWmoRFPyWfRRUdudwZrrvQal1zKhseUg9dPKpvIqE61GW5sf7l1CW497OrStTl6ogoWuGoF0YMc9zV0-MOdbThyWCo4YmosRl7Omhvu9A__"
            type="video/mp4"
          ></source>
        </video>
        <div className="absolute top-0 max-w-1920px max-h-104px pt-6 pr-60 pl-60 pb-6 bg-white ">
          <Nevbar />
        </div>

        <div className="absolute text-center px-6 md:px-12">
          {/* Logo Section */}
          <div className="mb-8">
            <img
              src="/path-to-logo.png"
              alt="mediusware"
              className="mx-auto w-40"
            />
          </div>

          {/* Title Section */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transforming Your Ideas into{" "}
            <span className="text-green-400">Digital Outcomes</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8">
            Our global journey needs your expertise. Align with our brand ethos
            and help us reach new heights across the world.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full">
              Talk to Someone
            </button>
            <button className="border border-white hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-full">
              Get a Schedule
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
