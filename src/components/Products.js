import React,{useState,useEffect} from 'react'

const Products = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async ()=>{
            const res = await fetch('https://fakestoreapi.com/products/');
            const data = await res.json()
            // console.log(data);
            setProducts(data);

        }
        fetchProducts();
    },[])
  return (
    <div className='productsWrapper'>
      {
        products.map(product =>(<div key={product.id} className='card'>
            <img src={product.image} alt="img"/>
            <h3>{product.title}</h3>
            <h4>₹ {product.price}</h4>
            <button className='btn'>Add to Cart</button>
        </div>))
      }
    </div>
  )
}

export default Products
