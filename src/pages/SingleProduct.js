import { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CartContext } from '../CartContext'



const SingleProduct = () => {

    const [product,setProduct] = useState({});
    const param = useParams();
    const history = useHistory();
    const [ isAdding, setAdding] = useState(false);
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        fetch(`/api/products/${param._id}`)
        .then(res => res.json())
        .then(product => {
            setProduct(product);
        })
    }, [])

    const addToCart = (e, product)=> {
        e.preventDefault();
        let _cart ={ ...cart }
        if(!_cart.items){
            _cart.items = {}
        }
        if(_cart.items[product._id]){
            _cart.items[product._id]+=1;
        }else{
            _cart.items[product._id]=1;
        }
        if(!_cart.totalItems){
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);
        setAdding(true);
        setTimeout(() => {
            setAdding(false);
        }, 1000);
    }

    return (
        <div className="container mx-auto mt-12">
            <button className="mb-12 font-bold" onClick={() => { history.goBack() }}>Back</button>
            <div className="flex">
                <img src={product.image} alt="pizza"/>
                <div className="ml-16">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <div className="text-md">{product.size}</div>
                    <div className="font-bold mt-2">₹{product.price}</div>
                    <button onClick={(e) => {addToCart(e,product)}} className={`${isAdding ? `bg-green-500`: `bg-yellow-500`} py-1 px-4 rounded-full mt-4 font-bold`}>Add{isAdding ? 'ed to Cart' : ' to Cart'} </button>
                </div>
            </div>
        
        </div>
    )
}

export default SingleProduct;
