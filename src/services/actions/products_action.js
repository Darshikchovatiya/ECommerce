

export const category_value = (value) => {
    return {
        type: "categ_value",
        payload: value
    }
}

export const product_view = (pro_d) => {
    return {
        type: "productView",
        payload: pro_d
    }
}

export const add_to = (c_prod) => {
    return {
        type: "Add_To",
        payload: c_prod
    }
}

export const product_delete = (id) => {
    return {
        type: "Pro_dele",
        payload: id
    }
}



export const proQtySub = (pro_qty, id, cart_products, N_Q) => {

    let qty_dow;
    let qt_do;

    return dispatch => {


        if (pro_qty > 1) {


            //     // let N_qt = 

            //     cart_products.filter((ca_p)=>{
            //         // console.log(ca_p.id);


            //         if(ca_p.id == id){

            //             qty_dow = pro_qty - 1;

            //             dispatch(proQty(qty_dow));

            //             // qt_do = {p_qty: qty_dow};

            //             // console.log(qt_do,"do");
            //             // return qt_do.p_qty;




            //             // console.log(qt_do.p_qty);



            //             // dispatch(proQty());

            //             // console.log("return", pro_qty - 1);
            //             // qty_dow = pro_qty - 1;
            //             // console.log(qty_dow);


            //             // return qt_do = {p_qty: qty_dow};
            //             // console.log(qty_dow,"qty_dow");
            //             // console.log(qt_do,"qt_do");
            //             // return qt_do;
            //         }
            //         // return qt_do;
            //         // console.log("qty",qt_do);

            //         // console.log("qty",qty_dow);
            //         // dispatch(proQty(qty_dow));


            //         // dispatch(proQty(qt_do.p_qty));

            //         // dispatch(proQty(qt_do.p_qty));
            //     })

            //     // console.log(cart_products,"<<N_qt");
            //     // dispatch(proQty(qty_dow));



            //     // for (let i in cart_products) {


            //     //     if(cart_products[i].id == id){

            //     //         qty_dow = pro_qty - 1;
            //     //         // console.log(qty_dow,"qty_dow");
            //     //     }
            //     //     dispatch(proQty(qty_dow));
            //     // }


            let qty_up_down = pro_qty - 1;
            // console.log(qty_up_down,"<<<<qty_up_down");
            dispatch(proQty(qty_up_down));

        }
    }
}

export const proQtyAdd = (pro_qty, id, cart_products, N_Q) => {
    let qty_u;

    return dispatch => {

        // console.log(cart_products,id);
        // let new_cp = cart_products.filter((ca_pr)=>{
        //     // console.log(ca_pr.id);
        //     if(ca_pr.id == id){
        //         // console.log(ca_pr.p_qt);

        //         let ca_pqt = ca_pr.p_qt;
        //         // console.log(ca_pqt,"ca_pqt");

        //         ca_pqt = ca_pqt + 1;

        //         // console.log(ca_pqt,"qy");
        //         // return qty_u;
        // return ca_pqt;

        //     }
        // })

        // console.log(new_cp,"new");
        // dispatch(proQty(qty_u));


        // let qa_d = [];
        // let qta_do = {p_qty: pro_qty};

        // qa_d = [...cart_products, qta_do];

        // console.log(qa_d);



        // cart_products.filter((ca_p)=>{
        //     // console.log(ca_p);
        //     if(ca_p.id === id){
        //         qty_u = pro_qty + 1;
        //         // console.log(qty_u,"qty_u");
        //         dispatch(proQty(qty_u));
        //     }
        // })

        // for (let i in cart_products) {


        //     if(cart_products[i].id == id){



        //         qty_u = pro_qty + 1;
        //         // return qty_u;
        //         // console.log(qty_u,"<<<<qty_u");
        //     }
        //     dispatch(proQty(qty_u));
        // }


        let qty_up_down = pro_qty + 1;
        // console.log(qty_up_down,"<<<<qty_up_down");
        dispatch(proQty(qty_up_down));
    }
}


const proQty = (p_qty) => {
    // console.log(p_qty,"p_qty");
    return {
        type: "Proqty",
        payload: p_qty
    }
}