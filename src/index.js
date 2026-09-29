function DarkMode() {
    const body = document.querySelector("body");
    const currentTheme = body.getAttribute("data-theme");
    body.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
}


// Load navbar content
try {
    fetch("/resources/components/nav.html")
        .then((response) => response.text())
        .then((text) => {
            const nav = document.querySelector("nav")
            nav.innerHTML = text;
        })
} catch (e) {
    console.error(e);
}

// Load footer content
try {
    fetch("/resources/components/footer.html")
        .then((response) => response.text())
        .then((text) => {
            const footer = document.querySelector("footer")
            footer.innerHTML = text;
        })
} catch (e) {
    console.error(e);
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
