import MainTitle from "@/components/MainTitle";
import { Card, CardContent } from "@/components/ui/card";
import { courses } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


const Courses = () => {
  return (
    <section className=" py-16 rounded-3xl relative overflow-hidden container m-auto px-8">
      <MainTitle
        badge="Courses"
        title="Our Courses"
        subtitle="These Courses We Provide For Adults & Kids"
      />
      <div className="my-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <Card
              key={course.title}
              id={course.title}
              className={
                "flex flex-col items-center text-center transition-shadow " +
                (idx === 0
                  ? "border-blue-200 hover:shadow-lg"
                  : idx === 1
                  ? "border-green-200 hover:shadow-lg"
                  : idx === 2
                  ? "border-purple-200 hover:shadow-lg"
                  : "border-orange-200 hover:shadow-lg")
              }
            >
              <CardContent className="flex flex-col items-center py-8 px-3">
                <Image
                  src={course.images}
                  alt={course.title}
                  width={70}
                  height={70}
                />
                <div className="mt-3 mb-2">
                  <h5 className="text-2xl font-bold">
                    {course.title}
                  </h5>
                </div>
                <p className="text-muted-foreground mb-6">{course.explane}</p>
                <Link href={`/courses#${course.title}`} className="bg-primary hover:bg-primary/90 text-primary-foreground w-36 mx-auto rounded p-2 transition duration-300">
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
