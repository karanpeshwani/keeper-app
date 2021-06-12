import React from "react";

var notesarray = [];
function CreateArea(props) {
  const { notes, setnotes } = props;
  const [title, settitle] = React.useState("");
  const [content, setcontent] = React.useState("");
  // const [notes, setnotes] = React.useState([]);

  // const { notes, setnotes } = props;
  // console.log(notes);

  function handlechange(event) {
    if (event.target.name === "title") {
      settitle(event.target.value);
    }
    if (event.target.name === "content") {
      setcontent(event.target.value);
    }
  }

  function addnote(event) {
    event.preventDefault();
    const obj = { tit: title, cont: content };
    setnotes((prev) => [...prev, obj]);
    settitle("");
    setcontent("");
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={handlechange}
        />
        <textarea
          name="content"
          value={content}
          placeholder="Take a note..."
          onChange={handlechange}
          rows="3"
        />
        <button type="submit" onClick={addnote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
export { notesarray };
