import React from "react";

export default function Meme () {
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
            <button className="btn">Get a new meme image <i class="fas fa-image"></i>
            </button>
        </div>
        </div>
    )
}