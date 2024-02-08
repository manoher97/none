import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import Shop from './Shop';

const Header = () => {
    const [link, setLink] = useState({
        Home: "Home",
        Cart: "Cart",
        Shop: "Shop"

    })
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link class="nav-link active" aria-current="page" to="/">{link.Home}</Link>
                            <Link class="nav-link active" to="/Shop">{link.Shop}</Link>
                            <Link class="nav-link active" to="/Cart">{link.Cart}</Link>
                        </ul>
                        <form class="d-flex" role="search">
                            <Link class="nav-link active me-3" to="/Shop">{link.Shop}</Link>
                            <Link class="nav-link active" to="/Cart">{link.Cart}</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;

