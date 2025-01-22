
import { setUpCarousel } from "./multiColCarousel.js"
import { setupShiftingUnderlineNav } from "./shiftingUnderlineNav.js"


//<--Multi column carousel section-->
const salesCarouselBreakPoints = {
    lg:4,
    md:3,
    sm:2,
}

setUpCarousel("salesCarousel",salesCarouselBreakPoints)
//<--Multi column carousel section-->


//<--Shifting underline navigation section-->
setupShiftingUnderlineNav("showroomShiftingNav")
//<--Shifting underline navigation section-->