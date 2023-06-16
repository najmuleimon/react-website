import { useEffect, useState } from 'react'
import SectionTitle from '../shared/SectionTitle'

const SocialMedia = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data/social.json')
        .then(res => res.json())
        .then(data => setData(data));
    }, [])

  return (
    <section className='social-media section-gap'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <SectionTitle
                        title="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit"
                        maxWidth="1191px"
                        centered
                    />
                    <div class="table-responsive">
                        <table class="table table-bordered border-white shadow-sm">
                            <thead>
                                <tr>
                                <th scope="col">Source</th>
                                <th scope="col">Ad</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Sales</th>
                                <th scope="col">First time customers</th>
                                <th scope="col">Revenue</th>
                                <th scope="col">ROAS</th>
                                <th scope="col">CAC</th>
                                <th scope="col">F.T. ROAS</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                {
                                    data.map(({id, source, ad, cost, sales, firstTimeCustomers, revenue, roas, cac, FTRoas}) => (
                                        <tr key={id}>
                                            <td>{source}</td>
                                            <td>{ad}</td>
                                            <td>${parseFloat(cost).toLocaleString()}</td>
                                            <td>{sales}</td>
                                            <td>{firstTimeCustomers}</td>
                                            <td>${parseFloat(revenue).toLocaleString()}</td>
                                            <td className={`fw-900 ${parseFloat(roas) > 3.5 && parseFloat(roas) <= 5  ? 'bg-medium-green' : parseFloat(roas) > 5 ? 'bg-dark-green' : ''}`}>{roas}</td>
                                            <td>${cac}</td>
                                            <td className={parseFloat(FTRoas) > 3.5 && parseFloat(FTRoas) <= 4  ? 'bg-medium-green' : parseFloat(FTRoas) > 4 ? 'bg-dark-green' : ''}>{FTRoas}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SocialMedia