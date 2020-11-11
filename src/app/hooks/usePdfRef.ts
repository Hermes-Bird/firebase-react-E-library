import React, {useEffect, useState} from 'react'
import {values} from 'mobx'
import {useRootContext} from '../stores/RootStore'



export const usePdfRef = (pdfRef: React.RefObject<HTMLInputElement>, uploadPdf: (file: File) => void) => {
    const {tempPdfFile} = useRootContext().bookStore

    useEffect(() => {
        if (pdfRef.current && !tempPdfFile) {
            pdfRef.current.onchange = (e) => {
                if (pdfRef.current && pdfRef.current.files) {
                    const pdfFile = pdfRef.current.files[0]
                    uploadPdf(pdfFile)
                }
            }
        }
    }, [pdfRef.current])

    return tempPdfFile
}
