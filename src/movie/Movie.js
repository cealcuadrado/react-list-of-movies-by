import './Movie.css';

function Movie(props) {
    return (
        <li>{props.movie.title} ({props.movie.year})</li>
    );
}

export default Movie;