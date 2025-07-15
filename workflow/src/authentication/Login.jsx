import Contact from "../components/Contact";
import DarkLogo from "../components/DarkLogo";
import { useState } from "react";
import { useAuth } from "../store/auth-store";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { HiOutlineMail } from "react-icons/hi";
import InputField from "../components/InputField";

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
      navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col fixed inset-0 bg-blue backdrop-blur-[3px] z-40 p-2 sm:p-4">
      <div className="w-full max-w-6xl h-auto lg:h-2/3 bg-white border-0 rounded-2xl flex flex-col lg:flex-row m-auto shadow-md">
        <div className="w-full lg:w-7/12 h-full flex flex-col items-center px-4 sm:px-8 py-6">
          <DarkLogo />

          <div className="w-full flex flex-col items-center justify-center gap-6 mt-6">
            <form
              onSubmit={handleSubmit}
              className="w-full sm:w-4/5 font-sans flex flex-col items-center gap-4"
            >
              <div className="w-full min-h-fit flex flex-col gap-2">
                <div>
                  <section>Email</section>
                  <InputField
                    fullWidth={true}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    error={emailError}
                  />
                </div>
                <div>
                  <section>Password</section>
                  <InputField
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    error={emailError}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 px-2 sm:px-6 gap-2">
                <section className="text-gray-700 font-semibold">Role</section>
                <div className="flex flex-wrap sm:space-x-4 gap-2">
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
                  <span className="text-gray-700 font-semibold">
                    Remember me
                  </span>
                </label>
                <Button type="submit" variant="primary">
                  Login
                </Button>
                <a className="text-gray-400 text-[12px] underline cursor-pointer">
                  Forgot password?
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <div className="w-[2px] h-4/5 bg-gray-400 rounded-2xl relative">
            <div className="w-40 h-40 bg-red-500 rounded-full blur-[100px] opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div className="w-full lg:w-2/5 h-full px-6 py-6 font-sans flex flex-col justify-center items-center">
          <div className="mt-4 flex flex-col justify-center items-center gap-2">
            <span className="text-gray-400 text-[12px]">
              Don't have an account?
            </span>
            <Button
              onClick={() => navigate("signup")}
              disabled={false}
              variant="primary"
              icon={HiOutlineMail}
            >
              SignUp With Email
            </Button>
          </div>

          <div className="w-full flex justify-center items-center gap-2 mt-3">
            <div className="w-1/3 h-[1px] bg-gray-300 rounded-2xl" />
            <span className="text-sm text-gray-500">Or</span>
            <div className="w-1/3 h-[1px] bg-gray-300 rounded-2xl" />
          </div>

          <div className="mt-4 w-full flex justify-center">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
