export default function Item({ item, onDeleteItems, onChecked }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => {
            onChecked(item.id);
          }}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.number}
          {item.description}
        </span>
        <button onClick={(id) => onDeleteItems(item.id)}>❌</button>
      </li>
    </div>
  );
}
