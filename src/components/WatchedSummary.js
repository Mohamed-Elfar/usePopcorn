const average = (arr) =>
  arr.length === 0
    ? 0
    : arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function WatchedSummary({ watched }) {
  const avgImdbRating = average(
    watched.map((movie) => movie.imdbRating).filter((rating) => !isNaN(rating))
  );
  const avgUserRating = average(
    watched.map((movie) => movie.userRating).filter((rating) => !isNaN(rating))
  );
  const avgRuntime = average(
    watched
      .map((movie) => movie.runtime)
      .filter((runtime) => !isNaN(runtime) && runtime > 0)
  );

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{isNaN(avgRuntime) ? "0" : avgRuntime.toFixed(0)} min</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
