export default function Stats({ items }) {
  const itemlength = items.length;
  const packedlength = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedlength / itemlength) * 100);

  return (
    <footer className="stats">
      {packedPercentage === 100
        ? "Great🔥🔥🔥 you are good to go"
        : `you have ${itemlength} items on your list,and you are alreay packed
            ${packedlength} (${packedPercentage}%)`}
    </footer>
  );
}
