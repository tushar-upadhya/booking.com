import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
// import "./hotel.css";

const Flight = () => {
    const [myData, setMyData] = useState([]);

    /**
     * airline
     * return
     * via
     * via
     * duration
     */
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            let response = await axios.get(
                `https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights`
            );
            // console.log("response:", response.data);
            setMyData(response.data);
        } catch (error) {
            console.log("error:", error);
        }
    };

    return (
        <div>
            <div className="grid">
                <div>
                    {myData.map((post) => {
                        const {
                            from,
                            to,
                            departureTime,
                            airlineName,
                            returnTime,
                            via,
                            price,
                        } = post;
                        return (
                            <div className="card" key={departureTime}>
                                <div className="first">
                                    <p>FROM</p>
                                    <h3>{from}</h3>

                                    <p>TO</p>
                                    <h3>{to.toUpperCase()}</h3>

                                    <p>Airline</p>
                                    <h3>{airlineName}</h3>
                                </div>

                                <div className="second">
                                    <p>DEPARTURE</p>
                                    <h3>{departureTime}</h3>

                                    <p>Rating</p>
                                    <h3>{returnTime}</h3>
                                </div>

                                <div className="third">
                                    <p>Price:</p>
                                    <h3>{price}</h3>

                                    <p>Via:</p>
                                    <h3>{via}</h3>

                                    <p>Duration:</p>
                                    <h3>{departureTime}</h3>
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

export default Flight;
