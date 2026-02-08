import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserProfile = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail") || "user@email.com";
  const userAvatar =
    localStorage.getItem("userAvatar") ||
    "https://play-lh.googleusercontent.com/XlM_BJhWkCYx8aKkpXbFqK6FU89MSz2UeK0Ac0oB0OQWCHxkn0Q2M1wwmOr0Yj355rcW=w526-h296-rw";

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-start pt-24 px-4">
      {/* Glass Card */}
      <div
        data-aos="zoom-in"
        className="w-full max-w-lg rounded-2xl p-6
        bg-white/10 backdrop-blur-xl border border-white/20
        shadow-[0_0_40px_rgba(239,68,68,0.25)]"
      >
        {/* Header */}
        <div
          data-aos="fade-down"
          className="flex items-center justify-between"
        >
          <h2 className="text-xl font-bold text-white tracking-wide">
            My Profile
          </h2>
        </div>

        {/* Profile Info */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-10 flex flex-col items-center text-center"
        >
          <img
            src={userAvatar}
            alt="Profile"
            className="w-28 h-28 rounded-full
            border-4 border-red-500 shadow-lg
            hover:scale-105 transition"
          />

          <h3 className="mt-5 text-2xl font-semibold text-white">
            {userName}
          </h3>
        </div>

        {/* Actions */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-10 space-y-4"
        >
          <button
            onClick={() => alert("Edit profile coming soon 😄")}
            className="w-full py-2.5 rounded-lg
            border border-red-500 text-red-400
            hover:bg-red-500 hover:text-white
            transition duration-300"
          >
            Edit Profile
          </button>

          <button
            onClick={logoutHandler}
            className="w-full py-2.5 rounded-lg
            bg-red-600 text-white font-semibold
            hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
