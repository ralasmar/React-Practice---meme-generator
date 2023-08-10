import React from "react"
import memesData from "../memesData.js"

export default function Meme(){
    //create a new state called "memeImage" with an empty string as default
    //update our state to save the meme-related data as an object called 'meme' which these 3 properties: topText, bottomText, randomImage
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    
    //function to generate a random meme
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // when function is called, update the 'memeImage' state to be the random chosen image URL
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
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
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}