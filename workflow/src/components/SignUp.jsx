import Contact from "../components/Contact";
import LoginButton from "../components/LoginButton";
import DarkLogo from "../components/DarkLogo";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import { useAuth } from "../auth-store/authentication";
const SignUp = () => {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    firstPassword: "",
    password: "",
    role: "",
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.role) {
      alert("Please fill all required fields.");
      return;
    }
    if (!formData.acceptedTerms) {
      alert("Please accept terms and conditions.");
      return;
    }
    if (formData.firstPassword !== formData.password) {
      alert("Please enter same password as above.");
      return;
    }
    const res = await signup(
      formData.email,
      formData.password,
      formData.role,
      formData.acceptedTerms
    );
    console.log("Form submitted:", formData);
  };
  return (
    <div className="min-h-screen w-screen flex flex-col fixed inset-0 bg-blue backdrop-blur-[3px] z-40">
      <div className="w-7/12 min-h-2/3 bg-white border-0 rounded-2xl flex flex-col m-auto">
        <DarkLogo />
        <div className="w-full flex justify-center items-center gap-6 mt-6 mb-6">
          <form
            onSubmit={handleSubmit}
            className="h-4/5 bg-white font-sans flex justify-center items-center flex-col gap-4"
          >
            <div className="flex flex-col gap-4">
              <section>Email</section>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-96 h-8 pl-3 border-2 border-gray-400 rounded-[6px] mt-1"
                placeholder="Email"
              />

              <section>Password</section>
              <input
                type="password"
                name="firstPassword"
                value={formData.firstPassword}
                onChange={handleChange}
                className="w-96 h-8 pl-3 border-2 border-gray-400 rounded-[6px] mt-1"
                placeholder="Password"
              />
              <section>Confirm Password</section>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-96 h-8 pl-3 border-2 border-gray-400 rounded-[6px] mt-1"
                placeholder="Password"
              />
            </div>

            <div className="w-full flex justify-between items-center mt-4 px-6">
              <section className="text-gray-700 font-semibold">Role</section>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={formData.role === "admin"}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  <span className="text-gray-700 text-sm">Admin</span>
                </label>

                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="intern"
                    checked={formData.role === "intern"}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  <span className="text-gray-700 text-sm">Intern</span>
                </label>

                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={formData.role === "user"}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  <span className="text-gray-700 text-sm">User</span>
                </label>
              </div>
            </div>

            <label className="flex cursor-pointer items-start mt-4">
              <input
                type="checkbox"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                className="m-1.5"
              />
              <div className="flex flex-col items-start">
                <p className="text-gray-700 font-semibold">
                  Accept terms and conditions
                </p>
                <p className="text-gray-400 text-[12px] leading-tight">
                  You agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </label>

            <button
              type="submit"
              className="mt-4 flex justify-center items-center gap-2 border-0 p-3 h-[38px] font-medium rounded-[8px] bg-blue-500 text-white cursor-pointer"
            >
              <HiOutlineMail />
              <span className="pb-1">Sign Up with email</span>
            </button>
          </form>
          <div className="w-[2px] h-full bg-gray-400 border-0 rounded-2xl">
            <div className="w-40 h-40 bg-red-500 rounded-full blur-[100px] opacity-40 z-0 mt-15"></div>
          </div>

          <div className="w-2/5 bg-white h-4/5 font-sans flex justify-center items-center flex-col">
            <div className="mt-4 flex justify-between items-center flex-col gap-2">
              <span className="text-gray-400 text-[12px]">
                Already have a account?
              </span>
              <LoginButton />
            </div>
            <div className="w-full flex justify-center items-center gap-1 mt-3">
              <div className="w-1/3 h-[1px] border-0 rounded-2xl bg-gray-300"></div>
              <span>Or,</span>
              <div className="w-1/3 h-[1px] border-0 rounded-2xl bg-gray-300"></div>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
