const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const button = document.querySelector("header button")

button.addEventListener("click", add) //clicou rodou a função add
form.addEventListener("change", save) //sempre que o formulário for alterado vai rodar a função save

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  //slice 0 é o inicio, -5 corta de traz pra frente, ficando DD/MM.

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("dia já incluso")
    return
  }

  alert("Adicionado com sucesso")
  nlwSetup.addDay(today)
}

function save() {
  /*  console.log(nlwSetup.data) nlwsetup.data, quando clica no check guarda a informação no array. tudo sendo feito pela biblioteca NLWSetup */
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  //json.stringify converte os obsjetos dentro do array em string
  //sempre que houver modificações vai rodar essa função save e armazenar no localStorage (armazenamento local dentro do navegador, se mudar de navegador perde os dados armazenados)
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
//pegou do localStorage as informações que estavam em texto, transformou em objeto e colocouu no data

nlwSetup.setData(data)
nlwSetup.load()
