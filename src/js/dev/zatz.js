

window.addEventListener('DOMContentLoaded', () => {

    /* header */


    /* header */

    initBaseSerach()
    initHeader()



})
/* base */
/* function base() {
    const btns = $('.drop-down-target');
    if (!btns) return
    btns.on('click', (e) => {
        e.currentTarget.closest('.drop-down-container').classList.toggle('_opened')
    })

} */
/* base */


function initBaseSerach() {
    const target = $('.base-search')

    if (!target) return

    const parent = target.closest('label'),
        variants = parent.find('.input-variants')


    target.on('input', (e) => {
        //показ  вариантов
        variants.addClass('_opened')
    })
    target.on('blur', () => {
        //закрытие выбора
        variants.removeClass('_opened')
    })

}

function initHeader() {
    const header = $('.header'),
        html = $('html'),
        serviceBtn = header.find('#headServiceBtn'),
        serviceContainerDesk = header.find('.header__c-services-desk'),
        serviceDeskCategoriesBtns = header.find('.header__c-services-desk-c-left-list-e'),
        serviceDeskCategoriesList = header.find('.header__c-services-desk-c-right-list'),
        serviceContainerMobile = header.find('.header__c-services-mob'),
        serviceContainerMobileClose = header.find('.header__c-services-mob-c-close'),
        serviceMobItem = header.find('.header__c-services-mob-c-scroll-list-e-btn'),
        navbarBtn = header.find('.header__c-nav-drop-down'),
        navbar = header.find('.header__c-nav')


    serviceBtn.on('click', () => {

        if (serviceBtn.hasClass('_opened')) {
            html.removeClass('lock')
            serviceBtn.removeClass('_opened')
            serviceContainerMobile.removeClass('_opened')
            serviceContainerDesk.removeClass('_opened')
            serviceContainerMobile.fadeOut()
            serviceContainerDesk.fadeOut()
            header.removeClass('_opened')


        } else {
            html.addClass('lock')
            serviceBtn.addClass('_opened')
            serviceContainerMobile.fadeIn()
            serviceContainerDesk.fadeIn()
            serviceContainerMobile.addClass('_opened')
            serviceContainerDesk.addClass('_opened')
            header.addClass('_opened')
        }


    })

    serviceMobItem.on('click', (e) => {
        if (!e.currentTarget.classList.contains('header__c-services-mob-c-scroll-list-e-btn')) {
            return
        }
        const parent = e.currentTarget.closest('.header__c-services-mob-c-scroll-list-e')

        if (parent.classList.contains('_active')) {
            parent.classList.remove('_active')

        } else {
            $('._active').removeClass('_active')
            parent.classList.add('_active')


        }
    })

    navbarBtn.on('click', () => {
        if (navbarBtn.hasClass('_opened')) {
            serviceBtn.removeClass('_opened')
            navbarBtn.removeClass('_opened')
            navbar.fadeOut()
            navbar.removeClass('_opened')
            html.removeClass('lock')
        } else {
            navbarBtn.addClass('_opened')
            navbar.fadeIn()
            navbar.addClass('_opened')
            html.addClass('lock')
        }

        if (window.innerWidth <= 768) {
            header.toggleClass('_opened')
        }
        serviceContainerMobile.removeClass('_opened')
    })


    serviceContainerMobileClose.on('click', () => {
        serviceContainerMobile.removeClass('_opened')
        serviceBtn.removeClass('_opened')
    })

    serviceDeskCategoriesBtns.on('click', (e) => {
        const { slideto } = e.currentTarget.dataset
        serviceDeskCategoriesList.css({ transform: `translateX(-${slideto}00%)` })
        serviceDeskCategoriesBtns.removeClass('_opened')
        e.currentTarget.classList.add('_opened')

    })


    $(document).on('scroll', () => {

        if (window.scrollY > 0) {
            header.addClass('header_cliped')
        } else {
            header.removeClass('header_cliped')

        }
    });


    $(window).on('resize', () => {
        serviceContainerMobile.removeClass('header__c-services-mob_opened')
        serviceContainerDesk.removeClass('header__c-services-desk_opened')
        navbarBtn.removeClass('header__c-nav-drop-down_opened')
        header.removeClass('header_opened')
        navbar.removeClass('header__c-nav_opened')
    });
}