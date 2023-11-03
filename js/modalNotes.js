

document.addEventListener("DOMContentLoaded", ()=> {
    const notesModal =document.getElementById("modal-notes-section");
    const openNotesModal = document.getElementById("open-notesSection-modal");
    const closeNotesModal = document.getElementById("close-notes-modal")
  
    openNotesModal.addEventListener("click", ()=>{
      notesModal.showModal()
    })
    closeNotesModal.addEventListener("click", ()=>{
      notesModal.close()
    })
  })
  
  // -------------------------- Note section ----------------------------------
  
   // Initialize notes array from local storage
//    let notes = JSON.parse(localStorage.getItem('notes')) || [];
//    let currentIndex = -1;
//    console.log(notes)
  
  
  
   // Function to save a note
  function saveNote() {
    const modalNoteTitleInput = document.getElementById('m-noteTitle');
    const modalNoteContentInput = document.getElementById('m-noteContent');
  
    const noteTitle = modalNoteTitleInput.value;
    const noteContent = modalNoteContentInput.value;
  
    if (noteTitle && noteContent) {
        const note = {
            title: noteTitle,
            content: noteContent
        };
  
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
        currentIndex = notes.length - 1;
  
        // Clear input fields
        modalNoteTitleInput.value = '';
        modalNoteContentInput.value = '';
  
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
      const noteDisplayBox = document.getElementById("m-display-noteBox");
  
  
      if(notes.length > 0 &&  currentIndex >= 0   ){ 
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
       const notesCount = document.getElementById('m-notesCount');
       notesCount.textContent = notes.length + ' Notes';
   }
  
   // Initial setup
   updateNotesCount();
   displayNote();
  
  
  
  
  
  
  
  
  
  
