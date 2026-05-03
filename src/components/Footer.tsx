"use client";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "48px 24px 32px",
        background: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 800,
                fontSize: "18px",
                color: "var(--fg)",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "7px",
                  background: "var(--brand)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 900,
                }}
              >
                D
              </span>
              DevStudio
            </div>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "260px", marginBottom: "20px" }}>
              Studio thiết kế & phát triển phần mềm dành cho doanh nghiệp Việt. Sáu mặt, một sản phẩm.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {["Facebook", "LinkedIn", "GitHub"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--muted)",
                    textDecoration: "none",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--brand)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--brand)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Dịch vụ",
              links: ["Website", "App Mobile", "Hệ thống", "SEO", "UI/UX"],
            },
            {
              title: "Công ty",
              links: ["Về chúng tôi", "Dự án", "Blog", "Tuyển dụng"],
            },
            {
              title: "Liên hệ",
              links: ["hello@devstudio.vn", "0901 234 567", "TP. Hồ Chí Minh"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--fg)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "16px",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "var(--muted)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--fg)")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "var(--muted)" }}>
            © {year} DevStudio. Tất cả quyền được bảo lưu.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Điều khoản", "Bảo mật", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "12px",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--fg)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
