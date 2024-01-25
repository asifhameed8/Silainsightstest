import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import sharp from 'sharp';
import svg2img from 'svg2img';

export default async function imageProxy(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { imageUrl }: any = req.query;

        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        let imageBuffer = Buffer.from(response.data, 'binary');

        // Check if the image is SVG by looking at the Content-Type header
        if (response.headers['content-type'] === 'image/svg+xml') {
            // Convert SVG to PNG using svg2img
            imageBuffer = await new Promise((resolve, reject) => {
                svg2img(imageBuffer.toString(), (error, buffer) => {
                    if (error) reject(error);
                    else resolve(buffer);
                });
            });
        }

        const optimizedImageBuffer = await sharp(imageBuffer)
            .resize(800) // Adjust the size as needed
            .jpeg({ quality: 80 }) // Adjust the quality as needed
            .toBuffer();

        res.setHeader('Content-Type', 'image/jpeg');
        res.setHeader('Content-Length', optimizedImageBuffer.length);

        res.status(200).send(optimizedImageBuffer);
    } catch (error) {
        console.error('Error fetching or optimizing image:', error);
        res.status(500).end('Internal Server Error');
    }
}
