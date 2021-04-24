import React, {Component} from 'react'
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService'
import Pagination from './common/pagination'
import { Paginate } from '../utils/paginate';
import ListGroup from './common/listgroup';
import MoviesTable from './moviesTable'
import _ from 'lodash';

class Movies extends Component {
    state = {
        // count: 0
        //movies: getMovies(), //storing array of object to movies by calling getMovies

        movies:[],
        genres:[],
        currentPage:1,
        pageSize: 4,
        sortColumn:{path:'title', order:'asc'}
    };

    handleGenreSelect = (genre) =>{
        this.setState({selectedGenre:genre,
        currentPage:1
        })  
    }

    handleSort = (sortColumn) =>{
        // console.log(path);
        this.setState({
            sortColumn
        });
    }

    componentDidMount(){
        const genres = [{_id:"",name: " All Genres"},...getGenres()]
        this.setState({
            movies:getMovies(),
            genres
        })
    }

     handleDelete = (movie) => {
         const movies = this.state.movies.filter(m => m._id !== movie._id)
         this.setState({
             movies: movies
         })
     };

     handleLike = (movie) => {
        //  console.log("like clicked");
        const movies =[...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }

    handlePageChange = (page) =>{
        this.setState({
            currentPage: page
        })
    }

    getPagedData = () => {
        // const {length:count} = this.state.movies
        const {pageSize, currentPage, movies: allMovies, selectedGenre, sortColumn } = this.state;
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies
        const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order]);
        const movies = Paginate(sorted, currentPage, pageSize);

        return {totalCount: filtered.length, data:movies, pageSize, currentPage, selectedGenre}
    }
    render () {
        if(this.state.movies.length === 0 ) return <p>There are no movies in the </p>;

        const {totalCount, data, pageSize, currentPage, selectedGenre} = this.getPagedData();
        return (
            // <h1>Movie List</h1> normal h1 tag
            // <h1>{2*2}</h1> expression
            // <h1>{name} </h1> variables
            // <h1>{this.state.count}</h1> object value
            //  <h1>{`My Name is ${name}`} </h1> // using back tick
            // <//h1></h1>

        <div style={{marginTop:20}}> 
            <div className='row'>
                <div className='col-3' style={{marginTop:40}}>
                <ListGroup 
                    items={this.state.genres} 
                    textProperty = "name"
                    valueProperty = "_id"
                    onGenreSelect={this.handleGenreSelect}
                    selectedItem={selectedGenre}
                />
                </div>
                <div className='col'>
                    <h3>Showing  {totalCount} movies in the database</h3>
                    <MoviesTable
                        movies={data}
                        onLike={this.handleLike} 
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                        sortColumn={this.state.sortColumn}
                    />
                </div>
            </div>
            <Pagination
                itemCount= {totalCount}
                //itemCount='abc' //this is to check propType Error
                currentPage={currentPage}
                pageSize={pageSize} 
                onPageChange={this.handlePageChange}
            />
        </div> 
            
        );
    }
}

export default Movies;