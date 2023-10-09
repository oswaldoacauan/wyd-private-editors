import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method) {
    res.status(200).write(' 1  1  1  1  1  1  -1  -1  -1  -1 ');
  }
}
