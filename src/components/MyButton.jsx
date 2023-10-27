export function MyButton({ text, onClick }) {
  return (
    <div style={{ background: "green" }}>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
