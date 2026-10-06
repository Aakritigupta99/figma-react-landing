export default function Button({ children, variant = 'brand', href = '#', className = '' }) {
  const styles = {
  brand: 'bg-brand text-white hover:bg-brand/90',
  accent: 'bg-accent text-ink hover:bg-accent/90',
  outline: 'border border-ink/20 bg-white text-ink hover:bg-ink/5',
}
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded px-5 py-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  )
}