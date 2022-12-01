
window.onload = function () {
    var etaria = document.getElementById('faixaEtaria')
    var perfil = document.getElementById('perfil')
    var perfil1 = document.getElementById('perfil2')
    var perfil2 = document.getElementById('perfil3')
    var perfil3 = document.getElementById('perfil4')
    var perfil4 = document.getElementById('perfil5')

    var perfisMenu = [perfil1, perfil2, perfil3, perfil4]

    var etariaOption = JSON.parse(localStorage.getItem(('idades')))
        switch (Number(etariaOption[0])) {
            case 1:
                etaria.innerText = 'Infantil'
            break;
            case 2:
                etaria.innerText = 'Infantil'
            break;
            case 3:
                etaria.innerText = 'Adolescente'
            break;
            case 4:
                etaria.innerText = 'Adulto'
            break;
        }   

        var perfilName = JSON.parse(localStorage.getItem(('perfis')))
   /* perfil2.innerText = perfilName[2]*/
        var perfisImages = []

        for (let i = 0; i <perfilName.length; i++){
            if (i%2==0)
               /* console.log (perfisImages)*/
                perfisImages.push(perfilName[i])
                /*console.log (perfilName[i])*/
                       
                /*console.log (`Valor do i= ${i} ${perfisMenu[i]}`)*/
            }

            console.log (perfisImages)
        for (let i = 1; i < perfisImages.length; i++){
            perfisMenu[i-1].innerText = perfisImages[i]
            console.log (perfisMenu[i-1])
        }
            /*  for (let i = 0; i < perfisMenu.length; i++) {
            pImg[i] = document.createElement ('img')
            pImg[i].src = perfisImages[i]
            perfisMenu[i].appendChild (pImg[i])
        }*/


/*     perfisMenu.forEach (function(novo, new3, hcg) {
        console.log (hcg)
        console.log (novo.innerHTML = new3)
        console.log (novo)
    });*/

    var perfilImage = JSON.parse(localStorage.getItem(('perfis')))
            perfil.src = perfilImage[1]
    
}

var numberInput = 0
function searchEnter() {
    var searchIcon = document.getElementById('searchId')
    var searchInput = document.getElementById('inputSearch')
    if (numberInput == 0){   
        searchInput.style.display = 'inline'
        searchInput.style.transition = 'all .1s linear'        
        numberInput = 1
    }else {
        numberInput = 0
        searchInput.style.display = 'none'
    } 
     }
    
 
function checkTrue () {
    var checar = document.getElementById('checar')
    var liSearch = document.getElementById('inputSearch')
    if (checar.checked == false) {
        checar.checked = true
        liSearch.style.transform = 'translateX(-170px)'
        liSearch.style.width = '300px'
        liSearch.style.transition = '2s'
        liSearch.style.backgroundColor = '#000000b2'
        liSearch.style.border = '1px solid black'
    }
    else {
        checar.checked = false
        liSearch.style.transform = 'translateX(10px)'
        liSearch.style.width = '30px'
        liSearch.value = ''
        liSearch.style.border = 'none'
        liSearch.style.backgroundColor = 'transparent'
        liSearch.style.transition = '2s'
    }
}
 

function menuenter(){
    var menuPerfil = document.getElementById('menu-suspense')
    var seta = document.getElementById('seta')
    seta.style.transform = 'rotate(180deg)'
    seta.style.transition = '0.3s'
    seta.style.paddingBottom = '0px'
    seta.style.paddingTop = '6px'
    menuPerfil.style.display='block'  
}

function chama() {
    var menuPerfil = document.getElementById('menu-suspense')
    var seta = document.getElementById('seta')
    seta.style.transform = 'rotate(0deg)'
    seta.style.transition = '0.3s'
    seta.style.paddingBottom = '6px'
    seta.style.paddingTop = '0px'
    menuPerfil.style.display='none'
}

let condicional = 0
function openNotifications() {
    if (condicional == 0) {
        document.getElementById('div-notifications').style.display = 'block' 
        
    }
  
}

function closeNotifications () {
    document.getElementById('div-notifications').style.display = 'none'

}