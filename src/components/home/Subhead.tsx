import action from "../../assets/action.jpg";
import comedy from "../../assets/comedy.jpg";
import adventure from "../../assets/adventure.jpg";

const Subhead = () => {
  return (
    <div className="pb-10">
      <p className="pl-6 md:pl-10 text-2xl md:text-3xl font-semibold pb-6">
        Find your favorite movie genre
      </p>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center items-center px-4">
        {/* Action */}
        <a href="/action" className="text-center group">
          <img
            src={action}
            alt="Action"
            className="w-[300px] h-[200px] object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
          />
          <p className="pt-2 text-xl group-hover:text-red-500 transition-colors duration-300">
            Action
          </p>
        </a>

        {/* Animation */}
        <a href="/animation" className="text-center group">
          <img
            src={comedy}
            alt="Animation"
            className="w-[300px] h-[200px] object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
          />
          <p className="pt-2 text-xl group-hover:text-red-500 transition-colors duration-300">
            Animation
          </p>
        </a>

        {/* Adventure */}
        <a href="/adventure" className="text-center group">
          <img
            src={adventure}
            alt="Adventure"
            className="w-[300px] h-[200px] object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
          />
          <p className="pt-2 text-xl group-hover:text-red-500 transition-colors duration-300">
            Adventure
          </p>
        </a>
      </div>
    </div>
  );
};

export default Subhead;
