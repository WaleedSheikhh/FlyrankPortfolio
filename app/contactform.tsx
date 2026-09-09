"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "c3616dcc-c30a-4c55-a5dd-55e2bbbf76ea");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ marginTop: "3rem" }}>
      <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Get in touch</h2>

      {status === "sent" ? (
        <p style={{ color: "#0074FF" }}>Thanks — your message reached me. I'll reply soon.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "400px" }}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            style={{ padding: "0.6rem", border: "1px solid #ddd", borderRadius: "6px", fontFamily: "Helvetica" }}
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={4}
            style={{ padding: "0.6rem", border: "1px solid #ddd", borderRadius: "6px", fontFamily: "Helvetica" }}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              background: "#0074FF",
              color: "#FBFBFB",
              padding: "0.6rem 1.2rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "Helvetica",
            }}
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
          {status === "error" && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>Something went wrong — try again, or email me directly.</p>
          )}
        </form>
      )}
    </div>
  );
}