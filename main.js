/////////// Dark mode logic
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    document.getElementById("toggleDarkMode").style.filter = "invert(1)"
};

/////////// Event listeners
document.getElementById("toggleDarkMode").addEventListener("click", () => {
    document.documentElement.classList.toggle("dark")

    const isDark = document.documentElement.classList.contains("dark");

    if (isDark === true) {
        document.getElementById("toggleDarkMode").style.filter = "invert(1)"
    } else {
        document.getElementById("toggleDarkMode").style.filter = "invert(0)"
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
});

document.getElementById("calculatorValueType").addEventListener("change", () => {
    const newVal = document.getElementById("calculatorValueType").value

    CalculatorValueType = newVal
    localStorage.setItem("lastSelectedCVT", newVal)
});
