import SectionTitle from '../../shared/SectionTitle'
import image from '../../../assets/images/all-media.png'
import AllMediaTable from './AllMediaTable'

const AllMedia = () => {
  return (
    <section className='all-media section-gap'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <SectionTitle
                        centered
                        maxWidth="1113px"
                        title="Ullamcorper morbi tincidunt ornare massa eget. Quam viverra orci sagittis eu volutpat odio"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
                    />

                    <div className="image text-center">
                        <img src={image} alt="" className='img-fluid' />
                    </div>

                    <AllMediaTable/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AllMedia