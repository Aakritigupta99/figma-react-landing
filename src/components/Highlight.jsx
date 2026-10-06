export default function Highlight({ children }) {
  return (
    <span className="relative isolate inline-block">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded bg-accent/80"
      />
      {children}
    </span>
  )
}