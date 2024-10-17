const imoveis = []
let opcao = ""

do {
  opcao = prompt(
    "Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis: " + imoveis.length +
    "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  )

  switch (opcao) {
    case "1":
      const imovel = {}
      imovel.propietario = prompt("Informe o nome do Propietário: ")
      imovel.quartos = prompt("Quantos quartos o imóvel possui: ")
      imovel.banheiros = prompt("Quantos banheiro o imóvel possui: ")
      imovel.garagem = prompt("Este imóvel possui garagem ? (sim/não) ")
      
      const confirma = confirm(
        `Salvar este imóvel? \nPropietário: ${imovel.propietario}\nQuartos: ${imovel.quartos}\nBanheiros: ${imovel.banheiros}\nPossui garagem? ${imovel.garagem}`)
        if (confirma) {
            imoveis.push(imovel)
        }
      break
    case "2":
      for(let i = 0;i<imoveis.length;i++){
        alert(`Imóvel ${i+1}\nPropietários:${imoveis[i].propietario}\n
            Quartos: ${imoveis[i].quartos}\nBanheiros: ${imoveis[i].banheiros}
            \nPossui Garagem? ${imoveis[i].garagem}`)
      }
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== "3");
