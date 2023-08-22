type StarIconProps = {
  offset: number;
  index: string;
};

export function StarIcon({ offset, index }: StarIconProps) {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24">
      <defs>
        <linearGradient id={`grad${index}`}>
          <stop offset="0%" stopColor="orange" />
          <stop offset={`${offset}%`} stopColor="orange" />
          <stop offset={`${offset}%`} stopColor="gray" />
          <stop offset="100%" stopColor="gray" />
        </linearGradient>
      </defs>
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill={`url(#grad${index})`}
        stroke="transparent"
        strokeWidth="1.5"
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}
