"use client";
import { useEffect, useRef } from "react";

const SERVICES = [
  {
    icon: "🌐",
    title: "Website Doanh nghiệp",
    desc: "Landing page, website giới thiệu, thương mại điện tử tốc độ cao với SEO chuẩn kỹ thuật.",
    tags: ["Next.js", "React", "Tailwind"],
    color: "#f4811a",
  },
  {
    icon: "📱",
    title: "App Mobile",
    desc: "Ứng dụng iOS & Android native hoặc cross-platform, UX mượt mà, hiệu suất cao.",
    tags: ["React Native", "Flutter"],
    color: "#06b6d4",
  },
  {
    icon: "🏢",
    title: "Hệ thống Quản trị",
    desc: "CRM, ERP, dashboard quản lý nội bộ phù hợp quy trình nghiệp vụ doanh nghiệp.",
    tags: ["Node.js", "PostgreSQL"],
    color: "#7c3aed",
  },
  {
    icon: "⚙️",
    title: "Tự động hoá",
    desc: "Tích hợp API, webhook, RPA — loại bỏ công việc thủ công, tăng năng suất vận hành.",
    tags: ["API", "Automation"],
    color: "#10b981",
  },
  {
    icon: "🔍",
    title: "SEO & Content",
    desc: "Tối ưu kỹ thuật SEO, chiến lược content, tăng traffic organic bền vững.",
    tags: ["On-page", "Technical SEO"],
    color: "#ef4444",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Thiết kế giao diện Figma chuyên nghiệp, design system nhất quán, prototype tương tác.",
    tags: ["Figma", "Design System"],
    color: "#eab308",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function ServiceCard({ service, delay }: { service: (typeof SERVICES)[0]; delay: number }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal card-hover"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "28px",
        transitionDelay: `${delay}ms`,
        cursor: "default",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: `${service.color}18`,
          border: `1px solid ${service.color}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          marginBottom: "16px",
        }}
      >
        {service.icon}
      </div>
      <h3
        style={{
          fontSize: "17px",
          fontWeight: 700,
          color: "var(--fg)",
          marginBottom: "8px",
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: "var(--muted)",
          lineHeight: 1.65,
          marginBottom: "16px",
        }}
      >
        {service.desc}
      </p>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {service.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "3px 10px",
              borderRadius: "99px",
              fontSize: "12px",
              fontWeight: 600,
              background: `${service.color}12`,
              color: service.color,
              border: `1px solid ${service.color}25`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const titleRef = useReveal();
  return (
    <section
      id="dich-vu"
      style={{
        padding: "96px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div ref={titleRef} className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
        <div className="section-divider" />
        <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--brand)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
          Dịch vụ
        </p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
          Tất cả những gì bạn cần
        </h2>
        <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.65 }}>
          Từ ý tưởng đến sản phẩm thực tế — một studio duy nhất đảm nhận toàn bộ hành trình số.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.title} service={service} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
