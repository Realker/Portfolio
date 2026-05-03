interface BadgeProps {
  label: string
  active?: boolean
  onClick?: () => void
}

export default function Badge({ label, active, onClick }: BadgeProps) {
  const base =
    'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors'
  const style = onClick
    ? active
      ? `${base} bg-accent text-white cursor-pointer`
      : `${base} bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer`
    : `${base} bg-gray-100 text-gray-600`

  return (
    <span className={style} onClick={onClick} role={onClick ? 'button' : undefined}>
      {label}
    </span>
  )
}
