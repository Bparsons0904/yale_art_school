// export function logTest() {
//   return "Test";
// }

export function menuSelection(component) {
  return () => {
    let menuItems = document.getElementsByClassName("active");
    for (const element of menuItems) {
      element.classList.remove("active");
    }
    document.getElementById(component).classList.add("active");
    setTimeout(() => {
      toggleCheckbox();
    }, 300);
  };
}

function toggleCheckbox() {
  let checkbox = document.getElementById("toggler");
  checkbox.checked = !checkbox.checked;
}
