Bem-vindo(a) ao primeiro repositório criado nesse perfil. 

A ideia inicial é colocar em prática o que estou aprendendo em HTML/CSS/JS clonando as funcionalidades e o front-end da Netflix.

Alguns fatores a serem explicados:
 - Apesar de já ter estudado sobre React, senti que estava deixando passar conhecimentos da tríade, por isso resolvi realizar esse projeto sem o ReactJS.
 - Nenhum framework (bootstrap, bulma...) foi utilizado pelo mesmo motivo.
 - Não utilizei também o label para traduzir para outras versões do Javascript, quando o projeto
 estiver mais avançado, focarei nisso.
 - A primeira versão tinha como objetivo realizar o front-end da área de perfis e abrir outra página (Gerenciar perfis) com os mesmos perfis criados no "novo perfil". Foi algo de grande valia
 passar alguns dias tentando resolver isso sem querer entrar no mundo dos bancos de dados (SQL, MySQL...), aprendi bastante sobre LocalStorage e ele resolve o problema no momento.

Como utilizar e o que esperar do site:
- É um site de 3 páginas
- Quando clicar em "novo perfil", abrirá um prompt pedindo o nome de usuário e depois um prompt pedindo uma url de uma imagem (pode usar qualquer imagem da internet)
- Assim que terminar de responder o prompt da imagem, um perfil será criado com uma imagem e um nome abaixo dela.
Dica = Crie, pelo menos, 3 perfis.
- Se o link da url não for válido, ficará um quadrado escuro.
- Clicando no perfil, ainda não acontecerá nada.
- Clicando em "Gerenciar perfil", os mesmos perfis criados anteriormente aparecerão no mesmo estilo da página inicial.
- Na página "Gerenciar perfil" os perfis são clicáveis, então, clicando no primeiro, ele será redirecionado para edição do perfil 1, no segundo, perfil 2 e assim por diante.
- O perfil 1 é o único que está configurado, pois é uma página não dinâmica 
- Os outros perfis abrirão uma nova aba (criado dinâmicamente), mas darão em erro (quero resolver esse problema para a próxima versão)
- Até o momento essas são as funcionalidades, verifique os arquivos JS para maiores detalhes.

vídeo demonstrativo:
https://youtu.be/ta3NfMheVEM

Problemas que buscarei resolver na versão 2.0:
- Quando vou para escolher gerenciar perfil e clico em um dos perfis, consigo criar uma página dinâmica, mas não estou conseguindo criar um script dinâmico para essa página.
 Ex: Se clico no 1º perfil, vai para o "perfil1", no segundo "perfil3" e assim por diante, 
 mas não consegui ainda adicionar dinamicamente um script para esse html.
- Configurar os botões da página de edição do perfil.
- Quando for criar um novo perfil, abrir um seletor com 5 imagens para que o usuário escolha a sua imagem de perfil dentre as opções oferecidas (assim não precisaria copiar a url e colocar no prompt)
- Substituir o prompt por outra coisa mais "amigável", por assim dizer.
