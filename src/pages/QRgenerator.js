import React, { useState,useMemo } from "react";
import { Fab, TextField, TextareaAutosize, Grid } from "@material-ui/core";
import { ArrowBack, GetApp, Done } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { QRCode } from "react-qrcode-logo";
import Resizer from "react-image-file-resizer";


import logo from '../logo-icon.png';

function QRgenerator({url}) {
  const [qr, setQr] = useState(url);
  const [no,setno] = useState(300)


  const handleChange = (event) => {
    setQr(event.target.value);
  };

  const generateQRCode = () => {
    setQr(qr);
  };


  const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

  const downloadQR = () => {
    // setno(600)
    const canvas = document.getElementById("fazzyqr");

    console.log(canvas)
    const pngUrl = canvas
    
    .toDataURL("image/jpeg",1.0)
    .replace("image/jpeg", "image/octet-stream");



 
    


    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "myqr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      

      <span style={{ fontSize: 20, fontWeight: "bold" }}>
        Censuble QR Generator 
      </span>

      {/* <div style={{ marginTop: 30 }}>
        <TextField
          onChange={handleChange}
          style={{ width: 320 }}
          value={qr}
          label="QR content"
          size="large"
          variant="outlined"
          color="primary"
        />
      </div> */}
        <div style={{display:"none"}}>
   
 
     <QRCode
       eyeRadius={[
         [20, 10, 0, 10], // top/left eye
         [20, 10, 10, 0], // top/right eye
         [20, 0, 10, 10], // bottom/left
       ]}
       qrStyle="dots"
       id="fazzyqr"
       quietZone={30}
       
       enableCORS
       ecLevel="H"
       
       
       size={600}
       value={url}
       removeQrCodeBehindLogo
       fgColor="#1c3b71"
       // includeMargin
       logoImage={logo}
       logoHeight={80}
       logoWidth={80}
     />
 
 </div>

      <div >
   
        {qr ? (
          <QRCode
            eyeRadius={[
              [20, 10, 0, 10], // top/left eye
              [20, 10, 10, 0], // top/right eye
              [20, 0, 10, 10], // bottom/left
            ]}
            qrStyle="dots"
            id="myqr"
            quietZone={30}
            
            enableCORS
            ecLevel="H"
            
            
            size={300}
            value={url}
            removeQrCodeBehindLogo
            fgColor="#1c3b71"
            // includeMargin
            logoImage={logo}
            logoHeight={80}
            logoWidth={80}
          />
        ) : (
          <p>No QR code preview</p>
        )}
      </div>
      <div>
        {qr ? (
          <Grid container>
            <Grid item xs={10}>
              <TextareaAutosize
                style={{
                  fontSize: 18,
                  width: 250,
                  height: 100,
                  display: "none",
                }}
                rowsMax={4}
                defaultValue={qr}
                value={qr}
              />
            </Grid>
            <Grid item xs={2}>
              <Fab
                onClick={downloadQR}
                style={{ marginLeft: 10, backgroundColor: "#1c3b71" }}
                color="primary"
              >
                <GetApp />
              </Fab>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default QRgenerator;
