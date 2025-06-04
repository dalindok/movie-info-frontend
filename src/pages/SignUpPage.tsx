import SignUp from "../components/account/SignUp";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const SignUpPage = () => {
  return (
    <div className="bg-black text-white">
      <Nav />
      <SignUp />
      <Footer />
    </div>
  );
};

export default SignUpPage;
