import { GetServerSideProps } from "next"
import { getNeighbor } from "../api/neighbor"
import { neighbor } from '@prisma/client'
import { Layout } from "../../components/layout"

type NeighborProps = {
  neighbor: neighbor,
}

const Neighbor = ({
  neighbor,
}: NeighborProps) => {
  if (!neighbor) return "Neighbor could not be found"
  return (
    <Layout>
      <header>Header</header>
      <div>I am a neighbor
        <ul>
          <li>Name: {neighbor.name}</li>
          <li>id: {neighbor.id}</li>
        </ul>
      </div>
      <footer>Footer</footer>
      </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.query.id

  const neighbor = await getNeighbor({ id: id })

  return {
    props: {
      neighbor
    }
  }
}

export default Neighbor
