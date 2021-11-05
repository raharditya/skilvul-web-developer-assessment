import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import PlaylistDetails from "./PlaylistDetails";
import useAuth from "../../useAuth";

export default function Authenticated({ code }) {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentPlaylistId, setCurrentPlaylistId] = useState("");
  const [playlistDetail, setPlaylistDetail] = useState({});
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
    setPlaylistDetail({});
  }

  function fetchPlaylist() {
    if (!accessToken) return;

    console.log("fetching");
    axios
      .get(`https://api.spotify.com/v1/playlists/${currentPlaylistId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((res) => {
        console.log(res.data);
        setPlaylistDetail(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleDelete(trackId) {
    console.log("deleting" + trackId);
    axios
      .delete(
        `https://api.spotify.com/v1/playlists/${currentPlaylistId}/tracks`,
        {
          headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/json",
          },
          data: { tracks: [{ uri: trackId }] },
        }
      )
      .then((res) => {
        console.log(res.data);
        fetchPlaylist();
      })
      .catch((err) => console.log(err));
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
          accessToken={accessToken}
          fetchPlaylist={fetchPlaylist}
          currentPlaylist={playlistDetail}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}
