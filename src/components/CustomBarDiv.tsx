interface CustomBarDivProps {
  fill?: string;
  x?: number;
  y?: number;
  height?: any;
  width?: any;
  radius?: number;
}

export default function CustomBarDiv(props: CustomBarDivProps) {
  const { fill, x, y, height, width, radius = 3 } = props;
  const halfWidth = width / 2;
  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      className="flex flex-col items-center"
    >
      <div className="h-[2px]"></div>
      <div
        style={{
          marginLeft: `${halfWidth - 3}px`,
          width: '6px',
          height: `${height - 2}px`,
          backgroundColor: fill,
          borderRadius: '3px',
        }}
      />
    </foreignObject>
  );
}
