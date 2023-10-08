const initionState = {
    products: [],
    product: null,
    cart_products: [],
    pro_qty: 1,
    loading: false,
    cate_value: null,
    loading: false
}

export const Products_Re = (state = initionState, action) => {
    // console.log(action);
    
    switch (action.type) {
        case "categ_value":
            return{
                ...state,
                cate_value: action.payload
            }
    
        case "productView":
            return{
                ...state,
                loading: true,
                product: action.payload
            }

        case "Add_To": 
            return{
                ...state,
                cart_products: [...state.cart_products, action.payload]
            }

        case "Proqty":
            return{
                ...state,
                pro_qty: action.payload
            }

        case "Pro_dele":

            let cart_pro = state.cart_products;

            let ca_pro = cart_pro.filter((cp)=>{
                console.log(cp);
                return cp.id != action.payload
            })

            return{
                ...state,
                cart_products: ca_pro
            }
            
        default:
            return state;
    }
}