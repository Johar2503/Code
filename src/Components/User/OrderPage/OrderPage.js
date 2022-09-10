import React, {useEffect, useState} from 'react';
import './OrderPage.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Header from '../../Header/Header';

function OrderPage(props){
    const [bookings,setBookings]=useState([]);
    const baseURL = localStorage.getItem("baseURL");
    
   /* useEffect(()=>{
        axios.post(baseURL+'/user/bookings?id='+props.match.params.userId)
        .then(response => {
            setBookings(response.data)
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
      },[])*/

    // fetch('<API URL>')
    // .then(res => res.json())
    // .then(json => {
    //     this.setState({
    //         items: json,
    //         isLoaded: true, 
    //     })
    // }).catch((err) => {
    //     console.log(err);
    // });

    // constructor(){

    //     super(props);

    //     this.state = {
    //         items: [],
    //         isLoaded: false
    //     }

    // }

    // componentDidMount(){

    

    // }

    
     const bookingList=[
         {
             productId:"1",
             productName: "Levi's Shirt",
             price: 1000,
             quantity: 1,
             totalPrice: 1000
        },
        {
            productId:"2",
            productName: "Pepe Jeans",
            price: 1000,
            quantity: 1,
            totalPrice: 1000
         },
        {
            productId:"3",
            productName: "Rayban Cooling Glasses",
            price: 1000,
            quantity: 1,
            totalPrice: 1000
        }
     ];
    return(
        <div>
             <Header highlight={"Users"} />
        <center>
        <div class="table" id="userBookingBody">
        <table>
            <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
            {/*bookings.map(booking => (
                <tr className="tb" cellSpacing="50">
                    <td>{booking.productId}</td>
                        <td>{booking.productName}</td>
                        <td>{booking.price}</td>
                        <td>1</td>                        
                        <td>{booking.price}</td>
               </tr>
            ))*/}
            {bookingList.map(booking => (
                <tr className="tb" cellSpacing="50">
                    <td>{booking.productId}</td>
                        <td>{booking.productName}</td>
                        <td>{booking.price}</td>
                        <td>1</td>                        
                        <td>{booking.price}</td>
               </tr>
            ))}   
        </table>
        </div></center>
        </div>
    );
    
}

export default OrderPage