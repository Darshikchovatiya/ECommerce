import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button, Card, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { base_api } from '../../api/Products_api';
import { product_view } from '../../services/actions/products_action';
import '../View_category/View_category.css'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase';



const elec_pro = async () => {

  let al_data = [];
  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    let fb_data = { ...doc.data(), id: doc.id };
    al_data = [...al_data, fb_data];


    // console.log(al_data,"al_data");

  });

  let el_data = al_data.filter((ad) => {
    // console.log("ad",ad.category);
    if (ad.category == "electronics") {
      return ad;
    }
  })
  // console.log(el_data,"el_data");
  return el_data;
  
}
// console.log(elec_pro(),"elec_pro");


const fashion_pro = async () => {

  let al_data = [];
  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    let fb_data = { ...doc.data(), id: doc.id };
    al_data = [...al_data, fb_data];


    // console.log(al_data,"al_data");

  });

  let fas_data = al_data.filter((ad) => {
    // console.log("ad",ad.category);
    if (ad.category == "fashion") {
      return ad;
    }
  })
  // console.log(fas_data,"fas_data");
  return fas_data;
  
}
// console.log(fashion_pro(),"fashion_pro");


const homede_pro = async () => {

  let al_data = [];
  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    let fb_data = { ...doc.data(), id: doc.id };
    al_data = [...al_data, fb_data];


    // console.log(al_data,"al_data");

  });

  let hom_data = al_data.filter((ad) => {
    // console.log("ad",ad.category);
    if (ad.category == "home_decor") {
      return ad;
    }
  })
  // console.log(hom_data,"hom_data");
  return hom_data;
  
}
// console.log(homede_pro(),"homede_pro");




// const elec_pro = axios.get(base_api + "/products").then((res) => {

//   let resdata = res.data;

//   let el_data = resdata.filter((rd) => {
//     // console.log("rd",rd.category);
//     if (rd.category == "electronics") {
//       return rd;
//     }
//   })


// let fas_data = resdata.filter((rd) => {
//     // console.log("rd",rd.category);
//     if (rd.category == "fashion") {
//         return rd;
//     }
// })


// console.log("el",el_data);
// dispatch(products_view_all(el_data));
// dispatch(products_view_all(fas_data));
// return el_data;

// }).catch((err) => {
//   console.log("err", err);
// })

// console.log("el",elec_pro);


// const fi_elec = () => {
//   return (
//     elec_pro.then((res) => {
//       // console.log("Res",res);
//       return res;
//     }).catch((err) => {
//       console.log("Err", err);
//     })
//   )
// }


// const fashion_pro = axios.get(base_api + "/products").then((res) => {

//   let resdata = res.data;

//   let fas_data = resdata.filter((rd) => {
//     // console.log("rd",rd.category);
//     if (rd.category == "fashion") {
//       return rd;
//     }
//   })
//   // console.log("el",fas_data);
//   return fas_data;

// }).catch((err) => {
//   console.log("err", err);
// })

// const homede_pro = axios.get(base_api + "/products").then((res) => {

//   let resdata = res.data;

//   let hom_data = resdata.filter((rd) => {
//     // console.log("rd",rd.category);
//     if (rd.category == "home_decor") {
//       return rd;
//     }
//   })
//   // console.log("el",hom_data);
//   return hom_data;

// }).catch((err) => {
//   console.log("err", err);
// })


function View_category() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cate_value } = useSelector(state => state.Products_Re);


  const [ele_pr, setEle_pr] = useState([]);
  const [fashion_pr, setFashion_pr] = useState([]);
  const [homedec_pr, setHomedec_pr] = useState([]);

  elec_pro().then((res) => {
    // console.log("Rres",res);
    setEle_pr(res);
  }).catch((err) => {
    console.log("Eerr", err);
  })

  fashion_pro().then((res) => {
    // console.log("Rres",res);
    setFashion_pr(res);
  }).catch((err) => {
    console.log("Eerr", err);
  })

  homede_pro().then((res) => {
    // console.log("Rres",res);
    setHomedec_pr(res);
  }).catch((err) => {
    console.log("Eerr", err);
  })




  const handleEle_view = (el) => {

    dispatch(product_view(el));
    navigate('/view');
  }

  const handleFash_view = (fap) => {

    dispatch(product_view(fap));
    navigate('/view');
  }

  const handleHome_view = (fap) => {

    dispatch(product_view(fap));
    navigate('/view');
  }










  if (cate_value == "electronics") {
    return (
      <>
        <div className="vc_title">
          <h4>Best of Electronics</h4>
          <span>{ele_pr.length} items</span>
        </div>
        <Container>
          <Row>
            <div className="vc_product">
              {
                ele_pr.map((el) => {
                  // console.log(el,"el");
                  return (
                    <Card style={{ width: '25%' }}>
                      <div style={{ width: "200px", height: "200px", margin: "0 auto" }}>
                        <Card.Img variant="top" src={el.thumbnail} style={{ width: "100%", height: "100%", objectFit: "cover", margin: "auto" }} />
                      </div>
                      {/* <Card.Img variant="top" src={el.thumbnail}/> */}
                      <Card.Body>
                        <Card.Title>{el.title}</Card.Title>
                        <Card.Text>
                          {el.description}
                        </Card.Text>
                        <Button onClick={() => handleEle_view(el)}>View Product</Button>
                      </Card.Body>
                    </Card>

                  )
                })
              }
            </div>

          </Row>
        </Container>
      </>
    )
  }

  else if (cate_value == "fashion") {
    return (
      <>
        <div className="vc_title">
          <h4>Best of Fashion</h4>
          <span>{fashion_pr.length} items</span>
        </div>
        <Container>
          <Row>
            <div className="vc_product">
              {
                fashion_pr.map((fap) => {
                  // console.log(el,"el");
                  return (
                    <Card style={{ width: '25%' }}>
                      <div style={{ width: "200px", height: "200px", margin: "0 auto" }}>
                        <Card.Img variant="top" src={fap.thumbnail} style={{ width: "100%", height: "100%", objectFit: "cover", margin: "auto" }} />
                      </div>
                      {/* <Card.Img variant="top" src={el.thumbnail}/> */}
                      <Card.Body>
                        <Card.Title>{fap.title}</Card.Title>
                        <Card.Text>
                          {fap.description}
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleFash_view(fap)}>View Product</Button>
                      </Card.Body>
                    </Card>

                  )
                })
              }
            </div>
          </Row>
        </Container>
      </>
    )
  }

  else if (cate_value == "home_decor") {
    return (
      <>
        <div className="vc_title">
          <h4>Best of Home Decor</h4>
          <span>{homedec_pr.length} items</span>
        </div>
        <Container>
          <Row>
            <div className="vc_product">
              {
                homedec_pr.map((homde) => {
                  // console.log(el,"el");
                  return (
                    <Card style={{ width: '25%' }}>
                      <div style={{ width: "200px", height: "200px", margin: "0 auto" }}>
                        <Card.Img variant="top" src={homde.thumbnail} style={{ width: "100%", height: "100%", objectFit: "cover", margin: "auto" }} />
                      </div>
                      {/* <Card.Img variant="top" src={el.thumbnail}/> */}
                      <Card.Body>
                        <Card.Title>{homde.title}</Card.Title>
                        <Card.Text>
                          {homde.description}
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleHome_view(homde)}>View Product</Button>
                      </Card.Body>
                    </Card>

                  )
                })
              }
            </div>
          </Row>
        </Container>
      </>
    )
  }

  useEffect(() => {
    navigate('/');
  })
}

export default View_category;