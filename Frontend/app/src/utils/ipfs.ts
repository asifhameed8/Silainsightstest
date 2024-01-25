import { create } from 'ipfs-http-client';

const auth =
    'Basic ' +
    Buffer.from(process.env.NEXT_PUBLIC_REACT_APP_IPFS_PROJECT_ID + ':' + process.env.NEXT_PUBLIC_REACT_APP_IPFS_PROJECT_SECRET).toString('base64');

const ipfsClient = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    apiPath: '/api/v0',
    headers: {
        authorization: auth
    }
});

export default ipfsClient;
