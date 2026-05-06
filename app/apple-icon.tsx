import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#0d0d0d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 140,
          }}
        >
          {/* Crown teeth: left (short), center (tall), right (short) */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              gap: 10,
              width: 140,
              height: 82,
            }}
          >
            <div
              style={{
                width: 40,
                height: 56,
                background: "#C9A84C",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
            />
            <div
              style={{
                width: 40,
                height: 82,
                background: "#C9A84C",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
            />
            <div
              style={{
                width: 40,
                height: 56,
                background: "#C9A84C",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
            />
          </div>

          {/* Crown band */}
          <div
            style={{
              width: 140,
              height: 44,
              background: "#C9A84C",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 7,
                background: "#0d0d0d",
              }}
            />
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 7,
                background: "#0d0d0d",
              }}
            />
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 7,
                background: "#0d0d0d",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
