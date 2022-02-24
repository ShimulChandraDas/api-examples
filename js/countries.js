const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {

    const devCountries = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createComment('div');
        div.classList.add('country')
        div.ht
        /* const h3 = document.createElement('h3');
        h3.innerText = country.name.common
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital
        div.appendChild(p); */
        devCountries.appendChild(div);

    })
}