import React from "react";
export default function Meme(props) {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMeme, setAllMemes] = React.useState([])


    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])


    function getmeme() {
        const randommeme = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randommeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))



    }
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <div className={props.darkMode?"darkinp":"inp"}>
            <input type="text"
                placeholder="Top Text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
            />
            <input type="text"
                placeholder="Bottom Text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
            />
            <div className="btn" onClick={getmeme}>
                <button>Get a new Meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" className="memeImg" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}