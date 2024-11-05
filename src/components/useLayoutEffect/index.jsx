import { useEffect, useLayoutEffect } from "react"

const Layout = () => {

    useEffect(() => {
        console.log('Message from useEffect')
    }, [])

    useLayoutEffect(() => {
        console.log('message from uselayouteffect')
    }, [])
    return (
        <div>
            <h2>Test Message</h2>
            {Array(400).fill('').map((item, index) => (
                <li key={index}>{Math.floor(Math.random() * 10)}</li>
            ))}
        </div>
    )
}

export default Layout