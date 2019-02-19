import React, { Component, Fragment } from "react";
import "./Slideshow.css";
let store = [
  {
    imageUrl:
      "https://www.brainyquote.com/photos_tr/en/t/thomaspaine/386293/thomaspaine1.jpg",
    caption: "Image 1"
  },
  {
    imageUrl:
      "https://wwwimage-secure.cbsstatic.com/thumbnails/photos/770xh/powerful-men.jpg",
    caption: "Image 2"
  },
  {
    imageUrl:
      "https://media2.mensxp.com/media/content/2017/Nov/quotes-that-prove-even-real-men-can-fall-in-love-740x500-5-1512047966.jpg",
    caption: "Image 3"
  }
];
class Slideshow extends Component {
  state = {
    slideIndex: 1
  };
  updateSlide = number => () => {
    const { slideIndex } = this.state;
    let nextSlide;
    switch (number) {
      case 1:
        nextSlide = slideIndex + 1;
        break;
      case -1:
        nextSlide = slideIndex - 1;
        break;
      default:
        nextSlide = slideIndex;
    }
    if (nextSlide > store.length) nextSlide = 1;
    if (nextSlide < 1) nextSlide = store.length;

    this.setState({ slideIndex: nextSlide });
  };
  jumpToSlide = (index) => () => {
    this.setState({ slideIndex: index + 1})
  };
  render() {
    const { slideIndex } = this.state;
    return (
      // Slideshow Container
      <Fragment>
        <div className="slideshow-container">
          {/* Full width images with number and caption */}
          {store.map(({ imageUrl, caption }, index) => (
            <div
              className={`mySlides fade ${slideIndex  === index + 1  ? "show" : ""}`}
              key={index}
            >
              <div className="numbertext">
                {" "}
                {`${index + 1}/${store.length}`}{" "}
              </div>
              <img src={imageUrl} alt={caption} className = 'slideshow-image' />
              <div className="text"> {caption} </div>
            </div>
          ))}
          {/* Next and previous Buttons */}
          <button className="prev" onClick={this.updateSlide(-1)}>
            {" "}
            &#10094;{" "}
          </button>
          <button
            href="www.google.com"
            className="next"
            onClick={this.updateSlide(1)}
          >
            {" "}
            &#10095;{" "}
          </button>
        </div>
        {/* Dots */}
        <div className="dot-container">
          {store.map((x, i) => (
            <span className="dot" onClick={this.jumpToSlide(i)} key={i} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Slideshow;
