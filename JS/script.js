let attempts = 0, randomNumber
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btAttempt = document.querySelector("#btAttempt")
const btTry = document.querySelector("#btTry")
btAttempt.addEventListener('click', handleTryClick)
btTry.addEventListener('click', handleResetClick)

random()

function handleTryClick(event) {

    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) <= 0 || Number(inputNumber.value) > 20){
        attempts--
        alert(`Os valores aceitos só são entre 1 e 20 valor ${inputNumber.value} não é aceito`)
    }

    attempts++

    if(Number(inputNumber.value) == randomNumber){

        if(attempts == 1){

            document.querySelector("h2").innerText = `Você acertou em ${attempts} tentativa!`
            
        } else{

            document.querySelector("h2").innerText = `Você acertou em ${attempts} tentativas!`

        }

        screen()

    }

    document.querySelector("#attempt").innerText = `Tentativas executada: ${attempts}`

    inputNumber.value = ""
}

function handleResetClick() {

    screen()
    random()
    attempts = 0

}

function random() {

    randomNumber = Math.round(Math.random() * (1,20))
    
}

function screen(){

    document.querySelector("#attempt").innerText = ""
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

}