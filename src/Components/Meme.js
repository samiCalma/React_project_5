import React from "react";
import memesData from "./memesData";

export default function Meme () {
const [meme, setMeme] = React.useState({
  topText: "",
  bottomText: "",
  randomImage:"http://i.imgflip.com/1bij.jpg"

})
const[allMemeImages,setAllMemeImages] = React.useState(memesData)
function getMemeImages () {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random()*memesArray.length);
    let randomImages = memesArray[randomNumber].url;
    setMeme(prevState => ({...prevState, 
      randomImage: randomImages}))
    
 
}

    return(
        <div>
      <div className="form-container">
          <div className="form" >
            <form>
            <label for= "bottom-text" ></label>
            <input input = "bottom-text" type="text" placeholder="top text"/>
            </form>
            
          </div>
        <div className="form" >
              <form> 
                <label for='add'></label>
                <input id= "top-text" type="text" placeholder="Add text"/>
                </form>
           </div>
        </div>
        <div className="btns">
            <button onClick={getMemeImages}className="btn">Get a new meme image <i class="fas fa-image"></i>
            </button>
        </div>
        <div className="image-container">
          <img src= {meme.randomImage} />
        </div>
        </div>
    )
}