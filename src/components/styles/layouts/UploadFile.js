import React, { useContext } from 'react'

import { GlobalContext } from './context/GlobalState'

export const UploadFile = () => {
    
    const { uploadFile, file, resetting } = useContext(GlobalContext)

    const resetFile = () => {
        if(resetting) {
            return (
                <input className="input_file" type="file" name="file"
                onChange={e => uploadFile(e.target.files[0])}/>
            )
        } else return (
                <>
                    <input className="input_file" type="file" name="file"
                    onChange={e => uploadFile(e.target.files[0])}/>
                </>
            )
    }

    const fileVerifier = () => {
        if(file && (file.type !== "text/css")) {
            return (
                <p>File must be a CSS Stylesheet</p>
            )
        }
    }

    return (
        <>
            <h1>Upload a layout</h1>
            <div className="browse_feed">
                {/* <form onSubmit={onSubmit}> */}
                <form>
                    <div className="input_group" >
                        <label htmlFor="file">File (.css)</label>
                        {resetFile()}
                    </div>
                    <input className="input_checkbox" type="checkbox" 
                    checked={file && (file.type === "text/css")} disabled/>
                </form>
                {fileVerifier()}
            </div>
        </>
    )
}
