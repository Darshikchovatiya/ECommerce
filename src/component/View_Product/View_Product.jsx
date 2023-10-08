import React, { useState } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { base_api } from '../../api/Products_api';
import { useDispatch } from 'react-redux';
import { category_value } from '../../services/actions/products_action';
import '../View_Product/View_Product.css'




// async function axiosTest() {
  // const promise = axios.get(base_api + "/products");

  // const dataPromise = promise.then((response) => response.data);

  // return dataPromise;



  // axios.get(base_api + "/products").then((res) => {

  //   let fi_data = res.data;

  //   let fil_data = fi_data.map((fi) => {
  //     // console.log(fi,"fi");
  //     return fi.category;
  //   })

  //   let final_data = fil_data.filter((uniq, index) => {
  //     return fil_data.indexOf(uniq) == index;
  //   })

  //   // console.log(final_data,"final");
  //   return final_data;
  // });


  // try {
  //   return await axios.get(base_api + "/products").then((res) => {
  //     let fi_data = res.data;

  //     let fil_data = fi_data.map((fi) => {
  //       // console.log(fi,"fi");
  //       return fi.category;
  //     })

  //     let final_data = fil_data.filter((uniq, index) => {
  //       return fil_data.indexOf(uniq) == index;
  //     })

      // console.log(final_data,"final");
      // return final_data;


    // });
  // } catch (error) {
    // console.log("err", error);
    // throw {
    //   code: error.code,
    //   message: error.message,
    //   responseStatus: error.response?.status,
    //   url
    // };
  // }






// }

// axiosTest();





// now we can use that data from the outside!

// const final_d = axiosTest().map((fi_d)=>{
//   console.log(fi_d,"fid");
// })



// axiosTest().then((res) => {
//   console.log("res", res);
// }).catch(err => console.log(err));















// const cat_filter_data = () => {
//   axios.get(base_api + "/products").then((res)=>{
//     // console.log(res.data,"res");
//     let fi_data = res.data;

//     let fil_data = fi_data.map((fi)=>{
//       // console.log(fi,"fi");
//       return fi.category;
//     })

//     let final_data = fil_data.filter((uniq, index)=>{
//       return fil_data.indexOf(uniq) == index;
//     })

//     // console.log(final_data,"final");
//     return final_data;



//   }).catch((err)=>{
//     console.log(err,"err");
//   })
// }


// cat_filter_data().then((res)=>{
//   console.log(res,"Res");
// }).catch(err => console.log(err,"Err"))



// console.log(cat_filter_data());























function View_Product() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [pro_filter_data, setPro_filter_data] = useState(cat_filter_data());

  // console.log("hi",pro_filter_data);



  const handleViewAll = (e) => {
    let value = e.target.value;

    if (value == 'electronics') {

      dispatch(category_value(value));
      navigate(`/view_category/:${value}`);

    }
    else if (value == 'fashion') {

      dispatch(category_value(value));
      navigate(`/view_category/:${value}`);

    }
    else if (value == "home_decor") {

      dispatch(category_value(value));
      navigate(`/view_category/:${value}`);

    }
    else{
      navigate('/');
    }
  }



  return (
    <>
      <Container>
        <Row>
          <div className="best_of_electronics">
            <Card className='card_1'>
              <Card.Body>
                <Card.Title>Best of Electronics</Card.Title>
                <Button variant="primary" value='electronics' onClick={handleViewAll}>View All</Button>
              </Card.Body>
            </Card>

            <Card className='card_2' style={{ width: '18rem' }}>
              <div className="p_card-img">
                <Card.Img variant="top" src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" />
              </div>
              <Card.Title>OPPOF19</Card.Title>
            </Card>

            <Card className='card_2' style={{ width: '18rem' }}>
              <div className="p_card-img">
                <Card.Img variant="top" src="https://i.dummyjson.com/data/products/5/thumbnail.jpg" />
              </div>
              <Card.Title>Huawei P30</Card.Title>
            </Card>

            <Card className='card_2' style={{ width: '18rem' }}>
              <div className="p_card-img">
                <Card.Img variant="top" src="https://i.dummyjson.com/data/products/7/thumbnail.jpg" />
              </div>
              <Card.Title>Samsung Galaxy Book</Card.Title>
            </Card>
          </div>

          <div className="best_of_electronics Fashion">
            <Card className='card_1'>
              <Card.Body>
                <Card.Title>Best of Fashion</Card.Title>
                <Button variant="primary" value='fashion' onClick={handleViewAll}>View All</Button>
              </Card.Body>
            </Card>

            <Card className='card_2' style={{ width: '18rem' }}>
              <div className="p_card-img">
                <Card.Img variant="top" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" />
              </div>
              <Card.Title>Women Winter Clothes</Card.Title>
            </Card>

            <Card className='card_2' style={{ width: '18rem' }}>
              <div className="p_card-img">
                <Card.Img variant="top" src="https://i.dummyjson.com/data/products/47/thumbnail.jpeg" />
              </div>
              <Card.Title>Sneaker shoes</Card.Title>
            </Card>

            <Card className='card_2' style={{ width: '18rem' }}>
              <div className="p_card-img">
                <Card.Img variant="top" src="https://i.dummyjson.com/data/products/62/thumbnail.jpg" />
              </div>
              <Card.Title>Waterproof Leather Watch</Card.Title>
            </Card>
          </div>

          <div className="best_of_electronics Home_decor ">
            <Card className='card_1'>
              <Card.Body>
                <Card.Title>Home Decor</Card.Title>
                <Button variant="primary" value='home_decor' onClick={handleViewAll}>View All</Button>
              </Card.Body>
            </Card>

            <Card className='card_2' style={{ width: '18rem' }}>
              <div className="p_card-img">
                <Card.Img variant="top" src="https://i.dummyjson.com/data/products/30/thumbnail.jpg" />
              </div>
              <Card.Title>Key Holder</Card.Title>
            </Card>

            <Card className='card_2' style={{ width: '18rem' }}>
              <div className="p_card-img">
                <Card.Img variant="top" src="https://i.dummyjson.com/data/products/28/thumbnail.jpg" />
              </div>
              <Card.Title>3D Embellishment Art Lamp</Card.Title>
            </Card>

            <Card className='card_2' style={{ width: '18rem' }}>
              <div className="p_card-img">
                <Card.Img variant="top" src="https://i.dummyjson.com/data/products/26/thumbnail.jpg" />
              </div>
              <Card.Title>Plant Hanger For Home</Card.Title>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default View_Product;