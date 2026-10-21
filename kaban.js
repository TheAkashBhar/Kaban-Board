
const addButtons = document.querySelectorAll(".btn");

// Match each Add Task button to its column.
const columns = {
    "to-do-add-task": document.querySelector(".to-do-work-container"),
    "in-progress-add-task": document.querySelector(".in-progress-work-container"),
    "done-add-task": document.querySelector(".done-work-container")
};

// Create a new task card.
function createTaskCard() {
    const card = document.createElement("div");
    const deleteDiv = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const input = document.createElement("input");

    // Add CSS classes.
    card.classList.add("card");
    deleteDiv.classList.add("delete");
    deleteBtn.classList.add("delete-btn");
    input.classList.add("card-text");

    // Configure the delete button.
    deleteBtn.textContent = "×";
    deleteBtn.type = "button";
    deleteBtn.setAttribute("aria-label", "Delete task");

    // Configure the task input.
    input.type = "text";
    input.placeholder = "Enter your task...";

    // Build the card.
    deleteDiv.appendChild(deleteBtn);
    card.append(deleteDiv, input);

    // Delete this card when its button is clicked.
    deleteBtn.addEventListener("click", () => {
        card.remove();
    });

    return card;
}

// Add delete functionality to existing cards.
document.querySelectorAll(".delete-btn").forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
        deleteBtn.closest(".card").remove();
    });
});

// Handle all Add Task buttons.
addButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let columnClass;

        if (btn.classList.contains("to-do-add-task")) {
            columnClass = "to-do-add-task";
        } else if (btn.classList.contains("in-progress-add-task")) {
            columnClass = "in-progress-add-task";
        } else if (btn.classList.contains("done-add-task")) {
            columnClass = "done-add-task";
        }
  
        const targetColumn = columns[columnClass];

        if (!targetColumn) {
            console.error("Target column not found!");
            return;
        }

        const newCard = createTaskCard();
        targetColumn.appendChild(newCard);

        // Focus the new task input.
        newCard.querySelector(".card-text").focus();
    });
});
