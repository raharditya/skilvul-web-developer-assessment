import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { ReactComponent as Back } from "../../assets/back-arrow.svg";
import { ReactComponent as Songs } from "../../assets/songs.svg";
import { ReactComponent as Time } from "../../assets/time.svg";
import DetailItem from "../DetailItem";

export default function PlaylistDetails({
  goToHome,
  currentPlaylistId,
  fetchPlaylist,
  currentPlaylist,
  handleDelete,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPlaylist();
  }, [currentPlaylistId, fetchPlaylist]);

  return (
    <div className="p-6 bg-gray-100">
      <div className="md:container md:mx-auto md:flex md:items-start gap-8">
        <>
          <aside className="w-2/6 sticky top-6">
            <div className="mb-6">
              <div
                className="flex items-center gap-3 py-4 px-6 rounded-3xl border shadow-lg cursor-pointer bg-white"
                onClick={goToHome}
              >
                <Back /> Back
              </div>
            </div>

            <div className="p-4 bg-green-500 rounded-2xl h-auto ">
              <div className="flex gap-4">
                {currentPlaylist.images ? (
                  <img
                    src={currentPlaylist?.images[0]?.url}
                    alt=""
                    className="rounded-xl h-24 w-24"
                  />
                ) : (
                  <Skeleton width={96} height={96} />
                )}

                <div className="w-full">
                  <h4 className="text-white font-semibold text-lg leading-tight mb-2">
                    {currentPlaylist.name || <Skeleton />}
                  </h4>
                  <div className="flex items-center gap-2 mb-3">
                    <h2 className="text-white font-semibold text-xs">
                      {currentPlaylist.owner?.display_name || (
                        <Skeleton width={80} />
                      )}
                    </h2>
                  </div>
                  <p className="text-white text-xs">
                    {currentPlaylist.description}
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <main className="w-4/6 bg-white border shadow-xl rounded-3xl p-4">
            <div className="py-4 flex justify-between items-center border-b">
              <div className="">
                <div className="flex items-center gap-3">
                  <Songs />{" "}
                  <p>
                    {currentPlaylist.tracks ? (
                      `${currentPlaylist.tracks?.total} songs`
                    ) : (
                      <Skeleton width={100} />
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex items-center px-3 py-4">
                <div className="w-7/12 flex items-center gap-4">
                  <p className="text-xs text-gray-700">#</p>
                  <p className=" uppercase text-xs text-gray-700">Title</p>
                </div>

                <div className="w-2/12">
                  <p className=" uppercase text-xs text-gray-700">Date added</p>
                </div>

                <div className="w-2/12">
                  <Time />
                </div>

                <div className="w-1/12 "></div>
              </div>

              {currentPlaylist.tracks ? (
                currentPlaylist.tracks.items?.map((song, index) => (
                  <DetailItem
                    key={index}
                    index={index + 1}
                    title={song.track.name}
                    artists={song.track.artists}
                    album={song.track.album.name}
                    coverUrl={song.track.album.images[0]?.url}
                    added={song.added_at}
                    duration={song.track.duration_ms}
                    uri={song.track.uri}
                    handleDelete={handleDelete}
                  />
                ))
              ) : (
                <>
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                  <DetailItem />
                </>
              )}
            </div>
          </main>
        </>
      </div>
    </div>
  );
}
