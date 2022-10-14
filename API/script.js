function getMeowFacts(url) {
    return fetch(url).then(function (response) {
        return response.json();
    });
}

getMeowFacts('https://meowfacts.herokuapp.com/').then((response) => {
    console.log('odgovor', response);
}).catch((err)=> {
    console.log('An error has ocurred', err);
});
