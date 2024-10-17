

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

    initBaseSerach()




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
const testVariants = [
    'qwe',
    'ewq',
    'wqe',
    'wqe',
    'wqe',
    'wqe',
    'wqe',
    'wqe',
    'wqe',
    'wqe',
    'wqe',
    'wqe',
    'wqe',
    'wqe',
    'wqe',
    'wqe',
    '123'
]

function initBaseSerach() {
    const target = $('.base-search')

    if (!target) return

    const parent = target.closest('label'),
        variants = parent.find('.input-variants'),
        variantsList = variants.find('.input-variants-list'),
        variantCard = (v) => { return ` <span class="input-variants-list-e">${v}</span>` }

    target.on('input', (e) => {
        //показ  вариантов
        openAutocomplete(e.currentTarget.value)

    })
    parent.on('mouseleave',()=>{
        //закрытие выбора
        variants.removeClass('_opened')
        variantsList.empty()
    })
  
    variants.on('click', (e) => {
        //клик на варианте
        if (e.target.classList.contains('input-variants-list-e')) {
          target.val(e.target.textContent)
          variants.removeClass('_opened')
        }
    })

    function openAutocomplete(val) {
        //это чисто для тестов
        if (val.length <= 0) {
            variants.removeClass('_opened')
            return
        }

        const v = testVariants.filter(e => e.includes(val))

        if (v.length > 0) {
            variants.addClass('_opened')
            variantsList.empty()
            v.forEach((el) => {
                variantsList.append(variantCard(el))
            })

        } else {
            variants.removeClass('_opened')
            variantsList.empty()
        }
    }
}