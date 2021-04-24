 import React, {Component} from 'react';
 import Like from './like' 
//  import TableHeader from './common/tableHeader'
//  import TableBody from './common/tableBody'
import Table from './common/table';
import { Link } from 'react-router-dom';
 
class MoviesTable extends Component {
   columns = [
       {path: 'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
       {path: 'genre.name', label: 'Genre'},
       {path: 'numberInStock', label: 'Stock'},
       {path: 'dailyRentalRate', label: 'Rate'},
       {key: 'Like',label:'Like', content: movie => ( <Like likeStatus={movie.liked} onLike={() => this.props.onLike(movie)}/>) },
       {key: 'Action',label:'Action', content: movie => (<button onClick={() => this.props.onDelete(movie)} className="btn btn-danger">Delete</button>)}
    ]
    render(){
        const {movies,onDelete,onLike,sortColumn,onSort}=this.props;
        return(
                <Table 
                    columns ={this.columns}
                    data={movies}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />

            // <table className="table">
               
            //     <TableHeader
            //         columns={this.columns}
            //         sortColumn={sortColumn}
            //         onSort={onSort}
            //     />

            //     <TableBody 
            //         data={movies}
            //         columns={this.columns}
            //     />

                // {/* <tbody>
                    // {movies.map(movie => (  //looping array of objects using map function 
                    //     <tr key={movie._id}>
                    //         <td>{movie.title}</td>
                    //         <td>{movie.genre.name}</td>    {/*this is comment*/}
                            /* <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like 
                                    likeStatus={movie.liked} 
                                    onLike={() => onLike(movie)}
                                />
                            </td>
                            <td><button onClick={() => onDelete(movie)} class="btn btn-danger">Delete</button></td>
                        </tr>
            
                        ))}
                        
                    </tbody> */
                // </table> 
                 );
        
    }
}

export default MoviesTable;

// const MoviesTable = (props) => {
//     const {movies,onLike,onDelete,onSort}=props;
//     return ( 
//         <table className="table">
//         <thead>
//             <tr>
//                 <th onClick={() => onSort('title')}>Title</th>
//                 <th onClick={() => onSort('genre.name')}>Genre</th>
//                 <th onClick={() => onSort('numberInStock')}>Stock</th>
//                 <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
//                 <th>Like</th>
//                 <th>Action</th>
//             </tr>
//         </thead>
//         <tbody>
//             {movies.map(movie => (  //looping array of objects using map function 
//                 <tr key={movie._id}>
//                 <td>{movie.title}</td>
//                 <td>{movie.genre.name}</td>    {/*this is comment*/}
//                 <td>{movie.numberInStock}</td>
//                 <td>{movie.dailyRentalRate}</td>
//                 <td>
//                     <Like 
//                         likeStatus={movie.liked} 
//                         onLike={() => onLike(movie)}
//                     />
//                 </td>
//                 <td><button onClick={() => onDelete(movie)} class="btn btn-danger">Delete</button></td>
//             </tr>

//             ))}
            
//         </tbody>
//     </table>
//      );
// }
 
// export default MoviesTable;