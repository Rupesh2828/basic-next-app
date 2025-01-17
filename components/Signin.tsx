"use client";

import { signin } from "@/app/actions/user";
import { useState } from "react";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Sign in</div>
            </div>
            <div className="pt-2">
              {/* Update username */}
              <LabelledInput
                label="Username"
                placeholder="rupesh@gmail.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* Update password */}
              <LabelledInput
                label="Password"
                type="password"
                placeholder="123456"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => signin(username, password)}
                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  value: string; // Added value prop for input state
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Added onChange handler
}

function LabelledInput({ label, placeholder, type, value, onChange }: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
