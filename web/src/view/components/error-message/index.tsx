interface ErrorMessageProps {
  error?: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <span className="text-red-400 pt-2 inline-block">{error}</span>
  )
}