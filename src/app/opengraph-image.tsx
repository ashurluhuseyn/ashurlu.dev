import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #050505 0%, #160b2e 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "Inter",
        }}
      >
        <div style={{ fontSize: 28, color: "#a78bfa", marginBottom: 24 }}>
          Senior Frontend Engineer
        </div>

        <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: "-4px" }}>
          Huseyn Ashurlu
        </div>

        <div
          style={{
            fontSize: 30,
            color: "#a1a1aa",
            marginTop: 28,
            maxWidth: 850,
            lineHeight: 1.35,
          }}
        >
          Building scalable frontend systems, realtime experiences and fintech products.
        </div>

        <div style={{ fontSize: 24, color: "#71717a", marginTop: 64 }}>
          huseynashurlu.com
        </div>
      </div>
    ),
    size
  );
}