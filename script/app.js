const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
  "linear-gradient(to right top, #f46b45, #eea849);",
  "linear-gradient(to right top, #005c97, #363795);",
  "linear-gradient(to right top, #e53935, #e35d5b);"
];

const options = {
    threshold : 0.2
};

// first we need to create an instance of intersection observer to be able to observe
//it takes a callback function
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        // each entry is a section
        // if we console log it we see that class name of each section is stored in target
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`)
        const gradientIndex = entry.target.getAttribute('data-index');

        // this gets innerWidth, height, ... of the element
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };

        // if it is visible
        if(entry.isIntersecting){
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
        }
    })
}

sections.forEach(section => {
    // observes each section
    observer.observe(section);
    // this gives us sections
})
