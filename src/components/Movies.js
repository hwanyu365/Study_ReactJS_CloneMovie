import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="container__movie">
      <Link
        className="container__link"
        to={{
          pathname: `/movie/${id}`,
          state: {
            id,
            year,
            title,
            summary,
            poster,
            genres,
          },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h4 className="movie__year">{year}</h4>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="genres_genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 150)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
