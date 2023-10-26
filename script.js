let table = document.getElementById("myTable");

table.addEventListener("click", function (event) {
    let target = event.target;
    if (target.tagName === "TD") {
        let originalText = target.textContent;
        let textarea = document.createElement("textarea");
        textarea.value = originalText;

        let saveButton = document.createElement("button");
        saveButton.textContent = "Save";

        let cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";

        target.innerHTML = "";
        target.appendChild(textarea);
        target.appendChild(saveButton);
        target.appendChild(cancelButton);

        saveButton.addEventListener("click", function () {
            target.textContent = textarea.value;
        });

        cancelButton.addEventListener("click", function () {
            target.textContent = originalText;
        });
    }
});