import UserAccount from "../components/account/UserAccount";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Rate from "../components/Rate";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

const AccountPage = () => {
  return (
    <div className="bg-black text-white">
      <Nav />
      <UserAccount />

      <Footer />
      <SignInPage />
      <SignUpPage />
      <Rate />
    </div>
  );
};

export default AccountPage;
