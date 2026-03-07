import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const data = {
  sections: [
    {
      id: "general",
      title: "General Tips",
      icon: "✦",
      color: "#F4A261",
      accent: "#E76F51",
      tips: [
        {
          num: "01",
          title: "Be Clear & Specific",
          icon: "🎯",
          rule: "State your task clearly. Provide context, details, and break complex tasks into steps.",
          bad: "Help me with a presentation.",
          good: "I need help creating a 10-slide presentation for our quarterly sales meeting. The presentation should cover Q2 sales performance, top-selling products, and Q3 targets. Provide an outline with key points per slide.",
          why: "Specific details about slide count, purpose, and topics give Claude clear guidelines to work with."
        },
        {
          num: "02",
          title: "Use Examples",
          icon: "📋",
          rule: "Show Claude what output you want. Give examples of format, tone, or style.",
          bad: "Write a professional email.",
          good: "Write a delay notice email following this tone: 'Dear [Client], we've hit an unexpected delay of ~2 weeks. We're resolving this and will keep you updated.' But for our situation: 1 month delay due to supply chain issues.",
          why: "A concrete example anchors Claude to your desired style instead of guessing."
        },
        {
          num: "03",
          title: "Encourage Thinking",
          icon: "🧠",
          rule: "Ask Claude to 'think step-by-step' or 'explain your reasoning' for complex tasks.",
          bad: "How can I improve team productivity?",
          good: "Think step-by-step about improving team productivity. Cover: (1) current blockers, (2) potential solutions, (3) implementation challenges, (4) how to measure improvement. Explain your reasoning at each step, then summarize.",
          why: "Structured reasoning leads to more accurate, thorough answers."
        },
        {
          num: "04",
          title: "Iterative Refinement",
          icon: "🔄",
          rule: "If the first response isn't right, ask for specific adjustments — not just 'make it better.'",
          bad: "Make it better.",
          good: "Refine it: (1) make the tone more casual, (2) add a customer success example, (3) shorten paragraph 2 to focus on benefits over features.",
          why: "Targeted feedback tells Claude exactly what to change, not just that something is wrong."
        },
        {
          num: "05",
          title: "Leverage Claude's Knowledge",
          icon: "📚",
          rule: "Claude has broad expertise. Ask domain-specific questions with relevant context.",
          bad: "What is marketing? How do I do it?",
          good: "I'm developing a strategy for an eco-friendly cleaning product. Give me: (1) green marketing trends, (2) messaging for eco-conscious consumers, (3) effective channels, (4) successful campaign examples, (5) greenwashing pitfalls to avoid.",
          why: "Context shapes the answer — Claude tailors its depth and framing to your actual use case."
        },
        {
          num: "06",
          title: "Use Role-Playing",
          icon: "🎭",
          rule: "Assign Claude a role or perspective to unlock richer, more contextual responses.",
          bad: "Help me prepare for a negotiation.",
          good: "You are a fabric supplier. I want a 10% price cut. Give me: (1) 3 objections you'd raise, (2) my counterargument to each, (3) 2 alternative proposals. Then switch roles and advise me as the buyer.",
          why: "Roles push Claude into nuanced perspectives, improving realism and strategic depth."
        }
      ]
    },
    {
      id: "task",
      title: "Task-Specific Tips",
      icon: "◈",
      color: "#2A9D8F",
      accent: "#264653",
      categories: [
        {
          name: "Content Creation",
          icon: "✍️",
          tips: [
            { title: "Specify Your Audience", desc: "Tell Claude who the content is for — their level, preferences, and expectations shape the output." },
            { title: "Define Tone & Style", desc: "Describe desired tone (e.g. 'friendly, innovative, health-conscious'). Mention brand voice or style guide points." },
            { title: "Define Output Structure", desc: "Provide a basic outline or list of sections. Ask for specific elements like data visualizations per section." }
          ]
        },
        {
          name: "Document Q&A",
          icon: "📄",
          tips: [
            { title: "Be Specific", desc: "Ask about specific aspects or sections. Frame questions clearly. Specify summary type (length, format)." },
            { title: "Use Document Names", desc: "Refer to attached files by name so Claude can reference them precisely." },
            { title: "Ask for Citations", desc: "Request that Claude cites page numbers or sections when answering from a document." }
          ]
        },
        {
          name: "Data Analysis",
          icon: "📊",
          tips: [
            { title: "Specify the Format", desc: "Ask for structured output: executive summary → key metrics → trends → recommendations → visualizations." },
            { title: "Name the File", desc: "Reference attached spreadsheets or datasets by name." },
            { title: "Request Visualizations", desc: "Ask Claude to suggest chart types that would effectively communicate each finding." }
          ]
        },
        {
          name: "Brainstorming",
          icon: "💡",
          tips: [
            { title: "Set Parameters", desc: "Specify how many ideas, what type, and ask for categorization (e.g. ice-breakers vs. problem-solving)." },
            { title: "Request Formats", desc: "Ask for bullet points, numbered lists, or comparison tables for easier reading and decision-making." }
          ]
        }
      ]
    },
    {
      id: "troubleshoot",
      title: "Troubleshooting",
      icon: "⬡",
      color: "#9B5DE5",
      accent: "#6A0572",
      tips: [
        { icon: "❓", title: "Allow Uncertainty", desc: "Tell Claude: 'If you're unsure, say so.' This reduces hallucinations and builds trust in responses." },
        { icon: "🔪", title: "Break Down Complex Tasks", desc: "If Claude misses steps or performs poorly, break the task into smaller chunks and work through them one message at a time." },
        { icon: "📎", title: "Include All Context", desc: "Claude has no memory between conversations. Include ALL necessary context in every new conversation." }
      ]
    }
  ]
};

function useIsMobile(breakpoint = 680) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
}

const BadGoodCard = ({ bad, good, why }) => {
  const [show, setShow] = useState("bad");
  return (
    <div style={{ marginTop: 16, borderRadius: 12, overflow: "hidden", border: "1px solid #2a2a2a" }}>
      <div style={{ display: "flex" }}>
        {["bad", "good"].map(t => (
          <button key={t} onClick={() => setShow(t)} style={{
            flex: 1, padding: "10px 0", border: "none", cursor: "pointer", fontFamily: "'DM Mono', monospace",
            fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase",
            background: show === t ? (t === "bad" ? "#3d1515" : "#153d1e") : "#111",
            color: show === t ? (t === "bad" ? "#ff6b6b" : "#69db7c") : "#555",
            transition: "all 0.2s"
          }}>
            {t === "bad" ? "✗ Bad" : "✓ Good"}
          </button>
        ))}
      </div>
      <div style={{ padding: 16, background: show === "bad" ? "#1a0f0f" : "#0f1a12", minHeight: 80 }}>
        <p style={{ margin: 0, fontFamily: "'DM Mono', monospace", fontSize: 13, color: show === "bad" ? "#ff9999" : "#a0f0a0", lineHeight: 1.7 }}>
          "{show === "bad" ? bad : good}"
        </p>
      </div>
      {show === "good" && (
        <div style={{ padding: "10px 16px", background: "#0d1a10", borderTop: "1px solid #1e3a24" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#4a9a5a", letterSpacing: 1 }}>WHY: </span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#7a8a7c", lineHeight: 1.5 }}>{why}</span>
        </div>
      )}
    </div>
  );
};

export default function PromptingGuidePage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [activeTip, setActiveTip] = useState(0);
  const [activeCat, setActiveCat] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  const section = data.sections[activeSection];

  return (
    <div style={{
      minHeight: "100vh", background: "#0a0a0a", color: "#e0e0e0",
      fontFamily: "'DM Sans', sans-serif", padding: 0
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500;600&family=Playfair+Display:wght@700;900&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #111; } ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
        .tip-btn:hover { background: #1a1a1a !important; }
        .cat-pill:hover { opacity: 0.85; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .fade { animation: fadeIn 0.3s ease; }
        .pg-back-nav { position: fixed; top: 64px; left: 0; right: 0; z-index: 50; padding: 10px 20px; background: #0a0a0a; border-bottom: 1px solid #1a1a1a; display: flex; align-items: center; }
        .pg-back-nav button { background: none; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #555; transition: color 0.2s; padding: 0; }
        .pg-back-nav button:hover { color: #e0e0e0; }
        .pg-sidebar-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 90;
          opacity: 0; pointer-events: none; transition: opacity 0.2s;
        }
        .pg-sidebar-overlay.open { opacity: 1; pointer-events: auto; }
        .pg-sidebar-drawer {
          position: fixed; top: 0; left: 0; bottom: 0; width: 270px; z-index: 100;
          background: #0a0a0a; border-right: 1px solid #1a1a1a;
          transform: translateX(-100%); transition: transform 0.25s ease;
          overflow-y: auto; padding-top: 16px;
        }
        .pg-sidebar-drawer.open { transform: translateX(0); }
        @media (min-width: 681px) {
          .pg-back-nav { padding: 10px 40px; }
        }
      `}</style>

      {/* Back button bar */}
      <div className="pg-back-nav">
        <button onClick={() => navigate('/projects')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          back to projects
        </button>
      </div>

      {/* Spacer for fixed navbar + back bar */}
      <div style={{ height: 108 }} />

      {/* Header */}
      <div style={{ padding: isMobile ? "28px 20px 20px" : "48px 40px 32px", borderBottom: "1px solid #1a1a1a", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #F4A26122 0%, transparent 70%)" }} />
        {!isMobile && (
          <div style={{ position: "absolute", top: 20, left: 200, fontSize: 120, opacity: 0.03, fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#fff", pointerEvents: "none" }}>PROMPT</div>
        )}
        <p style={{ margin: "0 0 6px", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: 3, color: "#555", textTransform: "uppercase" }}>Claude × Anthropic</p>
        <h1 style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: isMobile ? 30 : 42, color: "#f0f0f0", lineHeight: 1.1 }}>
          Prompting<br /><span style={{ color: "#F4A261" }}>Guide</span>
        </h1>
        <p style={{ marginTop: 10, color: "#666", fontSize: isMobile ? 13 : 14, maxWidth: 480, lineHeight: 1.5 }}>A visual, step-by-step breakdown of every technique — from general best practices to task-specific strategies.</p>
      </div>

      {/* Section Tabs */}
      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #1a1a1a", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        {data.sections.map((s, i) => (
          <button key={s.id} onClick={() => { setActiveSection(i); setActiveTip(0); setActiveCat(0); setSidebarOpen(false); }} style={{
            padding: isMobile ? "12px 16px" : "16px 28px", border: "none", cursor: "pointer",
            background: activeSection === i ? "#141414" : "transparent",
            borderBottom: activeSection === i ? `2px solid ${s.color}` : "2px solid transparent",
            color: activeSection === i ? s.color : "#555", fontFamily: "'DM Mono', monospace",
            fontSize: isMobile ? 10 : 12, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase",
            whiteSpace: "nowrap", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6,
            flexShrink: 0
          }}>
            <span>{s.icon}</span> {isMobile ? s.title.split(" ")[0] : s.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ display: "flex", minHeight: "calc(100vh - 260px)", flexDirection: isMobile ? "column" : "row" }}>

        {/* Section 0: General Tips */}
        {activeSection === 0 && (
          <>
            {isMobile ? (
              <>
                {/* Mobile: tap bar to open drawer */}
                <button
                  onClick={() => setSidebarOpen(true)}
                  style={{
                    display: "flex", alignItems: "center", gap: 10, width: "100%",
                    padding: "14px 20px", background: "#111", border: "none", borderBottom: "1px solid #1a1a1a",
                    cursor: "pointer", textAlign: "left"
                  }}
                >
                  <span style={{ fontSize: 18 }}>{section.tips[activeTip].icon}</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: section.color, letterSpacing: 1 }}>
                    {section.tips[activeTip].num}
                  </span>
                  <span style={{ fontSize: 13, color: "#e0e0e0", fontWeight: 600, flex: 1 }}>
                    {section.tips[activeTip].title}
                  </span>
                  <span style={{ fontSize: 10, color: "#555", fontFamily: "'DM Mono', monospace" }}>
                    {activeTip + 1}/{section.tips.length} ▾
                  </span>
                </button>

                {/* Overlay */}
                <div
                  className={`pg-sidebar-overlay ${sidebarOpen ? "open" : ""}`}
                  onClick={() => setSidebarOpen(false)}
                />

                {/* Drawer */}
                <div className={`pg-sidebar-drawer ${sidebarOpen ? "open" : ""}`}>
                  <div style={{ padding: "12px 20px 8px", fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#555", letterSpacing: 2, textTransform: "uppercase" }}>
                    Select a Tip
                  </div>
                  {section.tips.map((tip, i) => (
                    <button key={i} className="tip-btn" onClick={() => { setActiveTip(i); setSidebarOpen(false); }} style={{
                      width: "100%", padding: "16px 20px", border: "none", cursor: "pointer", textAlign: "left",
                      background: activeTip === i ? "#141414" : "transparent",
                      borderLeft: activeTip === i ? `3px solid ${section.color}` : "3px solid transparent",
                      transition: "all 0.15s"
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 18 }}>{tip.icon}</span>
                        <div>
                          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: activeTip === i ? section.color : "#444", letterSpacing: 1 }}>{tip.num}</span>
                          <div style={{ fontSize: 13, color: activeTip === i ? "#e0e0e0" : "#666", fontWeight: activeTip === i ? 600 : 400, marginTop: 2 }}>{tip.title}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              /* Desktop: Left Sidebar */
              <div style={{ width: 220, borderRight: "1px solid #1a1a1a", padding: "24px 0", flexShrink: 0 }}>
                {section.tips.map((tip, i) => (
                  <button key={i} className="tip-btn" onClick={() => setActiveTip(i)} style={{
                    width: "100%", padding: "14px 20px", border: "none", cursor: "pointer", textAlign: "left",
                    background: activeTip === i ? "#141414" : "transparent",
                    borderLeft: activeTip === i ? `3px solid ${section.color}` : "3px solid transparent",
                    transition: "all 0.15s"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: activeTip === i ? section.color : "#444", letterSpacing: 1 }}>{tip.num}</span>
                      <span style={{ fontSize: 11, color: activeTip === i ? "#e0e0e0" : "#666", fontWeight: activeTip === i ? 600 : 400 }}>{tip.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Main Content */}
            <div className="fade" key={activeTip} style={{ flex: 1, padding: isMobile ? "24px 18px" : "36px 40px", overflowY: "auto" }}>
              {(() => {
                const tip = section.tips[activeTip];
                return (
                  <>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: isMobile ? 12 : 16, marginBottom: 20 }}>
                      <div style={{ width: isMobile ? 44 : 56, height: isMobile ? 44 : 56, borderRadius: 14, background: "#141414", border: `1px solid ${section.color}33`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 20 : 24, flexShrink: 0 }}>
                        {tip.icon}
                      </div>
                      <div>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: section.color, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>
                          Tip {tip.num}
                        </div>
                        <h2 style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 20 : 26, color: "#f0f0f0" }}>{tip.title}</h2>
                      </div>
                    </div>

                    <div style={{ padding: isMobile ? "14px 16px" : "16px 20px", background: "#111", borderRadius: 10, borderLeft: `3px solid ${section.color}`, marginBottom: 20 }}>
                      <p style={{ margin: 0, fontSize: isMobile ? 13 : 14, color: "#c0c0c0", lineHeight: 1.7 }}>{tip.rule}</p>
                    </div>

                    <BadGoodCard bad={tip.bad} good={tip.good} why={tip.why} />

                    {/* Navigation */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28, gap: 12 }}>
                      {activeTip > 0 ? (
                        <button onClick={() => setActiveTip(activeTip - 1)} style={{ padding: "12px 20px", background: "#141414", border: "1px solid #2a2a2a", borderRadius: 8, color: "#888", cursor: "pointer", fontFamily: "'DM Mono', monospace", fontSize: 11 }}>
                          ← Prev
                        </button>
                      ) : <div />}
                      {activeTip < section.tips.length - 1 && (
                        <button onClick={() => setActiveTip(activeTip + 1)} style={{ padding: "12px 20px", background: section.color, border: "none", borderRadius: 8, color: "#000", cursor: "pointer", fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 600 }}>
                          Next →
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          </>
        )}

        {/* Section 1: Task-Specific */}
        {activeSection === 1 && (
          <div style={{ flex: 1, padding: isMobile ? "24px 18px" : "36px 40px", overflowY: "auto" }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
              {section.categories.map((cat, i) => (
                <button key={i} className="cat-pill" onClick={() => setActiveCat(i)} style={{
                  padding: isMobile ? "8px 14px" : "10px 20px", borderRadius: 100,
                  border: `1px solid ${activeCat === i ? section.color : "#2a2a2a"}`,
                  background: activeCat === i ? `${section.color}22` : "#111",
                  color: activeCat === i ? section.color : "#666", cursor: "pointer",
                  fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 10 : 11, letterSpacing: 1, transition: "all 0.2s",
                  display: "flex", alignItems: "center", gap: 6
                }}>
                  <span>{cat.icon}</span> {cat.name}
                </button>
              ))}
            </div>

            <div className="fade" key={activeCat}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 22 : 28, color: "#f0f0f0", marginBottom: 8 }}>
                {section.categories[activeCat].icon} {section.categories[activeCat].name}
              </h2>
              <p style={{ color: "#555", fontSize: 13, marginBottom: 24 }}>Follow these techniques for best results</p>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
                {section.categories[activeCat].tips.map((tip, i) => (
                  <div key={i} style={{ padding: isMobile ? 18 : 24, background: "#111", borderRadius: 14, border: "1px solid #1e1e1e", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 14, right: 14, fontFamily: "'DM Mono', monospace", fontSize: 28, color: "#1a1a1a", fontWeight: 900 }}>{i + 1}</div>
                    <div style={{ width: 36, height: 3, background: section.color, borderRadius: 2, marginBottom: 12 }} />
                    <h3 style={{ margin: "0 0 8px", fontSize: 14, color: "#e0e0e0", fontWeight: 600 }}>{tip.title}</h3>
                    <p style={{ margin: 0, fontSize: 13, color: "#777", lineHeight: 1.65 }}>{tip.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 28, padding: isMobile ? 18 : 24, background: "#0d1a14", borderRadius: 14, border: `1px solid ${section.color}33` }}>
                <p style={{ margin: "0 0 6px", fontFamily: "'DM Mono', monospace", fontSize: 10, color: section.color, letterSpacing: 2, textTransform: "uppercase" }}>Quick Reference</p>
                <p style={{ margin: 0, fontSize: 13, color: "#7a9a7c", lineHeight: 1.7 }}>
                  {activeCat === 0 && "Audience → Tone → Structure. Know who you're writing for, nail the voice, then define the output shape before asking Claude."}
                  {activeCat === 1 && "Specificity + filename + citations = maximum accuracy. Don't just ask to 'summarize' — tell Claude exactly what you want and how you want it formatted."}
                  {activeCat === 2 && "Structure your request: exec summary → metrics → trends → recommendations → visualizations. Name the file, define the format upfront."}
                  {activeCat === 3 && "Set a number of ideas, define the type, and request structured output (tables, lists). This turns open-ended brainstorms into actionable deliverables."}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section 2: Troubleshooting */}
        {activeSection === 2 && (
          <div style={{ flex: 1, padding: isMobile ? "24px 18px" : "48px 40px", overflowY: "auto" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 24 : 32, color: "#f0f0f0", marginBottom: 8 }}>Troubleshooting & Best Practices</h2>
            <p style={{ color: "#555", fontSize: 13, marginBottom: 32 }}>Reduce hallucinations and maximize Claude's performance.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {section.tips.map((tip, i) => (
                <div key={i} className="fade" style={{
                  display: "flex", gap: isMobile ? 14 : 20, padding: isMobile ? 18 : 28, background: "#111", borderRadius: 16,
                  border: "1px solid #1e1e1e", alignItems: "flex-start",
                  animationDelay: `${i * 0.1}s`, flexDirection: isMobile ? "column" : "row"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, width: isMobile ? "100%" : "auto" }}>
                    <div style={{
                      width: isMobile ? 42 : 52, height: isMobile ? 42 : 52, borderRadius: 14, background: `${section.color}22`,
                      border: `1px solid ${section.color}44`, display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: isMobile ? 18 : 22, flexShrink: 0
                    }}>
                      {tip.icon}
                    </div>
                    {isMobile && (
                      <h3 style={{ margin: 0, fontSize: 15, color: section.color, fontWeight: 600, flex: 1 }}>{tip.title}</h3>
                    )}
                    {isMobile && (
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 28, color: "#1a1a1a", fontWeight: 900, flexShrink: 0 }}>0{i + 1}</div>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    {!isMobile && <h3 style={{ margin: "0 0 8px", fontSize: 17, color: section.color, fontWeight: 600 }}>{tip.title}</h3>}
                    <p style={{ margin: 0, fontSize: 14, color: "#888", lineHeight: 1.7 }}>{tip.desc}</p>
                  </div>
                  {!isMobile && (
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 40, color: "#1a1a1a", fontWeight: 900, flexShrink: 0 }}>0{i + 1}</div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28, padding: isMobile ? 18 : 28, background: "#0f0f1a", borderRadius: 16, border: `1px solid ${section.color}33` }}>
              <p style={{ margin: "0 0 14px", fontFamily: "'DM Mono', monospace", fontSize: 11, color: section.color, letterSpacing: 2, textTransform: "uppercase" }}>⬡ Golden Rules</p>
              {[
                "Say 'I don't know is okay' → prevents hallucination",
                "One big task = multiple small messages → better results",
                "New chat? Include all context every time → Claude has no memory",
                "Always ask for step-by-step reasoning on complex topics",
                "If unhappy with output → give specific, targeted feedback"
              ].map((rule, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                  <span style={{ color: section.color, fontFamily: "'DM Mono', monospace", fontSize: 12, marginTop: 1, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 13, color: "#999", lineHeight: 1.6 }}>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Progress */}
      <div style={{ borderTop: "1px solid #1a1a1a", padding: isMobile ? "14px 18px" : "16px 40px", display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#444", letterSpacing: 2 }}>PROGRESS</span>
        <div style={{ display: "flex", gap: 6 }}>
          {data.sections.map((s, i) => (
            <div key={i} onClick={() => { setActiveSection(i); setActiveTip(0); }} style={{
              width: i === activeSection ? 32 : 8, height: 4, borderRadius: 2,
              background: i === activeSection ? s.color : "#2a2a2a",
              cursor: "pointer", transition: "all 0.3s"
            }} />
          ))}
        </div>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#444", marginLeft: "auto" }}>
          {activeSection === 0 ? `Tip ${activeTip + 1}/${section.tips.length}` :
           activeSection === 1 ? `Category ${activeCat + 1}/${section.categories.length}` : "3 rules"}
        </span>
      </div>
    </div>
  );
}
