import './sass/account.sass'

$(function () {

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

})