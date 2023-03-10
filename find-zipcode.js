

let street = document.querySelector('#street');
let city = document.querySelector('#city');
let state = document.querySelector('#state');
let btnZipcode = document.querySelector('#btnFindZipcode');
let btnBackHome = document.querySelector('#btnBackHome');
let listZipcode = document.querySelector('#listZipcode');

btnZipcode.addEventListener('click', function (e) {
    e.preventDefault()

    let urlBase = 'https://viacep.com.br/ws/'
    let parameter = state.value + '/' + city.value + '/' + street.value + '/json/'
    let callback = '?callback=popularDontKnowMyZipcode'

    let script = document.createElement('script')
    script.src = urlBase + parameter + callback
    document.body.appendChild(script)
})

//btnBackHome.addEventListener('click', )

function popularDontKnowMyZipcode(resposta) {
    if (!Array.isArray(resposta)) {
        alert('The return isnt a list of Zipcodes')
        return
    }

    resposta.forEach(function (i) {
        let li = document.createElement('li')
        let address = i.logradouro + ' | ' + i.bairro + ' | ' + i.cep
        li.innerHTML = address
        listZipcode.appendChild(li)

    })

}

