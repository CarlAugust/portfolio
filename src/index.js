function DarkMode() {
    const body = document.querySelector("body");
    const currentTheme = body.getAttribute("data-theme");
    body.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
}




let contractAccepted = false;

const contractDialogHTML = `
<dialog id="contract">
    <section style="margin: 16px">
        <h2>Please sell your soul to me: </h2>
        <p>You will sell your soul to me. </p>
        <p>If you dont want to... to bad.</p>
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
    contractDialog.show();
}

function AnswerContract(isYes) {
    contractAccepted = isYes;
    contractDialog.close()
}
