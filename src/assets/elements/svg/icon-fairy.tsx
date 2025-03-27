type Props = React.ComponentProps<"svg">;
export function IconFairy({ className, ...props }: Props) {
  return (
    <svg
      width="144"
      height="145"
      viewBox="0 0 144 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.8941 114.584L51.9909 107.887L71.94 144.362C71.9662 144.409 72.0339 144.409 72.0598 144.362L92.0089 107.887L115.106 114.584C115.158 114.599 115.206 114.55 115.19 114.499L108.492 91.8589L143.962 72.4597C144.009 72.4338 144.009 72.3661 143.962 72.3402L108.2 52.7809L115.19 29.1531C115.206 29.1014 115.158 29.0533 115.106 29.0682L91.4672 35.9225L72.0598 0.437834C72.0339 0.390514 71.9662 0.390513 71.9403 0.437833L52.5329 35.9225L28.8941 29.0682C28.8424 29.0533 28.7943 29.1014 28.8098 29.1531L35.8002 52.7809L0.0379318 72.3402C-0.00938787 72.3661 -0.00938919 72.4338 0.0379307 72.4597L35.5077 91.8589L28.8098 114.499C28.7943 114.55 28.8424 114.599 28.8941 114.584ZM46.8171 72.6487L63.1799 81.5978L72.129 97.9604C72.1549 98.0079 72.2229 98.0079 72.2488 97.9604L81.1979 81.5978L97.5605 72.6487C97.6077 72.6228 97.6077 72.5548 97.5605 72.5289L81.1979 63.5798L72.2488 47.2173C72.2229 47.1697 72.1549 47.1697 72.129 47.2173L63.1799 63.5798L46.8171 72.5289C46.7698 72.5548 46.7698 72.6228 46.8171 72.6487Z"
        fill={props.color || "var(--fairy-color)"}
      />
    </svg>
  );
}
