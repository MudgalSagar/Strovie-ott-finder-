import React from "react";
import Slider from "react-slick";
import "./FeaturedMovies.css"; 

const CarouselGenre = ({ genreTitle, movies, onPosterClick }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
  
  return (
    <div className="featured-section"> 
      <h2>{genreTitle}</h2>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index} className="slick-slide">
            <div
              className="featured-card" 
              onClick={() => onPosterClick(movie.title)}
            >
              <img src={movie.poster} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselGenre;
