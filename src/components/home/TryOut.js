import SectionTitle from '../shared/SectionTitle'
import PrimaryButton from '../shared/PrimaryButton'
import image from '../../assets/images/try-out.png'

const TryOut = () => {
  return (
    <section className='try-out section-gap'>
        <div className="container">
            <div className="row align-items-center gutter-y-24">
                <div className="col-lg-6">
                    <SectionTitle
                        maxWidth="791px"
                        title="Sed ut perspiciatis unde omnis iste natus error."
                        span="Try out!"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ullamco esse cillium"
                    />
                    <PrimaryButton padding="13px 33px" link="/" className="bg-primary text-white">
                        Try Out Now!
                    </PrimaryButton>
                </div>

                <div className="col-lg-6">
                    <img src={image} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TryOut