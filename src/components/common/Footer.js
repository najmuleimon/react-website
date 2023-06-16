import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-dark.svg'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row gutter-y-24">
                <div className="col-sm-4 col-md-3 col-lg-2">
                    <div className="content">
                        <h4 className="title">Products</h4>
                        <ul>
                            <li>
                                <Link to="/">Features</Link>
                            </li>
                            <li>
                                <Link to="/">Enterprice</Link>
                            </li>
                            <li>
                                <Link to="/">Innovation</Link>
                            </li>
                            <li>
                                <Link to="/">Offline</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2">
                    <div className="content">
                        <h4 className="title">Company</h4>
                        <ul>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                            <li>
                                <Link to="/">Our Story</Link>
                            </li>
                            <li>
                                <Link to="/">Careers</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2">
                    <div className="content">
                        <h4 className="title">Support</h4>
                        <ul>
                            <li>
                                <Link to="/">Documentation</Link>
                            </li>
                            <li>
                                <Link to="/">Community</Link>
                            </li>
                            <li>
                                <Link to="/">Contact</Link>
                            </li>
                            <li>
                                <Link to="/">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 d-none d-lg-flex justify-content-center">
                    <div className="divider"></div>
                </div>
                <div className="col-md-3 col-lg-4">
                    <div className="content">
                        <img src={logo} alt="" className='img-fluid' />
                        <h5>Tristique senectus et netus et malesuada fames</h5>
                        <p>&copy; 2023 Logoipsum. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer