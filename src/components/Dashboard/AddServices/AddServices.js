import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../../Home/Navbar/Navbar';
const AddServices = () => {
 const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl, setImgUrl] = useState(null);
        
    const onSubmit = data => {
        const serviceData = {
            service: data.name,
            imgUrl: imgUrl,
            price: data.price
        }
        console.log(serviceData)
        const url = `https://mysterious-peak-96763.herokuapp.com/addServices`

        fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(serviceData)
            })
            .then(res => console.log(res))
    };


        const handleImgUpload = event => {

            const imgData = new FormData();
            imgData.set('key', '8af7b1eaf9d4b037ca9aea2a02ce844f')
            imgData.append('image', event.target.files[0])

            axios.post('https://api.imgbb.com/1/upload', imgData)
                .then(function (response) {
                    setImgUrl(response.data.data.display_url);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    
    return (
        <div className="row">
            <Navbar></Navbar>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            
            <div className="col-md-2">
            </div>
            <div className="col-md-4">
                   <h1 className="text-center">Add Services from Here</h1> <br/>
                <form className="bg-dark p-5 text-white rounded" style={{marginLeft: '3%'}} onSubmit={handleSubmit(onSubmit)}>
    
                <input placeholder="Service Name" {...register("name")}  /> <br/> <br/>
                
                <input placeholder="price" {...register("price")} /> <br/> <br/>
                            
                <input name="image" type="file" onChange={handleImgUpload} /> <br/> <br/>
                            
                
                <input className="btn btn-primary" type="submit" />
                            
                </form>
            </div>
            
            <div className="col-md-4"></div>
        </div>
    );
}

export default AddServices;
