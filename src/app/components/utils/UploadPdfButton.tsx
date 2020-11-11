import React, {useState} from 'react'
import {Button} from '@material-ui/core'

const UploadPdfButton: React.FC<{ pdfRef: React.RefObject<HTMLLabelElement> }> = ({pdfRef}) => {

    return (
        <Button
            component="label"
            className="admin__upload--button"
            variant="contained"
            color="secondary"
            id="book-form-pdf"
            ref={pdfRef}
        >
            upload book pdf
        </Button>
    )
}

export default UploadPdfButton
