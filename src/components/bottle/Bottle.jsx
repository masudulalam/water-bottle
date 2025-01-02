import './Bottle.css'

const Bottle = ({bottle}) => {
    console.log(bottle);
    const {name, img, price, category, seller, shipping} = bottle;
    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <p>Category: {category}</p>
            <p>Shipping: {shipping}</p>
        </div>
    );
};

export default Bottle;