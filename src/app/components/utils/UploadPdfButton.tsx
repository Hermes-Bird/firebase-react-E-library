import React from 'react'
import { Button } from '@material-ui/core'
import { useRootContext } from '../../stores/RootStore'

const UploadPdfButton = () => {
    const { uploadPdf } = useRootContext().bookStore
    return (
        <Button
            component="label"
            className="admin__upload--button"
            variant="contained"
            color="secondary"
            id="book-form-pdf"
        >
            <input
                onChange={e => { 
                    if (e.target && e.target.files) {
                        const pdf = e.target.files[0]
                        if (pdf) uploadPdf(pdf)
                    }
                }}
                type="file"
                accept="application/pdf"
                name="pdfFile"
                style={{ display: 'none' }}
            />
            upload book pdf
        </Button>
    )
}

export default UploadPdfButton
