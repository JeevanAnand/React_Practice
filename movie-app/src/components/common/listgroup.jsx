const ListGroup = (props) => {
    const {items, valueProperty, selectedItem, onGenreSelect, textProperty} = props;
    return ( 
        <div>
            <ul class="list-group">
                {items.map(item =>
                <li 
                    key={item[valueProperty]} 
                    className={(item===selectedItem) ? " clickable list-group-item active" : " clickable list-group-item"}
                    onClick={() => onGenreSelect(item)}
                >{item[textProperty]}</li>)}
            </ul>
        </div>
     );
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}
 
export default ListGroup;