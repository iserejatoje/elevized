import './sass/account.sass'

$(function () {

    document.querySelectorAll('[data-fancybox]').forEach(function () {
        Fancybox.bind(this, {});
    })

    $('.js-range-slider--size').ionRangeSlider({
        skin: "round",
    });

    function my_prettify (n) {
        return n + 'm';
    }

    $('.js-range-slider--revenue').ionRangeSlider({
        skin: "round",
        prettify: my_prettify
    });

    if ($('select').length > 0) {
        $('select').niceSelect();
    }

    if ($('[data-duration]').length > 0) {

        const counter = (el) => {
            const duration = document.querySelector('[data-duration]').getAttribute('data-duration')
            const start = parseInt(el.textContent, 10)
            const end = parseInt(el.dataset.counter, 10)
            if (start === end) return
            const range = end - start
            let curr = start
            const timeStart = Date.now()
            const loop = () => {
                let elaps = Date.now() - timeStart
                if (elaps > duration) elaps = duration
                const frac = elaps / duration
                const step = frac * range
                curr = start + step
                el.textContent = Math.trunc(curr)
                if (elaps < duration) requestAnimationFrame(loop)
            };
            requestAnimationFrame(loop)
        }

        document.querySelectorAll("[data-counter]").forEach(counter)

        // const progress = (el) => {
        //     const duration = 500
        //     const start = parseInt(el.dataset.start, 10)
        //     const end = parseInt(el.dataset.finish, 10)
        //     if (start === end) return
        //     const range = end - start
        //     let curr = start
        //     const timeStart = Date.now()
        //     const loop = () => {
        //         let elaps = Date.now() - timeStart
        //         if (elaps > duration) elaps = duration
        //         const frac = elaps / duration
        //         const step = frac * range
        //         curr = start + step
        //         el.setAttribute('data-number', Math.trunc(curr) + "%");
        //         el.style.setProperty('--progress', Math.trunc(curr) + "%");
        //         if (elaps < duration) requestAnimationFrame(loop)
        //     };
        //     requestAnimationFrame(loop)
        // }
        // document.querySelectorAll(".welcome-progress").forEach(progress)

    }
})