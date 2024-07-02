import axios from 'axios';
import Cors from 'cors';

// Initialize the cors middleware
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
});

// Helper method to wait for middleware to execute before continuing
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}


const GenImage = async (req, res)=>{
  // Run the middleware
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    const { podcastTitle } = req.body;

    try {
      const response = await axios.post(
        'https://api.limewire.com/api/image/generation',
        {
          prompt: `Thumbnail for podcast titled - ${podcastTitle}`,
          aspect_ratio: '1:1',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Version': 'v1',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_LIMEWIRE_KEY}`,
          },
        }
      );

      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error generating image:', error);
      res.status(500).json({ error: 'Error generating image' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
export default GenImage;