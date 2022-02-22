const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    //const countries
    //console.log(countries);
    const devCountries = document.getElementById('countries');
    /* 
    for (const country of countries) {
         console.log(country);
     } 
     */
    countries.forEach(country => {
        // console.log(country.name.common);
        const div = document.createComment('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        h3.innerText = country.name.common
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital
        div.appendChild(p);
        devCountries.appendChild(div);

    });
}