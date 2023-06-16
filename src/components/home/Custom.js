import SectionTitle from '../shared/SectionTitle'
import image from '../../assets/images/custom.png'

const Custom = () => {
  return (
    <section className='custom section-gap'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <SectionTitle
                        maxWidth="534px"
                        title="Consectetur adipiscing elit"
                        desc="Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim viverra"
                    />
                </div>

                <div className="col-lg-6">
                    <div className="image-part d-flex align-items-center justify-content-between">
                        <div className="image">
                            <img src={image} alt="" className='img-fluid' />
                        </div>

                        <div className="count text-center d-flex align-items-center justify-content-center">
                            <h4>3
                                <span className='d-block'>+Custom <br /> ones</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Custom