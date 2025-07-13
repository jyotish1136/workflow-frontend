import React, { useState } from "react";

const EmailPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, " ", password);
  return (
    <div className="flex flex-col gap-4">
      <section>Email</section>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-96 h-8 pl-3 border-2 border-gray-400 rounded-[6px] mt-1"
        placeholder="Email"
      />
      <section>Password</section>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-96 h-8 pl-3 border-2 border-gray-400 rounded-[6px] mt-1"
        placeholder="Password"
      />
    </div>
  );
};

export default EmailPassword;
