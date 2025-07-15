import Contact from "../components/Contact";
import DarkLogo from "../components/DarkLogo";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import { useAuth } from "../store/auth-store";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

const SignUp = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    firstPassword: "",
    password: "",
    role: "",
    acceptedTerms: false,
  });

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Please enter a valid email.");
      } else {
        setEmailError("");
      }
    }

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

    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email.");
      return;
    }

    if (!formData.acceptedTerms) {
      alert("Please accept terms and conditions.");
      return;
    }

    if (formData.firstPassword !== formData.password) {
      alert("Passwords do not match.");
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
    <div className="min-h-screen w-screen flex flex-col fixed inset-0 bg-blue backdrop-blur-[3px] z-40 p-4 sm:p-6">
      <div className="w-full max-w-6xl min-h-[70vh] bg-white rounded-2xl flex flex-col lg:flex-row m-auto">
        <div className="w-full lg:w-7/12 h-full flex flex-col items-center px-4 sm:px-6 py-6">
          <div className="w-full flex justify-center mb-4">
            <DarkLogo />
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-4/5 font-sans flex flex-col items-center gap-4"
          >
            <div className="w-full flex flex-col gap-4">
              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                error={emailError}
              />
              <InputField
                label="Password"
                type="password"
                name="firstPassword"
                value={formData.firstPassword}
                onChange={handleChange}
                placeholder="Password"
              />
              <InputField
                label="Confirm Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </div>

            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 px-2 sm:px-6 gap-2">
              <section className="text-gray-700 font-semibold">Role</section>
              <div className="flex flex-wrap space-x-4">
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

            <label className="flex cursor-pointer items-start mt-4 w-full px-2 sm:px-6">
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

            <Button type="submit" variant="primary">
              SignUp
            </Button>
          </form>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <div className="w-[2px] h-4/5 bg-gray-400 rounded-2xl relative">
            <div className="w-40 h-40 bg-red-500 rounded-full blur-[100px] opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="w-full max-w-sm lg:w-2/5 h-auto font-sans flex flex-col justify-center items-center px-4 sm:px-6 py-6">
          <div className="mt-4 flex flex-col justify-center items-center gap-2">
            <span className="text-gray-400 text-[12px]">
              Already have an account?
            </span>
            <Button
              onClick={() => navigate("/")}
              disabled={false}
              variant="primary"
            >
              Login
            </Button>
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
  );
};

export default SignUp;
