export default function DesignerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Убираем backgroundColor и padding отсюда
    <div style={{ minHeight: '100vh' }}>
      {children}
    </div>
  )
}