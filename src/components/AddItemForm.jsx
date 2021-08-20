import { useRef } from "react";

export default function AddItemForm({
  name,
  setName,
  price,
  setPrice,
  pictureURL,
  setPictureURL,
  submitHandler,
}) {
  const nameInputRef = useRef();
  const priceInputRef = useRef();
  // const pictureInputRef = useRef();

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            required
            id="name"
            placeholder="Items's name?"
            ref={nameInputRef}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          {/* <label htmlFor="price">Price</label> */}
          <input
            type="text"
            required
            id="price"
            placeholder="Price in kr?"
            ref={priceInputRef}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        {/* <div>
          <label htmlFor="picture">Item picture</label>
          <input
            type="url"
            required
            id="picture"
            ref={pictureInputRef}
            value={pictureURL}
            onChange={(event) => setPictureURL(event.target.value)}
          />
        </div> */}
        <div>
          <button>Add Item</button>
        </div>
      </form>
    </div>
  );
}
