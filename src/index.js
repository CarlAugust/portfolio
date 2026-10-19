function DarkMode() {
    const currentTheme = localStorage.getItem("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("data-theme", newTheme);

    const root = document.querySelector(":root");
    root.setAttribute("data-theme", newTheme);
}

/*
    ----------------------------------  
*/





/*
    Contract Behaviour
    -------------------------------------
*/
let contractAccepted = false;

// In general Dialog elements should probobly exist hidden in the html and not be created by javascript.
// But uh to fulfill the requirements of my assignment im doing this.
function CreateContractElement() {
    const contractDialogHTML = `
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
    `
    const contractDialog = document.createElement("dialog")
    contractDialog.innerHTML = contractDialogHTML;
    contractDialog.id = "contract";
    document.querySelector("body").appendChild(contractDialog);

    // Reopen if Dialog is closed without contract being.
    contractDialog.addEventListener("close", () => {
        if (!contractAccepted) {
            contractDialog.show();
        }
    });
}

function ShowContract() {
    let contractDialog = document.getElementById("contract");

    if (!contractAccepted && contractDialog == null) {
        CreateContractElement();
        contractDialog = document.getElementById("contract");
        contractDialog.show();
    }

}

function AnswerContract(saidYesToContract) {
    const contractDialog = document.getElementById("contract");

    contractAccepted = saidYesToContract;
    if (contractAccepted) {
        contractDialog.close()
        document.getElementById("contract-button").disabled = true;
        contractDialog.remove();
    } else {

        // With this and the event listener in the CreateContract function
        // It is intented behaviour that the dialog will close and reopen when
        // someone clicks no. I just found that really funny.
        contractDialog.close();
    }
}

/*
    -------------------------------------
*/





/*
    404 page functionality
    -------------------------------------
*/
function ReturnToTheTop404Page() {
    // https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    
    const contentSections = document.querySelectorAll(".content-section");
    for (const section of contentSections) {
        section.remove();
    }

    localStorage.setItem("404-return-button-clicked", "true");
}

function RefreshAfterReturning404Page() {
    const hasClicked = localStorage.getItem("404-return-button-clicked");
    if (hasClicked != "true") {
        return;
    }

    const finalMessage = document.querySelector("#final-message");
    if (finalMessage == null) {
        return;
    }

    finalMessage.innerHTML = `
        <h2>You clicked it didnt you</h2>
        <p>
            How dare you click that button. How could you do this to me. YOU DEMON, YOU VILE CREATURE. HOW DARE YOU CLICK THAT BUTTON.
            I DONT WANT TO LOOK AT YOU, I DONT WANT YOU HERE, YOU ARE ALREADY A SLAVE TO THE GUY UPSTAIRS. I DONT WANT TO SEE YOU ANYMORE.
        </p>
        <button onclick="ReturnToTheTop404Page()" style="margin-top: 12px;">Return to the top</button>
    `
}
RefreshAfterReturning404Page();

function MakeBackgroundGreen404Page() {
    const body = document.querySelector("body");
    body.style.backgroundColor = "#00FF00";
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    
    const contentSections = document.querySelectorAll(".content-section");
    for (const section of contentSections) {
        section.remove();
    }
}

/*
    -------------------------------------
*/