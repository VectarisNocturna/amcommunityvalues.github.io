/////////// Main values setup
let CalculatorValueType = (localStorage.getItem("lastSelectedCVT") || document.getElementById("calculatorValueType").value)
let valuesList = [] // Elve, AdoptMeValuesGG, AMVGG, AdoptMeTradingValue

/////////// Fetching apis
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Request failed");
      return await res.json();
    } catch (err) {
      console.warn(`Attempt ${i + 1} failed`);
      if (i === retries - 1) throw err;
      await wait(delay);
    }
  }
}

// Fetching ;-;
fetchWithRetry("https://elvebredd.com/data/Pets.json")
    .then(data => {
        valuesList[0] = data
    })
    .catch("Elve failed")

console.log(valuesList)
