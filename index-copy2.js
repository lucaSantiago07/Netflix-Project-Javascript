window.onload = function (){
    var loucos = document.getElementById('show')
    var louco = JSON.parse(localStorage.getItem (('perfis')))
    
    loucos.value = louco[0] 
    let imagemPerfil = document.getElementById('imagem')
    imagemPerfil.src = louco[1]
    imagemPerfil.className = "images"
    
        }






/*


/*
/*
<h1>Editar Perfil</h1>
    
        <hr>
      <form action="submit">
        <label>Alterar Nome:</label>
        <p id="chama"></p>
        <input type="text" id="show" placeholder="ok">
      </form>
      */