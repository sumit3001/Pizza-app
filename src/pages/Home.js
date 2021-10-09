import Products from "../components/Products";

const Home = () => {
    
    return(
        <>
        <div className="hero py-16">
            <div className="cantainer mx-auto flex items-center justify-between">
                <div className="w-1/2 pl-10">
                    <h6 className="text-lg"><em>Are you hungry?</em></h6>
                    <h1 className="text-3xl md:text-6xl font-bold">Don't wait !</h1>
                    <button className="px-6 py-2 rounded-full text-white font-bold bg-yellow-500 hover:bg-yellow-600 mt-4" >
                    Order Now</button>
                </div>
                <div className="w-1/2">
                    <img className="w-4/5" src="/images/pizza.png" alt="pizza"/>
                </div>
            </div>
        </div>
        <div>
            <Products/> 
        </div>
        </>
    )
}

export default Home;