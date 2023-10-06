// Pegando os elementos DOM
const inputElement = document.querySelector('#input')
const fromElement = document.querySelector('#from')
const toElement = document.querySelector('#to')
const converterBtn = document.querySelector('#converter')
const resultElement = document.querySelector('#result')
const messageElement = document.querySelector('#message')

function converter(){
    const fromValue = fromElement.value
    const toValue = toElement.value
    let meters

    if(fromValue === toValue){
        resultElement.value = inputElement.value
        return;
    }

    switch(fromValue){
        case "m":
            meters = inputElement.value
            break
        case "km": 
            meters = inputElement.value * 1000
            break
        case "cm":
            meters = inputElement.value / 100
            break
        case "mm":
            meters = inputElement.value / 1000
    }

    let result
    switch(toValue){
        case "m":
            result = meters
            break
        case "km":
            result = meters / 1000
            break
        case "cm":
            result = meters * 100
            break
        case "mm":
            result = meters * 1000
            break
    }

    resultElement.value = result

    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel = toElement.options[toElement.selectedIndex].text

    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`

    messageElement.textContent = message

    console.log(fromValue, toValue)
    console.log(meters )
}

converterBtn.addEventListener('click', converter)