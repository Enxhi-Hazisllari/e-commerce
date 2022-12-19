import { useEffect } from "react";
import { useUIContext } from "../context/ui";

function useCart(product){
    const {cart,setCart,setPrice} = useUIContext();

    const handlePrice = () => {
        let total = 0;
        cart.map((product)=> (total += product.amount * product.price));
        setPrice(total)
    }

    useEffect(()=>{
        handlePrice();
    });

    const addToCart = () => {
        cart.findIndex(c => c.id === product.id) >= 0
        ? setCart(cart.filter(c => c.id !== product.id))
        : setCart(c => [...c , product]);
    }

    const removeFromCart = (id) =>{
        const arr = cart.filter((item) => item.id !== id)
        setCart(arr)
    }
    const onlyAddToCart = (id) =>{
        const arr = (c => [...c , product]);
        setCart(arr)
    }
        

    const removeAllCart = () =>{
         setCart ([]);
    } 
   
    const addToCartText = cart.findIndex((c) => c.id === product.id) >= 0
    ? "Remove from cart" : "add to cart" ; 

    return {addToCart , removeFromCart, addToCartText,removeAllCart,handlePrice,cart,setCart,onlyAddToCart}
}
export default useCart;
