const toggleTheme = document.getElementById("toggleTheme")
const rootHTML = document.documentElement


function changeTheme(){
  const currentTheme = rootHTML.getAttribute("data-theme")

  if(currentTheme === "dark") rootHTML.setAttribute("data-theme", "light")
    else rootHTML.setAttribute("data-theme", "dark")

  toggleTheme.classList.toggle("bi-sun")
  toggleTheme.classList.toggle("bi-moon-stars")

}



toggleTheme.addEventListener("click", changeTheme)


const accordionHeaders = document.querySelectorAll(".accordion__header")

accordionHeaders.forEach(Header => {
  Header.addEventListener("click", () => {
    const accordionItem = Header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
})
