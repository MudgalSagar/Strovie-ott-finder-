
import React from "react";
import CarouselGenre from "../components/CarouselGenre";

const FeaturedMovies = ({ onPosterClick }) => {
  const genres = {
    Action: [
      { title: "Inception", poster: "/posters/inception.jpg" },
      { title: "The Dark Knight", poster: "/posters/darkknight.jpg" },
      {title: "Sinners" , poster: "/posters/sinners.jpg"},
      {title: "Game of Thrones" , poster: "/posters/GOT.jpg"},
      {title: "Man Of Steel", poster: "/posters/MOS.jpg"},
      {title: "WarFare" , poster: "/posters/warfare.jpg"},
      {title: "Superman" , poster: "/posters/superman.jpg"},
      {title: "Maalik" , poster: "/posters/maalik.jpg"},
      
    ],
    Drama: [
      { title: "Parasite", poster: "/posters/parasite.jpg" },
      { title: "The Social Network", poster: "/posters/socialnetwork.jpg" },
      { title: "Untamed", poster: "/posters/untamed.jpg" },
      { title: "The Summer I Turned Pretty", poster: "/posters/summer.jpg" },
      { title: "One Piece", poster: "/posters/onepiece.jpg" },
      { title: "Supernatural", poster: "/posters/supernatural.jpg" },
      { title: "House", poster: "/posters/house.jpg" },
      { title: " Sitaare Zameen Par", poster: "/posters/sitare.jpg" },
    ],
    Comedy: [
      { title: "3 Idiots", poster: "/posters/idiots.jpg" },
      { title: "Ready", poster: "/posters/ready.jpg" },
      { title: " Rick and Morty", poster: "/posters/rick.jpg" },
      { title: "Friends", poster: "/posters/friends.jpg" },
      { title: "Shameless", poster: "/posters/shameless.jpg" },
      { title: "The Simpsons", poster: "/posters/simpson.jpg" },
      { title: "How I Met Your Mother", poster: "/posters/ted.jpg" },
      { title: "Brooklyn Nine-Nine", poster: "/posters/jake.jpg" },
    ],
    Thriller: [
      { title: "Money Heist", poster: "/posters/moneyheist.jpg" },
      { title: "Stranger Things", poster: "/posters/stranger.jpg" },
      { title: "Squid Game", poster: "/posters/game.jpg" },
      { title: "The Last of Us", poster: "/posters/lastofus.jpg" },
      { title: "Breaking Bad", poster: "/posters/breakingbad.jpg" },
      { title: "True Detective", poster: "/posters/detective.jpg" },
      { title: "Prison Break", poster: "/posters/prisonbreak.jpg" },
      { title: "Dark", poster: "/posters/dark.jpg" },
    ],
  };

  return (
    <div>
      {Object.entries(genres).map(([genre, movies]) => (
        <CarouselGenre
          key={genre}
          genreTitle={genre}
          movies={movies}
          onPosterClick={onPosterClick}
        />
      ))}
    </div>
  );
};

export default FeaturedMovies;
