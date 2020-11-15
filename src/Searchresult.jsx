import React from 'react';
import "./Searchresult.css";

const Searchresult = (props) => {
    const {name} = props;
    const imgData = `https://source.unsplash.com/545x400/?${name}`;
    return (
        <>
            <div className="mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6 search_input">
                           <img className="searchImg" src={imgData}  alt="images"/>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchresult;