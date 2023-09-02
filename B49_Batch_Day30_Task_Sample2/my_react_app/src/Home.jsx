import React, { useEffect, useState } from 'react'
import axios from "axios";

function Home() {
    const [user, adduser] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            adduser(response.data)
        });
    }, []);



    const handleFormSubmit = (event) => {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const websiteInput = document.getElementById('website');
        const streetInput = document.getElementById('street');
        const cityInput = document.getElementById('city');
        const zipcodeInput = document.getElementById('zipcode');
        const phonenumberInput = document.getElementById('phonenumber');

        const name = nameInput.value.trim();
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const website = websiteInput.value.trim();
        const street = streetInput.value.trim();
        const city = cityInput.value.trim();
        const zipcode = zipcodeInput.value.trim();
        const phone = phonenumberInput.value.trim();


        if (name && username && email && website && street && city && zipcode && phonenumber) {
            user.push({ name, username, email, website, address: { street, city, zipcode }, phone });
            console.log("user added");

            nameInput.value = "";
            usernameInput.value = "";
            emailInput.value = "";
            websiteInput.value = "";
            streetInput.value = "";
            cityInput.value = "";
            zipcodeInput.value = "";
            phonenumberInput.value = "";


            adduser([...user]);
            console.log(user);

        } else {
            alert("Please fill in all the fields correctly.");
            return;
        }

    }


    const handleEditClick = (event) => {
        const index = event.target.getAttribute("data-index");
        const targetdata = user[index];

        const nameInput = document.getElementById('name');
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const websiteInput = document.getElementById('website');
        const streetInput = document.getElementById('street');
        const cityInput = document.getElementById('city');
        const zipcodeInput = document.getElementById('zipcode');
        const phonenumberInput = document.getElementById('phonenumber');

        nameInput.value = targetdata.name;
        usernameInput.value = targetdata.username;
        emailInput.value = targetdata.email;
        websiteInput.value = targetdata.website;
        streetInput.value = targetdata.address.street;
        cityInput.value = targetdata.address.city;
        zipcodeInput.value = targetdata.address.zipcode;
        phonenumberInput.value = targetdata.phone;

        user.splice(index, 1);
        adduser([...user]);
    }


    function handleDeleteClick(event) {
        const index = event.target.getAttribute("data-index");
        user.splice(index, 1);
        adduser([...user])
    }








    return (
        <>
            <header>
                <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold fs-2 text-white mx-auto" href="#">Navbar</a>
                    </div>
                </nav>
            </header>




            <div className="container mt-5">
                <h1>Implementing CRUD using React Axios</h1>
                <form id="crudForm" onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="col-md-6">

                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" id="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">UserName:</label>
                                <input type="text" className="form-control" id="username" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="website">Website:</label>
                                <input type="text" className="form-control" id="website" required />
                            </div>


                        </div>



                        <div className="col-md-6">


                            <div className="form-group">
                                <label htmlFor="street">AddressStreetName:</label>
                                <input type="text" className="form-control" id="street" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">AddressCity:</label>
                                <input type="text" className="form-control" id="city" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">ZipCode:</label>
                                <input type="text" className="form-control" id="zipcode" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phonenumber">Phone:</label>
                                <input type="text" className="form-control" id="phonenumber" required />
                            </div>

                        </div>
                        <div className='d-flex justify-content-center'>
                            <button type="submit" className="btn btn-primary my-3 px-5 w-50" onClick={handleFormSubmit} >Submit</button>
                        </div>
                    </div>
                </form>




                <div className="row">
                    {
                        user.map((item, index) => (
                            <div className="col-md-6" key={index}>
                                <div className="card mb-3">
                                    <div className="card-header">
                                        User-{item.id}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Name: {item.name}</h5>
                                        <p className="card-text">Username: {item.username}</p>
                                        <p className="card-text">Email: {item.email}</p>
                                        <p className="card-text">Website: {item.website}</p>
                                        <p className="card-text">Address: {item.address.street}, {item.address.city}, {item.address.zipcode} </p>
                                        <p className="card-text">Phone: {item.phone}</p>
                                        <div className='d-flex justify-content-end'>
                                            <button className='btn btn-sm btn-outline-info px-5' type="button" data-index={index} onClick={handleEditClick}>Edit</button>
                                            <button className='btn btn-sm btn-outline-danger px-5 mx-3' type="button" data-index={index} onClick={handleDeleteClick} >Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div >
        </>
    )
}

export default Home