"use client";
import { useEffect, useRef } from "react";

const POINTS = [
  { icon: "⚡", title: "Giao đúng hạn", desc: "Cam kết timeline từ ngày ký hợp đồng. Trễ deadline, chúng tôi bồi thường chi phí." },
  { icon: "🔒", title: "Minh bạch chi phí", desc: "Báo giá chi tiết từng hạng mục. Không phát sinh chi phí ẩn sau khi ký kết." },
  { icon: "🏆", title: "Senior 100%", desc: "Mọi dự án đều do senior developer phụ trách, không outsource hay dùng junior." },
  { icon: "♾️", title: "Hỗ trợ dài hạn", desc: "Partnership dài hạn, không phải vendor một lần. Luôn ở đây khi bạn cần mở rộng." },
  { icon: "📊", title: "KPI rõ ràng", desc: "Mỗi dự án có KPI cụ thể: tốc độ tải, chuyển đổi, uptime. Kết quả đo được, không mơ hồ." },
  { icon: "🌟", title: "Thiết kế đẳng cấp", desc: "UI/UX được thiết kế theo tiêu chuẩn quốc tế, lấy người dùng làm trung tâm." },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function PointCard({ pt, delay }: { pt: (typeof POINTS)[0]; delay: number }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        display: "flex", gap: "16px", padding: "24px",
        background: "var(--bg)", border: "1px solid var(--border)",
        borderRadius: "12px", transitionDelay: `${delay}ms`,
      }}
    >
      <div style={{
        width: "44px", height: "44px", borderRadius: "10px",
        background: "rgba(244,129,26,0.1)", display: "flex",
        alignItems: "center", justifyContent: "center",
        fontSize: "20px", flexShrink: 0,
      }}>
        {pt.icon}
      </div>
      <div>
        <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", marginBottom: "6px" }}>
          {pt.title}
        </h3>
        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
          {pt.desc}
        </p>
      </div>
    </div>
  );
}

export default function WhyUs() {
  const titleRef = useReveal();

  return (
    <section style={{ padding: "96px 24px", background: "var(--card)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div ref={titleRef} className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-divider" />
          <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--brand)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
            Tại sao chọn chúng tôi
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Sự khác biệt tạo nên giá trị
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.65 }}>
            Không chỉ là vendor kỹ thuật — chúng tôi là đối tác chiến lược trên hành trình chuyển đổi số.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {POINTS.map((pt, i) => (
            <PointCard key={pt.title} pt={pt} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
