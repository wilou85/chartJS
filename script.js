// Exo du cours 1
/*var ctx = document.getElementById("myChart");*/
/*new Chart(ctx, {
    type: 'doughnut',
    data: {
       labels: ["fr", "uk", "es", "it"],
       datasets: [{
           data: [12, 19, 3, 5],
           backgroundColor: [
            '#26de81',
            '#fd9644',
            '#fc5c65',
            '#4b6584'
           ],
           borderColor: [
             '#0fa859',
             '#e07828',
             '#dd252b',
             '#304256'
           ],
           borderWidth: 2
       }]
    }
});
*/

// Exo du cours 2 avec la var
// var ctx = document.getElementById("myChart");
/*
paysListe = [
    {
        nom: "France",
        capitale : "Paris",
        superficie : 643801,
        population : 66990000
    },
    {
        nom: "Espagne",
        capitale : "Madrid",
        superficie : 505990,
        population : 46940000 
    },
    {
        nom: "Italie",
        capitale : "Rome",
        superficie : 301338,
        population : 60360000 
    },
    {
      nom: "Royaume Unis",
      capitale : "Londres",
      superficie : 242495,
      population : 66650000 
    },
    {
      nom: "Allemagne",
      capitale : "Berlin",
      superficie : 357386,
      population : 83020000 
    }
];


var pays = []
var population = [] 


for (var i = 0; i<paysListe.length; i++)
{   
    pays.push(paysListe[i].nom);
    population.push(paysListe[i].population);
};



new Chart(ctx, {
    type: 'doughnut',
    data: {
       labels: pays,
       datasets: [{
           data: population,
           backgroundColor: [
            '#26de81',
            '#fd9644',
            '#fc5c65',
            '#4b6584',
            '#3498db'
           ],
           borderColor: [
             '#0fa859',
             '#e07828',
             '#dd252b',
             '#304256',
            '#2980b9'
           ],
           borderWidth: 2
       }]
    }
});*/






  
async () => {
    
      var rawResponse = await fetch('https://jsonplaceholder.typicode.com/users', { mode: 'cors' });
      var response = await rawResponse.json();
      console.log(response);
    
      /*for (var i = 0; i<response.length; i++)
      {   
        document.getElementById("nomprenom");
        var test = document.createElement("p");
        document.body.appendChild(test);
        var newText = document.createTextNode(response[i].name);
        test.appendChild( newText );
      };*/

    }
  
  


