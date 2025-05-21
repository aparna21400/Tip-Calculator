function calculate() {
    // Get bill amount from input (as a string)
    const resultElem = document.getElementById("result");

    const billAmount = document.getElementById("billAmount").value;
    // Get tip percentage from input (as a string)
    const tipPercent = document.getElementById("tipPercent").value;

    if (billAmount === "" || tipPercent === "") {
        resultElem.classList.add("warning");
        resultElem.innerText = "⚠️ Please enter both Bill Amount and Tip Percentage.";
        return;
    }
    // Convert input strings to numbers using parseFloat
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercent);
    // Calculate tip amount using percentage formula
    if (isNaN(bill) || isNaN(tip) || bill <= 0 || tip < 0) {
        resultElem.classList.add("warning");
        resultElem.innerText = "⚠️ Please enter valid positive numbers.";
        return;
    }

    resultElem.classList.remove("warning");

    const tipAmount = (bill * tip) / 100;
    // Show result in <h3> by updating its text content

    const currency = document.getElementById("currency").value;
    resultElem.innerText = `You should tip ${currency}${tipAmount.toFixed(2)}`;


}

    //Toggle Theme Mode
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");

        const themeBtn = document.getElementById("toggleTime");
        if (document.body.classList.contains("dark-mode")) {
            themeBtn.innerText = "☀️ Light Mode";
        } else {
            themeBtn.innerText = "🌙 Dark Mode ";
        }
    }