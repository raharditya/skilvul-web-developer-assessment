import React from "react";
import { ReactComponent as Delete } from "../assets/delete.svg";
import Skeleton from "react-loading-skeleton";
import months from "../months";

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

  const min = Math.floor((duration / 1000 / 60) << 0);
  const sec = Math.floor((duration / 1000) % 60);

  return (
    <div className="flex items-center px-3 py-3 bg-white hover:bg-gray-200 rounded-2xl transition duration-150 ease-in-out">
      <div className="w-7/12 flex items-center gap-4">
        <p className="w-4">{index || <Skeleton />}</p>
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={album}
            // style={{
            //   height: coverWidth,
            //   objectFit: "cover",
            //   objectPosition: "center",
            // }}
            className="rounded-xl h-16 w-16"
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
        {`${dateAdded.getDay()} ${
          months[dateAdded.getMonth()]
        } ${dateAdded.getFullYear()}` || <Skeleton width={70} />}
      </div>

      <div className="w-2/12">{`${min}:${sec}` || <Skeleton width={40} />}</div>

      <div className="w-1/12 ">
        {artists ? (
          <button
            className="h-10 w-10 flex items-center justify-center p-1 rounded-2xl bg-red-500"
            onClick={() => handleDelete(uri)}
          >
            <Delete />
          </button>
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
