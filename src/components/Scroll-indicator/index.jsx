import { useEffect, useState } from 'react';
import './style.css'

const Scroll = ({ url }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [scrollPer, setScrollPer] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const res = await response.json();
            if (res.products && res.products.length > 0)
                setLoading(false)
            setData(res.products)
            console.log(res)
        }
        catch (e) {
            console.log(e)
        }

    }

    const handleScrollPerc = () => {
        // console.log(document.body.scrollTop,
        //     document.documentElement.scrollTop,
        //     document.documentElement.scrollHeight,
        //     document.documentElement.clientHeight)

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        setScrollPer((howMuchScrolled / height )* 100)
    }


    useEffect(() => {
        fetchData(url);
    }, [url])

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPerc)
        return (() => {
            window.removeEventListener('scroll', () => { })
        })
    })

    console.log(data, scrollPer)




    //    // Function to execute when the window is resized
    // const handleResize = () => {
    //     // Log the new width and height of the window
    //     console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
    // };

    // // Adding an event listener for the 'resize' event on the window
    // window.addEventListener('resize', handleResize);

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className='scroll-progress-tracking-container'>
                    <div className="current-progress-bar g" style={{ width: `${scrollPer}%` }}></div>
                </div>
            </div>
            <div className="data-container">
                {
                    data && data.length > 0 ?
                        data.map((item) => (
                            <p key={item.id}>{item.title}</p>
                        ))
                        : null
                }
            </div>
        </div>
    )
}

export default Scroll;