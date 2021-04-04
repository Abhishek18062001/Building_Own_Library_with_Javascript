function $(selector)   
{
  const self = {
    element: document.querySelector(selector),
    html: ()=> self.element,    // making anonymous function
    // calling anonymous function
    on: (event, callback) => {
      self.element.addEventListerner().
      // to give listerner fire
    },
    hide: ()=> {                      //making function anonymous
      self.element.style.display = 'none'
    },
    attr: (name, value) => {  // calling function
      if(value == null)
        return self.element.getAttribute(name)

      else
        self.element.setAttribute(name, value)
    }
  
}
  return self
}
//class selector ends
// Example library calls
$('h1').attr('class', 'new-class')

console.log($('h1').attr('class'))

$('h2').hide()  // to hide h2 on call

$('h3').on('click', function()
{
  alert("I was clicked")
  // on click listerner fire 
})