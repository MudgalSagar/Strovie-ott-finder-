
import express from "express";
import axios from "axios";

const route = express.Router();

route.get("/details/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?t=${title}&apikey=${process.env.OMDB_API_KEY}`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: "Error in OMDB route", error: err.message });
  }
});

route.get("/ott/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const searchRes = await axios.get(
      `https://api.watchmode.com/v1/search/?apiKey=${process.env.WATCHMODE_API_KEY}&search_field=name&search_value=${title}`
    );
    
    const movie = searchRes.data.title_results[0];
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    const movieId = movie.id; 
    
    const sourceRes = await axios.get(
      `https://api.watchmode.com/v1/title/${movieId}/sources/?apiKey=${process.env.WATCHMODE_API_KEY}`
    );
    
    const filtered = sourceRes.data.filter(
      (source) => source.type === "sub" && source.region === "IN"
    );

    res.json(filtered);
  } catch (err) {
    console.error("Error in watchmovie route: ", err.message);
    res.status(500).json({ 
      message: "Error in watchmovie route", 
      error: err.message 
    });
  }
});

route.get("/trailer/:title", async (req, res) => {
  const { title } = req.params;

  try {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${title}`;
    const searchRes = await axios.get(searchUrl);

    const movie = searchRes.data.results[0];
    if (!movie) {
      return res.status(404).json({
        message: "Movie not found on TMDB"
      });
    }

    const movieId = movie.id;


    const videoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.TMDB_API_KEY}`;
    const videoRes = await axios.get(videoUrl);

    const trailer = videoRes.data.results.find(
      (vid) => vid.type === "Trailer" && vid.site === "YouTube"
    );

    if (!trailer) {
      return res.status(404).json({
        message: "Trailer not found on YouTube using TMDB"
      });
    }

    const youtubeUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
    res.json({
      trailerUrl: youtubeUrl,
      trailerTitle: trailer.name
    });

  } catch (err) {
    console.error("❌ Error in TMDB trailer route:", err.message);
    res.status(500).json({
      message: "Error fetching trailer from TMDB",
      error: err.message
    });
  }
});

route.post("/generate-book", async (req, res) => {
  const { title, plot } = req.body;
console.log("Incoming book request:", { title, plot });
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a writer who converts movies into novels."
          },
          {
            role: "user",
            content: `Convert the following movie into a book-like story:\nTitle: ${title}\nPlot: ${plot}`
          }
        ],
        max_tokens: 2000
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const bookText = response.data.choices[0].message.content;
    res.json({ bookText });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to generate book" });
  }
});
export default route; 
