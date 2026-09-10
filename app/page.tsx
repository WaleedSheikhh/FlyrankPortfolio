import ContactForm from "./contactform";
import WorkSection from "./WorkSection";

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

      {/* Work section */}
      <section style={{ marginTop: "3.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem" }}>Work</h2>
 
          <article
            style={{
              border: "1px solid #F4F9FF",
              borderRadius: "8px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
              Task API — Backend Basics, Done Right
            </h3>
 
            <p style={{ fontWeight: 600, marginBottom: "0.25rem" }}>The problem</p>
            <p style={{ lineHeight: 1.6, marginBottom: "0.75rem" }}>
              I needed to actually understand CRUD, not just recognize the word —
              build it myself, from nothing, and know I could explain every line.
            </p>
 
            <p style={{ fontWeight: 600, marginBottom: "0.25rem" }}>What I did</p>
            <p style={{ lineHeight: 1.6, marginBottom: "0.75rem" }}>
              Built a task API in FastAPI with full CRUD, then moved it from
              in-memory storage to SQLite, then to Postgres running in Docker —
              proving the API itself never had to change, only the storage
              underneath it. Added Supabase authentication with protected routes,
              and an LLM enrichment endpoint with schema validation, retries, a
              cost log, and a kill switch.
            </p>
 
            <p style={{ fontWeight: 600, marginBottom: "0.25rem" }}>What came of it</p>
            <p style={{ lineHeight: 1.6, marginBottom: "1rem" }}>
              A real, working backend system — CRUD, a persistent database,
              authentication, and AI integration, running in Docker with correct
              status codes, validation, and error handling throughout.
            </p>
 
            <a
              href="https://github.com/WaleedSheikhh/FlyrankInternship"
              style={{ ...linkStyle, padding: 0 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              View the code →
            </a>
          </article>
        </section>
 
        <WorkSection />

      <ContactForm />

      <p style={{ marginTop: "3rem", fontSize: "0.95rem", color: "#2A2A2A" }}>
        More case studies and capstone work coming soon.
      </p>
    </main>
  );
}