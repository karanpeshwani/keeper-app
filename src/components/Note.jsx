import React from "react";

function Note(props) {
  const { eachnote, deletenote, id } = props;

  function del() {
    deletenote(id);
  }
  return (
    <div className="note">
      <h1>{eachnote.tit}</h1>
      <p>{eachnote.cont}</p>
      <button onClick={del}>DELETE</button>
    </div>
  );
}

export default Note;
