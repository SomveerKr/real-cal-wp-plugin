
// -------------------------- Note section ----------------------------------

 // Initialize notes array from local storage
 let notes = JSON.parse(localStorage.getItem('notes')) || [];
 let currentIndex = -1;
 console.log(notes)



 // Function to save a note
function saveNote() {
  const noteTitleInput = document.getElementById('noteTitle');
  const noteContentInput = document.getElementById('noteContent');

  const noteTitle = noteTitleInput.value;
  const noteContent = noteContentInput.value;

  if (noteTitle && noteContent) {
      const note = {
          title: noteTitle,
          content: noteContent
      };

      notes.push(note);
      localStorage.setItem('notes', JSON.stringify(notes));
      currentIndex = notes.length - 1;

      // Clear input fields
      noteTitleInput.value = '';
      noteContentInput.value = '';

      displayNote();
      updateNotesCount();
  }
}


 // Function to delete a note
 function deleteNote() {
     if (currentIndex >= 0) {
         notes.splice(currentIndex, 1);
         localStorage.setItem('notes', JSON.stringify(notes));
         if(notes.length>0){
          currentIndex = 0;
         } else {
          currentIndex = -1;
         }
         
         displayNote();
         updateNotesCount();
     } 
 }

 // Function to navigate through notes
 function navigate(direction) {
     if (notes.length > 0) {
         currentIndex += direction;
         if (currentIndex < 0) {
             currentIndex = 0;
         } else if (currentIndex >= notes.length) {
             currentIndex = notes.length - 1;
         }
         displayNote();
     }
 }

 // Function to display the current note
 function displayNote() {
    const noteDisplayBox = document.getElementById("display-note-box");


    if(notes.length > 0 &&  currentIndex >= 0   ){ 
      console.log(currentIndex)
        const currentNote = notes[currentIndex];
        
        noteDisplayBox.innerHTML=`
        <div class="note-title">
        <p id="noteTitleDisplay">${currentNote.title}</p>
        <div class="note-btns">
            
            <button onclick="deleteNote()"><i class="fi fi-rs-trash-xmark"></i></button>
        </div>
    </div>
    <p class="content" id="noteContentDisplay">${currentNote.content}</p>
    <div class="note-btns">
        <button onclick="navigate(-1)"><i class="fi fi-bs-angle-left"></i></button>
        <button onclick="navigate(1)"><i class="fi fi-bs-angle-right"></i></button>
    </div>
        `
      } else {
        noteDisplayBox.innerHTML= `
        <p>You don't have Any Note.</p>
        `
    }

 }

 // Function to update the notes count display
 function updateNotesCount() {
     const notesCount = document.getElementById('notesCount');
     notesCount.textContent = notes.length + ' Notes';
 }

 // Initial setup
 updateNotesCount();
 displayNote();











  // Function to update a note
//  function updateNote() {
//      if (currentIndex >= 0) {
//          const noteTitle = document.getElementById('noteTitle').value;
//          const noteContent = document.getElementById('noteContent').value;

//          if (noteTitle && noteContent) {
//              notes[currentIndex].title = noteTitle;
//              notes[currentIndex].content = noteContent;
//              localStorage.setItem('notes', JSON.stringify(notes));
//              displayNote();
//          }
//      }
//  }