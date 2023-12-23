export default function Header() {
  const textStyles = {
    textAlign: "center",
    padding: "1rem",
    color: "var(--color-light-background)",
    backgroundColor: "var(--color-medium-green)",
    borderRadius: "1rem",
  };
  const headerStyles = {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
  };

  return (
    <header style={headerStyles}>
      <h2 style={textStyles}>Little Lemon Restaurant</h2>
    </header>
  );
}
