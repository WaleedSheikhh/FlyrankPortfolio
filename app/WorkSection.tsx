export default function WorkSection() {
    const cardStyle: React.CSSProperties = {
      padding: "1.5rem",
      background: "#F4F9FF",
      borderRadius: "8px",
      marginBottom: "1.5rem",
    };
  
    return (
      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>Work</h2>
  
        <div style={cardStyle}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            Task API — Backend Basics, Done Right
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: "0.75rem" }}>
            <strong>The problem:</strong> I needed to actually understand CRUD, not just recognize the word.
            I wanted to build it myself, from nothing, and know I could explain every line.
          </p>
          <p style={{ lineHeight: 1.6, marginBottom: "0.75rem" }}>
            <strong>What I did:</strong> Built a task API with FastAPI. Four endpoints, one for each
            operation. Moved it from an in-memory list to a real Postgres database running in Docker,
            then added Supabase authentication so routes are actually protected — not wide open to
            anyone who knows the URL. Along the way I hit real bugs: stale Docker volumes, a Windows
            Postgres service silently stealing the port, a `.env` file Docker couldn't find. Each one
            taught me something I now check first the next time.
          </p>
          <p style={{ lineHeight: 1.6 }}>
            <strong>What came of it:</strong> A working API that does full CRUD, checks its input,
            persists data through restarts, and only lets authenticated users touch protected routes.
            More than that — I understand how a backend actually works now, not just how it's described
            in a lecture.
          </p>
          <a
            href="https://github.com/WaleedSheikhh/FlyrankInternship"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#005FCC", fontWeight: 600, display: "inline-block", marginTop: "0.75rem" }}
          >
            View the code →
          </a>
        </div>
  
        <div style={cardStyle}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            Putting an LLM Behind an API
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: "0.75rem" }}>
            <strong>The problem:</strong> "Integrate an LLM" usually means something small and useful,
            not a chatbot — one step where a person currently reads something and makes a judgment call.
          </p>
          <p style={{ lineHeight: 1.6, marginBottom: "0.75rem" }}>
            <strong>What I did:</strong> Added an endpoint that classifies scraped book records using
            Groq, with a versioned prompt, a strict schema, a repair retry when the model's answer
            doesn't validate, a real 30-second timeout, retries that know which errors to retry and
            which never to, cost logging on every call, and a kill switch.
          </p>
          <p style={{ lineHeight: 1.6 }}>
            <strong>What came of it:</strong> An 8/8 score on a hand-built eval set, including cases
            designed to be genuinely ambiguous — proof the model falls back honestly instead of
            guessing when it isn't sure.
          </p>
          <a
            href="https://github.com/WaleedSheikhh/FlyrankInternship"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#005FCC", fontWeight: 600, display: "inline-block", marginTop: "0.75rem" }}
          >
            View the code →
          </a>
        </div>
      </div>
    );
  }