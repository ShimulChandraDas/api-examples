const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);
    // clear data
    searchField.value = ' ';
    if (searchText == '') {
        alert('input your food')
    } else {
        //load data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

        //console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
    }

}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = '';
    searchResult.textContent = ''


    /* if (meals.legnth == 0) {
        console.log('input your food');
    } */

    meals.forEach(meal => {
        //console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick= "loadMealDetails(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
    `;
        searchResult.appendChild(div);
    });
}

const loadMealDetails = async mealId => {
    //console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0])

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetail(data.meals[0]))
}
const displayMealDetail = meal => {
    //console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
             <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
             <a href="${meal.strYoutube}" class="btn btn-primary"> Visit Toutube</a>
         </div>
    `;
    mealDetails.appendChild(div);
}


const bondCode = ` I am Fake James bond . My new code is: 00${7 + 1 + 2}`

const data = { result: [{ userName: { title: 'Mr.', name: "sakib khan" } }] };
//console.log(data.result[0].userName.name);
const p = [1, 2, 3];
const q = p.map(n => Math.pow(n, 3));
//console.log(q);

// const path = "images/cat.jpg"; 
// const div= document.createElement('div');
// div.innerHTML = `<img src=__?__ alt = "">`;

//const url = `https://www.themealdb.com/api/json/v1/1/search.php?s={food}` 

const info = { name: "", phoneNumber: null };
//console.log(JSON.stringify(info));


const array = { hobbies: ["dancing", "singing", "acting"] };
//console.log(JSON.stringify(array));


//console.log(JSON.stringify({ eventName: "birthday", date: Date().tomorrow() }));
console.log(JSON.stringify({ eventName: "birthday", date: new Date() }));
//console.log(JSON.stringify({ eventName: "birthday", date: Date() }));
//console.log(JSON.stringify({ eventName: "birthday", date: '2022-02-21' }));



