function flexIt(){
        let container = document.querySelector('.needFlex');
        container.classList.toggle('flexIt');
      
}


function emphasize(house) {
    let x = document.getElementsByClassName(house);
    for (i = 0; i < x.length; i++){
        x[i].classList.toggle('emphasis');
    }
}
