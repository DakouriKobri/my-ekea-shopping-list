import Item from "./Item";

export default function AcquiredItemList({ items, handleCheck, handleDelete }) {
  return (
    <div>
      <h3>View Acquired Items</h3>
      <ul>
        {items
          .filter((item) => item.acquired === true)
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
  );
}
