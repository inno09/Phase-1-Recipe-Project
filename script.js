
// Introducing the DOMContentLoaded event
document.addEventListener("DOMContentLoaded",() => {
    const meal1Title = document.getElementById("meal1title")
    const meal1Image = document.getElementById("meal1img")
    
    const meal2Title = document.getElementById("meal2title")
    const meal2Image = document.getElementById("meal2img")

    const meal3Title = document.getElementById("meal3title")
    const meal3Image = document.getElementById("meal3img")

    const meal4Title = document.getElementById("meal4title")
    const meal4Image = document.getElementById("meal4img")
    
    const meal5Title = document.getElementById("meal5title")
    const meal5Image = document.getElementById("meal5img")

    const meal6Title = document.getElementById("meal6title")
    const meal6Image = document.getElementById("meal6img")

    const meal7Title = document.getElementById("meal7title")
    const meal7Image = document.getElementById("meal7img")

    const meal8Title = document.getElementById("meal8title")
    const meal8Image = document.getElementById("meal8img")

    const meal9Title = document.getElementById("meal9title")
    const meal9Image = document.getElementById("meal9img")

    const meal10Title = document.getElementById("meal10title")
    const meal10Image = document.getElementById("meal10img")

    const meal11Title = document.getElementById("meal11title")
    const meal11Image = document.getElementById("meal11img")

    const meal12Title = document.getElementById("meal12title")
    const meal12Image = document.getElementById("meal12img")

    const foodURL = "https://themealdb.com/api/json/v1/1/filter.php?c=Lamb"
    

        // See the first beer's details, including its name, image, description, and reviews, when the page loads.
      // fetch beer data from the server.  
      fetch(foodURL)
        .then(response => response.json())
        .then((meals)=>{
            console.log(meals.meals[0].strCategory);
        meal1Title.textContent = meals.meals[0].strMeal
        meal1Image.src = meals.meals[0].strMealThumb

        
        
        meal2Title.textContent = meals.meals[1].strMeal
        meal2Image.src = meals.meals[1].strMealThumb


        meal3Title.textContent = meals.meals[2].strMeal
        meal3Image.src = meals.meals[2].strMealThumb

        meal4Title.textContent = meals.meals[3].strMeal
        meal4Image.src = meals.meals[3].strMealThumb

        meal5Title.textContent = meals.meals[4].strMeal
        meal5Image.src = meals.meals[4].strMealThumb

        meal6Title.textContent = meals.meals[5].strMeal
        meal6Image.src = meals.meals[5].strMealThumb

        meal7Title.textContent = meals.meals[6].strMeal
        meal7Image.src = meals.meals[6].strMealThumb

        meal8Title.textContent = meals.meals[7].strMeal
        meal8Image.src = meals.meals[7].strMealThumb

        meal9Title.textContent = meals.meals[8].strMeal
        meal9Image.src = meals.meals[8].strMealThumb

        meal10Title.textContent = meals.meals[9].strMeal
        meal10Image.src = meals.meals[9].strMealThumb

        meal11Title.textContent = meals.meals[10].strMeal
        meal11Image.src = meals.meals[10].strMealThumb

        meal12Title.textContent = meals.meals[11].strMeal
        meal12Image.src = meals.meals[11].strMealThumb

        // document.getElementById("myBtn").addEventListener("click", function(){
        //     this.style.backgroundColor = "red";
        // });


        
        const allStars = document.querySelectorAll('.star')
        let currentRating= document.querySelector('.cuttent-rating')
        console.log(allStars);
        allStars.forEach((star, i)=> {
            star.addEventListener('click',function(){
                let currentStarLevel = i + 1;
                currentRating.innerHTML= `${currentStarLevel} 0f 5`
        
                allStars.forEach((star,j)=>{
                    if(currentStarLevel>=j+1){
                        star.innerHTML = '&#9733'
                    } else{
                        star.innerHTML = '&#9734'
                    }
                })
            })
        })

        
        

        }) 
    })
        



