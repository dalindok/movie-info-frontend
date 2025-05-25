import header from "../../assets/header.jpg";

const Header = () => {
  return (
    <div className="relative h-[500px]">
      {/* Blurred Image */}
      <img
        src={header}
        alt=""
        className="w-full h-[400px] object-cover blur-xs z-10"
      />
      {/* Text */}
      <p className="absolute bottom-52 left-1/2 transform -translate-x-1/2 text-white text-4xl font-semibold text-center w-[80%]">
        Movies aren’t just something you watch they’re something you feel,
        something you live. Let’s find the perfect film to match your mood
        today!
      </p>
    </div>
  );
};

export default Header;
