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

    const [allMemes, setAllMemes] = React.useState([])

    //want api request to happen as soon as component loads
    React.useEffect(() => {
        //make an api call to memes link
        fetch("http://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    //empty depencencies array
    },[])
    
    //function to generate a random meme
    function getMemeImage(){
        const randomNumber =  Math.floor(Math.random() * allMemes.length)
        // when function is called, update the 'memeImage' state to be the random chosen image URL
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    className="form--input"  
                    placeholder="Top text"
                    name="topText"  
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    className="form--input" 
                    placeholder="Bottom text"  
                    name="bottomText" 
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                    >Get a new meme image
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </main>
    )
}