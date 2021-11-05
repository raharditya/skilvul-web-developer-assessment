import React from "react";
import Authenticated from "./Authenticated";
import Home from "./Home";

const code = new URLSearchParams(window.location.search).get("code");
console.log(code);

export default function Login() {
  const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=29892197de31405faca004529d0a0c60&response_type=code&redirect_uri=http://localhost:3000&scope=playlist-modify-private%20playlist-read-private%20playlist-modify-public%20playlist-read-collaborative%20user-read-private%20user-read-email%20user-read-recently-played";

  return code ? (
    <Authenticated code={code} />
  ) : (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="bg-white md:w-2/5 mx-auto md:h-80 flex flex-col items-center justify-center rounded-xl shadow-md">
        <h1 className="mb-8 font-semibold text-2xl">
          Spotify Playlist Manager
        </h1>

        <a
          href={AUTH_URL}
          className="rounded-full bg-green-500 text-white py-2 px-8"
        >
          Log in with Spotify
        </a>
      </div>
    </div>
  );
}
