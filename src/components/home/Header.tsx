import header from "../../assets/header.jpg";

const Header = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] w-full">
      {/* Background Image with slight blur */}
      <img
        src={header}
        alt="Header background"
        className="absolute inset-0 w-full h-full object-cover blur-sm brightness-75 z-0"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <p className="text-white text-xl md:text-3xl lg:text-4xl font-semibold text-center max-w-3xl z-10">
          Movies aren’t just something you watch—they’re something you feel,
          something you live. Let’s find the perfect film to match your mood
          today!
        </p>
      </div>
    </div>
  );
};

export default Header;
