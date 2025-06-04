import UserAccount from "../components/account/UserAccount";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useAuth } from "../contexts/UserContext";
import SignInPage from "./SignInPage";

const AccountPage = () => {
  const { userData } = useAuth();

  return (
    <div className="bg-black text-white">
      {userData ? (
        <>
          <Nav />
          <UserAccount />
          <Footer />
        </>
      ) : (
        <SignInPage />
      )}
    </div>
  );
};

export default AccountPage;
