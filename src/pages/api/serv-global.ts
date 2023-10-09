import type { NextApiRequest, NextApiResponse } from "next";
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(" 1  1  1  1  1  1  -1  -1  -1  -1 ");
  }
}
