export default function Footer() {
  const textStyles = {
    textAlign:'center',
    color: 'var(--color-light-background)'
  }
  const footerStyles = {
    background: 'var(--color-dark-green)',
    paddingBlock:'.5rem',
  }
  return (
    <footer style={footerStyles}>
      <h5 style={textStyles}>Copyright Little Lemon Restaurant</h5>
    </footer>
  )
}
