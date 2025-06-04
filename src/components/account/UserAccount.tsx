import { useNavigate } from "react-router-dom";
import Profile from "../../assets/Profile.jpg";
import { useAuth } from "../../contexts/UserContext";

const UserAccount = () => {
  const { userData, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      logout();
    }
  };

  return (
    <div className="mb-20 mt-10">
      {/* <button onClick={handleGoBack} className="pt-8 pl-12">
        <IoMdArrowRoundBack className="" size={30} />
      </button> */}
      <div className="flex flex-row justify-center items-center space-x-50">
        <img src={Profile} alt="profile" className="w-[350px] object-cover" />
        <div className="flex flex-col">
          <div
            className=" flex flex-col py-6
           text-2xl">
            <div className="flex flex-row gap-4 mb-6">
              <p>Name:</p>
              <p className=" mb-2">{userData?.name}</p>
            </div>
            <div className="flex flex-row gap-4 mb-6">
              <p>Email:</p>
              <p className=" mb-2">{userData?.email}</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 mb-6">
            <button
              onClick={handleLogout}
              className="p-2 px-4 bg-blue-600 rounded-2xl mt-2 cursor-pointer">
              Logout
            </button>
            <button
              onClick={() => navigate("/watchlist", { replace: true })}
              className=" p-2 px-4 bg-red-900 rounded-2xl mt-2 cursor-pointer">
              WatchList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
