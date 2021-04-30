import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

import {Link} from 'react-router-dom';
import Pagination from './common/pagination';
import {Paginate} from '../utils/paginate';
import ListGroup from './common/listgroup';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import SearchBox from './common/searchBox';

class Movies extends Component {
    state = { 
        // movies: getMovies(),
        movies:[],
        genres:[],
        currentPage: 1,
        pageSize: 4,
        searchQuery: '',
        sortColumn: {path: 'title', order: 'asc'}
     };

     componentDidMount() {
         const genres = [{_id:"",name: "All Genres"}, ...getGenres()]
         this.setState({
             movies: getMovies(),
             genres: genres
         })
     };

    handleGenreSelect = (genre) => {
        // console.log(genre);
        this.setState({
            selectedGenre: genre,
            searchQuery: '',
            currentPage: 1,

        })
    }

    handleDelete = (movie) => {
        // console.log(movie);
        const movies = this.state.movies.filter( m => m._id !== movie._id);
        // this.setState({movies: movies})

        // in modern js we can use the below
        this.setState({movies})
    };
    handleLiked = (movie) =>{
        // console.log('like clicked');
        const movies=[...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    };
    handlePageChange = (page) => {
        // console.log('page changed')
        this.setState({
            currentPage: page
        })
    };

    handleSearch = query => {
        this.setState({searchQuery: query, selectedGenre: null, currentPage: 1})
    }
    
    handleSort = (sortColumn) => {
        this.setState({
            sortColumn
        })
    }

    getPagedData = () => {
        // const {length: count} = this.state.movies
        const {pageSize, searchQuery, currentPage, movies: allMovies,selectedGenre, sortColumn  } = this.state;
        // const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id): allMovies;
        let filtered = allMovies;
        if(searchQuery)
            filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        else if(selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id)
        const sorted= _.orderBy(filtered,[sortColumn.path], [sortColumn.order]);
        const movies = Paginate(sorted, currentPage, pageSize);

        return {totalCount: filtered.length, data: movies}
    }
    
    render() { 
        
        if (this.state.movies.length === 0) return <p>There are no movies in the database</p>;

        const { 
            pageSize, 
            currentPage, 
            // selectedGenre,
            sortColumn,
            searchQuery,
            // movies: allMovies 
            } = this.state;
        
        // console.log(this.state.generes);
        const {totalCount, data: movies} = this.getPagedData();
         
        return (
            
            <React.Fragment>
                
                <div className="row">
                    <div className="col-3">
                        <ListGroup 
                            items={this.state.genres}
                            // textProperty = "name"
                            // valueProperty = "_id"
                            onGenreSelect={this.handleGenreSelect}
                            selectedItem={this.state.selectedGenre}
                        />
                    </div>
                    <div className="col">
                        <Link 
                            to='/movies/new'
                            className="btn btn-primary"
                            style={{marginBottom: 20 }}>
                                New Movie
                        </Link>
                        <SearchBox value={searchQuery} onSearch={this.handleSearch}/>
                        <p>Showing {totalCount} movies in the database </p>
                        <MoviesTable 
                            movies={movies} 
                            onLike={this.handleLiked} 
                            onDelete={this.handleDelete}
                            sortColumn={this.state.sortColumn}
                            onSort = {this.handleSort}
                        />
                        <Pagination 
                            itemsCount={totalCount}
                            // itemsCount="abc" // this is to check propType Error
                            pageSize={pageSize}  
                            currentPage={currentPage} 
                            onPageChange={this.handlePageChange} 
                        />
                    </div>
                </div>
                
        
            </React.Fragment>
        ); 
        
            
    }
}
 
export default Movies;