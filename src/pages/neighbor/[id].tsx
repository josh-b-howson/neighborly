import { GetServerSideProps } from "next"
import { getNeighbor } from "../api/neighbor"
import { neighbor } from '@prisma/client'

type NeighborProps = {
  neighbor: neighbor,
}

const Neighbor = ({
  neighbor,
}: NeighborProps) => {
  if (!neighbor) return "Neighbor could not be found"
  return (
    <div>I'm a neighbor
      <ul>
        <li>Name: {neighbor.name}</li>
        <li>id: {neighbor.id}</li>
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  let id = ctx.query.id

  const neighbor = await getNeighbor({ id: id })

  return {
    props: {
      neighbor
    }
  }
}

export default Neighbor
