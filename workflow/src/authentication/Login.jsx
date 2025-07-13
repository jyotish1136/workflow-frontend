import SignUpButton from "../components/SignUpButton";
import Contact from "../components/Contact";
import DarkLogo from "../components/DarkLogo";
import { useState } from "react";
import { useAuth } from "../store/auth-store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailError, setEmailError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
    remembered: false,
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(
        emailRegex.test(value) ? "" : "Enter a valid email address"
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.role) {
      alert("Please fill all required fields.");
      return;
    }

    if (emailError) {
      alert("Fix email error before submitting.");
      return;
    }

    const res = await login(formData.email, formData.password, formData.role);
    if (res.status === 200) {
      console.log(res.status);
      navigate("/");
    } else {
      alert("Login failed");
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="h-screen w-screen flex flex-col fixed inset-0 bg-blue backdrop-blur-[3px] z-40">
      <div className="w-7/12 h-2/3 bg-white border-0 rounded-2xl flex flex-col m-auto">
        <DarkLogo />
        <div className="w-full flex justify-center items-center gap-6 mt-6">
          <form
            onSubmit={handleSubmit}
            className="h-4/5 font-sans flex justify-center items-center flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <section>Email</section>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-96 h-8 pl-3 border-2 border-gray-400 rounded-[6px]"
                placeholder="Email"
              />
              {emailError && (
                <p className="text-red-500 text-sm ml-1 mt-1">{emailError}</p>
              )}

              <section className="mt-3">Password</section>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-96 h-8 pl-3 border-2 border-gray-400 rounded-[6px]"
                placeholder="Password"
              />
            </div>

            <div className="w-full flex justify-between items-center mt-4 px-6">
              <section className="text-gray-700 font-semibold">Role</section>
              <div className="flex space-x-4">
                {["admin", "intern", "user"].map((role) => (
                  <label
                    key={role}
                    className="flex items-center space-x-1 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={formData.role === role}
                      onChange={handleChange}
                      className="accent-blue-500"
                    />
                    <span className="text-gray-700 text-sm capitalize">
                      {role}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center flex-col gap-2">
              <label className="flex gap-1 justify-center items-center mt-3">
                <input
                  type="checkbox"
                  name="remembered"
                  checked={formData.remembered}
                  onChange={handleChange}
                  className="m-1.5"
                />
                <span className="text-gray-700 font-semibold">Remember me</span>
              </label>
              <button
                type="submit"
                className="flex justify-center items-center gap-2 border-0 w-[116px] h-[38px] rounded-[8px] bg-blue-500 text-white"
              >
                Login
              </button>
              <a className="text-gray-400 text-[12px] underline cursor-pointer">
                Forgot password?
              </a>
            </div>
          </form>

          <div className="w-[2px] h-full bg-gray-400 border-0 rounded-2xl">
            <div className="w-40 h-40 bg-red-500 rounded-full blur-[100px] opacity-40 z-0 mt-15"></div>
          </div>

          <div className="w-2/5 h-4/5 font-sans flex justify-center items-center flex-col">
            <div className="mt-4 flex justify-between items-center flex-col gap-2">
              <span className="text-gray-400 text-[12px]">
                Don't have an account?
              </span>
              <SignUpButton />
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

export default Login;
