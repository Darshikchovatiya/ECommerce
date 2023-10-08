import React, { useState } from 'react'
import { Badge, Button, Container, Dropdown, Form, ListGroup, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { BsCart2, BsSearch } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa6';
import { base_api } from '../../api/Products_api';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { product_view } from '../../services/actions/products_action';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase';

function Header() {

    const navigate = useNavigate();

    const dispatch = useDispatch();


    const { cart_products } = useSelector(state => state.Products_Re);
    // console.log(cart_products);

    const [search_de, setSearch_de] = useState([]);

    const [inputvalue, setInputvalue] = useState({
        search: ''
    })

    const handleSearch = async (e) => {


        let name = e.target.name;
        let value = e.target.value;

        setInputvalue({ ...inputvalue, [name]: value });


        let se_sho = document.getElementById("sea_show");

        if (value) {
            se_sho.classList.add("show");
        }
        else {
            se_sho.classList.remove("show");
        }


        let al_data = [];
        const querySnapshot = await getDocs(collection(db, "products"));

        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            let fb_data = { ...doc.data(), id: doc.id };
            al_data = [...al_data, fb_data];


            // console.log(al_data,"al_data");
        });

        let se_data = al_data.filter((ad) => {
            // console.log("ad",ad.title);
            return ad.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
        })
        // console.log(se_data,"se_data");
        setSearch_de(se_data);


        // axios.get(base_api + "/products").then((res) => {
        //     // console.log("res",res.data);

        //     let search_d = res.data.filter((s_re) => {
        //         return s_re.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
        //     })
        //     // console.log(search_d, "search");
        //     setSearch_de(search_d);

        // }).catch((err) => {
        //     console.log("err", err);
        // })

    }

    const handleProductview = async (sed) => {
        // console.log("hi",sed);
        let se_sho = document.getElementById("sea_show");
        se_sho.classList.remove("show");
        await dispatch(product_view(sed));
        navigate('/view');
    }


    const handleLogin = () => {
        navigate('/signin');
    }

    const handleLogout = () => {

    }


    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary nav_de" style={{ borderBottom: "2px solid rgb(206, 206, 222)", borderRadius: "2px", zIndex: "1000" }}>
                <Container>
                    <Navbar.Brand>
                        <NavLink to='/'>
                            <img src="logo.png" alt="logo" />

                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Form className="searchbox">
                        <div className='search_inputs'>
                            <div className="search_icon"><BsSearch /></div>
                            <Form.Control type="text" placeholder="Search" className="search_inpu" aria-label="Search" onChange={handleSearch} name='search' value={inputvalue.search} />
                        </div>

                        <div className="search-results" id='sea_show'>
                            <div color="white" className="search-icte">
                                {
                                    search_de.map((sed) => {
                                        // console.log(sed,"we");
                                        return (
                                            <div className="search-bsp" onClick={() => handleProductview(sed)}>
                                                <BsSearch className='search-ico' />
                                                <p className="search-tex">{sed.title}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>


                    </Form>

                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                            <NavDropdown title="Profile" id="navbarScrollingDropdown" className='h_drop_down'>
                                <div className="he_drop_item">
                                    <span>Hello </span>
                                    <span>User</span>
                                    <button className='he_btn' onClick={handleLogin}>Sign In</button>
                                    <button className='he_btn' onClick={handleLogout}>Log Out</button>
                                </div>
                            </NavDropdown>
                            <NavLink to='/cart' className='nav-link'>
                                <BsCart2 className='cart_icon' />
                                Cart
                                <Badge bg="dark" className='ms-1'>{cart_products.length}</Badge>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    )
}

export default Header;