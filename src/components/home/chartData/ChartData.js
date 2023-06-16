import { useEffect, useState } from 'react';
import SectionTitle from '../../shared/SectionTitle'
import chartImg from '../../../assets/images/chart.png'

const ChartData = () => {
    const [facebookData, setFacebookData] = useState([]);
    const [logoData, setLogoData] = useState([]);

    useEffect(() => {
        fetch('/data/facebookData.json')
        .then(res => res.json())
        .then(data => setFacebookData(data));
    }, [])

    useEffect(() => {
        fetch('/data/logoData.json')
        .then(res => res.json())
        .then(data => setLogoData(data));
    }, [])

  return (
    <section className='chart-data section-gap'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <SectionTitle
                        title="Lorem Ipsum is simply dummy text of the printing and typesetting"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
                        maxWidth="870px"
                        centered
                    />

                    <div className="img-preview">
                        <img src={chartImg} alt="" className='img-fluid w-100' />
                    </div>
                </div>
            </div>
        </div>

        <div className="data-table">
            <div className="container">
                <div className="row gutter-y-24">
                    <div className="col-lg-6">
                        <div className="text-center">
                            <h4>Facebook data</h4>
                            <div className="table-responsive">
                                <table className="table table-bordered border-white shadow-sm">
                                    <thead>
                                        <tr>
                                        <th scope="col">Ad name</th>
                                        <th scope="col">Orders</th>
                                        <th scope="col">ROAS</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        {
                                            facebookData.map(({id, adName, orders, roas}) => (
                                                <tr key={id}>
                                                    <td>{adName}</td>
                                                    <td>{orders}</td>
                                                    <td className={parseFloat(roas) < 3 && 'bg-yellow'}>{roas}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>  
                    <div className="col-lg-6">
                        <div className="text-center">
                            <h4>Logoipsum data</h4>
                            <div className="table-responsive">
                                <table className="table table-bordered border-white shadow-sm">
                                    <thead>
                                        <tr>
                                        <th scope="col">Ad name</th>
                                        <th scope="col">Orders</th>
                                        <th scope="col">ROAS</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        {
                                            logoData.map(({id, adName, orders, roas}) => (
                                                <tr key={id}>
                                                    <td>{adName}</td>
                                                    <td>{orders}</td>
                                                    <td className={parseFloat(roas) >= 3 && 'bg-dark-green'}>{roas}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>       
        </div>
    </section>
  )
}

export default ChartData