import ImageKit from "imagekit";

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_URL,
    privateKey : process.env.IMAGEKIT_PRIVATE_URL,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

export default imagekit;