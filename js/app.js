document.addEventListener("DOMContentLoaded", function () {

    //Menu Top show&hide submenu elements
    var menu = document.querySelector('.top_menu:first-of-type');
    var submenu = document.querySelector('#submenu');

    function showSubmenu() {
        if (menu.firstElementChild !== null) {
            submenu.classList.add('show');
        }
    }

    function hideSubmenu() {
        submenu.classList.remove('show');
    }

    menu.addEventListener('mouseover', showSubmenu);
    menu.addEventListener('mouseout', hideSubmenu);

    //Gallery section
    var box1 = document.querySelector('.box1');
    var box2 = document.querySelector('.box2');
    var title = document.querySelectorAll('.box_title');

    function hideTitle() {
        for (var i = 0; i < title.length; i++) {
            this.firstElementChild.classList.add('box_hide');
        }
    }

    function showTitle() {
        for (var i = 0; i < title.length; i++) {
            this.firstElementChild.classList.remove('box_hide');
        }
    }

    box1.addEventListener('mouseover', hideTitle);
    box2.addEventListener('mouseover', hideTitle);
    box1.addEventListener('mouseout', showTitle);
    box2.addEventListener('mouseout', showTitle);

    //Slider section
        var next = document.getElementById('nextPicture');
        var prev = document.getElementById('prevPicture');
        var slider = document.querySelectorAll('li.slider');
        var index = 0;

        slider[index].classList.add('visible');

        next.addEventListener('click', function(){
            slider[index].classList.remove('visible');
            index++;
            if(index>=slider.length){
                index = 0;
            }
            console.log(index);
            slider[index].classList.add('visible');
        });
        prev.addEventListener('click', function(){
            slider[index].classList.remove('visible');
            index--;
            if(index<0){
                index = 3;
            }
            console.log(index);
            slider[index].classList.add('visible');
        })
});