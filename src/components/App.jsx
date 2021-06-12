import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// notesarray.push({tit:"hello", cont:"jack"});
function App() {
  const [notes, setnotes] = React.useState([]);
  // console.log(notesarray);

  function deletenote(id) {
    setnotes((prevarray) => {
      return prevarray.filter((note, place) => {
        return place !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea notes={notes} setnotes={setnotes} />

      {notes.map((eachnote, itsplace) => {
        return (
          <Note id={itsplace} deletenote={deletenote} eachnote={eachnote} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
