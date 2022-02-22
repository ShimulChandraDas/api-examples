const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(rea => rea.json())
        .then(data => displayBuddies(data));
}
loadBuddies();

const displayBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy.name.first, buddy.name.last);
        const p = document.createElement('p');
        p.innerText = `
        First Name: ${buddy.name.first}, 
        Last Name: ${buddy.name.last},
        Email: ${buddy.email}
        `;
        //p.innerText = buddy.email;
        //p.innerText = buddy.name.first, buddy.name.last;
        buddiesDiv.appendChild(p);
    }
}