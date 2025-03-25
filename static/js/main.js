/*-----------------------------------------------------------------------------------

    Theme Name: Topweb - Web Design Agency HTML Template
    Description: Web Design Agency HTML Template
    Author: Website Design Templates
    Version: 1.0

    ---------------------------------- */

(function ($) {

    "use strict";

    var $window = $(window);

    /*------------------------------------
        01. Preloader
    --------------------------------------*/

    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
        delay: 1.5,
        y: -100,
        opacity: 0,
    });
    tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
    }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
        y: -1500,
    });
    tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
    });


    $window.on("scroll", function () { var o = $window.scrollTop(), r = $(".navbar-brand img"), a = $(".navbar-brand.logodefault img"); o <= 50 ? ($("header").removeClass("scrollHeader").addClass("fixedHeader"), r.attr("src", "/static/img/logos/logo-inner.png")) : ($("header").removeClass("fixedHeader").addClass("scrollHeader"), r.attr("src", "/static/img/logos/logo.png")), a.attr("src", "/static/img/logos/logo.png") });

    let elements = document.querySelectorAll(".navbar-nav > li > a");

    elements.forEach((element) => {
        let innerText = element.innerText;
        element.innerHTML = "";

        let textContainer = document.createElement("div");
        textContainer.classList.add("block");

        for (let letter of innerText) {
            let span = document.createElement("span");
            span.innerText = letter.trim() === "" ? "\xa0" : letter;
            span.classList.add("letter");
            textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
    });

    elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.classList.remove("play");
        });
    });

    $window.on("scroll", function () { 500 < $(this).scrollTop() ? $(".scroll-to-top").fadeIn(400) : $(".scroll-to-top").fadeOut(400) }), $(".scroll-to-top").on("click", function (o) { o.preventDefault(), $("html, body").animate({ scrollTop: 0 }, 600) });

    var pageSection = $(".parallax,.bg-img"); pageSection.each(function (e) { $(this).attr("data-background") && $(this).css("background-image", "url(" + $(this).data("background") + ")") }), $(".story-video").magnificPopup({ delegate: ".video", type: "iframe" }); var wow = new WOW({ boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0 }); function fullScreenHeight() { var e = $(".full-screen"), i = $window.height(); e.css("min-height", i) } function ScreenFixedHeight() { var e = $("header").height(), i = $(".screen-height"), e = $window.height() - e; i.css("height", e) } function SetResizeContent() { fullScreenHeight(), ScreenFixedHeight() } wow.init(), $window.resize(function (e) { setTimeout(function () { SetResizeContent() }, 500), e.preventDefault() }), SetResizeContent();

    $(document).ready(function () { $(".testimonial-carousel1").owlCarousel({ loop: !0, responsiveClass: !0, autoplay: !0, autoplayTimeout: 5e3, smartSpeed: 1500, nav: !1, navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"], dots: !1, margin: 0, center: !1, responsive: { 0: { items: 1 }, 576: { items: 1, nav: !0 }, 992: { items: 1, nav: !0 } } }), $(".testimonial-carousel-three").owlCarousel({ loop: !0, responsiveClass: !0, autoplay: !0, autoplayTimeout: 5e3, smartSpeed: 1500, nav: !1, dots: !0, margin: 30, center: !0, responsive: { 0: { items: 1 }, 767: { items: 2, center: !1 }, 1199: { items: 3 }, 1400: { items: 4 } } }), $(".portfolio-carousel1").owlCarousel({ loop: !0, responsiveClass: !0, autoplay: !0, autoplayTimeout: 5e3, smartSpeed: 1500, nav: !1, dots: !1, margin: 30, center: !1, responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 3 } } }), $(".portfolio-carousel-two").owlCarousel({ loop: !0, responsiveClass: !0, autoplay: !0, autoplayTimeout: 5e3, smartSpeed: 1500, nav: !1, dots: !1, margin: 30, center: !1, responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 1200: { items: 4 } } }), $(".service-carousel").owlCarousel({ loop: !0, responsiveClass: !0, autoplay: !0, autoplayTimeout: 5e3, smartSpeed: 1500, nav: !1, dots: !1, margin: 30, center: !1, responsive: { 0: { items: 1 }, 768: { items: 2 }, 991: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } } }), $(".client-carousel").owlCarousel({ loop: !0, responsiveClass: !0, autoplay: !0, autoplayTimeout: 5e3, smartSpeed: 1500, nav: !1, dots: !1, margin: 30, center: !1, responsive: { 0: { items: 1 }, 575: { items: 2 }, 768: { items: 3 }, 1200: { items: 3 } } }), $(".slider-fade1").owlCarousel({ items: 1, loop: !0, dots: !1, margin: 0, nav: !0, navText: ["<span>Prev</span>", "<span>Next</span>"], autoplay: !0, smartSpeed: 1500, mouseDrag: !1, animateIn: "fadeIn", animateOut: "fadeOut" }), $(".slider-fade2").owlCarousel({ items: 1, loop: !0, dots: !0, margin: 0, nav: !1, navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"], autoplay: !0, autoplayTimeout: 7e3, smartSpeed: 1500, animateIn: "fadeIn", animateOut: "fadeOut", responsive: { 992: { nav: !0, dots: !1 } } }), $(".slider-fade3").owlCarousel({ items: 1, loop: !0, dots: !1, margin: 0, nav: !1, navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"], autoplay: !0, autoplayTimeout: 6e3, smartSpeed: 1500, animateIn: "fadeIn", animateOut: "fadeOut" }), $(".owl-carousel").owlCarousel({ items: 1, loop: !0, dots: !1, margin: 0, autoplay: !0, smartSpeed: 500 }), $(".slider-fade1").on("changed.owl.carousel", function (e) { e = e.item.index - 2; $("span").removeClass("animated fadeInUp"), $("h1").removeClass("animated fadeInUp"), $("a").removeClass("animated fadeInUp"), $(".owl-item").not(".cloned").eq(e).find("span").addClass("animated fadeInUp"), $(".owl-item").not(".cloned").eq(e).find("h1").addClass("animated fadeInUp"), $(".owl-item").not(".cloned").eq(e).find("a").addClass("animated fadeInUp") }), $(".slider-fade2").on("changed.owl.carousel", function (e) { e = e.item.index - 2; $("h1").removeClass("animated fadeInUp"), $("a").removeClass("animated fadeInUp"), $(".owl-item").not(".cloned").eq(e).find("h1").addClass("animated fadeInUp"), $(".owl-item").not(".cloned").eq(e).find("a").addClass("animated fadeInUp") }), 0 !== $(".horizontaltab").length && $(".horizontaltab").easyResponsiveTabs({ type: "default", width: "auto", fit: !0, tabidentify: "hor_1", activate: function (e) { var a = $(this), t = $("#nested-tabInfo"); $("span", t).text(a.text()), t.show() } }), $(".countup").counterUp({ delay: 25, time: 2e3 }), $(".current-year").text((new Date).getFullYear()) });

    $window.on("load", function () { var o = $("body"); o.addClass("loaded"), setTimeout(function () { o.removeClass("loaded") }, 1500), $(".portfolio-gallery").lightGallery(), $(".portfolio-link").on("click", o => { o.stopPropagation() }) });

})(jQuery);