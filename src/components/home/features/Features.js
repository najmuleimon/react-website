import { useEffect, useState } from 'react'
import FeatureCard from './FeatureCard';

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('data/features.json')
        .then(res => res.json())
        .then(data => setFeatures(data))
    }, [])
  return (
    <section className='features section-gap'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row gutter-y-24">
                        {
                            features.map((item) => (
                                <div key={item.id} className="col-md-6 col-lg-4">
                                    <FeatureCard key={item.id} data={item}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features