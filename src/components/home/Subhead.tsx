import action from "../../assets/action.jpg";
import comedy from "../../assets/comedy.jpg";
import adventure from "../../assets/adventure.jpg";

const Subhead = () => {
  return (
    <div className="pb-10">
      <p className=" pl-10 text-3xl font-semibold pb-10">Find your interests</p>
      <div className="flex flex-row space-x-4 justify-center">
        <div>
          <a href="/action">
            <img
              src={action}
              alt=""
              className="w-[300px] h-[200px] object-cover rounded-md"
            />
            <p className="pt-2 text-xl">Action</p>
          </a>
        </div>
        <div>
          <a href="/animation">
            <img
              src={comedy}
              alt=""
              className="w-[300px] h-[200px] object-cover rounded-md"
            />
            <p className="pt-2 text-xl">Animation</p>
          </a>
        </div>
        <div>
          <a href="/adventure">
            <img
              src={adventure}
              alt=""
              className="w-[300px] h-[200px] object-cover rounded-md"
            />
            <p className="pt-2 text-xl">Advanture</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subhead;
