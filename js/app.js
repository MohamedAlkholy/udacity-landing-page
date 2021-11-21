
// get all sections by querySelectorAll
const sectionsEls = document.querySelectorAll('section')
// get ul by getElementById
const navSectionsListEl = document.getElementById('navbar__list')


// get section position using getBoundingClientRect and return true if section in view port
function viewedSection(sec) {
    const sectionPosition = sec.getBoundingClientRect()
    if (sectionPosition.top > -100 && sectionPosition.top <= 350) {
        return true
    }
    return false
}


// Create section list in the navbar by itrating through sectionsEls
function createSectionNavEl() {
    const myDoc = document.createDocumentFragment()
    // iterate trhough sectionsEls to create associated li
    sectionsEls.forEach((section) => {
        sectionId = section.getAttribute('id')
        sectionName = section.getAttribute('data-nav')
        const navSectionEl = document.createElement('li')
        navSectionEl.innerHTML = `<a class='menu__link' href='#${sectionId}'>${sectionName}</a>`
        myDoc.appendChild(navSectionEl)
        // move section smoothly to view port 
        navSectionEl.addEventListener('click', (e) => {
            e.preventDefault()
            section.scrollIntoView({ behavior: "smooth" })
        })
    })
    navSectionsListEl.appendChild(myDoc) // adding new elements by fragments
}


// add active class to the section that exist in the view port
window.addEventListener('scroll', () => {
    sectionsEls.forEach((section) => {
        if (viewedSection(section)) {
            if (section.classList.contains('your-active-class') === false) {
                section.classList.add('your-active-class')
            }
        } else {
            if (section.classList.contains('your-active-class') === true) {
                section.classList.remove('your-active-class')
            }
        }
    })
})


createSectionNavEl()
