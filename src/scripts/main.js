import { setUpCarousel } from "./multiColCarousel.js"
import { setupShiftingUnderlineNav } from "./shiftingUnderlineNav.js"



//<--Multi column carousel section-->
const salesCarouselBreakPoints = {
    lg:4,
    md:3,
    sm:2,
}

const bestSalerCarouselBreakPoints = {
    md:3,
    sm:2
}

const newsCarouselBreakPoints = {
    lg:4,
    md:3,
    sm:2,
}

setUpCarousel("salesCarousel",salesCarouselBreakPoints)
setUpCarousel("bestSellerCarousel",bestSalerCarouselBreakPoints)
setUpCarousel("newsCarousel",newsCarouselBreakPoints)
//<--Multi column carousel section-->


//<--Shifting underline navigation section-->
setupShiftingUnderlineNav("showroomShiftingNav")
//<--Shifting underline navigation section-->