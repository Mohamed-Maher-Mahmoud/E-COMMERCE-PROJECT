import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'

export const cartSlice=createSlice({
    initialState:{
        cartitem:localStorage.getItem('cartitem')?JSON.parse(localStorage.getItem('cartitem')):[],
        cartQuantity:0,
        cartAamout:0
    },

    name:"cartSlice",
    reducers:{
        addtoCart:(state,action)=>{
            const findproduct=state.cartitem.find((product)=>product.id === action.payload.id)
            if(findproduct){
                findproduct.cartQuantity +=1
                toast.info('Increased Product qauntity',{
                    position:'bottom-center'
                })
            }
            else {
                const productClone={...action.payload,cartQuantity:1}
                state.cartitem.push(productClone)  
                toast.success(`${action.payload.title}  added Successfully'`,{
                position:'bottom-center',
                
        })
        }
        localStorage.setItem('cartitem',JSON.stringify(state.cartitem))
        },
        removeFromCart(state,action){
        const rmCart=  state.cartitem.filter((product)=> product.id !== action.payload.id
        
        )
    state.cartitem=rmCart
    localStorage.setItem('cartitem',JSON.stringify(state.cartitem))
    toast.error(`Removed ${action.payload.title} Successfully`,{
        position:'bottom-left'
    })
        },
        ClearCart:(state,action)=>{
            state.cartitem = []
            localStorage.setItem('cartitem',JSON.stringify(state.cartitem))
            toast.dismiss('Removed All Product Successfully',{
                position:'bottom-left'
            })
        },
    }
})
export const{addtoCart,removeFromCart,ClearCart}=cartSlice.actions;
export default cartSlice.reducer