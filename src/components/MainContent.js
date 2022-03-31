import React from 'react'
import MemesData from '../memesData.js'

const MainContent = () => {
    
    //state
    const [memimg, setMemImg] = React.useState("https://i.imgflip.com/9ehk.jpg") 

    const [formData, setFormData] = React.useState({
        "topText":"","bottomText":""
    })

    //event handler
    function handleClick() {
        const memesImage = MemesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesImage.length)
        const url = memesImage[randomNumber].url
        setMemImg(url)
    }

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevState => {
        return {
            ...prevState,
            [name]: value
        }})
    }

    return (
      <main>
          <div className='form'>
              <input 
                type="text" 
                name="topText" 
                value={formData.topText} 
                onChange={handleChange} 
                placeholder="Top Text" 
                className='form--input' 
              />
              <input 
                type="text" 
                name="bottomText" 
                value={formData.bottomText} 
                onChange={handleChange} 
                placeholder="Bottom Text" 
                className='form--input'
              />
              <button onClick={handleClick} className='form--button'>Get a new meme image 🖼</button>
          </div>
          <div className='meme'>
              <img src={memimg} className='meme--image' alt='Click on "Get New meme Image" button'/>
              <h2 className='meme--text top'>{formData.topText}</h2>
              <h2 className='meme--text bottom'>{formData.bottomText}</h2>
          </div>
      </main>
  )
}

export default MainContent