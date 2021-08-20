import Item from "./Item";

export default function PendingItemList({ items, handleCheck, handleDelete }) {
  return (
    <div>
      <h1 className="title">Shopping List</h1>
      <div>
        <ul>
          {items
            .filter((item) => item.acquired === false)
            .map((item) => (
              <Item
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
