
window.onload = function () {
    var etaria = document.getElementById('faixaEtaria')
    var perfil = document.getElementById('perfil')
    var perfil1 = document.getElementById('2Perfil')
    var perfil2 = document.getElementById('3Perfil')
    var perfil3 = document.getElementById('4Perfil')
    var perfil4 = document.getElementById('5Perfil')
    var perfil1Img = document.getElementById('perfil2')
    var perfil2Img = document.getElementById('perfil3')
    var perfil3Img = document.getElementById('perfil4')
    var perfil4Img = document.getElementById('perfil5')
    var perfisImagensMenu = [perfil1Img, perfil2Img, perfil3Img, perfil4Img]
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
        var perfisNames = []
        var perfisImages = []
        

        for (let i = 0; i <perfilName.length; i++){
            if (i%2==0){
                perfisNames.push(perfilName[i])
                
               }
            else {
                perfisImages.push(perfilName[i])
            }

            
        for (let i = 1; i < perfisNames.length; i++){
            perfisMenu[i-1].innerText = perfisNames[i]
            perfisImagensMenu[i-1].src = perfisImages[i]    
        }

    var perfilImage = JSON.parse(localStorage.getItem(('perfis')))
            perfil.src = perfilImage[1]
    console.log (perfisImages)
    let nameVideo = document.getElementById('iframeOne')
    document.getElementById('serie-title').innerText = nameVideo.title
    let resumeVideo = document.getElementById('resumeOne').innerHTML
    document.getElementById('serie-resume').innerText = resumeVideo
    document.getElementById('description-two').innerText = resumeVideo
    

        }}

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
 
function openMenuSuspense(){
    var menuPerfil = document.getElementById('menu-suspense')
    var seta = document.getElementById('seta')
    seta.style.transform = 'rotate(180deg)'
    seta.style.transition = '0.3s'
    seta.style.paddingBottom = '0px'
    seta.style.paddingTop = '6px'
    menuPerfil.style.display='block'  
}

function closeMenuSuspense() {
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
(function () {
    var menu = document.getElementById('menuHead'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0){ menu.classList.add('menuFixo')
         menu.style.transition = '0.5s'; } // > 0 ou outro valor desejado
        else menu.classList.remove('menuFixo');
    });
})();
var muteIf = 0 
var muteTwo = ''
function mute () {
      
    var muteOne = document.getElementById('iframeOne')
    
        if (muteIf == 0) {
            muteIf = 1
            muteOne.src += "&mute=1"
            muteTwo = muteOne.src.substring(0,63)
            console.log (muteOne)
            
            
            document.getElementById('soundIcon').style.visibility = 'hidden'
        }
        else if (muteIf == 1) {
            muteIf = 0
            muteOne.src = muteTwo
            
            console.log (muteOne)
            document.getElementById('soundIcon').style.visibility = 'visible'
            }
   
}

function showMessage () {
    var listButton = document.getElementById('listButton')
    var listMessage = document.getElementById('list-message')    
    listMessage.style.display = 'block'
}

function hiddenMessage () {
    var listMessage = document.getElementById('list-message')    
    listMessage.style.display = 'none'
}

function showLikeButtons (){
    var likesList = document.getElementById('likeList')
    likesList.style.animation = 'openLikeButtons 1s ease'
    likesList.style.visibility = 'visible'
}

function closeLikeButtons () {
    var likesList = document.getElementById('likeList')
    likesList.style.animation = 'closeLikeButtons 1s ease'
    likesList.style.visibility = 'hidden'
    likesList.style.transitionDelay = '1s'

}

function openModal () {
    document.getElementById('ModalMoreInfo').style.visibility = 'visible'
    document.getElementById('main-content-img').style.opacity = '0.2'
    document.getElementById('main-content-text').style.opacity = '0.2'
    document.getElementById('serie-title').style.opacity = '0.2'
    document.getElementById('serie-resume').style.opacity = '0.2'
    document.getElementById('playWatch').style.opacity = '0.2'
    document.getElementById('moreInfo').style.opacity = '0.2'
    document.getElementById('volVideo').style.opacity = '0.2'
    document.getElementById('iframeOne').style.opacity = '0.2'
    document.getElementById('menuHead').style.opacity = '0.2'   
    document.getElementById('ModalMoreInfo').style.animation = 'openModal 0.3s'
}

function closeModal () {
    document.getElementById('menuHead').style.opacity = '0.8'  
    document.getElementById('main-content-img').style.opacity = '1'
    document.getElementById('main-content-text').style.opacity = '1'
    document.getElementById('serie-title').style.opacity = '1'
    document.getElementById('serie-resume').style.opacity = '1'
    document.getElementById('playWatch').style.opacity = '1'
    document.getElementById('moreInfo').style.opacity = '1'
    document.getElementById('volVideo').style.opacity = '1'
    document.getElementById('main-content-img').style.opacity = '0.8'
   document.getElementById('ModalMoreInfo').style.animation = 'closeModal 0.3s forwards'
  
    setTimeout (function() {
        document.getElementById('ModalMoreInfo').style.visibility = 'hidden'
    }, 400) 
}


function showLikeMessageOne () {
    document.getElementById('messageOne').style.visibility = 'visible'    
    document.getElementById('messageOne').style.transitionDelay = '0.1s'
}

function closeLikeMessageOne() {
    document.getElementById('messageOne').style.visibility = 'hidden'
    
}

function showLikeMessageTwo() {
    document.getElementById('messageTwo').style.visibility = 'visible'    
    document.getElementById('messageTwo').style.transitionDelay = '0.1s'
}

function closeLikeMessageTwo() {
    document.getElementById('messageTwo').style.visibility = 'hidden'
}

function showLikeMessageThree () {
    document.getElementById('messageThree').style.visibility = 'visible'    
    document.getElementById('messageThree').style.transitionDelay = '0.1s'
}

function closeLikeMessageThree() {
    document.getElementById('messageThree').style.visibility = 'hidden'
}

