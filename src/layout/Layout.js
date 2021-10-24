import Movie from '../movie/Movie';
import './Layout.css';

function Layout() {
    const movies = [
        { title: "Jurassic Park", year: 1993 },
        { title: "Schindler's List", year: 1993 },
        { title: "Saving Private Ryan", year: 1998}
    ];

    return (
      <div className="layout">
        <h4>Movies by Steven Spielberg</h4>
        <ul>
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </ul>
      </div>
    );
}

export default Layout;