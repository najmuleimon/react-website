import Modal from 'react-bootstrap/Modal';
import {IoMdClose} from 'react-icons/io'
import video from '../../assets/videos/demo.mp4'

const VideoModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='video-modal'
    >
      <button type='button' onClick={props.onHide} className='close-btn d-flex align-items-center justify-content-center position-absolute'>
        <IoMdClose className='close-icon'/>
      </button>
      <video controls autoPlay>
        <source src={video} type="video/mp4"/>
      </video>
    </Modal>
  )
}

export default VideoModal