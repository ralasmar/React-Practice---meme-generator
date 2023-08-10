import React from "react"
import memesData from "../memesData.js"

export default function Meme(){
    //create a new state called "memeImage" with an empty string as default
    const [memeImage, setMemeImage] = React.useState("")
    
    //function to generate a random meme
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // when function is called, update the 'memeImage' state to be the random chosen image URL
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    className="form--input"  
                    placeholder="Top text"  
                />
                <input 
                    type="text"
                    className="form--input" 
                    placeholder="Bottom text"   
                />
                <button 
                className="form--button"
                onClick={getMemeImage}
                >Get a new meme image</button>
            </div>
            <img src={memeImage} className="meme--image" />
        </main>
    )
}