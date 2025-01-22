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

//Resizing the screen can change the position of the navs, so the underline must change as well
function resizeUnderline(shiftingNavId){
    const shiftingNavBar = document.getElementById(shiftingNavId)
    const underline = shiftingNavBar.querySelector(".shifting-underline")
    const activeNav = shiftingNavBar.querySelector(".showroom-nav.active")
        
    if (activeNav) {
        const left = activeNav.offsetLeft
        const top = activeNav.offsetTop
        underline.style.left = `${left}px`
        underline.style.top = `${top}px`
    }
}

function setupShiftingUnderlineNav(shiftingNavId){
    const shiftingNavBar = document.getElementById(shiftingNavId)
    shiftingNavBar.querySelectorAll(".showroom-nav").forEach(el=>{
        el.addEventListener("click",e=>{
            //Remove all active class before setting a new active class
            shiftingNavBar.querySelectorAll(".showroom-nav").forEach(el=>{
                if(el.classList.contains("active")) el.classList.remove("active")
            })
            e.target.classList.add("active")
            moveUnderLine(shiftingNavBar.querySelector(".shifting-underline"),".showroom-nav.active")
        })
    })
    
    
    window.addEventListener("resize",(e)=>resizeUnderline(shiftingNavId))
    
    moveUnderLine(shiftingNavBar.querySelector(".shifting-underline"),".showroom-nav.active")
}

export {setupShiftingUnderlineNav}