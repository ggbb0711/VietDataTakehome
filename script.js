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