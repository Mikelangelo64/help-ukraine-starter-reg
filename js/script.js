$(document).ready(function(){
    //menuToggle
    $('.menu__toggle').click(function(e){
        $(this).toggleClass('_active-menu')
        $('.menu__box').toggleClass('_active-menu')
        $('body').toggleClass('_lock')

    })

    //like .catalog-list__item
    $('._like').click(function(){
        if($(this).hasClass('catalog-list__like')){
            $(this).parent().parent().toggleClass('_liked')
        }
        if($(this).hasClass('house-item__like')){
            
            $(this).parent().parent().parent().parent().parent().toggleClass('_liked')
        }
        
    })

    //SORT-active
    $('.sort').click(function(e){
        $(this).toggleClass('_active-sort')
        $(".sort__choise").toggleClass('_active-sort')
    })

    //input file attached
    let fileAttached = $('.statement-form input[type=file]')[0]
    let fileHouseDoc = $('.register-form input[type=file]')[0]

    if(fileAttached){
        inputHandler(fileAttached)
    }
    if(fileHouseDoc){
        inputHandler(fileHouseDoc)
    }

    function inputHandler(input){
        let label	 = input.nextElementSibling
        let labelVal = label.innerHTML
        let output = $('input[name=file-name]')[0]

        input.addEventListener( 'change', function( e ){
            //console.log('hui', e.target.files[0].name);
            let fileName = '';

            try{
                fileName = e.target.files[0].name
            } catch{
                fileName = ''
            }
            

            if( fileName ){
                output.value = fileName;
            }else{
                output.value = '';
            }
        })
    }

    //progress-donate
    let moneyAll = 340000
    let moneyNow = 108658
    let moneyPercent

    if(moneyNow <= moneyAll){
        moneyPercent = Math.round(moneyNow / moneyAll * 100)
    }else{
        moneyPercent = 100
    }

    if(document.querySelector('.house-item-counter__val')){
        document.querySelector('.house-item-counter__val').innerHTML = moneyNow
        document.documentElement.style.setProperty('--progress', moneyPercent+'%')
        console.log(document.documentElement.style);

        let callback = function(entries, observer) {
            /* Content excerpted, show below */
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    console.log(entry.target);
                    entry.target.classList.add('running')
    
                    observer.unobserve(entry.target)
                }
            })
        };
    
        let observer = new IntersectionObserver(callback, {})
    
        let target = document.querySelector('.inner');
    
        observer.observe(target)
    }
    

   

   

    //swiper`s

    //swiper ruls
    let rulsCategories = ['Постраждалі', 'Будівельні компанії', 'Юридичні компанії', 'Ангели']

    let rulsSwiper = new Swiper('.ruls-swiper.swiper', {
        slidesPerView: 1,

        allowTouchMove: false,

        spaceBetween: 80,
        autoHeight: true,
        loop: false,
        pagination: {
            
            el: '.swiper-pagination.ruls-list__title__container',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="ruls-list__title ${className}">${rulsCategories[index]}</span>`;
            },
        },
        
    })

    //swiper partners
    let partnersSwiper = new Swiper('.partners-swiper.swiper', {
        slidesPerView: 4,

        allowTouchMove: true,

        spaceBetween: 20,
        autoHeight: true,
        loop: false,
        navigation: {
            nextEl: '.partners-swiper__next',
            prevEl: '.partners-swiper__prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                //spaceBetween: 60,
            },
            370: {
                slidesPerView: 2,
                //spaceBetween: 60,
            },
            440: {
                slidesPerView: 3,
                //spaceBetween: 60,
            },
            650: {
                slidesPerView: 4,
                spaceBetween: 60,
            },
            940: {
                spaceBetween: 120,
            },
            1450: {
                spaceBetween: 250,
            },
        },
        
    })

    //swiper .house-item-compare__swiper
    let compareCategories = ['Зруйнований будинок', 'Відновлений будинок']

    let compareSwiper = new Swiper('.house-item-compare__swiper.swiper', {
        slidesPerView: 1,

        allowTouchMove: false,

        spaceBetween: 80,
        autoHeight: false,
        loop: false,
        pagination: {
            
            el: '.swiper-pagination.house-item-compare__title__container',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="house-item-compare__title ${className}">${compareCategories[index]}</span>`;
            },
        },
        
    })

    //swiper .gallery-swiper__destroyed
    let destroyedSwiper = new Swiper('.gallery-swiper__destroyed.swiper', {
        slidesPerView: 3,

        allowTouchMove: true,

        spaceBetween: 32,
        autoHeight: true,
        loop: false,
        navigation: {
            nextEl: '.gallery-swiper__destroyed__next',
            prevEl: '.gallery-swiper__destroyed__prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                //spaceBetween: 60,
            },
            530: {
                slidesPerView: 2,
                //spaceBetween: 60,
            },
            900: {
                slidesPerView: 3,
                //spaceBetween: 60,
            },
        },
        
    })

    //swiper .gallery-swiper__restored
    let restoredSwiper = new Swiper('.gallery-swiper__restored.swiper', {
        slidesPerView: 3,

        allowTouchMove: true,

        spaceBetween: 32,
        autoHeight: true,
        loop: false,
        navigation: {
            nextEl: '.gallery-swiper__restored__next',
            prevEl: '.gallery-swiper__restored__prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                //spaceBetween: 60,
            },
            370: {
                slidesPerView: 2,
                //spaceBetween: 60,
            },
            900: {
                slidesPerView: 3,
                //spaceBetween: 60,
            },
        },
        
    })
})