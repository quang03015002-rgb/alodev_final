"use client";
import { useEffect, useRef, useState } from "react";

const FAQS = [
  {
    q: "Chi phí phát triển một website thường là bao nhiêu?",
    a: "Chi phí phụ thuộc vào độ phức tạp và tính năng. Landing page đơn giản từ 15–30 triệu, website thương mại điện tử từ 50–150 triệu, hệ thống enterprise từ 150 triệu trở lên. Liên hệ để nhận báo giá chi tiết miễn phí.",
  },
  {
    q: "Thời gian hoàn thiện một dự án website là bao lâu?",
    a: "Landing page: 1–2 tuần. Website công ty đầy đủ: 3–6 tuần. App mobile MVP: 6–12 tuần. Hệ thống quản lý: 2–6 tháng. Timeline cụ thể được xác định sau khi phân tích yêu cầu chi tiết.",
  },
  {
    q: "Tôi có được xem preview trong quá trình phát triển không?",
    a: "Có. Chúng tôi dùng staging environment để bạn xem tiến độ real-time. Họp weekly review cố định, bạn luôn biết dự án đang ở giai đoạn nào và có thể đóng góp ý kiến bất cứ lúc nào.",
  },
  {
    q: "Sau khi bàn giao, tôi có được hỗ trợ kỹ thuật không?",
    a: "Có. 3 tháng hỗ trợ kỹ thuật miễn phí sau bàn giao, bao gồm fix bug, hướng dẫn sử dụng và điều chỉnh nhỏ. Sau đó có gói maintenance hàng tháng với SLA rõ ràng.",
  },
  {
    q: "Tôi có sở hữu toàn bộ source code sau khi hoàn thành không?",
    a: "Hoàn toàn. Toàn bộ source code, tài liệu kỹ thuật và quyền sở hữu trí tuệ thuộc về bạn sau khi thanh toán đầy đủ. Không có lock-in hay phí ẩn.",
  },
  {
    q: "Có thể yêu cầu thêm tính năng sau khi dự án kết thúc không?",
    a: "Hoàn toàn được. Chúng tôi cung cấp dịch vụ phát triển tính năng mới, nâng cấp thiết kế, và scale hệ thống theo nhu cầu tăng trưởng của doanh nghiệp bạn.",
  },
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

function FAQItem({ item, delay }: { item: (typeof FAQS)[0]; delay: number }) {
  const [open, setOpen] = useState(false);
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        border: "1px solid var(--border)",
        borderRadius: "12px",
        overflow: "hidden",
        transitionDelay: `${delay}ms`,
        background: "var(--bg)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 24px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
        }}
        aria-expanded={open}
      >
        <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--fg)", lineHeight: 1.4 }}>
          {item.q}
        </span>
        <span
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: "1.5px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: "16px",
            color: open ? "var(--brand)" : "var(--muted)",
            borderColor: open ? "var(--brand)" : "var(--border)",
            transform: open ? "rotate(45deg)" : "none",
            transition: "transform 0.3s, color 0.2s, border-color 0.2s",
          }}
        >
          +
        </span>
      </button>

      <div className={`accordion-content ${open ? "open" : ""}`}>
        <p
          style={{
            padding: "0 24px 20px",
            fontSize: "14px",
            color: "var(--muted)",
            lineHeight: 1.7,
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const titleRef = useReveal();

  return (
    <section
      id="faq"
      style={{ padding: "96px 24px" }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <div ref={titleRef} className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-divider" />
          <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--brand)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
            FAQ
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Câu hỏi thường gặp
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.65 }}>
            Không tìm thấy câu trả lời? Liên hệ trực tiếp với chúng tôi.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {FAQS.map((item, i) => (
            <FAQItem key={i} item={item} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
