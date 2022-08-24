import { readFileSync, writeFileSync } from 'fs';
const imgReadBuffer = readFileSync('test-encode.jpg');
const imgEncoded = imgReadBuffer.toString('hex');

const imgDecoded = Buffer.from(imgEncoded, 'hex');
writeFileSync('decodedImage.jpg', imgDecoded);

//PLEASE INSERT AN IMAGE INTO THE DIRECTORY NAMED test-encode.jpg AND THEN RUN THIS SCRIPT
