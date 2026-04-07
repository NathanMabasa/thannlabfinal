interface SectionLabelProps {
  text: string
  className?: string
}

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <div className={`text-label text-accent font-syne ${className}`}>
      {text}
    </div>
  )
}
