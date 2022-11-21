import styles from './Button.module.scss'

type ButtonProps = {
  children: React.ReactNode,
  variant: "outline" | "gradient" | "gradient-text",
  color: "arbor" | "brick",
  size?: "sm" | "md" | "lg",
}

const Button = ({
  children,
  variant,
  color,
  size,
}: ButtonProps) => {
  const buttonClass = [
    styles.button,
    variant,
    color,
    size && `sz-${size}`,
  ].filter(i => !!i).join(' ')
  return <button
    className={buttonClass}>
    {children}
  </button>
}

export default Button