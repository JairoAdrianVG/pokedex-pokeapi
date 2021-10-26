import React, {useState} from "react";


const Searchbar = (props) => {
    const [search, setSearch] = useState('')
    const {onSearch } = props;
   
    const onChange = (e) => {
        setSearch(e.target.value);
        if(e.target.value.length === 0){
            onSearch(null);
        }
    };

    const onClick = async (e) => {
        onSearch(search);
    }

    return(
        <div className='searchbar-container'>
            <div className='searchbar'>
                <input 
                placeholder='What Pokemon are u looking for?...'
                onChange={onChange}></input>
            
            </div>
            <div className='searchbar_btn'>
                <button onClick={onClick}>Search</button>
            </div>
        </div>
    )
};

export default Searchbar;