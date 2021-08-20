export default function Item({ item, handleCheck, handleDelete }) {
  return (
    <div className="add-item-box">
      <li key={item.id}>
        <input
          type="checkbox"
          onChange={() => handleCheck(item.id)}
          checked={item.acquired}
        />
        <label>{item.name}</label>
        <label> {item.price}:-</label>
        {/* <img src={item.pictureURL} alt={item.name} /> */}
        {/* <button className="delete-btn" onClick={() => handleDelete(item.id)}>
          Delete
        </button> */}
      </li>
    </div>
  );
}
