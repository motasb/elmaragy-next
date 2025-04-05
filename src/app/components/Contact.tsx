import "./contact.css";
const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="text-3xl">اتصل بنا</h2>
      <form
        id="contact-form"
        action="https://formspree.io/f/xldgkego"
        method="POST"
      >
        <input type="text" name="name" placeholder="الاسم" required />
        <input
          type="email"
          name="email"
          placeholder=" البريد الالكتروني"
          required
        />
        <input type="text" name="Phone" placeholder="هاتف الواتساب" required />
        <textarea name="message" placeholder="رسالتك" required cols={5}></textarea>
        <button type="submit">إرسال</button>
      </form>
      <p id="form-message" style={{ color: "green", display: "none" }}></p>
    </section>
  );
};

export default Contact;
