import { IoMdArrowRoundBack } from "react-icons/io";
import Profile from "../../assets/Profile.jpg";
import { useNavigate } from "react-router-dom";

const UserAccount = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="mb-20 mt-10">
      <button onClick={handleGoBack} className="pt-8 pl-12">
        <IoMdArrowRoundBack className="" size={30} />
      </button>
      <div className="flex flex-row justify-center items-center space-x-50">
        <img src={Profile} alt="profile" className="w-[350px] object-cover" />
        <div className="flex flex-col">
          <div
            className=" flex flex-col py-6
           text-2xl"
          >
            <div className="flex flex-row gap-4 mb-6">
              <p>Name:</p>
              <p className=" mb-2">Moeurn Puthsitha</p>
            </div>
            <div className="flex flex-row gap-4 mb-6">
              <p>Email:</p>
              <p className=" mb-2">sitha212@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 mb-6">
            <button className="p-2 px-4 bg-blue-600 rounded-2xl mt-2">
              Edit
            </button>
            <button className=" p-2 px-4 bg-red-900 rounded-2xl mt-2">
              WatchList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
