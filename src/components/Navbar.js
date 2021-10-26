import React from "react";

const Navbar = () => {
    let imgUrl = 'https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png'
    return (
    <nav>
        <div/>
            <div>
        <img src={imgUrl} alt='pokeapi-logo' className='navbar-img' />
            </div>
        <div/>
    </nav>
    );
};

export default Navbar;