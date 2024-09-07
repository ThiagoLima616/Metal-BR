function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // para aparecer false ou true no campo Console
  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se o campoPesquisa for string vazia
  if (!campoPesquisa) {
    section.innerHTML = "<p>Digite uma banda aí rocker</p>"
    return
  }
  // == vai ser para comparação

  campoPesquisa = campoPesquisa.toLowerCase()
  // p/ pesquisar em letra minúscula

  // mesmo de cima  
  console.log(campoPesquisa);

  // resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = ""

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // o includes devolve true ou false, o if vai trabalhar com o true ou false
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // || representa "ou"
      // cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais infos.</a>
      </div>
    `;
    }
  }

  // se não encontrar oq está procurando
  if (!resultados) {
    resultados = "<p>Não encontrado rocker.</p>"
  }

  // Atribui o HTML gerado para a seção, substituindo o conteúdo anterior
  section.innerHTML = resultados;
}

// toLowerCase() = pesquisa em letra minuscula