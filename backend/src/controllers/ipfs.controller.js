import axios from 'axios';

export const fetchFromIPFS = async (req, res) => {
  const { hash } = req.params; // CID from route param

  try {
    const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${hash}`;

    const response = await axios.get(ipfsUrl, { responseType: 'stream' });

    // Set headers (optional but good for downloads)
    res.setHeader('Content-Type', response.headers['content-type']);
    res.setHeader('Content-Disposition', `inline; filename="${hash}"`);

    // Stream file to client
    response.data.pipe(res);

    console.log(`✅ File ${hash} fetched from IPFS and streamed`);
  } catch (error) {
    console.error('❌ Error fetching from IPFS:', error.message);
    res.status(500).json({ message: 'Failed to fetch file from IPFS' });
  }
};