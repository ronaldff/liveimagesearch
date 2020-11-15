import React,  { useState }  from 'react';
import Searchresult from "./Searchresult";

const Search = () => {
    const [currVal, updateVal] = useState('');

    const handleInput = (e) => {
        const keyword = e.target.value;
        updateVal(keyword);
    }

    return (
        <>
            <div className="mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6 search_input">
                            <input class="form-control" type="text" placeholder="Search" aria-label="Search" onChange={handleInput} value={currVal} />
                        </div>
                        <div className="col-3"></div>

                    </div>
                </div>
            </div>
            {currVal === '' ? null : <Searchresult  name={currVal} />}
        </>
    )
}

export default Search;
