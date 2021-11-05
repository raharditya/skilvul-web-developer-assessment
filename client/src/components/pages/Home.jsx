import React, { useEffect } from "react";
import PlaylistItem from "../PlaylistItem";
import Skeleton from "react-loading-skeleton";

export default function Home({ userPlaylists, goToPlaylist, userInfo }) {
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

        <aside className="w-2/6 p-4 bg-green-500 rounded-2xl h-auto sticky top-6">
          <div className="flex gap-4">
            {userInfo?.images ? (
              <img
                src={userInfo.images[0]?.url}
                alt=""
                className="rounded-xl h-24 w-24"
              />
            ) : (
              <Skeleton height={96} width={96} />
            )}

            <div className="w-full">
              <h4 className="text-white font-semibold text-lg mb-2">
                {userInfo?.display_name || <Skeleton />}
              </h4>
              <a
                href="/"
                className="bg-white hover:bg-gray-200 transition duration-150 ease-in-out rounded-xl py-2 block w-full font-semibold text-center"
              >
                Log out
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
