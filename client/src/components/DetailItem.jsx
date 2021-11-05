import React from "react";
import { ReactComponent as Delete } from "../assets/delete.svg";
import Skeleton from "react-loading-skeleton";
import months from "../months";
import Popup from "reactjs-popup";

export default function DetailItem({
  index,
  title,
  artists,
  album,
  coverUrl,
  added,
  duration,
  uri,
  handleDelete,
}) {
  const dateAdded = new Date(added);

  let min;
  let sec;

  if (duration) {
    min = Math.floor((duration / 1000 / 60) << 0);
    sec = Math.floor((duration / 1000) % 60);
  }

  return (
    <div className="flex items-center px-3 py-3 bg-white hover:bg-gray-200 rounded-2xl transition duration-150 ease-in-out">
      <div className="w-7/12 flex items-center gap-4">
        <p className="w-4">{index || <Skeleton />}</p>
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={album}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="rounded-xl w-16 h-16 "
          />
        ) : (
          <Skeleton height={64} width={64} />
        )}
        <div className="self-start">
          <h4 className="font-semibold">{title || <Skeleton />}</h4>
          <p className="text-sm">
            {artists ? `${artists[0].name}` : <Skeleton width={200} />}
          </p>
        </div>
      </div>

      <div className="w-2/12">
        {added ? (
          `${dateAdded.getDay()} ${
            months[dateAdded.getMonth()]
          } ${dateAdded.getFullYear()}`
        ) : (
          <Skeleton width={70} />
        )}
      </div>

      <div className="w-2/12">
        {duration ? `${min}:${sec}` : <Skeleton width={40} />}
      </div>

      <div className="w-1/12 ">
        {artists ? (
          <Popup
            trigger={(open) => (
              <button className="h-10 w-10 flex items-center justify-center p-1 rounded-2xl bg-red-500 hover:bg-red-600 transition duration-150 ease-in-out">
                <Delete />
              </button>
            )}
            modal={true}
            position="left center"
            contentStyle={{ width: "auto", borderRadius: "1.5rem" }}
            closeOnDocumentClick
          >
            {(close) => (
              <div className="flex flex-col py-4 px-6 items-center justify-center">
                <h3>Delete this song?</h3>
                <div className="flex items-center gap-4 mt-6">
                  <button
                    className="py-2 px-6 rounded-xl border-2 border-gray-400"
                    onClick={close}
                  >
                    Cancel
                  </button>
                  <button
                    className="py-2 px-6 rounded-xl bg-red-500 hover:bg-red-600 transition duration-150 ease-in-out font-semibold text-white"
                    onClick={() => {
                      handleDelete(uri);
                      close();
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </Popup>
        ) : (
          <button
            className="h-10 w-10 flex items-center justify-center p-1 rounded-2xl bg-red-300 cursor-default"
            disabled
          >
            <Delete />
          </button>
        )}
      </div>
    </div>
  );
}
