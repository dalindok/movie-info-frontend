import { useState } from "react";
import config from "../../config";
import { useAuth } from "../../contexts/UserContext";
// import { useUser } from "../../contexts/UserContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setAuth } = useAuth();
  // const [user, setUser] = useUser();
  //  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setUser({ ...user, [e.target.name]: e.target.value });
  //   };

  const onSignUp = async () => {
    try {
      const response = await fetch(`${config.baseURL}/api/user/sign-up`, {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
        }),
      });

      const res = await response.json();

      if (response.ok && res.token && res.data) {
        // Store token and user data using AuthContext
        setAuth(res.token, res.data);
        console.log("Sign Up Success:", res);
        // Redirect or show success message if needed
      } else {
        console.error("Sign Up Error:", res.message || res);
        // Optionally display error message in UI
      }
    } catch (error) {
      console.error("Network or server error during sign up:", error);
    }
  };

  return (
    <div className="mx-50 my-16 py-10 bg-[#1D1616] rounded-4xl">
      <div className="flex flex-col text-start px-20">
        <p className="text-3xl font-bold mb-4">Sign Up for an account</p>
        <p className="text-lg mb-4">
          Signing up for an account is free and easy. Fill out the form below to
          get started
        </p>
        <div className="mb-4 ">
          <p className="text-xl mb-1 font-semibold">Email</p>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border-2 py-1.5 border-white rounded-lg w-full"
          />
        </div>
        <div className="mb-4 ">
          <p className="text-xl mb-1 font-semibold">Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 py-1.5 border-white rounded-lg w-full"
          />
        </div>

        <div className="mb-4 ">
          <p className="text-xl mb-1 font-semibold">Password</p>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 py-1.5 border-white rounded-lg w-full"
          />
        </div>
        <div className="mb-4 ">
          <p className="text-xl mb-1 font-semibold">Confirm Password</p>
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-2 py-1.5 border-white rounded-lg w-full"
          />
        </div>
        <div className="flex flex-row gap-4 mb-4">
          <button
            onClick={onSignUp}
            className=" p-2 px-4 bg-red-900 rounded-2xl mt-2"
          >
            Sign Up
          </button>
          <button className="mt-2">Cancel</button>
        </div>
        <p className="font-extralight">Forget Password</p>
      </div>
    </div>
  );
};

export default SignUp;
