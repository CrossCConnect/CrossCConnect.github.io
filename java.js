let sectionsPassed = 0;
const num_of_sections = 4;
let sectionScroll = document.getElementById("featuredProductScroll");
function autoScroll() {
    if (sectionsPassed != num_of_sections) {
        sectionScroll.scrollBy(100, 0);
        sectionsPassed = sectionsPassed + 1;
    } else {
        sectionScroll.scrollBy(-400, 0);
        sectionsPassed = 0;
    }   
    sectionScroll.scrollBy(window.innerHeight * 0.7, 100);
}