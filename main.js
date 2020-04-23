const xxx='https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg'

const availablePets = [
    {
    image: 'https://pbs.twimg.com/profile_images/378800000575072875/d00489c579174e37b1b630425d93e19c_400x400.jpeg',
    name: 'Skoshi',
    color: 'black',
    skill: 'incessant wagging',
    type: 'Dog',
    },
    {
    image: 'https://pbs.twimg.com/profile_images/378800000684964142/a873c148acdfab1357b84fc8e2345db6_400x400.jpeg',
    name: 'Spunky',
    color: 'black & white',
    skill: 'being hyper',
    type: 'Cat',
    },
    {
    image: 'https://pbs.twimg.com/profile_images/3511764721/73d05ef2e616cb903a88a2bb935f68f3_400x400.jpeg',
    name: 'Nigel',
    color: 'white',
    skill: 'cuteness',
    type: 'Dog',
    },
    {
    image: 'https://pbs.twimg.com/profile_images/418947412493729792/HrBPum3N_400x400.jpeg',
    name: 'George',
    color: 'orange',
    skill: 'plays fetch',
    type: 'Cat'
    },
    {
    image: 'https://pbs.twimg.com/profile_images/2894698628/04d8571f58d74b957aa609795f8cb542_400x400.png',
    name: 'Oscar',
    color: 'gold',
    skill: 'silence',
    type: 'Fish',
    },
    {
    image: 'https://pbs.twimg.com/profile_images/2707796263/6d802927dc43d8a87cdf518364e3d96e_400x400.png',
    name: 'Oliver',
    color: 'grey',
    skill: 'hunger',
    type: 'Cat'
    }
]

const buildCards = (array) => {
    let domString = '';
    for (let i=0; i<array.length; i++) {
        domString += '<div class="card">';
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