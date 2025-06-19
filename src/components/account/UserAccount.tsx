import { useNavigate } from "react-router-dom";
import Profile from "../../assets/Profile.png";
import { useAuth } from "../../contexts/UserContext";

const UserAccount = () => {
  const { userData, logout } = useAuth();
  const navigate = useNavigate();
  const onNavigateTree = (link: string) => {
    navigate(link, { replace: true });
  };
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      logout();
    }
  };

  return (
    <div className="my-40 px-4">
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16 space-y-8 md:space-y-0">
        {/* Profile Image */}
        <img
          src={Profile}
          alt="Profile"
          className="w-[200px] h-[200px] object-cover rounded-full shadow-lg"
        />

        {/* User Info and Buttons */}
        <div className="flex flex-col items-center md:items-start text-white">
          {/* Name */}
          <div className="flex flex-row gap-2 text-xl md:text-2xl mb-4">
            <p className="font-medium">Name:</p>
            <p>{userData?.name}</p>
          </div>

          {/* Email */}
          <div className="flex flex-row gap-2 text-xl md:text-2xl mb-6">
            <p className="font-medium">Email:</p>
            <p>{userData?.email}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-4">
            <button
              onClick={async () => {
                await handleLogout();
                onNavigateTree("/");
              }}
              className="p-2 px-4 bg-blue-600 rounded-2xl hover:bg-blue-700 transition"
            >
              Logout
            </button>

            <button
              onClick={() => navigate("/watchlist", { replace: true })}
              className="p-2 px-4 bg-red-900 rounded-2xl hover:bg-red-800 transition"
            >
              Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
