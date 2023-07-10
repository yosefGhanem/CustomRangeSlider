// The value shall be displayed in circle
const range = document.getElementById('range')

range.addEventListener('input', (e)=> {
    //+ sign to convert into a number 
    const value = +e.target.value
    const label = e.target.nextElementSibling

    // get the width of range in css (300px)
    const range_width = getComputedStyle(e.target).getPropertyValue('width')

    const label_width = getComputedStyle(label).getPropertyValue('width')

    // -2 cuz we are taking the pixels off
    const num_width = +range_width.substring(0, range_width.length -2)
    
    // get num_width_for label
    const num_label_width = +label_width.substring(0, label_width.length -2)
    // console.log(range_width, label_width)
    
    // console.log(num_width, num_label_width)

    // let's get min and max values
    const max = +e.target.max
    const min = +e.target.min
    
    // now it always stah
    const left = value *  (num_width / max) - num_label_width / 2 + scale(value,min,max,10,-10)//map to 10 & -10

    //console.log(min,max)
    //console.log(left)

    // now label moves along with ball here
    label.style.left = `${left}px`

    

    label.innerHTML = value

})

//map a range of numbers
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
