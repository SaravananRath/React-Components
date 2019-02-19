import React, { Component, Fragment } from 'react'

let store = [
  {
    imageUrl: 'https://www.brainyquote.com/photos_tr/en/t/thomaspaine/386293/thomaspaine1.jpg',
    caption: 'Image 1'
  },
  {
    imageUrl: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/770xh/powerful-men.jpg',
    caption: 'Image 2'
  },
  {
    imageUrl: 'https://media2.mensxp.com/media/content/2017/Nov/quotes-that-prove-even-real-men-can-fall-in-love-740x500-5-1512047966.jpg',
    caption: 'Image 3'
  }
]
class Slideshow extends Component {
  plusSlides = (number) => () => {

  }
  currentSlide = (number) => () => {

  }
  render(){
    return(
      // Slideshow Container
      <Fragment>
        <div className = 'slideshow-container'>
          {/* Full width images with number and caption */}
          {store.map( ({ imageUrl, caption }, index) => <div className = 'mySlides fade' key = { index }>
            <div className = 'numbertext'> { `${index + 1}/${store.length}` } </div>
            <img src = { imageUrl } alt = { caption } style={{ width:'100%' }} />
            <div className = 'text'> { caption } </div>
          </div>)}
          {/* Next and previous Buttons */}
          <button className = 'prev' onClick = { this.plusSlides(-1)}> &#10094; </button>
          <button href='www.google.com' className = 'next' onClick = { this.plusSlides(1)}> &#10095; </button>

        </div>
        <div style = {{ textAlign:'center'}}>
          {
            store.map((x,i) => 
              <span className = 'dot' onClick = {this.currentSlide(i)} key={i}></span>
            )
          }
        </div>
      </Fragment>
    )
    }
}

export default Slideshow