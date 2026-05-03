"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const HeroCube = dynamic(() => import("./HeroCube"), { ssr: false });

const HEADLINE_WORDS = ["Xây dựng", "sản phẩm", "số", "đẳng cấp"];
const CLIENTS = [
  "Vingroup", "FPT", "VNPT", "Viettel", "MoMo", "ZaloPay", "Shopee",
  "Lazada", "Tiki", "Grab", "Be Group", "VPBank", "Techcombank", "MB Bank",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "80px",
          paddingBottom: "64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "60vw",
            height: "60vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(244,129,26,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "0",
            left: "-10%",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "64px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: text */}
          <div>
            {/* Badge */}
            <div
              className="animate-fade-up"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "99px",
                background: "rgba(244,129,26,0.1)",
                border: "1px solid rgba(244,129,26,0.25)",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--brand)",
                marginBottom: "28px",
                animationDelay: "0.1s",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--brand)",
                  display: "inline-block",
                }}
              />
              Đang nhận dự án mới
            </div>

            {/* Headline */}
            <h1
              className="word-cascade"
              style={{
                fontSize: "clamp(40px, 7vw, 80px)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "12px",
              }}
            >
              {HEADLINE_WORDS.map((word, i) => (
                <span
                  key={i}
                  style={{
                    animationDelay: `${0.2 + i * 0.12}s`,
                    marginRight: "0.3em",
                    color:
                      i === 2
                        ? "var(--brand)"
                        : i === 3
                        ? "var(--cyan)"
                        : "var(--fg)",
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Sub-headline */}
            <p
              className="animate-fade-up"
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                color: "var(--muted)",
                lineHeight: 1.65,
                maxWidth: "520px",
                marginBottom: "40px",
                animationDelay: "0.7s",
              }}
            >
              Studio thiết kế & phát triển phần mềm dành cho doanh nghiệp Việt.
              Từ website, app mobile đến hệ thống quản trị — chúng tôi biến ý
              tưởng thành sản phẩm thực sự.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up"
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                animationDelay: "0.9s",
              }}
            >
              <a
                href="#lien-he"
                style={{
                  padding: "14px 32px",
                  borderRadius: "10px",
                  background: "var(--brand)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "opacity 0.2s, transform 0.2s",
                  boxShadow: "0 4px 24px rgba(244,129,26,0.35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.9";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                Nhận báo giá miễn phí →
              </a>
              <a
                href="#du-an"
                style={{
                  padding: "14px 32px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1.5px solid var(--border)",
                  color: "var(--fg)",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 600,
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--brand)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                Xem dự án
              </a>
            </div>

            {/* Stats */}
            <div
              className="animate-fade-up"
              style={{
                display: "flex",
                gap: "40px",
                marginTop: "56px",
                animationDelay: "1.1s",
              }}
            >
              {[
                { number: "120+", label: "Dự án đã hoàn thành" },
                { number: "98%", label: "Khách hàng hài lòng" },
                { number: "5+", label: "Năm kinh nghiệm" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "var(--fg)",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--muted)", marginTop: "2px" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Cube */}
          <div
            className="cube-wrapper animate-fade-in"
            style={{
              display: "flex",
              justifyContent: "center",
              animationDelay: "0.5s",
            }}
          >
            {mounted && <HeroCube />}
          </div>
        </div>
      </section>

      {/* Marquee clients */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          overflow: "hidden",
          padding: "16px 0",
          background: "var(--card)",
        }}
        aria-label="Khách hàng tiêu biểu"
      >
        <div
          style={{
            display: "flex",
            gap: "64px",
            whiteSpace: "nowrap",
          }}
          className="animate-marquee"
        >
          {[...CLIENTS, ...CLIENTS].map((name, i) => (
            <span
              key={i}
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                flexShrink: 0,
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .cube-wrapper { display: none !important; }
        }
      `}</style>
    </>
  );
}
