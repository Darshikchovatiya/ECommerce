import React, { useState } from 'react'
import '../QtyCount/QtyCount.css'
import { useDispatch, useSelector } from 'react-redux';
import { proQtyAdd, proQtySub } from '../../services/actions/products_action';

function QtyCount({d_id}) {

    // console.log(d_id,"d_id");

    const dispatch = useDispatch();

    const { cart_products, pro_qty } = useSelector(state => state.Products_Re);
    // console.log(cart_products,"<<<<pro_qty qtyCount");

    // const [ca_id, setCa_id] = useState(null);



    const handleSub = (id) => {

        let N_Q = document.getElementById('Q_input'+id);
        // console.log(N_Q);


        dispatch(proQtySub(pro_qty, id, cart_products, N_Q));
    }

    const handleAdd = (id) => {

        let N_Q = document.getElementById('Q_input'+id);
        // console.log(N_Q);


        dispatch(proQtyAdd(pro_qty, id, cart_products, N_Q));
    }

    return (
        <>
            {/* {
                cart_products.map((ca_pro) => {
                    // console.log(ca_pro.id);
                    // setCa_id(ca_pro.id);
                    // return ca_pro.id;
                })
            } */}

            <div className="data-quantity">
                <button className='sub' onClick={()=>handleSub(d_id)}>-</button>
                <input type="number" readOnly value={pro_qty} id={"Q_input"+d_id} />
                <button className='add' onClick={()=>handleAdd(d_id)}>+</button>
            </div>
        </>
    )
}

export default QtyCount;