import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    // console.log(bottle);
    // console.log(handleAddToCart);
    const {name, img, price, category, seller, shipping} = bottle;

    

    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            {/* <p>Category: {category}</p>
            <p>Shipping: {shipping}</p> */}
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;