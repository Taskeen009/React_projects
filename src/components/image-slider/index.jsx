import { useEffect, useState } from 'react'
import './style.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const Slider = ({ url, limit, page }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errormsg, setErorMsg] = useState("")
    const [loading, setLoading] = useState(false)

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }
    async function fetchImages(getUrl) {
        setLoading(true)
        try {
            //const response = await fetch(getUrl);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data)
                setLoading(false)
            }

        }
        catch (e) {
            setErorMsg(e.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        if (url !== '') {
            fetchImages(url);
        }
    }, [url]);

    console.log(images)
    if (loading)
        return <div>Loading data</div>

    if (errormsg)
        return <div>Error is there {errormsg}</div>


    return (
        <div className='container'>
            <BsArrowLeftCircleFill
                onClick={handlePrev}
                className='arrow arrow-left' />
            {
                images && images.length ?
                    images.map((img,index) => (
                        <img
                            key={img.id}
                            alt={img.download_url}
                            src={img.download_url}
                            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                        />
                    ))
                    : null
            }
            <BsArrowRightCircleFill
                onClick={handleNext}
                className='arrow arrow-right' />
            <span className='circle-indicators'>
                {
                    images && images.length ?
                        images.map((_, index) => (
                            //  <button className='current-indicator' key={index}></button>
                            <button
                                //className={`current-indicator ${currentSlide === index ? 'active' : ''}`}
                                className={currentSlide===index? "current-indicator":"current-indicator inactive-indicator"}
                                key={index}
                                onClick={() => setCurrentSlide(index)}>
                            </button>
                        ))
                        : null
                }
            </span>
        </div>
    )
}

export default Slider