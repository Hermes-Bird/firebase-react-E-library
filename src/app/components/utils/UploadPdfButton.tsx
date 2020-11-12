import React from 'react'
import {Button} from '@material-ui/core'

const UploadPdfButton: React.FC<{ pdfRef: React.RefObject<HTMLInputElement> }> = ({pdfRef}) => {

    return (
        <Button
            component="label"
            className="admin__upload--button"
            variant="contained"
            color="secondary"
            id="book-form-pdf"
        >
            <input ref={pdfRef} type="file" accept="application/pdf" name="pdfFile" style={{display: 'none'}}/>
            upload book pdf
        </Button>
    )
}

export default UploadPdfButton
