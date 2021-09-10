import Item from './Item';


function ItemList(props){

    const {items} = props;
 
    return (
        <>
            {
            items.map((item) => (
                <Item key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} pictureURL={item.pictureURL}/>                 
            ))
            }
        </>
    );

}

export default ItemList;