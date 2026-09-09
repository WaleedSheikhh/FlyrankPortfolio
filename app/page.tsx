import ContactForm from "./contactform";

export default function Home() {
  const linkStyle: React.CSSProperties = {
    color: "#005FCC",
    textDecoration: "none",
    fontWeight: 600,
    padding: "0.4rem 0.2rem",
    display: "inline-block",
  };

  return (
    <main
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        padding: "4rem 1.5rem",
        color: "#2A2A2A",
        background: "#FBFBFB",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        Waleed Sheikh
      </h1>

      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "1rem" }}>
        Backend AI engineering intern, fintech-focused. I build things that
        survive restarts, bad input, and real use — then show you exactly how.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#2A2A2A", marginBottom: "2rem" }}>
        Currently building backend systems and AI-fluency projects through the
        FlyRank internship — CRUD APIs, Docker, Postgres, authentication, and
        automation pipelines.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1rem 1.25rem",
          background: "#F4F9FF",
          borderRadius: "8px",
        }}
      >
        <a href="https://www.linkedin.com/in/muhammad-waleed-sh/" style={linkStyle} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/WaleedSheikhh" style={linkStyle} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="https://docs.google.com/document/d/1foZIvfit21w-Wg0YENg3Ut2nkEwEx75bQp1wVtR3MHw/edit?tab=t.0"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
        <a href="mailto:sheikhhh.waleed@gmail.com" style={linkStyle} target="_blank" rel="noopener noreferrer">
          Email me
        </a>
      </div>

      <ContactForm />

      <p style={{ marginTop: "3rem", fontSize: "0.95rem", color: "#2A2A2A" }}>
        More case studies and capstone work coming soon.
      </p>
    </main>
  );
}