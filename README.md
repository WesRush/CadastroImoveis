# Cadastro de Imóveis
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
   - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
   - O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
 - O menu deve ter a opção de salvar um imóvel.Para salvar um novo imóvel o programa deve pedir as seguintes informações:
     - Nome do proprietário.
   - Quantidade de quartos
    - Quantidade de banheiros.
   - Se possui garagem.
   - Nome do proprietário.
   - Quantidade de quartos.
    - Quantidade de banheiros.
   - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.

  ## O que aprendi/revisei:

  ### Manipulação de Arrays
- O array `imoveis` é usado para armazenar objetos que representam os imóveis cadastrados. Cada vez que um novo imóvel é adicionado, ele é inserido no array usando o método `push()`.

### Uso de Objetos
- Para armazenar os dados de cada imóvel, é utilizado um objeto JavaScript, que contém as propriedades `proprietario`, `quartos`, `banheiros` e `garagem`. Isso permite organizar as informações de forma estruturada.

### Estrutura de Controle `do...while`
- O loop `do...while` mantém o programa em execução até que o usuário escolha a opção de sair (`opcao === "3"`). Essa estrutura garante que o menu seja exibido ao menos uma vez antes de verificar a condição para encerrar o loop.

### Uso de `prompt()` para Entrada de Dados
- `prompt()` é usado para solicitar informações ao usuário, como o nome do proprietário e o número de quartos. É uma maneira simples de coletar dados de entrada diretamente do usuário.

### Uso de `switch` para Escolha de Opções
- O `switch` facilita a execução de diferentes blocos de código com base na opção escolhida pelo usuário. Isso torna o menu de opções mais organizado e legível.

### Confirmação com `confirm()`
- Antes de salvar um imóvel no array, o `confirm()` é utilizado para exibir um resumo das informações do imóvel e pedir ao usuário uma confirmação. Isso permite que o usuário tenha uma chance de revisar antes de salvar os dados.

### Uso de `alert()` para Exibir Informações
- `alert()` é usado tanto para exibir os detalhes dos imóveis cadastrados quanto para informar sobre ações como "Saindo..." ou quando uma opção inválida é escolhida.

### Validação de Opções do Usuário
- Ao usar o `default` no `switch`, o código trata situações onde o usuário possa digitar uma opção que não está prevista (diferente de "1", "2", ou "3"). Isso ajuda a tornar o programa mais robusto.

### Iteração com `for` para Listar Imóveis
- O `for` percorre o array `imoveis` para exibir cada imóvel cadastrado. Isso permite apresentar de forma organizada os dados de todos os imóveis armazenados.

### Conceito de Estado (Salvando Dados Temporariamente)
- Cada vez que o usuário cadastra um novo imóvel, ele é armazenado no array `imoveis`, que mantém o estado atual dos imóveis cadastrados até que a página seja recarregada.
