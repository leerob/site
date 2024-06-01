import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">My work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to build products that make a difference.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Timeswap</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Full Stack Developer
        </p>
        <p>
          I joined <a href="https://timeswap.io">Timeswap Labs</a> during the early stages
          of V2 development and have proudly contributed to our growth,
          helping us reach $100 million in volume. Working at Timeswap Labs
          has been a transformative experience, immersing me in blockchain
          technology and decentralized finance (DeFi).
        </p>
        <ul>
          <li>
            <p className='font-bold'>Key Contributions and Achievements</p>
            <ul>
              <li>
                <p>Smart Contracts:</p>
                <p>Developed quoter Smart Contracts using callstatic calls, focusing on test-driven development and testing functions with Foundry (Forge).</p>
              </li>
              <li>
                <p>SDK Re-engineering:</p>
                <p>Re-engineered the Protocol Interaction SDK from ethersV5 to viemV2, enhancing types, transaction speed, and integration independence.</p>
              </li>
              <li>
                <p>Frontend Restructuring:</p>
                <p>Restructured the frontend using Redux, React Query, and MVU architecture, significantly improving state management and website stability.</p>
              </li>
              <li>
                <p>Optimized RPCs:</p>
                <p>Implemented multi-call algorithms, achieving 70% faster blockchain data retrieval, thereby enhancing user experience.</p>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <p className='font-bold'>Skills and Responsibilities</p>
            <ul>
              <li>
                <p>Blockchain Technology:</p>
                <p>Gained deep exposure to financial concepts such as option trading, leverage, and yield, essential for shaping DeFi and CeFi protocols.</p>
              </li>
              <li>
                <p>Product Development:</p>
                <p>Took on responsibilities for product implementation, making product-first decisions, and contributing to all codebases, including Smart Contract writing and deployment, building the JS Interaction SDK, and developing the Frontend Dapp.</p>
              </li>
              <li>
                <p>Team Collaboration:</p>
                <p>Worked in teams, taking architectural decisions that shaped the product, debugging production issues in real time, and providing immediate solutions.</p>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          {/* TODO : add linkedins */}
          Under the guidance of Ricsson Ngo, Ameeth Devadas,
          and colleagues like Puneet Kaura, Sharath Nair,
          and Kumar Satyarth, I have learned and grown immensely.
          Their mentorship has been instrumental in my development,
          from technical skills to product-building expertise.
        </p>
        <p>
          During my tenure at Timeswap Labs, I have honed
          my skills in full-stack development,
          particularly in the context of DeFi,
          and have made substantial
          contributions to our community and product.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Foodoscope</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Product Lead
        </p>
        <p>
          At  <a href="https://foodoscope.com">Foodoscope</a>, I led a talented team of 8 students to
          revamp and enhance our backend infrastructure. Our mission
          was to transition a fragmented set of services into a cohesive
          and scalable cloud-based solution, supporting a massive database
          of recipes and flavors meticulously curated over 8 years.
        </p>
        <ul>
          <li>
            <p className='font-bold'>Key achievements and responsibilities</p>
            <ul>
              <li>
                <p>Backend Restructuring and Cloud Migration:</p>
                <p>Managed the reorganization of multiple backends developed in Node.js, Spring Boot, and Django. We migrated these from IIITD's internal servers to AWS, establishing robust CI/CD pipelines and leveraging AWS CloudWatch for cost management.</p>
              </li>
              <li>
                <p>Architectural Overhaul:</p>
                <p>Converted three Node.js-based backends from a microservice architecture to a monolithic structure to improve efficiency and maintainability.</p>
              </li>
              <li>
                <p>Elasticsearch Deployment:</p>
                <p>Spearheaded the deployment of Elasticsearch to handle high indexing and searching demands, ensuring optimal database performance and management.</p>
              </li>
              <li>
                <p>Leadership and Team Coordination:</p>
                <p>Transitioned from a sole developer to a product lead, where I honed my skills in coordinating with team members, setting realistic deadlines, and making critical project decisions.</p>
              </li>
              <li>
                <p>AWS Cost Management:</p>
                <p>Collaborated with the AWS support team to rectify an initial 10X spike in deployment costs, learning valuable lessons in resource optimization and cost control.</p>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          This project was a pivotal experience, enhancing my skills
          in cloud computing, backend development, and team leadership.
          It demonstrated the importance of meticulous planning, collaborative
          problem-solving, and strategic decision-making in successfully
          executing complex technical projects.
        </p>
        </div>  
    </section>
  );
}
