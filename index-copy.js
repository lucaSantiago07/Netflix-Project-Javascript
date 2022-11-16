

class Perfis {
    constructor (name, photo) {
        this.name = name,
        this.photo = photo
    }
}

let perfil = []

var one = 0


    window.onload = function () {
        if (localStorage){
            var olderPerfils = JSON.parse(localStorage.getItem(('perfis')))
            console.log (olderPerfils.length)
            for (let i = 0; i < olderPerfils.length; i++){
               if (i%2==0){
                console.log (olderPerfils[i+1])
                    let newe = document.createElement ("div")
                    newe.id = 'foto1'
                     newe.className = 'perfis'
               
                    let show = document.createElement('img')
                    show.src = olderPerfils[i+1]
                    show.className = 'images'
                    
                    let text1 = document.createElement('span')
                    text1.innerHTML = olderPerfils[i]
                    newe.appendChild(show)  
                    
                    newe.appendChild(text1)                   

                    
                    const botaoo = document.getElementById('agua')
                    let nomes = document.getElementById('bot')
            
                    botaoo.insertBefore(newe,nomes)
        
                }

            
            }
        }
}   




function namee (){
    
    let nome = prompt("Qual o nome do usuário?")
    let data = prompt("Qual a url da imagem")

    if (nome && data) {
        perfil.push (nome, data)
    let newe = document.createElement ("div")
    newe.id = 'foto1'
    newe.className = 'perfis'
    
    let show = document.createElement('img')
    show.src = data
    show.className = 'images'
   
    let text1 = document.createElement('span')
    text1.innerHTML = nome
    const botaoo = document.getElementById('agua')
    let nomes = document.getElementById('bot')
    
    botaoo.insertBefore(newe,nomes)
    newe.appendChild(show)   
    newe.appendChild(text1)
        console.log (perfil)
    localStorage.setItem('perfis', JSON.stringify(perfil));
    


}

    
}



/*
    
function namee (){

    

    let newe = document.createElement ("div")
    newe.id = 'foto1'
    newe.className = 'perfis'
    let show = document.createElement('img')
    
    show.src = 'https://www.horadecodar.com.br/wp-content/uploads/2020/09/alterar-o-src-de-uma-imagem-com-JavaScript-capa.png'
    show.className = 'images'
    let text1 = document.createElement('span')
    text1.innerHTML = "Lucas"
    const botaoo = document.getElementById('agua')
    let nomes = document.getElementById('bot')
    
    botaoo.insertBefore(newe,nomes)
    newe.appendChild(show)   
    newe.appendChild(text1)
    

    
}

const inputName = document.getElementById('inputName')
inputName.value = "ok"

export default namee



*/

