import { neighbor } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { Layout } from "../components/layout";
import { getManyNeighbors } from "./api/neighbor";

type HomeProps = {
  neighbors?: neighbor[],
}

const Home: NextPage = ({
  neighbors,
}: HomeProps) => {
  if (!neighbors) return <>error fetching neighbors</>
  return (
    <Layout>
      <h1>Welcome to neighborly</h1>
      <p>Neighbors: {neighbors?.length}</p>
      <ul>{neighbors.map(neighbor =>
        <Link key={neighbor.id} style={{ display: 'inline-block' }} href={`/neighbor/${neighbor.id}`}>
          <p>Go to neighbor {neighbor.id}</p>
          <p>Name: {neighbor.name}</p>
          <p>id: {neighbor.id}</p>
          <p>address: {neighbor.address}</p>
        </Link>
      )}
      </ul>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {

  const neighbors = await getManyNeighbors({})

  return {
    props: {
      neighbors
    }
  }
}

export default Home;