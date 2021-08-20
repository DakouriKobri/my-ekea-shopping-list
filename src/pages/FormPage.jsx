import AddItemForm from "../components/AddItemForm";

export default function FormPage(
  name,
  setName,
  price,
  setPrice,
  pictureURL,
  setPictureURL,
  submitHandler
) {
  return (
    <div>
      <section>
        <AddItemForm
          name={name}
          setName={setName}
          price={price}
          setPrice={setPrice}
          pictureURL={pictureURL}
          setPictureURL={setPictureURL}
          submitHandler={submitHandler}
        />
      </section>
    </div>
  );
}
