export default function CustomTick(props: any) {
  const { x, y, payload } = props;
  const isPosted = props?.data?.[props?.index]?.postsCount;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#F6F6F6"
        fontSize={12}
      >
        {payload.value}
      </text>
      {isPosted > 0 && (
        <circle cx={0} cy={30} r={3} fill="#FFFFFF" opacity="50%" />
      )}
    </g>
  );
}
