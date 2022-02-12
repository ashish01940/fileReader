import React, { useRef } from 'react'
import '../App.css';

function ImageReader() {
    const fileDisplay = useRef(null)
    const readImages = async (files) => {
        let fileArrayFromObj = Object.values(files)

        fileArrayFromObj.map((file) => {
            let fileReader = new FileReader()
            fileReader.onload = () => {
                let data = fileReader.result;
                fileDisplay.current.innerHTML += `<img src=${data} alt=${file.name} />`;
            }
            fileReader.readAsDataURL(file)
        })
    }
    return (
        <>
            <input onChange={(e) => readImages(e.target.files)} type="file" multiple accept='image/*' />
            <div ref={fileDisplay} >

            </div>
        </>
    )
}

export default ImageReader