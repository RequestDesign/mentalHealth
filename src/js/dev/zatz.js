

window.addEventListener('DOMContentLoaded', () => {

    /* header */
    const header = $('.header'),
        serviceBtn = $('#headServiceBtn'),
        serviceContainerDesk = $('.header__c-services-desk'),
        serviceContainerMobile = $('.header__c-services-mob'),
        serviceContainerMobileClose = $('.header__c-services-mob-c-close'),
        serviceMobItem = $('.header__c-services-mob-c-scroll-list-e-btn'),
        navbarBtn = $('.header__c-nav-drop-down'),
        navbar = $('.header__c-nav')


    serviceBtn.on('click', () => {
        serviceBtn.toggleClass('header__c-links-e_opened')

        if (window.innerWidth <= 768) {
            serviceContainerMobile.toggleClass('header__c-services-mob_opened')
        } else {
            serviceContainerDesk.toggleClass('header__c-services-desk_opened')
            header.toggleClass('header_opened')

        }
    })

    serviceMobItem.on('click', (e) => {
        if (!e.currentTarget.classList.contains('header__c-services-mob-c-scroll-list-e-btn')) {
            return
        }
        const parent = e.currentTarget.closest('.header__c-services-mob-c-scroll-list-e')

        if (parent.classList.contains('header__c-services-mob-c-scroll-list-e_active')) {
            parent.classList.remove('header__c-services-mob-c-scroll-list-e_active')

        } else {
            $('.header__c-services-mob-c-scroll-list-e_active').removeClass('header__c-services-mob-c-scroll-list-e_active')
            parent.classList.add('header__c-services-mob-c-scroll-list-e_active')


        }
    })

    navbarBtn.on('click', () => {
        navbarBtn.toggleClass('header__c-nav-drop-down_opened')
        navbar.toggleClass('header__c-nav_opened')
        if (window.innerWidth <= 768) {
            header.toggleClass('header_opened')
        }
        serviceContainerMobile.removeClass('header__c-services-mob_opened')
    })


    serviceContainerMobileClose.on('click', () => {
        serviceContainerMobile.removeClass('header__c-services-mob_opened')
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

    /* header */

    base()





})
/* base */
function base() {
    const btns = $('.drop-down-target');
    if (!btns) return
    btns.on('click', (e) => {
        e.currentTarget.closest('.drop-down-container').classList.toggle('_opened')
    })


}
/* base */
