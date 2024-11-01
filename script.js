const amout = document.getElementById("amout")

// Manipulando o input amout para receber somente números.
amout.addEventListener("input", () => {

  const hasCharactersRegex = /\D+/g
  amout.value = amout.value.replace(hasCharactersRegex, "")
} ) 