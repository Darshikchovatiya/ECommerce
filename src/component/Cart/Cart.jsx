import React, { useState } from 'react'
import { Badge, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa6'
import '../Cart/Cart.css'
import QtyCount from '../QtyCount/QtyCount';
import { useNavigate } from 'react-router';
import { proQtyAdd, proQtySub, product_delete } from '../../services/actions/products_action';

function Cart() {

  const navigate = useNavigate();
  const dispatch = useDispatch();



  const { cart_products } = useSelector(state => state.Products_Re);
  // console.log(cart_products,"<<<<cart_products");
  // console.log(pro_qty,"<<<<pro_qty Cart");

  // const [sub_to, setSub_to] = useState();

  // console.log(sub_to);

  // let s_total = cart_products.fin_pri;
  // console.log(s_total,"s_total");



  // const handleSub = (id) => {
  //   // console.log(id);
  //   let NQ = document.getElementById('Q_input'+ id).value;

  //   // console.log(NQ,"NQ");
  //   dispatch(proQtySub(pro_qty, id, cart_products, NQ));
  // }

  // const handleAdd = (id) => {
  //   // console.log(id);

  //   let NQ = document.getElementById('Q_input'+ id).value;

  //   // console.log(NQ,"<<<<NQ");
  //   dispatch(proQtyAdd(pro_qty, id, cart_products, NQ));
  // }


  const handleDelete = (ca_pro) => {
    // console.log(ca_pro,"ca_pro");
    dispatch(product_delete(ca_pro.id));
  }

  return (
    <>
      <div className="back_ground-c">
        <Container>
          <Row>
            <div className="cart_main_section">
              <div className="cart_sects">
                <div className="cart_sect">
                  <div className="cart_sec">
                    <div className="cart_se_head">
                      <h1>Cart</h1>
                    </div>
                    <div className="cart_se_bo">
                      <div className="cart_line"></div>
                      {
                        cart_products.length > 0 ?
                          cart_products.map((ca_pro) => {



                            // let su_to = 0;
                            // let s_total = ca_pro.fin_pri;
                            // console.log(s_total,"s_total");

                            // su_to = su_to + s_total;
                            // console.log(su_to, "su_to");
                            // setSub_to(su_to);


                            let su_to = ca_pro.fin_pri;
                            let sub_to = su_to * ca_pro.p_qt;
                            // console.log(sub_to);



                            return (
                              <div className="cart_se_items">
                                <div className="cart_se_item">
                                  <div className="cart_se_contes">
                                    <div className="cart_se_cont">
                                      <div className="cart_se_img">
                                        <img src={ca_pro.thumbnail} alt="img" />
                                      </div>
                                      <div className="cart_se_detais">
                                        <div className="cart_se_detai">
                                          <div className="cart_se_tit">
                                            <span>{ca_pro.title}</span>
                                          </div>
                                          <div className="cart_se_pr_bge">
                                            <div className="cart_bge">
                                              <Badge bg="danger">{ca_pro.discountPercentage}% off</Badge>
                                            </div>
                                            <div className="cart_prices">
                                              <div className="cart_pay_pr">
                                                <span>${ca_pro.fin_pri}</span>
                                              </div>
                                              <div className="cart_dico_pr">
                                                <span>${ca_pro.price}</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="cart_qty_dele">
                                          <QtyCount d_id={ca_pro.id} />



                                          {/* <div className="data-quantity">
                                            <button className='sub' onClick={() => handleSub(ca_pro.id)}>-</button>
                                            <input type="number" readOnly value={pro_qty} id={"Q_input"+ca_pro.id} />
                                            <button className='add' onClick={() => handleAdd(ca_pro.id)}>+</button>
                                          </div> */}



                                          <button className='cart_delete_btn' onClick={()=>handleDelete(ca_pro)}><FaTrash /></button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cart_se_subTotals">
                                      <span className="cart_se_te">SubTotal:</span>
                                      <span className="cart_se_pr">${sub_to}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                          :
                          <>
                            <div className="empty_img_btn">
                              <div className="empty_img">
                                <img src="empty_cart.jpg" alt="empty" />
                              </div>
                              <div className="cart_empty_btn">
                                <button onClick={() => navigate('/')}>Continue Shopping</button>
                              </div>
                            </div>
                          </>
                      }
                    </div>
                  </div>
                </div>

              </div>
              <div className="cart_checkouts">
                <div className="cart_check">
                  <div className="cart_check_body">
                    <div className="cart_cb_group">
                      <div className="cart_subTotals">
                        <span className="cart_st_te">SubTotal:</span>
                        <span className="cart_st_pr">$20</span>
                      </div>
                      <div className="cart_subTotals">
                        <span className="cart_st_te">Delivery Charges:</span>
                        <span className="cart_dc_pr">Free</span>
                      </div>
                      <div className="cart_chout_line"></div>
                      <div className="cart_Totals">
                        <span className="cart_st_te">Totals:</span>
                        <span className="cart_tos_pr">$20</span>
                      </div>
                      <div className="cart_check_btn">
                        <button>Proceed to Checkout</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Cart;