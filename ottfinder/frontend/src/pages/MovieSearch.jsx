import React, { useState } from "react";
import axios from "axios";
import CompareModal from "../components/CompareModal";
import "./style/MovieSearch.css";
import FeaturedMovies from "../components/FeaturedMovies";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieSearch = () => {
  const [title, setTitle] = useState("");
  const [trailer, setTrailer] = useState("");
  const [details, setDetails] = useState("");
  const [ottPlatform, setOttPlatform] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false);
  const [loadingBook, setLoadingBook] = useState(false);
  const [bookContent, setBookContent] = useState("");
  const [showFeatured, setShowFeatured] = useState(true);
  const [loading, setLoading] = useState(false);

  const handlePosterClick = async (movieTitle) => {
    setShowFeatured(false);
    setLoading(true);
    try {
      const trailerRes = await axios.get(
        `http://localhost:5000/api/movie/trailer/${movieTitle}`
      );
      setTrailer(trailerRes.data);
    } catch (err) {
      console.error("error in fetching the trailer", err);
    }
    try {
      const ottRes = await axios.get(
        `http://localhost:5000/api/movie/ott/${movieTitle}`
      );
      setOttPlatform(ottRes.data);
    } catch (err) {
      console.error("error in fetching the otts", err);
    }
    try {
      const detailRes = await axios.get(
        `http://localhost:5000/api/movie/details/${movieTitle}`
      );
      setDetails(detailRes.data);
    } catch (err) {
      console.error("error in fetching the details", err);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowFeatured(false);
    setLoading(true);
    try {
      const trailerres = await axios.get(
        `http://localhost:5000/api/movie/trailer/${title}`
      );
      setTrailer(trailerres.data);
    } catch (err) {
      console.error("error in getting details", err);
    }

    try {
      const detailres = await axios.get(
        `http://localhost:5000/api/movie/details/${title}`
      );
      setDetails(detailres.data);
    } catch (err) {
      console.error("error in getting details", err);
    }

    try {
      const ottPlatformRes = await axios.get(
        `http://localhost:5000/api/movie/ott/${title}`
      );
      setOttPlatform(ottPlatformRes.data);
    } catch (err) {
      console.error("error in getting ott platforms", err);
    }
    setTitle("");
    setLoading(false);
  };
  const generateBook = async () => {
    setLoadingBook(true);
    setBookContent("");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/movie/generate-book",
        {
          title: details.Title,
          plot: details.Plot,
        }
      );
      setBookContent(res.data.bookText);
    } catch (err) {
      console.error("error in generating the book ", err);
      setBookContent("unable to generate the content");
    } finally {
      setLoadingBook(false);
    }
  };

  return (
    <div className="background-content">
      <div className="movie-search-container">
        {/* 
    <img src="/cinema.jpg"
    alt="cinemaabsolute"
    className="cinema-image" />
    */}
        <form onSubmit={handleSubmit} className="search-form">
          <input
            className="search-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter movie title..."
          />
          <button type="submit" className="btn search-btn">
            <i className="fas fa-search"></i> Search
          </button>
          <button
            type="button"
            className="btn compare-btn"
            onClick={() => setShowModal(true)}
          >
            <i className="fas fa-exchange-alt"></i> Compare
          </button>
        </form>
        {showFeatured && <FeaturedMovies onPosterClick={handlePosterClick} />}

        {loading ? (
          <div className="skeleton-card">
            <div className="skeleton-header">
              <div className="skeleton-title"></div>
              <div className="skeleton-meta">
                <div className="skeleton-meta-item"></div>
                <div className="skeleton-meta-item"></div>
                <div className="skeleton-meta-item"></div>
              </div>
            </div>

            <div className="skeleton-content">
              <div>
                <div className="skeleton-poster"></div>
                <div className="skeleton-ratings">
                  <div className="skeleton-rating"></div>
                  <div className="skeleton-rating"></div>
                </div>
              </div>

              <div className="skeleton-info">
                <div className="skeleton-info-row">
                  <div className="skeleton-info-item">
                    <div className="skeleton-label"></div>
                    <div className="skeleton-value"></div>
                  </div>
                  <div className="skeleton-info-item">
                    <div className="skeleton-label"></div>
                    <div className="skeleton-value"></div>
                  </div>
                </div>

                <div className="skeleton-info-row">
                  <div className="skeleton-info-item">
                    <div className="skeleton-label"></div>
                    <div className="skeleton-value"></div>
                  </div>
                </div>

                <div className="skeleton-plot">
                  <div className="skeleton-plot-title"></div>
                  <div className="skeleton-plot-text"></div>
                  <div className="skeleton-plot-text"></div>
                  <div className="skeleton-plot-text"></div>
                  <div className="skeleton-plot-text"></div>
                </div>
              </div>
            </div>

            <div className="skeleton-button"></div>
          </div>
        ) : details ? (
          <div className="movie-details">
            <div className="movie-header">
              <h2 className="movie-title">
                {details.Title}{" "}
                <span className="movie-year">({details.Year})</span>
              </h2>
              <div className="movie-meta">
                <span className="movie-rating">{details.Rated}</span>
                <span className="movie-runtime">{details.Runtime}</span>
                <span className="movie-genre">{details.Genre}</span>
              </div>
            </div>

            <div className="movie-content">
              <div className="movie-poster-container">
                <img
                  src={details.Poster}
                  alt={details.Title}
                  className="movie-poster"
                />
                <div className="movie-ratings">
                  <div className="rating-item">
                    <span className="rating-source">IMDb</span>
                    <span className="rating-value">{details.imdbRating}</span>
                  </div>
                  <div className="rating-item">
                    <span className="rating-source">Rotten Tomatoes</span>
                    <span className="rating-value">
                      {details.Ratings?.find(
                        (r) => r.Source === "Rotten Tomatoes"
                      )?.Value || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="movie-info">
                <div className="info-row">
                  <div className="info-item">
                    <span className="info-label">Released</span>
                    <span className="info-value">{details.Released}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Director</span>
                    <span className="info-value">{details.Director}</span>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-item">
                    <span className="info-label">Actors</span>
                    <span className="info-value">{details.Actors}</span>
                  </div>
                </div>

                <div className="plot-section">
                  <h4 className="section-title">Plot</h4>
                  <p className="movie-plot">{details.Plot}</p>
                </div>

                <div className="info-row awards-row">
                  <div className="info-item">
                    <span className="info-label">Awards</span>
                    <span className="info-value">{details.Awards}</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="convert-btn"
              type="button"
              onClick={() => setShowBookModal(true)}
            >
              Click to Read this as book
            </button>
          </div>
        ) : null}

        {showBookModal && (
          <div className="model-overlay">
            <div className="model-content">
              <h3>{details.title}</h3>
              <div className="book-content">
                {loadingBook ? (
                  <p>Loading Book please wait ...</p>
                ) : (
                  <p> {bookContent} </p>
                )}
              </div>
              <button
                onClick={generateBook}
                disabled={loadingBook}
                className="convert-btn"
              >
                {loadingBook ? "Generating..." : "Generate Book"}
              </button>

              <button
                style={{ color: "white", padding: "4px", borderRadius: "2px" }}
                onClick={() => setShowBookModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {ottPlatform.length > 0 && (
          <div className="ott-section">
            <h3 className="section-title">Available on</h3>
            <div className="ott-platforms">
              {ottPlatform.map((platform) => (
                <a
                  key={platform.source_id}
                  href={platform.web_url}
                  target="_blank"
                  rel="noreferrer"
                  className="ott-platform"
                >
                  <span className="platform-name">{platform.name}</span>
                  <i className="fas fa-external-link-alt"></i>
                </a>
              ))}
            </div>
          </div>
        )}

        {trailer && (
          <div className="trailer-section">
            <h3 className="section-title">Trailer: {trailer.trailerTitle}</h3>
            <div className="trailer-container">
              <iframe
                className="trailer-iframe"
                src={`https://www.youtube.com/embed/${
                  trailer.trailerUrl.split("v=")[1]
                }`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Trailer"
              ></iframe>
            </div>
          </div>
        )}

        {showModal && <CompareModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
};

export default MovieSearch;
