function tooggleMode() {
  const htlm = document.documentElement
  htlm.classList.toggle("light")
  // if (htlm.classList.contains("light")) {
  //  htlm.classList.remove("light")
  //} else {
  //   htlm.classList.add("light")
  // }

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem

  if (htlm.classList.contains("light")) {
    //se tiver light mode,adicionar a imagem light
    img.setAttribute("src", "./assets/avatar 2.png")
  } else {
    //se tiver sem light mode, mander a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
