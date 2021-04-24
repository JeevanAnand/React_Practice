import TableHeader from '../common/tableHeader';
import TableBody from '../common/tableBody';

const Table = (props) => {
    const {columns, data, sortColumn, onSort } = props;
    return ( 
        <table className="table">
               
                <TableHeader
                    columns={columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />

                <TableBody 
                    data={data}
                    columns={columns}
                />
        </table>
     );
}
 
export default Table;