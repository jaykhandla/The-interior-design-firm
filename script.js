/* you cant copy */
document.addEventListener("copy", (event) => {
    const selectedData = window.getSelection().toString();
    event.clipboardData.setData(
        "text/plain",
        "♠"
    );
    event.preventDefault();
});