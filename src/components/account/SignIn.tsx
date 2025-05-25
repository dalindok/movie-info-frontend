const SignIn = () => {
  return (
    <div className="mx-50 my-16 py-10 bg-[#1D1616] rounded-4xl">
      <div className="flex flex-col text-start px-20">
        <p className="text-3xl font-bold mb-4">Login to your account</p>
        <p className="text-lg mb-4">
          If you do not have an account, registering for an account is free and
          simple.
          <u> Click here </u> to get started.
        </p>
        <div className="mb-4 ">
          <p className="text-xl mb-1 font-semibold">Email</p>
          <input
            type="text"
            className="border-2 py-1.5 border-white rounded-lg w-full"
          />
        </div>
        {/* <div>
        <p>Email</p>
        <input type="text" className="border-2 border-white rounded-lg" />
      </div> */}
        <div className="mb-4 ">
          <p className="text-xl mb-1 font-semibold">Password</p>
          <input
            type="text"
            className="border-2 py-1.5 border-white rounded-lg w-full"
          />
        </div>
        <div className="flex flex-row gap-4 mb-4">
          <button className=" p-2 px-4 bg-red-900 rounded-2xl mt-2">
            Login
          </button>
          <button>Cancel</button>
        </div>
        <p className="font-extralight">Forget Password</p>
      </div>
    </div>
  );
};

export default SignIn;
