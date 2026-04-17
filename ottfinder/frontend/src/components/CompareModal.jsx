import React, { useState } from "react";
import axios from "axios";
import "./CompareModal.css";
const CompareModal = ({ onClose }) => {
  const [movie1, setMovie1] = useState("");
  const [movie2, setMovie2] = useState("");
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!movie1 || !movie2) return;
    
    setIsLoading(true);
    try {
      const [res1, res2] = await Promise.all([
        axios.get(`http://localhost:5000/api/movie/details/${movie1}`),
        axios.get(`http://localhost:5000/api/movie/details/${movie2}`)
      ]);
      setData1(res1.data);
      setData2(res2.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderComparisonRow = (label, field, isHighlighted = true) => {
    if (!data1 || !data2) return null;
    
    const value1 = data1[field];
    const value2 = data2[field];
    const isWinner1 = isHighlighted && typeof value1 === 'string' 
      ? value1.localeCompare(value2) > 0 
      : parseFloat(value1) > parseFloat(value2);
    const isWinner2 = isHighlighted && typeof value1 === 'string' 
      ? value2.localeCompare(value1) > 0 
      : parseFloat(value2) > parseFloat(value1);

    return (
      <tr>
        <td className="comparison-label">{label}</td>
        <td className={`comparison-value ${isHighlighted && isWinner1 ? 'winner' : ''}`}>
          {value1 || 'N/A'}
        </td>
        <td className={`comparison-value ${isHighlighted && isWinner2 ? 'winner' : ''}`}>
          {value2 || 'N/A'}
        </td>
      </tr>
    );
  };

  return (
    <div className="modal-backdrop">
      <div className="compare-modal">
        <div className="modal-header">
          <h2>Compare Movies</h2>
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="compare-form">
          <div className="input-group">
            <input
              type="text"
              value={movie1}
              onChange={(e) => setMovie1(e.target.value)}
              placeholder="First movie title"
              required
            />
            <span className="vs-badge">VS</span>
            <input
              type="text"
              value={movie2}
              onChange={(e) => setMovie2(e.target.value)}
              placeholder="Second movie title"
              required
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Comparing...' : 'Compare'}
          </button>
        </form>

        {data1 && data2 && (
          <div className="comparison-container">
            <div className="movie-posters">
              <div className="poster-container">
                <img src={data1.Poster} alt={data1.Title} />
                <h3>{data1.Title} ({data1.Year})</h3>
              </div>
              <div className="poster-container">
                <img src={data2.Poster} alt={data2.Title} />
                <h3>{data2.Title} ({data2.Year})</h3>
              </div>
            </div>

            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>{data1.Title}</th>
                  <th>{data2.Title}</th>
                </tr>
              </thead>
              <tbody>
                {renderComparisonRow("Year", "Year", false)}
                {renderComparisonRow("Rated", "Rated")}
                {renderComparisonRow("Runtime", "Runtime")}
                {renderComparisonRow("Genre", "Genre")}
                {renderComparisonRow("IMDb Rating", "imdbRating")}
                {renderComparisonRow("Metascore", "Metascore")}
                {renderComparisonRow("Director", "Director")}
                {renderComparisonRow("Box Office", "BoxOffice")}
                {renderComparisonRow("Awards", "Awards")}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareModal;