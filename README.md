<H1>NETFLIX - Projeto em HTML/CSS/JAVASCRIPT</H1>

Bem-vindo(a) ao primeiro repositório criado nesse perfil. 

A ideia inicial é colocar em prática o que estou aprendendo em HTML/CSS/JS clonando as funcionalidades e o front-end da Netflix.

<h3>Explicando o projeto Netflix (html/css/javascript):</h3>
 <p>- Apesar de já ter estudado sobre React, senti que estava deixando passar conhecimentos da tríade, por isso resolvi realizar esse projeto sem o ReactJS.<br>
 - Nenhum framework (bootstrap, bulma...) foi utilizado pelo mesmo motivo.<br>
 - Não utilizei também o label para traduzir para outras versões do Javascript, quando o projeto estiver mais avançado, focarei nisso.<br>
 - A primeira versão tinha como objetivo realizar o front-end da área de perfis e abrir outra página (Gerenciar perfis) com os mesmos perfis criados no "novo perfil". Foi algo de grande valia<br>
 passar alguns dias tentando resolver isso sem querer entrar no mundo dos bancos de dados (SQL, MySQL...), aprendi bastante sobre LocalStorage e ele resolve o problema no momento.</p>

<h3>Como utilizar e o que esperar do site:</h3>
<p>- É um site de 3 páginas
- Quando clicar em "novo perfil", abrirá um prompt pedindo o nome de usuário, um prompt pedindo a faixa etária e um prompt pedindo para escolher uma das imagens de perfil (cada faixa etária possui imagens específicas)
- Assim que terminar de responder o prompt da imagem, um perfil será criado com uma imagem e um nome abaixo dela.<br>
Dica = Crie, pelo menos, 3 perfis.<br>
- Há um limite de perfis: 5 <br>

- Clicando no perfil, será direcionado para o browse onde terá apenas o Header da página principal da netflix.<br>
- Clicando em "Gerenciar perfil", os mesmos perfis criados anteriormente aparecerão no mesmo estilo da página inicial.<br>
- Na página "Gerenciar perfil" os perfis são clicáveis, então, clicando no primeiro, ele será redirecionado para edição do perfil 1, no segundo, perfil 2 e assim por diante.<br>
- É possível editar nome, imagem(clicando na foto) e a faixa etária clicando em "editar". 'Salvar', salva as alterações; 'cancelar', não salva nenhuma alteração e 'excluir perfil', exclui o perfil, deixando ele vazio para a criação de um novo perfil <br> 
- Até o momento essas são as funcionalidades, verifique os arquivos JS para maiores detalhes.<br>
</p>

vídeo demonstrativo:<br>
https://youtu.be/ta3NfMheVEM (versão 1.0)<br>
https://youtu.be/WEGvv77W9Ok (versão 1.5)
https://youtu.be/hQK3l3r-a-s (versão 2.0)

<h3>Mudanças Netflix 1.5:</h3>
<p>- Organização dos arquivos em pastas.<br>
- Não há mais necessidade de utilizar a url da imagem, agora há imagens pré-selecionadas para colocar como foto de perfil.<br>
- Todos os perfis configurados<br>
- É possível alterar a imagem clicando nela.<br>
- A seleção de imagens varia de acordo com a classificação etária do perfil.<br>
- As alterações só são salvas se clicar no botão "salvar"<br>
- Não é possível criar mais de 5 perfis<br>
- Botão "novo perfil" some quando chega a 5 perfis<br>
- Quando exclui o perfil, alteração é feita e o perfil fica disponível para criação novamente<br>
- Melhora na estrutura do CSS de todo o site<br></p>

<h3>Mudanças Netflix 2.0:</h3>
<p>- Colocar a favicon Icon no title<br>
- Iniciar a produção do browse.<br>
- Dentro do Browse, criar o header (menu ao lado do logo, menu suspenso com as opções do perfil e colocar a logo)</p>

<h3> Problemas para resolver na Netflix 2.3:</h3>
<p>- Criar a DIV que contém o vídeo principal da netflix<br>
- Criar a primeira faixa de vídeos ("Adicionados recentemente")
