function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    let campoPesquisa = document.getElementById("campo pesquisa") .value

    //se campoPesquisa for uma string vazia não mostrar
    if(!campoPesquisa) {
      section.innerHTML = "<p> Nada Foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    
    console.log(campoPesquisa);

  

    //inicia um string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados e cria o HTML para cada resultado
    for (let dado of dados) {
      // deixando a busca em minusculo possível ou maiusculo
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      // permitir a pesquisas com outras palavras declaradas no objeto
      tags = dado.tags.toLowerCase()
      //se titulo includes campoPesquisa então faça
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
         // Cria um novo elemtno HTML para cada resultado
        resultados += `
      <div class="item-resultado">
        <h2> <a href="#" target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta"> ${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações </a>
      </div>
      `;
      }
    }
  
    if (!resultados) {
      resultados = "<p> Nada foi encontrado amigo(a)</p>"
    }
    
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }

