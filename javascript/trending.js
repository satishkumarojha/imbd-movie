    async function trendingMovies(){
        try{
            
        let res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=0b485a6ced82f0b9e21c411c7937e380&language=en-US`);
        let data = await res.json();
        console.log(data.results);
        appendMovies(data.results);
        }
        catch(error){
            console.log(error);

        }
       
    }
    trendingMovies();

    function appendMovies(movies){
        let container = document.querySelector("#trend_container");
        container.innerHTML="";
        movies.map(function(ele){
            // console.log(ele.poster_path);
            let poster_div=document.createElement("div");
            poster_div.setAttribute("class","poster_div");

            let text_div=document.createElement("div");
            text_div.setAttribute("class","text_div");

            let movie_box=document.createElement("div");
            movie_box.setAttribute("class","movie_box");

            let poster = document.createElement("img");
            poster.src=`https://image.tmdb.org/t/p/w500/${ele.poster_path}`;
            console.log(poster);

            let title =document.createElement("p");
            title.textContent=`Title : ${ele.title}`;

            let rating =document.createElement("p");
            rating.textContent=`Rating : ${ele.vote_average}`;

            let releasedate =document.createElement("p");
            releasedate.textContent=`Release Date : ${ele.release_date}`;

            poster_div.append(poster);
            text_div.append(title,rating,releasedate);
            movie_box.append(poster_div,text_div);
            document.querySelector("#trend_container").append(movie_box);

        })
           

        
    }
