import _ from 'lodash';
import PropTypes from 'prop-types';
// _ is the common convention,
// lodash is the optimised version of a popular JS library called underscore


const Pagination = (props) => {

    const {itemCount,pageSize,currentPage,onPageChange} = props;
    const pageCount = Math.ceil(itemCount / pageSize);
    // console.log(pageCount);
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);//this returns an array
    console.log(pages);

    return ( 
        <nav>

            <ul className='pagination '>
                 {/* nav justify-content-center */}
                {pages.map(page => (
                    <li 
                        key={page} 
                         className={page === currentPage ? "page-item active" : "page-item"}>
                             <a 
                                onClick={()=>onPageChange(page)}
                                className="page-link">
                                    {page}
                            </a>
                    </li>
                ))}
            </ul>
        </nav>
     );
}



Pagination.propTypes={
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}






 
export default Pagination;

// npm i prop-types@15.6.2 command to install prop type
