import db from '@/lib/planetscale';
import Container from '@/components/Container';
import Guestbook from '@/components/Guestbook';

export default function GuestbookPage({ initialEntries }) {
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
        <Guestbook initialEntries={initialEntries} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const [rows] = await db.query(`
    SELECT id, body, created_by, updated_at FROM guestbook
    ORDER BY updated_at DESC;
  `);

  // Serialize the data
  const entries = Object.values(JSON.parse(JSON.stringify(rows)));

  return {
    props: {
      initialEntries: entries
    },
    revalidate: 60
  };
}
