// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { items } from '@data/items'

export default function handler(req, res) {
  res.status(200).json(items)
}
