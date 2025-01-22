//Multi column carousel

//Setup the carousel
function setUpMultiColCarousel(multiColCarouselId,breakPoints){
    const carousel = document.getElementById(multiColCarouselId)
    const colEls = carousel.querySelectorAll(".multi-col-carousel-inner .multi-col-carousel-col")

    let colSize = 1
    let currentViewportWidth = window.innerWidth

    if(breakPoints.lg>0&&currentViewportWidth>=992) colSize=breakPoints.lg
    else if(breakPoints.md>0&&currentViewportWidth>=768) colSize = breakPoints.md
    else if(breakPoints.sm>0&&currentViewportWidth>=576) colSize = breakPoints.sm

    const gapSize = Number(window.getComputedStyle(carousel.querySelector(".multi-col-carousel-inner")).gap.replace("px",""))
    const colWidth = (carousel.offsetWidth/colSize) - gapSize

    colEls.forEach(el=>{
        el.style.width = colWidth        
    })
}

const salesCarouselBreakPoints = {
    md:3,
    sm:2,
}
setUpMultiColCarousel("salesCarousel",salesCarouselBreakPoints)
window.addEventListener("resize",(e)=>setUpMultiColCarousel("salesCarousel",salesCarouselBreakPoints))

//Shifting underline navigation for showroom section
function moveUnderLine(underlineEl,activeElementToTarget){
    const activeElement = document.querySelector(activeElementToTarget)
    const {width,height} = activeElement.getBoundingClientRect()
    const left = activeElement.offsetLeft
    const top = activeElement.offsetTop

    underlineEl.style.width = `${width}px`
    underlineEl.style.height = `${height}px`
    underlineEl.style.left = `${left}px`
    underlineEl.style.top = `${top}px`
}

document.querySelectorAll("#showroomShiftingNav .showroom-nav").forEach(el=>{
    el.addEventListener("click",e=>{
        //Remove all active class before setting a new active class
        document.querySelectorAll("#showroomShiftingNav .showroom-nav").forEach(el=>{
            if(el.classList.contains("active")) el.classList.remove("active")
        })
        e.target.classList.add("active")
        moveUnderLine(document.querySelector("#showroomShiftingNav .shifting-underline"),".showroom-nav.active")
    })
})

//Resizing the screen can change the position of the navs, so the underline must change as well
function resizeUnderline(){
    const underline = document.querySelector("#showroomShiftingNav .shifting-underline")
    const activeNav = document.querySelector("#showroomShiftingNav .showroom-nav.active")
        
    if (activeNav) {
        const left = activeNav.offsetLeft
        const top = activeNav.offsetTop
        underline.style.left = `${left}px`
        underline.style.top = `${top}px`
    }
}

window.addEventListener("resize",resizeUnderline)

//Set the underline to the first element
moveUnderLine(document.querySelector("#showroomShiftingNav .shifting-underline"),".showroom-nav.active")