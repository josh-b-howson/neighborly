import type {
  NextApiRequest,
  NextApiResponse,
} from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type NeighborParams = {
  id: string | string[] | undefined,
}

/**
 * Fetches the neighbor's data.
 * 
 * @param id the neighbor's unique id
 * @returns all neighbor data
 */
export const getNeighbor = async ({ id }: NeighborParams) => {
  const idAsNumber = new Number(id).valueOf()
  const neighbor = await prisma.neighbor.findFirst({
    where: { id: idAsNumber }
  })
  return neighbor
}

type ManyNeighborsParams = {
  take?: number,
}
/**
 * Fetches all neighbors data.
 * 
 * @returns all neighbors data
 */
export const getManyNeighbors = async ({ take = 10 }: ManyNeighborsParams) => {
  const neighbors = await prisma.neighbor.findMany({ take: take })
  return neighbors
}

const Neighbor = (req: NextApiRequest, res: NextApiResponse) => {
  const neighbor = getNeighbor({ id: req.query.id })
  res.status(200).json(neighbor)
}

export default Neighbor
