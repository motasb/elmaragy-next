// /app/api/send-email/route.ts
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { FormValues } from "@/components/ContactForm";

export async function POST(request: NextRequest) {
  try {
    const formData: FormValues = await request.json();

    if (!formData) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.APP_EMAIL_ADDRESS,
        pass: process.env.APP_EMAIL_PASSWORD,
      },
    });

    // إعداد رسالة الرد التلقائي
    const autoReplyOptions = {
      from:`"Al-Maragy Academy" <${process.env.APP_EMAIL_ADDRESS}>`,
      to: formData.email,
      replyTo:process.env.APP_EMAIL_ADDRESS,
      subject: "Registration request received",
      text: `alsalam ealaykum warahmat allah wabarakatuh ${formData.fullName},\n We have received your request and will get back to you shortly.`,
    };

    try {
      await transporter.sendMail(autoReplyOptions);
    } catch (error) {
      console.error("Failed to send confirmation email to user:", error);
      return NextResponse.json({ error: "البريد الإلكتروني المدخل غير صحيح أو لا يمكن الوصول إليه." }, { status: 400 });
    }

    const mailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      replyTo: formData.email,
      to: process.env.APP_EMAIL_ADDRESS,
      subject: "New Enroll",
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
            <table style="border-collapse: collapse; width: 100%; margin-top: 20px;">
              <thead>
                <tr>
                  <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left;">Field</th>
                  <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left;">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style="border: 1px solid #ddd; padding: 8px;">Full Name</td><td style="border: 1px solid #ddd; padding: 8px;">${formData.fullName}</td></tr>
                <tr><td style="border: 1px solid #ddd; padding: 8px;">Country & City</td><td style="border: 1px solid #ddd; padding: 8px;">${formData.country}</td></tr>
                <tr><td style="border: 1px solid #ddd; padding: 8px;">Email</td><td style="border: 1px solid #ddd; padding: 8px;">${formData.email}</td></tr>
                <tr><td style="border: 1px solid #ddd; padding: 8px;">Phone</td><td style="border: 1px solid #ddd; padding: 8px;">${formData.phone}</td></tr>
                <tr><td style="border: 1px solid #ddd; padding: 8px;">Age</td><td style="border: 1px solid #ddd; padding: 8px;">${formData.studentAge}</td></tr>
                <tr><td style="border: 1px solid #ddd; padding: 8px;">Student Gender</td><td style="border: 1px solid #ddd; padding: 8px;">${formData.studentGender}</td></tr>
                <tr><td style="border: 1px solid #ddd; padding: 8px;">Teacher Gender</td><td style="border: 1px solid #ddd; padding: 8px;">${formData.teacherGender}</td></tr>
                <tr><td style="border: 1px solid #ddd; padding: 8px;">Course Title</td><td style="border: 1px solid #ddd; padding: 8px;">${formData.courseTitle}</td></tr>
                <tr><td style="border: 1px solid #ddd; padding: 8px;">Preferred Day</td><td style="border: 1px solid #ddd; padding: 8px;">${formData.preferredDay}</td></tr>
                <tr><td style="border: 1px solid #ddd; padding: 8px;">Message</td><td style="border: 1px solid #ddd; padding: 8px;">${formData.message || 'No message provided'}</td></tr>
              </tbody>
            </table>
            <footer style="margin-top: 20px; font-size: 12px; color: #888;">
              <p>This is an automated message from your contact form.</p>
            </footer>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
