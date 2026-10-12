function DarkMode() {
    const body = document.querySelector("body");
    const currentTheme = body.getAttribute("data-theme");
    body.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
}

let accepted = false;
const dialogHTML = `
<dialog>
    <p>Sell your soul to me: </p><br>
    <div>
        <button onclick="YesOrNo(true)">Yes</button>
        <button onclick="YesOrNo(false)">No</button>
    </div>
</dialog>
`
const dialogBox = document.createElement("div")
dialogBox.innerHTML = dialogHTML;
document.querySelector("body").appendChild(dialogBox);

const dialog = document.querySelector("dialog")
dialog.addEventListener("close", () => {
    console.log(accepted)
    if (!accepted) {
        dialog.show();
    }
});

function ShowContract() {
    dialog.show();
}

function YesOrNo(isYes) {
    accepted = isYes;
    dialog.close()
}