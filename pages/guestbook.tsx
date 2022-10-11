import { grafbase, gql } from 'lib/grafbase';
import Container from 'components/Container';
import Guestbook from 'components/Guestbook';

export default function GuestbookPage({ fallbackData }) {
  return (
    <Container
      title="Guestbook – Lee Robinson"
      description="Sign my digital guestbook and share some wisdom."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Guestbook
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Leave a comment below. It could be anything – appreciation,
          information, wisdom, or even humor. Surprise me!
        </p>
        <Guestbook fallbackData={fallbackData} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const query = gql`
    {
      guestbookCollection(last: 100) {
        edges {
          node {
            id
            body
            createdBy
            updatedAt
          }
        }
      }
    }
  `

  const { guestbookCollection } = await grafbase.request(query);

  const fallbackData = guestbookCollection.edges.map(({ node }) => ({
    id: node.id,
    body: node.body,
    createdBy: node.createdBy,
    updatedAt: node.updatedAt
  }));

  return {
    props: {
      fallbackData
    },
    revalidate: 60
  };
}
