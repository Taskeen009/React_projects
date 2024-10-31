import { useState } from 'react'
import QRCode from "react-qr-code";
import './style.css'
const Qr=()=>{
    const [qrCode,setQrCode]=useState('')
    const [input ,setInput]=useState('')

    const handleqrcode=()=>{
        setQrCode(input)
    }
    return(
        <div>
          <h1>QR Code</h1>
          <div>
            <input onChange={(e)=>setInput(e.target.value)} type="text" name="qr-code"/>
            <button disabled={!input.trim()} onClick={handleqrcode}>Generate</button>
          </div>
          <div>
            <QRCode
            id="qr-code-value"
            value={qrCode}
            size={400}
            />
          </div>
        </div>
    )
}

export default Qr