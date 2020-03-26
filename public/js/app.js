const weatherForm = document.querySelector('form')
const searchTerm = document.querySelector('input')
const messageOne = document.getElementById('message-1')
var messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    messageOne.textContent="Loading..."
    messageTwo.textContent=''

    fetch('/weather?address='+searchTerm.value+'').then((response)=>{
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