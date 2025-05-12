"use client";
import React, { useState } from "react";
import { featuresVideo } from "@/lib/data";

const VideoIntro = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-12 bg-background" id="OurStudents">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6">
          {featuresVideo.map((video) => (
            <div
              key={video.id}
              className="bg-background-secondary rounded-lg shadow-md overflow-hidden"
            >
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allowFullScreen
              ></iframe>
              <div className="p-4 text-center">
                <button
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 hover:cursor-pointer transition"
                  onClick={() => setActiveVideo(video.youtubeId)}
                >
                  Watch Fullscreen
                </button>
              </div>
            </div>
          ))}
        </div>

        {activeVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl overflow-hidden w-full max-w-5xl relative">
              <button
                className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 p-2 rounded-full z-10"
                onClick={() => setActiveVideo(null)}
              >
                ✕
              </button>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="Fullscreen Video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoIntro;
