import { courses, whatsApp } from "@/lib/data";
import Image from "next/image";

export const metadata = {
  title: 'El-Maragy - Courses',
  description:"Learn more about El-Maragy Academy courses"
}

export default function CoursesPage() {
  return (
    <section className="bg-background-secondary py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-20">
        <h2 className="text-4xl font-bold text-center text-muted-foreground mb-16">
          Our Courses
        </h2>

        {courses.map((course, index) => (
          <div
            key={index}
            id={course.title}
            className={`flex flex-col-reverse lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-10 bg-background p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300`}
          >
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <Image
                src={course.images}
                alt={course.title}
                width={300}
                height={300}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-primary mb-3">
                {course.title}
              </h3>
              <p className=" mb-2 text-lg">{course.explane}</p>
              <p className="text-muted-foreground mb-4">{course.text}</p>

              <a
                href={`https://wa.me/${whatsApp}?text=I%20want%20to%20subscribe%20to%20this%20course (${course.title})`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md transition duration-200"
              >
                Message us on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
