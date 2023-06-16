import PrimaryButton from '../shared/PrimaryButton'
import SectionTitle from '../shared/SectionTitle'

const Apply = () => {
  return (
    <section className='apply section-gap'>
        <div className="container">
            <div className="row gutter-y-24">
                <div className="col-md-6 col-lg-7">
                    <SectionTitle
                        title="Ullamcorper morbi tincidunt ornare massa eget"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
                    />
                </div>

                <div className="col-md-6 col-lg-5">
                    <div className="btn-area d-flex align-items-center justify-content-center w-100 h-100">
                        <PrimaryButton padding="15px 68px" className="bg-primary text-white">
                            Apply
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Apply