import React, { useState } from 'react';
import '../Styles/Qrcode.css';

const Qrcode = () => {
    const [img, setImg] = useState("");
    const [load, setLoading] = useState(false);
    const [qrdata, setQrdata] = useState("Rameshkannan S");
    const [qrdown, setQrdown] = useState("500");

    const generateQr = async () => {
        setLoading(true);
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrdown}x${qrdown}&data=${encodeURIComponent(qrdata)}`;
            setImg(url);
        } catch (error) {
            console.error("Error generating QR code", error);
        } finally {
            setLoading(false);
        }
    };

    const downloadQr = () => {
        fetch(img).then((response) => response.blob())
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "qrcode.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
    };

    return (
        <>
            <div className='container'>
                <div className='row my-5 justify-content-center'>
                    <h1 className='text-center my-5 text-warning'>QR Code Generator</h1>
                    <div className='col-md-6 col-sm-12 p-5 col1'>

                        <label htmlFor='in1' className='lable'>Enter QR code link:</label>
                        <input type='text' id='in1' value={qrdata} onChange={(e) => setQrdata(e.target.value)} />

                        <label htmlFor='in2' className='lable'>QR code size:</label>
                        <input type='text' id='in2' value={qrdown} onChange={(e) => setQrdown(e.target.value)} />

                        <div className='d-flex justify-content-around'>
                            <button className='btn btn-success me-4 rounded-0 generate' disabled={load} onClick={generateQr}>GENERATE QR</button>
                            <button className='btn btn-outline-danger rounded-0 download' onClick={downloadQr}>DOWNLOAD QR</button>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-12 col2'>
                        {img && <img src={img} className='w-100' alt='QR Code' />}
                    </div>
                </div>
                {load && <h2 className='please me-5'>Please wait....</h2>}
            </div>
        </>
    );

};

const Qr = () => {
    return (
        <>
            <Qrcode />
        </>
    );
};

export default Qr;
