function SkeletonBox({ height = 20, width = "100%", radius = 12 }) {
  return (
    <div
      style={{
        height,
        width,
        borderRadius: radius,
        background:
          "linear-gradient(90deg, #1b263b 25%, #23304d 37%, #1b263b 63%)",
        backgroundSize: "400% 100%",
        animation: "shimmer 1.4s ease infinite"
      }}
    />
  );
}

export default SkeletonBox;
