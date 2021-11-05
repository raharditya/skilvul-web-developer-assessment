import React, { useState, useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";

export default function PlaylistItem({
  imgUrl,
  name,
  creator,
  id,
  goToPlaylist,
}) {
  const cover = useRef();
  const [coverWidth, setcoverWidth] = useState(0);

  useEffect(() => {
    setcoverWidth(cover.current ? cover.current.offsetWidth : 0);
  }, []);

  return (
    <div
      className="bg-white border rounded-2xl shadow-lg p-4 cursor-pointer"
      onClick={() => goToPlaylist(id)}
    >
      {imgUrl ? (
        <img
          src={imgUrl}
          alt={name}
          style={{
            height: coverWidth,
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="w-full rounded-xl"
        />
      ) : (
        <Skeleton height={coverWidth} />
      )}
      <div className="p-3" ref={cover}>
        <h3 className="font-semibold text-lg mb-2 max-h-10 truncate">
          {name || <Skeleton count={2} />}
        </h3>
        <p className="text-sm">{creator || <Skeleton />}</p>
      </div>
    </div>
  );
}
