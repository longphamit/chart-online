'use client'
import {Button, Center} from "@chakra-ui/react";
import {DownloadIcon} from "@chakra-ui/icons";
import { saveAs } from 'file-saver';
const DowLoadChart = () => {
    const saveCanvas = () => {
        const canvasSave = document.getElementById('chart');
        canvasSave.toBlob(function (blob) {
            saveAs(blob, "testing.jpg")
        })
    }
    return (
        <Center>
            <Button leftIcon={<DownloadIcon/>} onClick={() => saveCanvas()}>Dowload</Button>
        </Center>
    )
}
export default DowLoadChart