"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { tutors } from "@/lib/data";
import { useMemo } from "react";
import { TutorCard } from "./TutorCard";

const ITEMS_PER_PAGE = 4;

const OurTutors = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = searchParams.get("page");
  const currentPage = Math.max(parseInt(pageParam || "1", 10), 1);
  const totalPages = Math.ceil(tutors.length / ITEMS_PER_PAGE);

  const indexOfLastTutor = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstTutor = indexOfLastTutor - ITEMS_PER_PAGE;

  const currentTutors = useMemo(() => {
    return tutors.slice(indexOfFirstTutor, indexOfLastTutor);
  }, [indexOfFirstTutor, indexOfLastTutor]);

  const goToPage = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <div className="min-h-screen bg-background-secondary from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Tutors</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are proud to offer a select group of highly experienced and qualified teachers in the basics of religion and language.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentTutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>

        <div className="flex justify-center items-center mt-10 space-x-2 flex-wrap">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 my-2 bg-primary text-white rounded disabled:opacity-50"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-1 rounded ${
                  page === currentPage
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 my-2 bg-primary text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTutors;
