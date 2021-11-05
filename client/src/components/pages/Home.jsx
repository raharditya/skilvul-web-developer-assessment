import React, { useState, useEffect } from "react";
import profile from "../../assets/profile.jpg";
import useAuth from "../../useAuth";
import PlaylistItem from "../PlaylistItem";

export default function Home({ userPlaylists, goToPlaylist }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100">
      <h1 className="md:container md:mx-auto px-6 py-6 text-xl font-semibold">
        Spotify Playlist Manager
      </h1>

      <div className="md:container md:mx-auto px-6 md:flex md:items-start mt-4 gap-8">
        <main className="w-4/6">
          <div className="flex items-center justify-between">
            <h2>My playlists</h2>
            <select name="" id="" className="border rounded-2xl py-2 px-4">
              <option value="name">By name</option>
              <option value="created">By creation</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-6 my-6">
            {userPlaylists ? (
              userPlaylists.length === 0 ? (
                "You don't have any playlists"
              ) : (
                userPlaylists.map((playlist, index) => (
                  <PlaylistItem
                    key={index * 100}
                    goToPlaylist={goToPlaylist}
                    imgUrl={playlist.images[0]?.url || ""}
                    name={playlist.name}
                    creator={playlist.owner.display_name}
                    id={playlist.id}
                  />
                ))
              )
            ) : (
              <>
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
              </>
            )}
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

          {/* <div className="mt-8">
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
          </div> */}
        </aside>
      </div>
    </div>
  );
}
