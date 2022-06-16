import { useEffect, useRef, useState } from 'react';
import omdbApiService from '../services/omdbApiService';

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState('avengers');
  const inputSearch = useRef();

  useEffect(() => {
    omdbApiService.get('/', {
      params: {
        s: keyword,
        apiKey: 'e24ea09d'
      }
    }).then((response) => {
      const foundMovies = !response.data.Error ? response.data.Search : []
      setMovies(foundMovies);
    })
  }, [keyword])

  function searchMovie(e) {
    e.preventDefault();

    setKeyword(inputSearch.current.value);
    inputSearch.current.value = '';
  }

  return (
    <div className="container-fluid">
      {
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador */}
              <form method="GET" onSubmit={searchMovie}>
                <div className="form-group">
                  <label htmlFor="">Buscar por título:</label>
                  <input ref={inputSearch} type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-info">Search</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Películas para la palabra: {keyword}</h2>
            </div>
            {
              movies.length > 0 && movies.map((movie, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={movie.Poster}
                            alt={movie.Title}
                            style={{ width: '90%', height: '400px', objectFit: 'cover' }}
                          />
                        </div>
                        <p>{movie.Year}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          {movies.length === 0 && <div className="alert alert-warning text-center">Sem Filmes</div>}
        </>
      }
    </div>
  )
}

export default SearchMovies;
