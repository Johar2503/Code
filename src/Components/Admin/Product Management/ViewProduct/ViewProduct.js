import { Breadcrumbs, CardActionArea,  Dialog,  DialogActions,  DialogContent,  DialogContentText,  DialogTitle,  IconButton, Rating, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import Header from '../../../Header/Header';
import "./ViewProduct.css";
import AddProduct from '../AddProduct/AddProduct';
var backuparr = [];
export default function ViewProduct() {
    const productdata = [{
        "productId": 1,
        "productName": "Schiller, Trantow and Kshlerin stadium",
        "productImageUrl": "http://picsum.photos/127/100",
        "productCapacity": 94726,
        "rating": 4,
        "productDescription": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
    }, {
        "productId": 2,
        "productName": "Williamson Inc stadium",
        "productImageUrl": "http://picsum.photos/159/100",
        "productCapacity": 79889,
        "rating": 3,
        "productDescription": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    }, {
        "productId": 3,
        "productName": "Abshire LLC stadium",
        "productImageUrl": "http://picsum.photos/239/100",
        "productCapacity": 89685,
        "rating": 2,
        "productDescription": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
    }, {
        "productId": 4,
        "productName": "Quitzon-Jast stadium",
        "productImageUrl": "http://picsum.photos/111/100",
        "productCapacity": 71626,
        "rating": 5,
        "productDescription": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    }, {
        "productId": 5,
        "productName": "Cruickshank-Kiehn stadium",
        "productImageUrl": "http://picsum.photos/201/100",
        "productCapacity": 53860,
        "rating": 1,
        "productDescription": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
    }];
     
   
    const breadcrumbs = [
        <Typography key="1" color="inherit">
            Admin
        </Typography>,
        <Typography key="2" color="text.primary">
            Products
        </Typography>
    ];

    


    return (
        <div>
            <Header highlight={"Users"} />
                <div className="Viewproduct-Nav">
                    <Avatar sx={{ width: 30, height: 30, marginRight: '8px' }}>
                       
                    </Avatar>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                </div>
                <div className='Viewproduct-SearchWrapper'>
                <TextField type="text" className='Search-Input'  id="productName"  label="Enter product name"  variant="standard" size="medium" required/>
                <Button variant="contained" className="Viewproduct-Button"  >Search By product Name</Button>
                
                <Button variant="contained" className="Viewproduct-Button"  >Reset</Button>
                </div>

                
                      {/*  <Grid className="d-flex justify-content-center" container spacing={1}> {((cards, index) => {
                            return (
                                <Grid item style={{ padding: "20px" }} key={index} id={"adminproductGrid" + (index + 1)}>
                                    <Card style={{ width: 350, borderRadius: "10px", border: "none" }} hoverable="true">
                                        <CardActionArea style={{ height: 350 }}>
                                            <CardMedia
                                                component="img"
                                                style={{ width: 350, height: 200, objectFit: "contain" }}
                                                image={cards.productImageUrl}
                                                alt="product Image"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {cards.productName}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {"Place : " + cards.productLocation}

                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <div>
                                                <IconButton aria-label="edit"  id="editproduct">
                                                    <span className="material-icons">edit</span>
                                                </IconButton>
                                                <IconButton aria-label="delete" color="error"  id="deleteproduct">
                                                    <span className="material-icons">delete</span>
                                                </IconButton>
                                            </div>
                                            <Rating name="read-only" value={cards.rating} readOnly />

                                        </CardActions>
                                    </Card>
                                </Grid>
                            );
                        }
                       )}
                    </Grid>*/} 
                         <div><div className="d-flex justify-content-center"> <h3>No Data to Display</h3></div><div className="d-flex justify-content-center"><Button variant="contained" >Load Sample Data</Button></div></div>
                    
                <Button  variant="contained" size={"large"} id="addproduct"  style={{ position: "fixed", right: "3%", bottom: "5%", width: "75px", height: "75px", borderRadius: "50%" }}><span className="material-icons">Add</span></Button>
                <Dialog
       // open={deleteModalOpen.modal}
        //onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete product"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  color="primary">Yes</Button>
          <Button  color="success" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}
