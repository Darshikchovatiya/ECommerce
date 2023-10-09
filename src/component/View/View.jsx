import React, { useEffect, useState } from 'react'
import { Badge, Container, Row, Spinner } from 'react-bootstrap';
import { BsArrowDown, BsArrowUp, BsArrowUpShort, BsStarFill } from 'react-icons/bs';
import '../View/View.css'
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css'
import { add_to } from '../../services/actions/products_action';

function View() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { product, pro_qty } = useSelector(state => state.Products_Re);
  const { isLogin } = useSelector(state => state.Auth_Re)

  const images = [product.img1, product.img2, product.img3, product.img4];

  const [img_val, setImg_val] = useState(images[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  let pro_per = product.discountPercentage / 100;
  let pro_pri = product.price * pro_per;
  let pro_fi_p = product.price - pro_pri;

  let pro_fin_pri = Math.round(pro_fi_p);



  const handleImg = (pro) => {
    // console.log("pro",pro);
    setImg_val(pro);
  }

  const handleAddtoCart = (prod) => {
    // console.log(prod,"prod");
    // console.log("pro_fin_pri",pro_fin_pri);

    let prod_fin = { ...prod, fin_pri: pro_fin_pri, p_qt: pro_qty };

    // console.log(prod_fin,"prod_fin");

    dispatch(add_to(prod_fin));

  }



  useEffect(() => {
    setTimeout(() => {
      setData(
        <>
          <Container>
            <Row>
              {
                isLogin ?
                  <div className="main-section">
                    <div className="pro_img_details">
                      <div className="pro_btn_images">
                        <div className="pro_images">
                          <div className="pro_side_ud_imgs">
                            <div className="pro_side_updoim">
                              <div className="pro_side_imgs">
                                <ul className="pro_si">
                                  {
                                    images.map((pro) => {
                                      return (
                                        <li className="pro_s_im" id='pro_s_im'>
                                          <div className="pro_sid_img">
                                            <img src={pro} alt="img" className="pro_sin_img" onClick={() => handleImg(pro)} />
                                          </div>
                                        </li>
                                      )
                                    })
                                  }
                                </ul>
                              </div>
                              <div className="pro_udbtn pro_up_b">
                                <BsArrowUp className="pro_up_icon" />
                              </div>
                              <div className="pro_udbtn pro_down_b">
                                <BsArrowDown className="pro_up_icon" />
                              </div>
                            </div>
                          </div>
                          <div className="pro_main_imgs">
                            <div className="pro_main_imag">
                              <div className="pro_main_selec" style={{ width: "0", height: "0" }}></div>
                              {/* width: "190px", height: "56px", transform: "scale(0)" */}

                              <div className="pro_m_im" style={{ width: "inherit", height: "inherit" }}>
                                <img src={img_val} alt="loading" className='pro_m_i' />
                              </div>
                            </div>
                            <div className="pro_big_img" style={{ left: "0", width: "0", height: "0" }}>
                              {/* left: "418.854px", width: "761px", height: "177px" */}
                              <img src="" alt="3" className='pro_big_i' />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pro_details">
                        <div className="pro_de">
                          {/* margintop 6px */}
                          <h1>{product.title}</h1>
                          <div className="ratings">
                            <Badge bg="success" className='pro_star'>{product.rating}<BsStarFill className='pro_star_ico' /></Badge>
                          </div>
                          <div className="pro_prices">
                            <div className="fi_price">${pro_fin_pri}</div>
                            <div className="m_price">${product.price}</div>
                            <div className="discountP">
                              <span>{product.discountPercentage}% off</span>
                            </div>
                          </div>
                          <div className="pro_description">
                            <span>Description</span>
                            <p>{product.description}</p>
                          </div>
                          <div className="pro_button">
                            <button onClick={() => handleAddtoCart(product)}>Add to Cart</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                :
                  navigate('/signin')
              }
            </Row>
          </Container>
        </>
      )
      setIsLoading(false);
    }, 3000);
  });

  if (isLoading) {
    return (
      <div className="load_ingin">
        <div className="loader">
          <div className="loader-text"></div>
        </div>
      </div>
    )
  }
  return (
    data
  )

  // (20/100 = 0.2). You have Rs 1,000 * 0.2 = Rs 200. You then subtract the discount from the original price as Rs 1,000 – Rs 200 = Rs 800

}

export default View;