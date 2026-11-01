const notesContainer = document.querySelector(".notes-container") as HTMLDivElement | null;
const createBtn = document.querySelector(".btn") as HTMLButtonElement | null;

function showNotes(): void {
  if (notesContainer) {
    notesContainer.innerHTML = localStorage.getItem("notes") ?? "";
  }
}

showNotes();

function updateStorage(): void {
  if (notesContainer) {
    localStorage.setItem("notes", notesContainer.innerHTML);
  }
}

createBtn?.addEventListener("click", (): void => {
  if (!notesContainer) return;

  const inputBox: HTMLParagraphElement = document.createElement("p");
  const img: HTMLImageElement = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./images/delete.png";

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
  
  updateStorage();
});

notesContainer?.addEventListener("click", (e: MouseEvent): void => {
  const target = e.target as HTMLElement | null;
  if (!target) return;

  console.log("f1 = ", target);

  if (target.tagName === "IMG") {
    target.parentElement?.remove();
    updateStorage();
  } else if (target.tagName === "P") {
    target.onkeyup = (): void => {
      updateStorage();
    };
  }
});


document.addEventListener("keydown", (event: KeyboardEvent): void => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});