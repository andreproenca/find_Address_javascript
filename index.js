let zipcode = document.querySelector('#zipcode');
let street = document.querySelector('#street');
let district = document.querySelector('#district');
let city = document.querySelector('#city');
let state = document.querySelector('#state');

zipcode.value = '01001000';



zipcode.addEventListener('blur', function (e) {

    let zipcode = e.target.value;

    if (zipcode.length < 8) {
        alert('Zipcode needs 8 digits')
        window.location.reload()
    }

    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/' + zipcode + '/json/?callback=popularForm';
    document.body.appendChild(script);
    console.log(zipcode.length)

})

function popularForm(response) {

    if ("erro" in response) {
        alert('Zipcode not find!');
        return;
    }

    street.value = response.logradouro;
    district.value = response.bairro;
    city.value = response.localidade;
    state.value = response.uf;

}
