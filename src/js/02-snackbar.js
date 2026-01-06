import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then((delay) => {
      iziToast.success({
        title: "OK",
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: "topRight",
        backgroundColor: "#59A10D", // Green equivalent based on screenshot
        messageColor: "#fff",
        titleColor: "#fff",
        iconColor: "#fff",
      });
      console.log(`✅ Fulfilled promise in ${delay}ms`);
    })
    .catch((delay) => {
      iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${delay}ms`,
        position: "topRight",
        backgroundColor: "#EF4040", // Red equivalent based on screenshot
        messageColor: "#fff",
        titleColor: "#fff",
        iconColor: "#fff",
      });
      console.log(`❌ Rejected promise in ${delay}ms`);
    });

  // Optional: reset form after submission if needed, but not explicitly requested.
  // form.reset();
});
