const body = document.getElementsByTagName('body')
const button = document.querySelector('button')

body[0].style.display = 'flex'
body[0].style.flexDirection = 'column'
body[0].style.justifyContent = 'center'
body[0].style.alignItems = 'center'
body[0].style.height = '100vh'

button.style.paddingTop = '10px'
button.style.paddingBottom = '10px'
button.style.paddingLeft = '20px'
button.style.paddingRight = '20px'
button.style.fontSize = '22px'
button.style.backgroundColor = 'transparent'
button.style.borderRadius = '5px'
button.style.cursor = 'pointer'

const color = ['red', 'blue', 'green', 'gray', 'yellow', "cyan", 'magenta', 'golden', 'gold', 'purple', 'pink']

button.addEventListener('click', clickFn)

function clickFn(){
    const index = Math.round(Math.random() * color.length)
    body[0].style.backgroundColor = color[index]
}
