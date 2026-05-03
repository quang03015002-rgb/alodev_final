"use client";
import { useEffect, useRef } from "react";

const STEPS = [
  {
    num: "01",
    title: "Tư vấn miễn phí",
    desc: "Lắng nghe mục tiêu và thách thức của bạn. Phân tích yêu cầu nghiệp vụ và tư vấn giải pháp phù hợp nhất.",
    icon: "💬",
    color: "#f4811a",
  },
  {
    num: "02",
    title: "Báo giá & Ký hợp đồng",
    desc: "Đề xuất chi tiết: phạm vi, timeline, ngân sách. Hợp đồng minh bạch, thanh toán theo milestone.",
    icon: "📋",
    color: "#06b6d4",
  },
  {
    num: "03",
    title: "Thiết kế & Phát triển",
    desc: "Wireframe → Prototype → Pixel-perfect design → Code. Cập nhật tiến độ hàng tuần, bạn luôn nắm được tình trạng.",
    icon: "⚡",
    color: "#7c3aed",
  },
  {
    num: "04",
    title: "Bàn giao & Hỗ trợ",
    desc: "Deploy, training, tài liệu đầy đủ. Hỗ trợ kỹ thuật 3 tháng sau bàn giao hoàn toàn miễn phí.",
    icon: "🚀",
    color: "#10b981",
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

function StepCard({ step, i }: { step: (typeof STEPS)[0]; i: number }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        padding: "32px 28px",
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: i === 0 ? "16px 4px 4px 16px" : i === 3 ? "4px 16px 16px 4px" : "4px",
        transitionDelay: `${i * 100}ms`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: step.color }} />
      <div style={{ fontSize: "28px", marginBottom: "12px" }}>{step.icon}</div>
      <div style={{ fontSize: "11px", fontWeight: 800, color: step.color, letterSpacing: "0.1em", marginBottom: "8px" }}>
        BƯỚC {step.num}
      </div>
      <h3 style={{ fontSize: "17px", fontWeight: 700, color: "var(--fg)", marginBottom: "10px" }}>
        {step.title}
      </h3>
      <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>
        {step.desc}
      </p>
      {i < 3 && (
        <div style={{
          position: "absolute", right: "-12px", top: "50%", transform: "translateY(-50%)",
          width: "24px", height: "24px", background: "var(--card)", border: "1px solid var(--border)",
          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "12px", zIndex: 1, color: "var(--muted)",
        }}>→</div>
      )}
    </div>
  );
}

export default function Process() {
  const titleRef = useReveal();

  return (
    <section id="quy-trinh" style={{ padding: "96px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      <div ref={titleRef} className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
        <div className="section-divider" />
        <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--brand)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
          Quy trình
        </p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
          Từ ý tưởng đến sản phẩm
        </h2>
        <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.65 }}>
          Quy trình 4 bước được tối ưu qua hàng trăm dự án, đảm bảo đúng hạn và đúng kỳ vọng.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2px", position: "relative" }}>
        {STEPS.map((step, i) => (
          <StepCard key={step.num} step={step} i={i} />
        ))}
      </div>
    </section>
  );
}
