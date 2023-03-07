import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";


function Checkout()
{
    const history = useHistory();
    if(!localStorage.getItem('auth_token')){
        history.push('/');
        swal("Warning","Login to goto Cart Page","error");
    }
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    var totalCartPrice = 0;
    
    useEffect(() => {
        let isMounted = true;
        
        
        axios.get(`/api/cart`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    // console.log(product);
                    setCart(res.data.cart);
                    
                    setLoading(false);
                }
             
                else if(res.data.status === 401)
                {
                    history.push('/');
                    swal("Warning",res.data.message,"error");
                }
            }
        });
        
        return() => {
            isMounted =false;
        };
    }, [history]);

    if(loading)
    {
        return <h4>Loading Checkout....</h4>
    }

    return(
        <div>
             
            <div className="py-3 bg-warning">
                <div className="container">
                    <h4>Home / Checkout</h4>
                </div>

            </div> 

            <div className="py-4 ">
                <div className="container">
                    <div className="row">

                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Basic information</h4>
                                </div>
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>First Name</label>
                                                <input type="text" name="firstname" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Last Name</label>
                                                <input type="text" name="lastname" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Phone Number</label>
                                                <input type="text" name="phone" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Email Address</label>
                                                <input type="text" name="email" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Full Address</label>
                                                <textarea rows="3" className="form-control" ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label>City</label>
                                                <input type="text" name="city" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label>State</label>
                                                <input type="text" name="state" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-3">
                                                <label>Zip Code</label>
                                                <input type="text" name="zipcode" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group text-end">
                                                
                                                <button type="button" className="btn btn-primary">Place Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div> 
                        <div className="col-md-5">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th width="50%">Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {cart.map((item,idx) => {
                                    totalCartPrice += item.product.seller_price * item.product_quantity;
                                    return (
                        
                   
                                        <tr key={idx}>  
                                            <td>{item.product.name}</td>
                                            <td>{item.product.seller_price}</td>
                                            <td>{item.product_quantity}</td>
                                            <td>{item.product.seller_price * item.product_quantity}</td>

                                        </tr>
                                    )
                                })}
                                <tr>
                                    <td colSpan="2" className="text-end fw-bold">GrandTotal</td>
                                    <td colSpan="2" className="text-end fw-bold">{totalCartPrice}</td>
                                </tr>
                                </tbody>

                                
                            </table>

                        </div >
                    </div>
                </div> 
            </div> 
         
    </div>
    )
}

export default Checkout;