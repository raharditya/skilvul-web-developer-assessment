import React from "react";
import profile from "../../assets/profile.jpg";
import useAuth from "../../useAuth";

export default function Home({ code }) {
  const accessToken = useAuth(code);

  console.log(accessToken);

  return (
    <div className="md:container md:mx-auto px-6">
      <h1 className="py-6 text-xl font-semibold">Spotify Playlist Manager</h1>

      <div className="md:flex md:items-start mt-4 gap-8">
        <main className="w-4/6">
          <div className="flex items-center justify-between">
            <h2>My playlists</h2>
            <select name="" id="" className="border rounded-2xl py-2 px-4">
              <option value="name">By name</option>
              <option value="created">By creation</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-6 my-6">
            <div className="bg-white border rounded-2xl shadow-lg p-4">
              <img
                src="https://m.media-amazon.com/images/I/61hw9WloObL._SL1500_.jpg"
                alt=""
                className="w-full rounded-xl"
              />
              <div className="p-3">
                <h3 className="font-semibold text-lg mb-2">
                  that kind of vibe
                </h3>
                <p className="text-sm">Raharditya</p>
              </div>
            </div>
            <div className="bg-white border rounded-2xl shadow-lg p-4">
              <img
                src="https://m.media-amazon.com/images/I/61hw9WloObL._SL1500_.jpg"
                alt=""
                className="w-full rounded-xl"
              />
              <div className="p-3">
                <h3 className="font-semibold text-lg mb-2">
                  that kind of vibe
                </h3>
                <p className="text-sm">Raharditya</p>
              </div>
            </div>
            <div className="bg-white border rounded-2xl shadow-lg p-4">
              <img
                src="https://m.media-amazon.com/images/I/61hw9WloObL._SL1500_.jpg"
                alt=""
                className="w-full rounded-xl"
              />
              <div className="p-3">
                <h3 className="font-semibold text-lg mb-2">
                  Some Name That is Extremely Long A...
                </h3>
                <p className="text-sm">Raharditya</p>
              </div>
            </div>
            <div className="bg-white border rounded-2xl shadow-lg p-4">
              <img
                src="https://m.media-amazon.com/images/I/61hw9WloObL._SL1500_.jpg"
                alt=""
                className="w-full rounded-xl"
              />
              <div className="p-3">
                <h3 className="font-semibold text-lg mb-2">
                  Some Name That is Extremely Long A...
                </h3>
                <p className="text-sm">Raharditya</p>
              </div>
            </div>
          </div>
        </main>

        <aside className="w-2/6 p-4 bg-red-500 rounded-2xl h-auto sticky top-6">
          <div className="flex gap-4">
            <img src={profile} alt="" className="rounded-xl h-24 w-24" />
            <div className="w-full">
              <h4 className="text-white font-semibold text-lg mb-2">
                Adit Raharditya
              </h4>
              <button className="bg-white rounded-xl py-2 block w-full font-semibold">
                Log out
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-white font-semibold text-lg mb-2">
              Recently played:
            </h3>

            <div className="bg-white p-3 rounded-xl flex gap-4">
              <img
                src="https://m.media-amazon.com/images/I/61hw9WloObL._SL1500_.jpg"
                alt=""
                className="h-16 rounded-lg"
              />
              <div className="w-full">
                <h4 className="font-semibold">Spanish Sahara</h4>
                <p className="text-sm">Foals · Total Life Forever</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
