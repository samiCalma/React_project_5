import React from "react";
import memesData from "./memesData";

export default function Meme () {
const [memeImage, setmemeImage] = React.useState('')
function getMemeImages () {
 setmemeImage(function(){
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random()*memesArray.length);
    let randomImage = memesArray[randomNumber].url;
    return randomImage
  })
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
          <img src= {memeImage} />
        </div>
        </div>
    )
}