type Props = React.ComponentProps<'svg'>;
export function IconTrash({ className, ...props }: Props) {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.8364 22.7495H9.16327C7.88959 22.7495 6.83064 21.7689 6.73295 20.499L5.68732 6.90576H20.3123L19.2667 20.499C19.169 21.7689 18.11 22.7495 16.8364 22.7495V22.7495Z'
        stroke='white'
        strokeWidth='1.44384'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.667 6.90641H4.33371'
        stroke='white'
        strokeWidth='1.44384'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.95273 3.25024H16.0465C16.7196 3.25024 17.2652 3.7959 17.2652 4.46899V6.90649H8.73398V4.46899C8.73398 3.7959 9.27963 3.25024 9.95273 3.25024Z'
        stroke='white'
        strokeWidth='1.44384'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.1331 11.781V17.8748'
        stroke='white'
        strokeWidth='1.44384'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.8672 11.781V17.8748'
        stroke='white'
        strokeWidth='1.44384'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
