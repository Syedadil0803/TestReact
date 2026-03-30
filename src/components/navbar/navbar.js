import { Route, Routes, Link } from 'react-router-dom';
import ProductsComponent from '../products/products.js';
import ServicesComponent from '../services/service.js';
import UsersData from '../users/users.js';
import FunctionComponent from '../function/function.js';
import ClassComponent from '../class/class.js';


function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to={"/"}>Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={"/products"}>Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={"/services"}>Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={"/users"}>Users</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li></li>
                                    <li><Link class="dropdown-item" to={"/function"}>Component 1</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to={"/class"}>Component 2</Link></li>
                                </ul>
                            </li>
                            {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/' />
                <Route path='/products' element={<ProductsComponent />} />
                <Route path='/services' element={<ServicesComponent />} />
                <Route path='/users' element={<UsersData />} />
                  <Route path='/function' element={<FunctionComponent />} />
                  <Route path='/class' element={<ClassComponent />} />
            </Routes>
        </div>
    )
}
export default Navbar;