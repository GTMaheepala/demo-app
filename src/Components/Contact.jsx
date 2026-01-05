import React from 'react'
import { useState } from 'react'
import SectionTitle from './SectionTitle'
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onFocus = (e) => {
    const parent = e.currentTarget.parentNode;
    parent.classList.add("focus");
  };

  const onBlur = (e) => {
    const parent = e.currentTarget.parentNode;
    if (!e.currentTarget.value) {
      parent.classList.remove("focus");
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setError("Email service is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          subject: form.subject || "Contact Form Message",
          message: form.message
        },
        { publicKey }
      );

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS send error:", err);
      setStatus("error");
      const msg = err?.text || err?.message || "Failed to send message. Please try again.";
      setError(msg);
    }
  };

  return (
    <section className="contact section" id="contact">
      <SectionTitle heading="Get in Touch" title="Contact me" />
      <div className="contact-container container grid">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <i className="uil uil-envelope-edit contact-card-icon"></i>
              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">tharushathathsara37@gmail.com</span>
              <a href="mailto:tharushathathsara37@gmail.com" className="contact-button">
                Write me <i className="uil uil-arrow-right contact-button-icon"></i>
              </a>
            </div>
            <div className="contact-card">
              <i className="uil uil-whatsapp contact-card-icon"></i>
              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">+94 76 052 3136</span>
              <a href="https://wa.me/94760523136" className="contact-button" target="_blank" rel="noopener noreferrer">
                Write me <i className="uil uil-arrow-right contact-button-icon"></i>
              </a>
            </div>
            <div className="contact-card">
              <i className="uil uil-linkedin contact-card-icon"></i>
              <h3 className="contact-card-title">LinkedIn</h3>
              <span className="contact-card-data">Tharusha Thathsara</span>
              <a href="https://www.linkedin.com/in/tharusha-thathsara-a4abb3302" target="_blank" rel="noopener noreferrer" className="contact-button">
                Write me <i className="uil uil-arrow-right contact-button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <form className="contact-form" onSubmit={submit}>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <label>Username</label>
              <span>Username</span>
            </div>

            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <label>Email</label>
              <span>Email</span>
            </div>

            <div className="input-container">
              <input
                type="text"
                name="subject"
                className="input"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <label>Subject</label>
              <span>Subject</span>
            </div>

            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={onFocus}
                onBlur={onBlur}
              ></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>

            <button type="submit" className="button" disabled={status === "loading"}>
              <i className="uil uil-navigator button-icon"></i>
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <p className="success">Thanks! I will reply soon.</p>}
            {status === "error" && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact
