const form = document.querySelector("form");

const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //value extracts whatever is been typed to the input
  const location = search.value;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  //using the fetch API
  fetch("http://localhost:3000/weather?address=" + location).then((resp) => {
    resp.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
  search.value = "";
});
