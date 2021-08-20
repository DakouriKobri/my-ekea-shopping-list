import { useState, useEffect } from "react";
import PendingItemList from "../components/PendingItemList";
import AcquiredItemList from "../components/AcquiredItemList";
// import FormPage from "../pages/FormPage"; // no unused imports.
import AddItemForm from "../components/AddItemForm";

// reading dummy data does not count on a finalized project.
// but if you use it, at least import it outside to make it more organized.
const DUMMY_DATA = [
  {
    id: 1,
    name: "Baggebo Skap",
    price: 349,
    acquired: false,
    pictureURL:
      "https://www.ikea.com/se/sv/images/products/baggebo-skap-med-vitrindoerrar-metall-vit__0981557_pe815393_s5.jpg?f=xl",
  },
  {
    id: 2,
    name: "Lommarp TV Bänk",
    price: 2795,
    acquired: false,
    pictureURL:
      "https://www.ikea.com/se/sv/images/products/lommarp-tv-baenk-moerk-blagroen__0739335_pe741696_s5.jpg?f=xl",
  },
  {
    id: 3,
    name: "Ivar Skap",
    price: 699,
    acquired: false,
    pictureURL:
      "https://www.ikea.com/se/sv/images/products/ivar-skap-furu__21439_pe106384_s5.jpg?f=xl",
  },
  {
    id: 4,
    name: "Malm Sängstomme",
    price: 1295,
    acquired: true,
    pictureURL:
      "https://www.ikea.com/se/sv/images/products/malm-saengstomme-hoeg-vit__0637620_pe704551_s5.jpg?f=xl",
  },
  {
    id: 5,
    name: "Markus Kontorsstol",
    price: 1695,
    acquired: true,
    pictureURL:
      "https://www.ikea.com/se/sv/images/products/markus-kontorsstol-vissle-moerkgra__0724714_pe734597_s5.jpg?f=xl",
  },
];

export default function ListPage() {
  // there is a loading using local storage here,
  // but also on the useEffect hook.
  // never do duplicate code. -1
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("ekea-shopping")) || []
  );
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [pictureURL, setPictureURL] = useState(); // never create variables until you need them.

  // the loading useEffect
  useEffect(() => {
    if (localStorage.getItem("ekea-shopping")) {
      // did not test this code because is never used in the app but...
      // never do this "chain of code".
      // instead create variables for each state of the process ot make it clear.
      // Example:
      const storageKey = "ekea-shopping";
      const storageData = localStorage.getItem(storageKey);
      const parsedData = JSON.parse(storageData); // also add code for validation here...

      setItems(parsedData);
      // As you can see this is more organized instead of passing a function inside a function inside a function.
      setItems(JSON.parse(localStorage.getItem("ekea-shopping")));
    }
  }, []);

  // the saving useEffect
  useEffect(() => {
    localStorage.setItem("ekea-shopping", JSON.stringify(items));
  }, [items]);

  // Note: The comments with the title "SPECIAL COMMENT 1.X" are messages that should be read in order, because they are a single comment spread across the component.
  // SPECIAL COMMENT 1.1
  // this code is connected to the button handler but...
  function submitHandler(event) {
    event.preventDefault();
    console.log("hello world", items);

    // SPECIAL COMMENT 1.2
    // ... and this state is connected to the list "state" (real time variable data) but...
    setItems((prev) =>
      prev.concat({ name, price, pictureURL, id: Date.now() })
    );
    setName("");
    setPrice("");
    setPictureURL("");
  }

  // Why there is so much code that is never used -1
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  // Same as before.
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, acquired: !item.acquired } : item
    );
    setItems(listItems);
  };

  return (
    <div>
      <PendingItemList
        items={DUMMY_DATA}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      {/* Never send more than 3 arguments (props) */}
      {/* If you need to, is a sign of either you are sending to much */}
      {/* or it means that information belongs inside the component instead of the parent */}
      <AddItemForm
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        pictureURL={pictureURL}
        setPictureURL={setPictureURL}
        submitHandler={submitHandler}
      />

      {/* // SPECIAL COMMENT 1.3 */}
      {/* ...but here you are displaying the DUMMY_DATA instead of the real one */}
      {/* Thus, we never see the data from the app. */}
      <AcquiredItemList
        items={DUMMY_DATA}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}
