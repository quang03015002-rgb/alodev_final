"use client";
import { useEffect, useRef, useState } from "react";

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

export default function ContactCTA() {
  const ref = useReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* CTA Banner */}
      <section
        style={{
          background: "linear-gradient(135deg, #f4811a, #d96c0a)",
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden style={{ position: "absolute", top: "-30%", right: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", bottom: "-40%", left: "5%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

        <div
          ref={ref}
          className="reveal"
          style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}
        >
          <h2 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", marginBottom: "16px", lineHeight: 1.1 }}>
            Sẵn sàng bắt đầu<br />dự án của bạn?
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.85)", lineHeight: 1.65, marginBottom: "36px" }}>
            Tư vấn miễn phí trong 30 phút. Không cần chuẩn bị gì, chỉ cần chia sẻ ý tưởng của bạn.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#lien-he"
              style={{
                padding: "14px 36px",
                borderRadius: "10px",
                background: "#fff",
                color: "#f4811a",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 700,
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
              }}
            >
              Nhận tư vấn miễn phí
            </a>
            <a
              href="tel:+84901234567"
              style={{
                padding: "14px 28px",
                borderRadius: "10px",
                border: "2px solid rgba(255,255,255,0.5)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 600,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#fff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.5)")}
            >
              📞 0901 234 567
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="lien-he"
        style={{
          padding: "96px 24px",
          background: "var(--card)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="section-divider" />
            <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--brand)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
              Liên hệ
            </p>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Gửi yêu cầu dự án
            </h2>
          </div>

          {sent ? (
            <div
              style={{
                textAlign: "center",
                padding: "48px 32px",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--fg)", marginBottom: "8px" }}>
                Nhận được rồi!
              </h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
                Chúng tôi sẽ phản hồi trong vòng 2–4 giờ làm việc. Cảm ơn bạn đã tin tưởng!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--fg)", marginBottom: "6px" }}>
                    Họ tên *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      border: "1.5px solid var(--border)",
                      borderRadius: "8px",
                      background: "var(--card)",
                      color: "var(--fg)",
                      fontSize: "14px",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--brand)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--fg)", marginBottom: "6px" }}>
                    Số điện thoại
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="0901 234 567"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      border: "1.5px solid var(--border)",
                      borderRadius: "8px",
                      background: "var(--card)",
                      color: "var(--fg)",
                      fontSize: "14px",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--brand)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--fg)", marginBottom: "6px" }}>
                  Email *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@company.vn"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid var(--border)",
                    borderRadius: "8px",
                    background: "var(--card)",
                    color: "var(--fg)",
                    fontSize: "14px",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--brand)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--fg)", marginBottom: "6px" }}>
                  Mô tả dự án *
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tóm tắt ý tưởng, tính năng cần thiết, timeline mong muốn..."
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid var(--border)",
                    borderRadius: "8px",
                    background: "var(--card)",
                    color: "var(--fg)",
                    fontSize: "14px",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.2s",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--brand)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: "14px",
                  borderRadius: "10px",
                  background: "var(--brand)",
                  border: "none",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "opacity 0.2s, transform 0.2s",
                  boxShadow: "0 4px 20px rgba(244,129,26,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.9";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                Gửi yêu cầu →
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
