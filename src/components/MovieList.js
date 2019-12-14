import React from "react";
import { connect } from "react-redux";

const MovieList = ({ loading, movies }) => {
  if (loading === true) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  return (
    <div>
      {movies.map(item => (
        <div key={item.imdbID}>
          <h5>{item.Title}</h5>
          <p>{item.Year}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.app.loading,
    movies: state.app.movies
  };
};

export default connect(mapStateToProps)(MovieList);
