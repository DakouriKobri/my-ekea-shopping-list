import { useState, useEffect } from "react";
import PendingItemList from "../components/PendingItemList";
import AcquiredItemList from "../components/AcquiredItemList";
// import FormPage from "../pages/FormPage";
import AddItemForm from "../components/AddItemForm";
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
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("ekea-shopping")) || []
  );
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [pictureURL, setPictureURL] = useState();

  useEffect(() => {
    if (localStorage.getItem("ekea-shopping")) {
      setItems(JSON.parse(localStorage.getItem("ekea-shopping")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ekea-shopping", JSON.stringify(items));
  }, [items]);

  function submitHandler(event) {
    event.preventDefault();
    setItems((prev) =>
      prev.concat({ name, price, pictureURL, id: Date.now() })
    );
    setName("");
    setPrice("");
    setPictureURL("");
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

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
      <AddItemForm
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        pictureURL={pictureURL}
        setPictureURL={setPictureURL}
        submitHandler={submitHandler}
      />
      <AcquiredItemList
        items={DUMMY_DATA}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}
