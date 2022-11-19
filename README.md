<H1>NETFLIX - Projeto em HTML/CSS/JAVASCRIPT</H1>

Bem-vindo(a) ao primeiro repositório criado nesse perfil. 

A ideia inicial é colocar em prática o que estou aprendendo em HTML/CSS/JS clonando as funcionalidades e o front-end da Netflix.

<h3>Explicando o projeto Netflix (html/css/javascript):</h3>
 - Apesar de já ter estudado sobre React, senti que estava deixando passar conhecimentos da tríade, por isso resolvi realizar esse projeto sem o ReactJS.
 - Nenhum framework (bootstrap, bulma...) foi utilizado pelo mesmo motivo.
 - Não utilizei também o label para traduzir para outras versões do Javascript, quando o projeto
 estiver mais avançado, focarei nisso.
 - A primeira versão tinha como objetivo realizar o front-end da área de perfis e abrir outra página (Gerenciar perfis) com os mesmos perfis criados no "novo perfil". Foi algo de grande valia
 passar alguns dias tentando resolver isso sem querer entrar no mundo dos bancos de dados (SQL, MySQL...), aprendi bastante sobre LocalStorage e ele resolve o problema no momento.

<h3>Como utilizar e o que esperar do site:</h3>
- É um site de 3 páginas
- Quando clicar em "novo perfil", abrirá um prompt pedindo o nome de usuário e depois um prompt pedindo uma url de uma imagem (pode usar qualquer imagem da internet)
- Assim que terminar de responder o prompt da imagem, um perfil será criado com uma imagem e um nome abaixo dela.
Dica = Crie, pelo menos, 3 perfis.
- Se o link da url não for válido, ficará um quadrado escuro.
- Clicando no perfil, será direcionado para o browse (não feito ainda).
- Clicando em "Gerenciar perfil", os mesmos perfis criados anteriormente aparecerão no mesmo estilo da página inicial.
- Na página "Gerenciar perfil" os perfis são clicáveis, então, clicando no primeiro, ele será redirecionado para edição do perfil 1, no segundo, perfil 2 e assim por diante.
- O perfil 1 é o único que está configurado, pois é uma página não dinâmica.
- Até o momento essas são as funcionalidades, verifique os arquivos JS para maiores detalhes.


vídeo demonstrativo:
https://youtu.be/ta3NfMheVEM (versão 1.0)


<h3>Mudanças Netflix 1.5:</h3>
- Organização dos arquivos em pastas.
- Não há mais necessidade de utilizar a url da imagem, agora há imagens pré-selecionadas para colocar como foto de perfil.
- Todos os perfis configurados
- É possível alterar a imagem clicando nela.
- A seleção de imagens varia de acordo com a classificação etária do perfil.
- As alterações só são salvas se clicar no botão "salvar"
- Não é possível criar mais de 5 perfis
- Botão "novo perfil" some quando chega a 5 perfis
- Quando exclui o perfil, alteração é feita e o perfil fica disponível para criação novamente
- Melhora na estrutura do CSS de todo o site

<h3>Problemas que buscarei resolver na versão 2.0:</h3>
- Colocar a favicon Icon no title
- Escolher uma fonte no Google Fonts para colocar no site
- Iniciar a produção do browse.
- Colocar o load antes de entrar no browse
- Dentro do Browse, criar o header (menu ao lado do logo, menu suspenso com as opções do perfil e colocar a logo)
