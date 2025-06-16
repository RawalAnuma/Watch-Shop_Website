// scroll to top when button is clicked
function scroll_to_top() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// hide/unhide the scroll_up button
window.onscroll = function () {
  let scrollButton = document.getElementById("scroll_button");
  // checks if the user has scroolled down more than 200px from the top or not
  if (window.scrollY > 200) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none"; //hide the button
  }
};
