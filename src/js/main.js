// header
(function () {
    const header = document.querySelector(".header");
    const inpHeader = document.querySelector(".header__search-input");
    const inpHeaderBtnOpen = document.querySelector(".header__search");
    const inpHeaderBtnClose = document.querySelector(".header__search-close");
    const headerNavList = document.querySelector(".header__nav-list");
    const headerNav = document.querySelector(".header__nav");

    inpHeaderBtnOpen.addEventListener("click", showInputInput);
    inpHeaderBtnClose.addEventListener("click", hideInput);
    function showInputInput() {
        inpHeader.classList.remove("opacity-0");
        inpHeader.classList.remove("w-0");
        inpHeader.classList.add("header__search-input-w");
        headerNavList.classList.add("w-0");
        headerNavList.classList.add("overflow-hidden");
        inpHeaderBtnOpen.classList.add("opacity-0");
        inpHeaderBtnClose.classList.remove("opacity-0");
    }
    function hideInput() {
        inpHeader.classList.add("w-0");
        inpHeader.classList.remove("header__search-input-w");
        inpHeader.classList.add("opacity-0");
        inpHeaderBtnClose.classList.add("opacity-0");
        setTimeout(function () {
            headerNavList.classList.remove("overflow-hidden");
            headerNavList.classList.remove("w-0");
            inpHeaderBtnOpen.classList.remove("opacity-0");
        }, 200);
    }
    const burger = document.querySelector(".burger");
    burger.addEventListener("click", openMobileMenu);
    function openMobileMenu() {
        burger.classList.toggle("active");
        headerNav.classList.toggle("md:-translate-x-full");
        document.querySelector("body").classList.toggle("overflow-hidden");
        setTimeout(function () {
            headerNavList.classList.toggle("md:translate-x-[10px]");
        }, 200);
    }
    window.addEventListener("scroll", headerChange);
    function headerChange() {
        if (window.scrollY > 100) {
            header.classList.add("scroll");
        } else {
            header.classList.remove("scroll");
        }
    }
})();

// swipers
(function () {
    const swiperNewsElement = document.querySelector(".swiperNews");
    const swiperAboutElement = document.querySelector(".swiperAbout");
    const swiperServiceElements = document.querySelectorAll(".swiperService");
    const swiperMediaElements = document.querySelectorAll(".swiperMedia");

    function calculateSlidesPerViewNews() {
        if (window.innerWidth >= 1280) {
            return 4;
        } else if (window.innerWidth >= 1024) {
            return 3;
        } else if (window.innerWidth >= 768) {
            return 2;
        } else if (window.innerWidth >= 320) {
            return 1.2;
        }
    }
    if (swiperNewsElement) {
        const swiper = new Swiper(swiperNewsElement, {
            slidesPerView: calculateSlidesPerViewNews(),
            spaceBetween: 15,
            cssMode: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".news__pagination",
            },
            mousewheel: true,
            keyboard: true,
        });
        window.addEventListener("resize", function () {
            swiper.params.slidesPerView = calculateSlidesPerViewNews();
            swiper.update();
        });
    }
    function calculateSlidesPerViewAdout() {
        if (window.innerWidth >= 1280) {
            return 2.3;
        } else if (window.innerWidth >= 1024) {
            return 1.6;
        } else if (window.innerWidth >= 768) {
            return 1.5;
        } else if (window.innerWidth >= 320) {
            return 1.2;
        }
    }
    if (swiperAboutElement) {
        const swiper = new Swiper(swiperAboutElement, {
            slidesPerView: calculateSlidesPerViewAdout(),
            spaceBetween: 15,
            cssMode: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {},
            mousewheel: true,
            keyboard: true,
        });
        window.addEventListener("resize", function () {
            swiper.params.slidesPerView = calculateSlidesPerViewAdout();
            swiper.update();
        });
    }
    function calculateSlidesPerViewService() {
        if (window.innerWidth >= 1280) {
            return 3;
        } else if (window.innerWidth >= 1024) {
            return 2.6;
        } else if (window.innerWidth >= 768) {
            return 2;
        } else if (window.innerWidth >= 320) {
            return 1.2;
        }
    }
    swiperServiceElements.forEach((swiperServiceElement) => {
        if (swiperServiceElement) {
            const swiper = new Swiper(swiperServiceElement, {
                slidesPerView: calculateSlidesPerViewService(),
                spaceBetween: 15,
                cssMode: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                },
                mousewheel: true,
                keyboard: true,
            });
            window.addEventListener("resize", function () {
                swiper.params.slidesPerView = calculateSlidesPerViewService();
                swiper.update();
            });

            document
                .querySelectorAll(".img-full-screen")
                .forEach(function (element) {
                    element.addEventListener("click", function () {
                        document.body.classList.add("scroll-disabled");

                        document
                            .querySelector("meta[name=viewport]")
                            .setAttribute(
                                "content",
                                "width=device-width, initial-scale=1.00, minimum-scale=1.00, maximum-scale=2.00, user-scalable=yes"
                            );

                        let imagePath = this.getAttribute("src");

                        document.querySelector(
                            ".img-placeholder"
                        ).style.backgroundImage = "url(" + imagePath + ")";

                        document.querySelector(
                            ".img-placeholder"
                        ).style.display = "block";
                    });
                });

            document
                .querySelector(".img-placeholder")
                .addEventListener("click", function () {
                    document.body.classList.remove("scroll-disabled");
                    document
                        .querySelector("meta[name=viewport]")
                        .setAttribute(
                            "content",
                            "width=device-width, initial-scale=1.00, minimum-scale=1.00, maximum-scale=1.00"
                        );

                    this.style.display = "none";
                });
        }
    });

    function calculateSlidesPerViewMedia() {
        if (window.innerWidth >= 768) {
            return 2;
        } else if (window.innerWidth >= 320) {
            return 1;
        }
    }
    swiperMediaElements.forEach((swiperMediaElement) => {
        if (swiperMediaElement) {
            const swiper = new Swiper(swiperMediaElement, {
                slidesPerView: calculateSlidesPerViewMedia(),
                spaceBetween: 15,
                cssMode: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                },
                mousewheel: true,
                keyboard: true,
            });
            window.addEventListener("resize", function () {
                swiper.params.slidesPerView = calculateSlidesPerViewMedia();
                swiper.update();
            });
        }
    });
})();

// add like
(function () {
    const likeBtn = document.querySelector(".like-btn");
    const iconLike = document.querySelector(".icon-like");
    if (likeBtn) {
        likeBtn.addEventListener("click", function () {
            likeBtn.classList.toggle("liked");
            if (likeBtn.classList.contains("liked")) {
                iconLike.innerHTML = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.5 14.6875C37.5 25.625 21.2828 34.4781 20.5922 34.8438C20.4102 34.9417 20.2067 34.9929 20 34.9929C19.7933 34.9929 19.5898 34.9417 19.4078 34.8438C18.7172 34.4781 2.5 25.625 2.5 14.6875C2.50289 12.1191 3.52447 9.65673 5.3406 7.8406C7.15673 6.02447 9.6191 5.00289 12.1875 5C15.4141 5 18.2391 6.3875 20 8.73281C21.7609 6.3875 24.5859 5 27.8125 5C30.3809 5.00289 32.8433 6.02447 34.6594 7.8406C36.4755 9.65673 37.4971 12.1191 37.5 14.6875Z" fill="#E20000"/>
</svg>
`;
            } else {
                iconLike.innerHTML = `<svg
width="40"
height="40"
viewBox="0 0 40 40"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
    d="M27.8125 4.375C24.6734 4.375 21.8875 5.61406 20 7.74375C18.1125 5.61406 15.3266 4.375 12.1875 4.375C9.45347 4.37831 6.83237 5.46586 4.89912 7.39912C2.96586 9.33237 1.87831 11.9535 1.875 14.6875C1.875 25.9906 18.4078 35.0219 19.1109 35.4016C19.3842 35.5487 19.6897 35.6257 20 35.6257C20.3103 35.6257 20.6158 35.5487 20.8891 35.4016C21.5922 35.0219 38.125 25.9906 38.125 14.6875C38.1217 11.9535 37.0341 9.33237 35.1009 7.39912C33.1676 5.46586 30.5465 4.37831 27.8125 4.375ZM26.9547 26.6187C24.7785 28.4654 22.4523 30.1274 20 31.5875C17.5477 30.1274 15.2215 28.4654 13.0453 26.6187C9.65937 23.7141 5.625 19.2844 5.625 14.6875C5.625 12.947 6.3164 11.2778 7.54711 10.0471C8.77782 8.8164 10.447 8.125 12.1875 8.125C14.9688 8.125 17.2969 9.59375 18.2641 11.9594C18.4048 12.3042 18.6451 12.5993 18.9543 12.8071C19.2635 13.0148 19.6275 13.1258 20 13.1258C20.3725 13.1258 20.7365 13.0148 21.0457 12.8071C21.3549 12.5993 21.5952 12.3042 21.7359 11.9594C22.7031 9.59375 25.0312 8.125 27.8125 8.125C29.553 8.125 31.2222 8.8164 32.4529 10.0471C33.6836 11.2778 34.375 12.947 34.375 14.6875C34.375 19.2844 30.3406 23.7141 26.9547 26.6187Z"
    fill="#532F23"
/>
</svg>`;
            }
        });
    }
})();

// для поиска
(function () {
    const input = document.querySelector(".searchpage-input");
    if (input) {
        const inputClose = document.querySelector(".searchpage-close");
        const inputLoup = document.querySelector(".searchpage-loup");
        input.addEventListener("input", () => {
            inputLoup.classList.add("hidden");
            inputLoup.classList.remove("block");
            inputClose.classList.remove("hidden");
            inputClose.classList.add("block");
            if (input.value == "") {
                inputLoup.classList.remove("hidden");
                inputLoup.classList.add("block");
                inputClose.classList.add("hidden");
                inputClose.classList.remove("block");
            }
        });
        inputClose.addEventListener("click", () => {
            input.value = "";
            inputLoup.classList.remove("hidden");
            inputLoup.classList.add("block");
            inputClose.classList.add("hidden");
            inputClose.classList.remove("block");
        });
    }
})();
