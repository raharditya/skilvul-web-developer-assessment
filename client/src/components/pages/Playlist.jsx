import React from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import { ReactComponent as Back } from "../../assets/back-arrow.svg";
import { ReactComponent as Songs } from "../../assets/songs.svg";
import { ReactComponent as Time } from "../../assets/time.svg";
import { ReactComponent as Delete } from "../../assets/delete.svg";

export default function Playlist() {
  return (
    <div className="md:container md:mx-auto p-6">
      <div className="mb-6">
        <Link to="/home">
          <div className="flex items-center gap-3 py-4 px-6 rounded-3xl border shadow-lg">
            <Back /> Back
          </div>
        </Link>
      </div>

      <div className="md:flex md:items-start gap-8">
        <aside className="w-2/6 p-4 bg-red-500 rounded-2xl h-auto sticky top-6">
          <div className="flex gap-4">
            <img
              src="https://m.media-amazon.com/images/I/61hw9WloObL._SL1500_.jpg"
              alt=""
              className="rounded-xl h-24 w-24"
            />
            <div className="w-full">
              <h4 className="text-white font-semibold text-lg">
                that kind of vibe
              </h4>
              <div className="flex items-center gap-2 mb-3">
                <img src={profile} alt="" className="h-6 rounded-full" />
                <h2 className="text-white font-semibold text-xs">Raharditya</h2>
              </div>
              <p className="text-white text-xs">best played in shuffle mode</p>
            </div>
          </div>
        </aside>

        <main className="w-4/6 bg-white border shadow-xl rounded-3xl p-4">
          <div className="py-4 flex justify-between items-center border-b">
            <div className="">
              <div className="flex items-center gap-3">
                <Songs /> <p>95 songs</p>
              </div>
              <div className="flex items-center gap-3">
                <Time /> <p>6 hr 7 min</p>
              </div>
            </div>

            <select name="" id="" className="border rounded-2xl py-2 px-4">
              <option value="name">By name</option>
              <option value="created">By creation</option>
            </select>
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

            <div className="flex items-center px-3 py-3 bg-white hover:bg-gray-200 rounded-2xl transition duration-150 ease-in-out">
              <div className="w-7/12 flex items-center gap-4">
                <p className="w-4">1</p>
                <img
                  src="https://m.media-amazon.com/images/I/61hw9WloObL._SL1500_.jpg"
                  alt=""
                  className="rounded-xl h-16 w-16"
                />
                <div className="self-start">
                  <h4 className="font-semibold">Spanish Sahara</h4>
                  <p className="text-sm">Foals · Total Life Forever</p>
                </div>
              </div>

              <div className="w-2/12">21 Aug 2021</div>

              <div className="w-2/12">3:41</div>

              <div className="w-1/12 ">
                <div className="h-10 w-10 flex items-center justify-center p-1 rounded-2xl bg-red-500">
                  <Delete />
                </div>
              </div>
            </div>

            <div className="flex items-center px-3 py-3 bg-white hover:bg-gray-200 rounded-2xl transition duration-150 ease-in-out">
              <div className="w-7/12 flex items-center gap-4">
                <p className="w-4">88</p>
                <img
                  src="https://m.media-amazon.com/images/I/61hw9WloObL._SL1500_.jpg"
                  alt=""
                  className="rounded-xl h-16 w-16"
                />
                <div className="self-start">
                  <h4 className="font-semibold">Spanish Sahara</h4>
                  <p className="text-sm">Foals · Total Life Forever</p>
                </div>
              </div>

              <div className="w-2/12">21 Aug 2021</div>

              <div className="w-2/12">3:41</div>

              <div className="w-1/12 ">
                <div className="h-10 w-10 flex items-center justify-center p-1 rounded-2xl bg-red-500">
                  <Delete />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
