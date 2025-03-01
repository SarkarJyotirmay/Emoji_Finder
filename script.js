import { emojiList } from "./emojis.js";

let emojiContainer = document.querySelector(".emoji-container");

const filters = Array.from(document.querySelectorAll("li"));

const searchInput = document.querySelector("input");

//! show all emojis by default 
displayEmojis(emojiList);


//! add event on filters
filters.forEach((filter) => {
  filter.addEventListener("click", (e)=>{
    const filterName = e.target.innerText.toLowerCase(); 
    
    // filetr the emojiList
    const filteredEmojis = search(emojiList, filterName);
    
    // pass filtered emojiList to display Function
    displayEmojis(filteredEmojis)
  })
});

//! add event on search input
searchInput.addEventListener("keyup",(e)=>{
    let filterName = e.target.value.toLowerCase();
    let filteredEmojis = search(emojiList, filterName);
    displayEmojis(filteredEmojis);
        
})


//* display emoji function
function displayEmojis(arr) {
    emojiContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();
  
    arr.forEach((obj) => {
      const emoji = document.createElement("span");
      emoji.style.fontSize = "4rem"
      emoji.innerText = obj.emoji;
      fragment.append(emoji);
    });
    emojiContainer.append(fragment);
  }

//* emoji filter function
function search(emojiList, filterName){
    if(filterName === "all"){
        return emojiList;
    }
  let arr =  emojiList.filter((obj)=>{
        if(obj.description.includes(filterName)) {
            return true
        }
        else if(obj.category.includes(filterName)){
            return true;
        }
        else if(obj.aliases.join("").includes(filterName)){
            return true;
        }
        else if(obj.tags.join("").includes(filterName)){
            return true;
        }

    })
    return arr;
}



