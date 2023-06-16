import { useState } from 'react';
import bannerImg from '../../assets/images/banner.png'
import PrimaryButton from '../shared/PrimaryButton'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import VideoModal from '../shared/VideoModal';

const Banner = () => {
    const [modalShow, setModalShow] = useState(false);

  return (
    <> 
        <section className='banner position-relative'>
            <div className="text-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Lore <span>ipsum.</span> Dolor <span>sit.</span></h1>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde omnis iste natus error.</p>
                            <ul className='d-flex align-items-center gap-3'>
                                <li>
                                <PrimaryButton padding="12px 32px" border="1px solid #7C7C7C" className="bg-white text-primary">
                                    Viverra orci sagittis
                                </PrimaryButton>
                                </li>
                                <li>
                                    <button onClick={() => setModalShow(true)} type='button' className='video-btn d-flex align-items-center'>
                                        <BsFillPlayCircleFill/>
                                        Get a demo
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <div className="image">
                    <img src={bannerImg} alt="" className='img-fluid' />
                </div>
            </div>
        </section>

        <VideoModal show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}

export default Banner