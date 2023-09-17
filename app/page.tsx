'use client';

import { useEffect, useState } from 'react';

export interface Meme_type {
  id: number;
  image: string;
}

export default function Home() {
  const [memes, setMemes] = useState<Meme_type[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshPage = () => {
    window.location.reload();
  };

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '660fa9b174msha15d7f6b2ec2156p141c0bjsn57464acefb55',
    },
  };

  useEffect(() => {
    fetch('https://programming-memes-images.p.rapidapi.com/v1/memes', options)
      .then((response) => response.json())
      .then((res) => {
        setMemes(res);
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="flex flex-col h-screens justify-center items-center ">
      {isLoading ? (
        <div className="flex flex-col h-screens justify-center items-center text-slate-100">
          <h1 className="font-semibold text-2xl">Loading memes...</h1>
        </div>
      ) : (
        <div className="flex flex-col  justify-center items-center ">
          <h1 className="text-4xl text-slate-100 pt-3 font-bold my-5">
            Programmemes
          </h1>
          <div className=" lg:grid grid-col-2 gap-4">
            {memes?.map((meme) => {
              return (
                <div key={meme.id} className="flex flex-col py-3 px-4 ">
                  <img
                    src={meme.image}
                    className="md:max-w-md border border-t-4 border-r-4 border-l-4 border-b-4 border-stone-900 rounded-t-md cursor-pointer hover:scale-105 transition-transform duration-200 active:scale-95 transition-transform-200"
                  />
                  <section className="">
                    {/* <div className="h-12 rounded-b-lg  bg-slate-500 border-4 border-stone-900" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#edebe6"
                      className="w-8 h-8 mt-3 cursor-pointer active:active:scale-90 transition-transform-200"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                  </section>
                </div>
              );
            })}
          </div>
          <button
            className="bg-sky-700 p-4 rounded-xl mb-6 mt-2 text-slate-100 active:scale-90 transition-transform-200 hover:scale-110 transition-transform-200"
            onClick={refreshPage}
          >
            More Memes!
          </button>
          <footer className="mb-3 text-slate-100">
            <p>FERRRD all right reseverd</p>
          </footer>
        </div>
      )}
    </main>
  );
}
