const availablePets = [
    {
    image: 'https://pbs.twimg.com/profile_images/378800000575072875/d00489c579174e37b1b630425d93e19c_400x400.jpeg',
    name: 'Skoshi',
    color: 'Black',
    skill: 'incessant wagger',
    type: 'Dog',
    },
    {
    image: 'https://pbs.twimg.com/profile_images/378800000684964142/a873c148acdfab1357b84fc8e2345db6_400x400.jpeg',
    name: 'Spunky',
    color: 'Black & white',
    skill: 'hyperactive monster',
    type: 'Cat',
    },
    {
    image: 'https://pbs.twimg.com/profile_images/3511764721/73d05ef2e616cb903a88a2bb935f68f3_400x400.jpeg',
    name: 'Nigel',
    color: 'White',
    skill: 'rich with cuteness',
    type: 'Dog',
    },
    {
    image: 'https://pbs.twimg.com/profile_images/418947412493729792/HrBPum3N_400x400.jpeg',
    name: 'George',
    color: 'Orange',
    skill: 'plays fetch',
    type: 'Cat'
    },
    {
    image: 'https://pbs.twimg.com/profile_images/2894698628/04d8571f58d74b957aa609795f8cb542_400x400.png',
    name: 'Oscar',
    color: 'Gold',
    skill: 'silence is his strength',
    type: 'Fish',
    },
    {
    image: 'https://pbs.twimg.com/profile_images/2707796263/6d802927dc43d8a87cdf518364e3d96e_400x400.png',
    name: 'Oliver',
    color: 'Grey',
    skill: 'hunger abounds',
    type: 'Cat'
    }
]

const buildCards = (array) => {
    let domString = '';
    for (let i=0; i<array.length; i++) {
        domString += `<div class="card ${availablePets[i].type}Card">`;
        domString += ` <div class="name">${availablePets[i].name}</div>`;
        domString += ' <div class="description">';
        domString += `  <div class="pet-pic"><img src="${availablePets[i].image}" alt="pet"></div>`;
        domString += `  <div class="pet-color">${availablePets[i].color}</div>`;
        domString += `  <div class="skill">${availablePets[i].skill}</div>`;
        domString += ` </div>`;
        domString += `  <div class="type type${availablePets[i].type}">${availablePets[i].type}</div>`;
        domString += '</div>';
    };
    return domString;
}

const printToDom = (loCation, content) => {
    const selectedDiv = document.querySelector(loCation);
    selectedDiv.innerHTML = content;
}

const init = () => {
    printToDom('#pet-grid', buildCards(availablePets))
}

init();

const hide = (hideDiv) => {
    let divName = `div.${hideDiv}`;
    let classes = document.querySelectorAll(divName);
    for (i=0; i < classes.length; i++) {
        classes[i].style.display = 'none';
    }
}

const showAll = () => {
    let classes = document.querySelectorAll('div.card');
    for (i=0; i < classes.length; i++) {
        classes[i].style.display = 'block';
    }
}


const showCats = () => {
    showAll();
    hide('DogCard');
    hide('FishCard')
}

const showDogs = () => {
    showAll();
    hide('CatCard')
    hide('FishCard')
}

const showFish = () => {
    showAll();
    hide('CatCard')
    hide('DogCard')   
}

