"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'react-toastify';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the form schema using Zod
const formSchema = z.object({
  fullName: z.string().min(2, { message: "The Name Required" }),
  country: z.string().min(2, { message: "The Country Required" }),
  email: z.string().email({ message: "The Email Required" }),
  phone: z.string().min(10, { message: "The Phone Required" }),
  studentAge: z.string().min(1, { message: "The Age Required" }),
  studentGender: z.string().min(1, { message: "The Student Gender Required" }),
  teacherGender: z.string().min(1, { message: "The Teacher Gender Required" }),
  courseTitle: z.string().min(1, { message: "The Course Title Required" }),
  preferredDay: z.string().min(1, { message: "Preferred Day Required" }),
  TrialMeeting: z.string().min(1, { message: "Trial Meeting Required" }),
  message: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      country: "",
      email: "",
      phone: "",
      studentAge: "",
      studentGender: "",
      teacherGender: "",
      courseTitle: "",
      preferredDay: "",
      TrialMeeting: "",
      message: "",
    },
  });

  const dayOptions = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const coursesOptions = [
    "Arabic Learning",
    "Quran",
    "Islamic Studies",
  ];

  const TrialMeetingOptions = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];

  const genderOptions = ["Male", "Female"];

  // const onSubmit = async (data: FormValues) => {
  //   setIsSubmitting(true);
  //   try {
  //     // Simulate form submission
  //     console.log("Form submitted:", data);
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     setIsSuccess(true);
  //     form.reset();
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        toast.error(result.message);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!hasMounted) {
    return null;
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold  mb-2">
          Your registration request has been sent successfully!
        </h2>
        <p className=" mb-6">
          Thank you for your interest in our courses. Our team will contact you
          within 24 hours to confirm your registration and guide you through the
          next steps.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          className="bg-primary hover:bg-primary/90"
        >
          Submit another form
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Enroll Now</h2>
      <p className="mb-6">Fill the below form and we will contact you soon.</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Mohamed" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" ">
                    Country & City
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Saudi Arabia - Mecca" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">
                    {" "}
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="mohamed@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+201554134201" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="studentAge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" font-medium">
                    Student Age{" "}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="12" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="courseTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">
                    {" "}
                    Course Title
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="The Quran with Tajweed" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            /> */}

            <FormField
              control={form.control}
              name="courseTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" font-medium">
                  Course Title{" "}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="The Quran with Tajweed" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {coursesOptions.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="studentGender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" font-medium">
                    Student Gender{" "}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {genderOptions.map((gender) => (
                        <SelectItem key={gender} value={gender}>
                          {gender}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="teacherGender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">
                    Teacher Gender{" "}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {genderOptions.map((gender) => (
                        <SelectItem key={gender} value={gender}>
                          {gender}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredDay"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">
                    {" "}
                    Preferred Day
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pick a day" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {dayOptions.map((day) => (
                        <SelectItem key={day} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="TrialMeeting"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">
                    {" "}
                    Trial Meeting
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pick a Time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TrialMeetingOptions.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" font-medium">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Send us more details if you need"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-primary hover:bg-primary/90 px-8 py-2 text-primary-foreground font-medium"
          >
            {isSubmitting ? "Sending..." : "Enroll now"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
