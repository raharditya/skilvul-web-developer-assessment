import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import PlaylistDetails from "./PlaylistDetails";
import useAuth from "../../useAuth";
import { toast } from "react-toastify";

export default function Authenticated({ code }) {
  const [currentPage, setCurrentPage] = useState("home");
  const [userInfo, setUserInfo] = useState({});
  const [currentPlaylistId, setCurrentPlaylistId] = useState("");
  const [playlistDetail, setPlaylistDetail] = useState({});

  const accessToken = useAuth(code);

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
        setUserPlaylists(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    axios
      .get("https://api.spotify.com/v1/me/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((res) => {
        setUserInfo(res.data);
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

    axios
      .get(`https://api.spotify.com/v1/playlists/${currentPlaylistId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((res) => {
        setPlaylistDetail(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleDelete(trackId) {
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
        fetchPlaylist();
        toast.success("Song deleted!");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 403) {
          toast.error("You don't have access to this playlist!");
        } else {
          toast.error("Something went wrong...");
        }
      });
  }

  return (
    <div>
      {currentPage === "home" && (
        <Home
          userPlaylists={userPlaylists}
          goToPlaylist={goToPlaylist}
          userInfo={userInfo}
        />
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
