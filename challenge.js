
      ( 
        async () => {
        
          var rawUsers = await fetch('https://jsonplaceholder.typicode.com/users');
          var users = await rawUsers.json();
          console.log(users);

          var rawTodo = await fetch('https://jsonplaceholder.typicode.com/todos');
          var toDo = await rawTodo.json();
          console.log(toDo);
        
          
          // 1ere boucle pour rajouter un paragraphe (!rajouter un paragraphe en virtuel...)
          
          for (var i = 0; i<users.length; i++)
          {       
              document.getElementById("nomprenom");
              var test = document.createElement("p")
              test.setAttribute("id", users[i].id);
              document.body.appendChild(test);
              var newText = document.createTextNode(users[i].name);
              console.log (newText);
              test.appendChild( newText );
  


          }




          // 2e boucle pour compter les OK et KO (!comptage = compteur...type de données)
          var completenessok = 0;
          var completenessKO = 0;

          for (var i = 0; i<toDo.length; i++)
          {       
              if(toDo[i].completed == true){
                completenessok ++
              }
              else{
                completenessKO ++
              }


          };

          var ctx = document.getElementById("myChart");

          new Chart(ctx, {
            type: 'doughnut',
            data: {
               labels: ["Ok", "KO"],
               datasets: [{
                   data: [completenessok, completenessKO],
                   backgroundColor: [
                    '#26de81',
                    '#fd9644',
                   ],
                   borderColor: [
                     '#0fa859',
                     '#e07828',
                   ],
                   borderWidth: 2
               }]
            }
        });

        //Au clic
        var tableauTOTAL = [];


                  // 2e condition soit else if soit un if global
        for(var i=0; i<document.getElementsByTagName('p').length; i++) {

          document.getElementsByTagName('p')[i].addEventListener("click", 
            function(){ 

              console.log(this.id);
              var people = this.id;

              var completenessok = 0;
              var completenessKO = 0;
    
              for (var i = 0; i<toDo.length; i++)
              {      
                  if(toDo[i].completed == true && toDo[i].userId == this.id){
                    completenessok ++
                  }
                  else if(toDo[i].userId == this.id){
                    completenessKO ++
                  }

              };

              tableauTOTAL.push(completenessok, completenessok); 
              console.log(tableauTOTAL)
    
              var ctx = document.getElementById("Chart2");
    
              new Chart(ctx, {
                type: 'doughnut',
                data: {
                   labels: ["Ok", "KO"],
                   datasets: [{
                       data: [completenessok, completenessKO],
                       backgroundColor: [
                        '#26de81',
                        '#fd9644',
                       ],
                       borderColor: [
                         '#0fa859',
                         '#e07828',
                       ],
                       borderWidth: 2
                   }]
                }
            });


              
            }
          );


          
       
       }
       

        }
      )();

  







     
     







    
      