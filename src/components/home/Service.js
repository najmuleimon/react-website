import {AiOutlineCheckCircle} from 'react-icons/ai'
import SectionTitle from '../shared/SectionTitle'
import PrimaryButton from '../shared/PrimaryButton'
import serviceImg from '../../assets/images/service.png'

const Service = () => {
  return (
    <section className='service section-gap'>
        <div className="container">
            <div className="row align-items-center gutter-y-24">
                <div className="col-lg-6">
                    <SectionTitle
                        title="Nemo enim ipsam quia "
                        desc="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu nemo enim"
                    />
                    <ul>
                        <li className='d-flex align-items-center transition'>
                            <AiOutlineCheckCircle className='icon'/>
                            Sed ut perspiciatis unde
                        </li>
                        <li className='d-flex align-items-center transition'>
                            <AiOutlineCheckCircle className='icon'/>
                            Omnis iste natus
                        </li>
                        <li className='d-flex align-items-center transition'>
                            <AiOutlineCheckCircle className='icon'/>
                            Error sit voluptatem
                        </li>
                        <li className='d-flex align-items-center transition'>
                            <AiOutlineCheckCircle className='icon'/>
                            Accusantium doloremque
                        </li>
                    </ul>

                    <PrimaryButton padding="13px 33px" className="bg-primary text-white">
                        Try Out Now!
                    </PrimaryButton>
                </div>

                <div className="col-lg-6">
                    <div className="image">
                        <img src={serviceImg} alt="" className='img-fluid w-100' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service