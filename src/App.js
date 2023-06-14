/*import React from 'react';
function App(props) {
  const {notes}=props
  return (
    
    <div>
      <h1>Notes</h1>
    <ul>
    {notes.map(note=>
      <li key={note.id}>{note.content}</li>
       )}
    </ul>
    </div>
  );
}

export default App;*/
import React from 'react';
function Note({note}) {
  if(note.important){
    return (
      <li>{note.content} ⭐</li>
    )
    } 
    return (
      <li>{note.content}</li>
    )
    }

 
  function App({notes}) {
    const addNote=(event)=>{
      event.preventDefault();
      console.log('button clicked',event.target);
    }
    return (
    <div>
      <h1>Notes</h1>
    <ul>
    {notes.map(note=>
      <Note key={note.id} note= {note}/>
       )}
    </ul>
    <form onSubmit={addNote}>
      <input/>
      <button onClilck={addNote}>Save Note</button>
    </form>
    </div>
  );
}

export default App;