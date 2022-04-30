
    var timerid;
    function debounce(getmovies,timer){
       if(timerid){
           clearTimeout(timerid)
       }
         timerid= setTimeout(function(){
            getmovies();
        },timer);
    }
    async function getmovies(){
        let name =document.querySelector("#search").value;
        try{
            let res =await fetch(`https://www.omdbapi.com/?apikey=b857b84&s=${name}`)
            let data = await res.json();
           if(data.Search==undefined){
               console.log(data.Search);
               error();
           }
           else{
               console.log(data.Search);
               appendData(data.Search);
           }
        }
        catch(err){
            console.log(err);
        }
    }
    function appendData(movies){
        var movie_box=document.createElement("div");
        // movie_box.innerHTML=null;
        movie_box.setAttribute("class","movie_box");
        var box = document.createElement("div");
        box.setAttribute("id","box");
        movies.map(function(ele){
            document.querySelector("#wraper").innerHTML=null;
            let combine =document.createElement("div");
            combine.setAttribute("class","combine");


            let left=document.createElement("div");
            left.setAttribute("class","left");

            let right =document.createElement("div");
            right.setAttribute("class","right");

            let title =document.createElement("p");
            title.textContent=`Title: ${ele.Title}`;

            let type=document.createElement("p");
            type.textContent=`Type: ${ele.Type}`;

            let rating=document.createElement("p");
            rating.textContent=`Rating: ${Math.round(Math.random()*10)} ⭐`;

            let poster=document.createElement("img");
            poster.src=ele.Poster;

            left.append(poster);

            right.append(title,type,rating);
            // box.append(left,right);
            combine.append(left,right);

            movie_box.append(combine);

            combine.addEventListener("click",function(){
                showMovie(ele);
            });

            document.querySelector("#wraper").append(movie_box);
            
        });

        function showMovie(movie){
           var combine_box= document.createElement("div");
           combine_box.setAttribute("id","combine_box");
          document.querySelector("#single_movie").innerHTML=null;
            
            let poster_div=document.createElement("div");
            poster_div.setAttribute("class","poster_div");

            let text_div=document.createElement("div");
            text_div.setAttribute("class","text_div");

            let poster=document.createElement("img");
            poster.src=movie.Poster;

            let title =document.createElement("p");
            title.textContent=`Title: ${movie.Title}`;

            let type=document.createElement("p");
            type.textContent=`Type: ${movie.Type}`;

            let rating=document.createElement("p");
            rating.textContent=`Rating: ${Math.round(Math.random()*10)} ⭐`;

            text_div.append(title,type,rating);

            poster_div.append(poster);

            combine_box.append(poster_div,text_div);

            document.querySelector("#single_movie").append(combine_box)
        }   
    }
    function error(){
        document.querySelector("#wraper").innerHTML=null;
            let err_div=document.createElement("div");
            err_div.setAttribute("id","err_div");

            let err_img =document.createElement("img");
            err_img.setAttribute("clas","err_img");

            err_img.src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740";

            err_div.append(err_img);

            document.querySelector("#wraper").append(err_div);
            console.log("error");

        }
