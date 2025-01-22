function getWidthSizeOfColumn(carouselEl,breakPoints){
    let colSize = 1
    let currentViewportWidth = window.innerWidth

    if(breakPoints.lg>0&&currentViewportWidth>=992) colSize=breakPoints.lg
    else if(breakPoints.md>0&&currentViewportWidth>=768) colSize = breakPoints.md
    else if(breakPoints.sm>0&&currentViewportWidth>=576) colSize = breakPoints.sm

    const gapSize = Number(window.getComputedStyle(carouselEl.querySelector(".multi-col-carousel-inner")).gap.replace("px","")) 
    const colWidth = (carouselEl.offsetWidth/colSize) - gapSize
    return colWidth
}

//Resize the carousel
function resizeCol(multiColCarouselId,breakPoints){
    const carousel = document.getElementById(multiColCarouselId)
    const colEls = carousel.querySelectorAll(".multi-col-carousel-inner .multi-col-carousel-col")

    const colWidth = getWidthSizeOfColumn(carousel.querySelector(".multi-col-carousel"),breakPoints)
    
    colEls.forEach((el,i)=>{
        el.style.width = colWidth+"px"
        el.setAttribute("multi-col-carousel-no",i)        
    })
}

function moveCarousel(multiColCarouselId,isMoveForward){
    const carousel = document.getElementById(multiColCarouselId)
    const totalColEl = carousel.querySelectorAll(".multi-col-carousel-inner .multi-col-carousel-col").length
    const activeCol = carousel.querySelector(".multi-col-carousel-inner .multi-col-carousel-col.active")
    activeCol.classList.remove("active")
    
    const colPosition = Number(activeCol.getAttribute("multi-col-carousel-no"))

    let moveActiveColTo = colPosition
    if(isMoveForward){
        moveActiveColTo = Math.min(totalColEl-1,colPosition+1)
    }
    else{
        moveActiveColTo = Math.max(0,colPosition-1)
    }

    const nextActiveCol = carousel.querySelector(`.multi-col-carousel-inner .multi-col-carousel-col[multi-col-carousel-no="${moveActiveColTo}"]`)
    nextActiveCol.classList.add("active")
}

function repositionCarousel(multiColCarouselId,breakPoints){
    const carousel = document.getElementById(multiColCarouselId)
    const colEls = carousel.querySelectorAll(".multi-col-carousel-inner .multi-col-carousel-col")
    let activeCol = carousel.querySelector(".multi-col-carousel-inner .multi-col-carousel-col.active")

    let colSize = 1
    let currentViewportWidth = window.innerWidth

    if(breakPoints.lg>0&&currentViewportWidth>=992) colSize=breakPoints.lg
    else if(breakPoints.md>0&&currentViewportWidth>=768) colSize = breakPoints.md
    else if(breakPoints.sm>0&&currentViewportWidth>=576) colSize = breakPoints.sm

    const maxPosition = colEls.length-colSize

    let colPosition = Number(activeCol.getAttribute("multi-col-carousel-no"))

    //The screen has been resized, need to move the active class to the maxPosition
    if(colPosition>maxPosition){
        activeCol.classList.remove("active")
        colPosition = maxPosition
        activeCol = carousel.querySelector(`.multi-col-carousel-inner .multi-col-carousel-col[multi-col-carousel-no="${colPosition}"]`)
        activeCol.classList.add("active")
    }

    const gapSize = Number(window.getComputedStyle(carousel.querySelector(".multi-col-carousel-inner")).gap.replace("px","")) 
    const widthWithGap = getWidthSizeOfColumn(carousel.querySelector(".multi-col-carousel"),breakPoints) + gapSize
    carousel.querySelector(".multi-col-carousel-inner").style.transform = `translate(-${widthWithGap*colPosition}px)`
}

function setupCarouselControl(multiColCarouselId,breakPoints){
    const carousel = document.getElementById(multiColCarouselId)
    const prevControl = carousel.querySelector(".multi-col-carousel-control-prev")
    const nextControl = carousel.querySelector(".multi-col-carousel-control-next")
    
    if(prevControl){
        prevControl.addEventListener("click",e=>{
            moveCarousel(multiColCarouselId,false)
            repositionCarousel(multiColCarouselId,breakPoints)
        })
    }
    if(nextControl){
        nextControl.addEventListener("click",e=>{
            moveCarousel(multiColCarouselId,true)
            repositionCarousel(multiColCarouselId,breakPoints)
        })
    }
}

function setUpCarousel(multiColCarouselId,breakPoints){
    resizeCol(multiColCarouselId,breakPoints)
    setupCarouselControl(multiColCarouselId,breakPoints)
    
    window.addEventListener("resize",(e)=>{
        resizeCol(multiColCarouselId,breakPoints)
        repositionCarousel(multiColCarouselId,breakPoints)
    })
}

export {setUpCarousel}