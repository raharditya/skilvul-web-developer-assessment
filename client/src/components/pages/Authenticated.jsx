import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import PlaylistDetails from "./PlaylistDetails";
import useAuth from "../../useAuth";

export default function Authenticated({ code }) {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentPlaylistId, setCurrentPlaylistId] = useState("");
  const [homePagination, setHomePagination] = useState(0);

  const accessToken = useAuth(code);

  console.log(accessToken);

  const [userPlaylists, setUserPlaylists] = useState();

  useEffect(() => {
    if (!accessToken) return;
    axios
      .get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUserPlaylists(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [accessToken]);

  function goToPlaylist(id) {
    setCurrentPage("details");
    setCurrentPlaylistId(id);
  }

  function goToHome() {
    setCurrentPage("home");
    setCurrentPlaylistId("");
  }

  return (
    <div>
      {currentPage === "home" && (
        <Home userPlaylists={userPlaylists} goToPlaylist={goToPlaylist} />
      )}
      {currentPage === "details" && (
        <PlaylistDetails
          currentPlaylistId={currentPlaylistId}
          goToHome={goToHome}
        />
      )}
    </div>
  );
}
