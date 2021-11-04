import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="bg-white md:w-2/5 mx-auto md:h-80 flex flex-col items-center justify-center rounded-xl shadow-md">
        <h1 className="mb-8 font-semibold text-2xl">
          Spotify Playlist Manager
        </h1>

        <a href="#" className="rounded-full bg-green-500 text-white py-2 px-8">
          Log in with Spotify
        </a>
      </div>
    </div>
  );
}
