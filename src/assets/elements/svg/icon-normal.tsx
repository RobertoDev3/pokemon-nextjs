type Props = React.ComponentProps<'svg'>;
export function IconNormal({ className, ...props }: Props) {
  return (
    <svg
      width='128'
      height='127'
      viewBox='0 0 128 127'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M127.281 63.3999C127.281 98.3492 98.9492 126.681 64 126.681C29.0508 126.681 0.71875 98.3492 0.71875 63.3999C0.71875 28.4507 29.0508 0.118652 64 0.118652C98.9492 0.118652 127.281 28.4507 127.281 63.3999ZM100.161 63.3999C100.161 83.3709 83.971 99.5605 64 99.5605C44.029 99.5605 27.8394 83.3709 27.8394 63.3999C27.8394 43.4289 44.029 27.2393 64 27.2393C83.971 27.2393 100.161 43.4289 100.161 63.3999Z'
        fill={props.color || 'var(--normal-color)'}
      />
    </svg>
  );
}
