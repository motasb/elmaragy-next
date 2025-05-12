"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Tutor {
  id: number;
  gender: string;
  name: string;
  image?: string;
  shortDescription: string;
  fullDescription: string;
  videoUrl?: string;
}

interface TutorCardProps {
  tutor: Tutor;
}

export const TutorCard = ({ tutor }: TutorCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const imageSrc =
    tutor.image
      ? tutor.image
      : tutor.gender === "male"
        ? "/images/tutors/mr1.webp"
        : "/images/tutors/ms1.png";

  return (
    <>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div
              className="w-full md:w-1/3 h-60 md:h-auto relative cursor-pointer"
              onClick={() => setShowImageModal(true)}
            >
              <Image
                width={300}
                height={300}
                src={imageSrc}
                alt={tutor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{tutor.name}</h3>
                  <p className="text-muted-foreground mt-2">
                    {tutor.shortDescription}
                  </p>
                </div>
                <button
                  onClick={toggleExpand}
                  className="p-2 rounded-full hover:bg-primary/80 transition-colors"
                >
                  <ArrowDown
                    className={cn(
                      "h-5 w-5 transition-transform duration-300",
                      isExpanded && "rotate-180"
                    )}
                  />
                </button>
              </div>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="pt-4 border-t border-gray-200">
                  <p className="mb-6 whitespace-pre-line">
                    {tutor.fullDescription}
                  </p>
                  {tutor.videoUrl && (
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${tutor.videoUrl}`}
                        title={`${tutor.name} video`}
                        className="w-full h-64 border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>


      {showImageModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setShowImageModal(false)}
        >
          <div
            className="relative max-w-3xl w-full p-4 animate-fadeIn "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white hover:text-red-500"
              onClick={() => setShowImageModal(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={imageSrc}
              alt={`${tutor.name} enlarged`}
              width={800}
              height={800}
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};
