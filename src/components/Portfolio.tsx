"use client";
import { useEffect, useRef, useState } from "react";

const CATEGORIES = ["Tất cả", "Website", "App", "Hệ thống", "Design"];

const PROJECTS = [
  {
    title: "FinTrack Dashboard",
    desc: "Hệ thống quản lý tài chính cho startup fintech, real-time analytics với 50k+ users.",
    cat: "Hệ thống",
    tech: ["Next.js", "PostgreSQL", "Chart.js"],
    color: "#7c3aed",
    year: "2024",
  },
  {
    title: "EcoShop",
    desc: "Nền tảng thương mại điện tử xanh, tối ưu Core Web Vitals đạt 98/100 trên Lighthouse.",
    cat: "Website",
    tech: ["React", "Tailwind", "Stripe"],
    color: "#10b981",
    year: "2024",
  },
  {
    title: "MediCare App",
    desc: "App đặt lịch khám bệnh, kết nối bệnh nhân – bác sĩ với video call tích hợp.",
    cat: "App",
    tech: ["React Native", "WebRTC"],
    color: "#06b6d4",
    year: "2023",
  },
  {
    title: "BuildFlow CRM",
    desc: "CRM cho ngành xây dựng, quản lý pipeline từ lead đến hợp đồng ký kết.",
    cat: "Hệ thống",
    tech: ["Vue.js", "Node.js", "MySQL"],
    color: "#f4811a",
    year: "2023",
  },
  {
    title: "LuxeTravel",
    desc: "Website du lịch cao cấp với booking engine, thanh toán đa kênh và chatbot AI.",
    cat: "Website",
    tech: ["Next.js", "Sanity", "OpenAI"],
    color: "#ef4444",
    year: "2024",
  },
  {
    title: "DesignOS",
    desc: "Design system và component library cho tập đoàn 5000+ nhân sự, 120 components.",
    cat: "Design",
    tech: ["Figma", "Storybook", "React"],
    color: "#eab308",
    year: "2024",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function ProjectCard({ project, delay }: { project: (typeof PROJECTS)[0]; delay: number }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal card-hover"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        overflow: "hidden",
        transitionDelay: `${delay}ms`,
        cursor: "pointer",
      }}
    >
      {/* Thumbnail placeholder */}
      <div
        style={{
          height: "180px",
          background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: project.color,
            opacity: 0.2,
            position: "absolute",
            top: "20px",
            right: "20px",
            transform: "rotate(15deg)",
          }}
        />
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: `${project.color}30`,
            position: "absolute",
            bottom: "-40px",
            left: "30px",
          }}
        />
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: project.color,
            background: `${project.color}18`,
            border: `1px solid ${project.color}40`,
            padding: "4px 12px",
            borderRadius: "99px",
            zIndex: 1,
          }}
        >
          {project.cat}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--fg)" }}>{project.title}</h3>
          <span style={{ fontSize: "12px", color: "var(--muted)" }}>{project.year}</span>
        </div>
        <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "16px" }}>
          {project.desc}
        </p>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "3px 8px",
                borderRadius: "6px",
                fontSize: "11px",
                fontWeight: 600,
                background: "var(--border)",
                color: "var(--muted)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Tất cả");
  const titleRef = useReveal();

  const filtered =
    active === "Tất cả" ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  return (
    <section
      id="du-an"
      style={{
        padding: "96px 24px",
        background: "var(--card)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div ref={titleRef} className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-divider" />
          <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--brand)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
            Portfolio
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Dự án tiêu biểu
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.65 }}>
            Mỗi dự án là một câu chuyện về sự hợp tác, sáng tạo và kết quả đo được.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: "99px",
                border: "1.5px solid",
                borderColor: active === cat ? "var(--brand)" : "var(--border)",
                background: active === cat ? "var(--brand)" : "transparent",
                color: active === cat ? "#fff" : "var(--muted)",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
