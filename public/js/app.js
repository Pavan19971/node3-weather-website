console.log("client side javascrpit loaded")




const weatherForm = document.querySelector('form')
const searchTerm = document.querySelector('input')
const messageOne = document.getElementById('message-1')
 messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    messageOne.textContent="Loading..."
    messageTwo.textContent=''
    fetch('http://localhost:3000/weather?address='+searchTerm.value+'').then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
            
        }
        else
        {
        messageOne.textContent=data.forecast
        messageTwo.textContent = data.location
        }
    })
})
})