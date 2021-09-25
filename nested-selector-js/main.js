let containerChild = document.getElementById('container').children
for(let i = 0 ; i < containerChild.length ; i++){
    containerChild[i].style.color = 'indigo'
}

document.querySelector('body div ~ p').style.color = 'indianred'