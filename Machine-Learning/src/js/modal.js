
let subBtn = document.getElementsByClassName("con__sub")

// function modal(){
//     alert("Your appointment is booked")
// }
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
