import SkeletonBox from "./SkeletonBox";

function ForecastSkeleton() {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        marginBottom: "32px",
        overflow: "hidden"
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          style={{
            minWidth: "150px",
            background: "#111b2e",
            borderRadius: "14px",
            padding: "16px"
          }}
        >
          <SkeletonBox height={14} width="80%" />
          <SkeletonBox height={28} width="60%" />
          <SkeletonBox height={32} width={32} radius={50} />
          <SkeletonBox height={14} width="70%" />
        </div>
      ))}
    </div>
  );
}

export default ForecastSkeleton;
