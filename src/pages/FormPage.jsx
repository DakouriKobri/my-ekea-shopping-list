import AddItemForm from "../components/AddItemForm";

// You see this vertical list of arguments (props)
// is a clear sign that you need to refactor by sending less stuff
// or doing more stuff directly from here -1
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
        {/* Why do we have a component called FormPage that its only purpoe is to wrap */}
        {/* AddItemForm around a <section> and a <div> you could achieve the same result by */}
        {/* Just putting <section> and the <div> inside the AddItemForm -1 */}
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
