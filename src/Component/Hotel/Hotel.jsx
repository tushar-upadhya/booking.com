import axios from "axios";
import React, { useEffect, useState } from "react";
import "./hotel.css";

const Hotel = () => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            let response = await axios.get(
                `https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels`
            );
            // console.log("response:", response.data);
            setMyData(response.data);
        } catch (error) {
            console.log("error:", error);
        }
    };

    return (
        <div>
            {/* <Navbar /> */}
            {/* <Header /> */}
            {/* <h2>Hotel</h2> */}
            <div className="grid">
                <div>
                    {myData.map((post) => {
                        const {
                            city,
                            hotel_name,
                            check_in,
                            check_out,
                            room_type,
                            price_per_night,
                            guests,
                            rating,
                        } = post;
                        return (
                            <div className="card" key={hotel_name}>
                                <div className="first">
                                    <p>Hotel</p>
                                    <h3>{hotel_name.toUpperCase()}</h3>

                                    <p>City</p>
                                    <h3>{city}</h3>

                                    <p>Rating</p>
                                    <h3>{rating}</h3>
                                </div>
                                <div className="second">
                                    <p>CHECK-IN</p>
                                    <h3>{check_in}</h3>

                                    <p>CHECK-OUT</p>
                                    <h3>{check_out}</h3>
                                </div>
                                <div className="third">
                                    <p>Price:</p>
                                    <h3>{price_per_night}</h3>

                                    <p>Room:</p>
                                    <h3>{room_type}</h3>

                                    <p>Guests:</p>
                                    <h3>{guests}</h3>
                                </div>
                                <button className="Btn">BOOK</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Hotel;
