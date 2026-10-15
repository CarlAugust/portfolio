function DarkMode() {
    const currentTheme = localStorage.getItem("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("data-theme", newTheme);

    const root = document.querySelector(":root");
    root.setAttribute("data-theme", newTheme);
}

let contractAccepted = false;

const contractDialogHTML = `
<dialog id="contract">
    <section style="margin: 16px">
        <h2>Please sell your soul to me: </h2>
        <p>You will sell your soul to me. </p>
        <p>You will get nothing for it.</p>
        <br>
        <div>
            <button onclick="AnswerContract(true)">Yes</button>
            <button onclick="AnswerContract(false)">No</button>
        </div>
    </section>
</dialog>
`
const contractDialogBox = document.createElement("div")
contractDialogBox.innerHTML = contractDialogHTML;
document.querySelector("body").appendChild(contractDialogBox);

const contractDialog = document.getElementById("contract")
contractDialog.addEventListener("close", () => {
    if (!contractAccepted) {
        contractDialog.show();
    }
});

function ShowContract() {
    if (!contractAccepted) {
        contractDialog.show();
    }
}

function AnswerContract(isYes) {
    contractAccepted = isYes;
    contractDialog.close()
}
