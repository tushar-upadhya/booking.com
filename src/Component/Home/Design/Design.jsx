import React from "react";
import "./design.css";

const Design = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    src="https://static2.tripoto.com/media/filter/tst/img/20975/TripDocument/1438332957_img_1171.jpg"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Spiti Valley</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img
                    src="https://images.thrillophilia.com/image/upload/s--T9Y6V4zv--/c_fill,h_775,q_auto,w_1600/f_auto,fl_strip_profile/v1/images/photos/000/052/009/original/1588082260_1551793863_shutterstock_630486962.jpg.png.jpg?1588082260"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Kasol</h1>
                    <h2>533 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://assets.gqindia.com/photos/5cdc6effe994c88218b69d12/master/pass/kashmir-1_0.png"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Gulmarg</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Design;
