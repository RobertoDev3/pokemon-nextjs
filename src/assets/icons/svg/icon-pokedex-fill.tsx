type Props = React.ComponentProps<'svg'>;
export function IconPokedexFill({ className, ...props }: Props) {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M12.0003 22.7322C17.5233 22.7322 22.0003 18.2552 22.0003 12.7322C22.0003 7.20918 17.5233 2.73218 12.0003 2.73218C6.47731 2.73218 2.00031 7.20918 2.00031 12.7322C2.00031 18.2552 6.47731 22.7322 12.0003 22.7322Z'
        stroke='#808080'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 15.7324C12.7956 15.7324 13.5587 15.4164 14.1213 14.8537C14.6839 14.2911 15 13.5281 15 12.7324C15 11.9368 14.6839 11.1737 14.1213 10.6111C13.5587 10.0485 12.7956 9.73242 12 9.73242C11.2044 9.73242 10.4413 10.0485 9.87868 10.6111C9.31607 11.1737 9 11.9368 9 12.7324C9 13.5281 9.31607 14.2911 9.87868 14.8537C10.4413 15.4164 11.2044 15.7324 12 15.7324V15.7324Z'
        stroke='#808080'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.00031 12.7324H9.00031M15.0003 12.7324H22.0003'
        stroke='#808080'
        strokeWidth='1.5'
      />
    </svg>
  );
}
