export const ogSize = {
  width: 1200,
  height: 630,
};

export function OgCard({
  kicker,
  title,
  detail,
}: {
  kicker: string;
  title: string;
  detail: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#17352b",
        color: "#f4f1ea",
        padding: "72px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#ff7d45",
        }}
      >
        {kicker}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 68,
          lineHeight: 1.05,
          letterSpacing: -2,
          maxWidth: "1000px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
          fontSize: 28,
        }}
      >
        <span>Dad & Doggo</span>
        <span style={{ color: "#d5dbd2" }}>{detail}</span>
      </div>
    </div>
  );
}
