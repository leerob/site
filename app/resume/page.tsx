export const metadata = {
  title: 'Resume',
};

export default function Page() {
    return (
      <section>
        <p className="text-lg prose prose-neutral dark:prose-invert">
        Hello, I am Wang Jianhua, Nice to meet you.
        </p>
        <h2 className="text-xl mt-8">Personal information:</h2>
        <ul className="list-none ml-4 pt-2">
          <li>Nationality: Chinese</li>
          <li>Degree: Bachelors in Computer Science</li>
          <li>Location: Tokyo, Japan</li>
        </ul>
        <h2 className="text-xl mt-8">Main technology stack:</h2>
        <div>
          <ul className="list-none ml-4 pt-2 pb-4">
            <li>Over 6 years in PHP, primarily using Laravel.</li>
            <li>More skilled in PostgreSQL than MySQL.</li>
            <li>Write unit tests with PHPUnit and end-to-end tests with Playwright.</li>
            <li>Have some experience with Golang and Python.</li>
          </ul>
        </div>
        <h2 className="text-xl mt-8">Project experience:</h2>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h3 className="text-xl">Comiru</h3>
        <p className="text-lg pt-2">Comiru is an education SaaS platform.I am primarily responsible for backend development. My duties include managing contracts between clients (private schools) and the platform, handling client package management, and developing features for billing calculation. Additionally, I work on the development and maintenance of request functions (from private schools to students) and the accounting entry features of these requests.</p>
        <p className="text-lg pt-2">The main technologies used in this project are:</p>
        <ul className="list-disc ml-4 pt-2 pb-4">
          <li>PHP/PHPUnit/Laravel</li>
          <li>PostgreSQL</li>
          <li>Redis/RabbitMQ</li>
          <li>Amazon AWS/Agora Live Streaming</li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h3 className="text-xl">Unmanned vehicle monitoring and dispatching system</h3>
        <p className="text-lg pt-2">This project involved developing a real-time monitoring and automatic scheduling system for a specific factory. The system is capable of real-time monitoring of the hardware status of unmanned vehicles and charging piles, and it provides instant alarm notifications. Based on the operational data of the unmanned vehicles, it automatically schedules these vehicles, executes tasks such as downloading routes, and performs automatic charging operations.</p>
        <p className="text-lg pt-2">The main technologies used in this project are:</p>
        <ul className="list-disc ml-4 pt-2 pb-4">
          <li>PHP/Swoole/Laravel</li>
          <li>MySQL</li>
          <li>Redis</li>
          <li>ModbusTCP</li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="text-xl">Work experience:</h2>
        <ul className="list-none ml-4 pt-2 pb-4">
          <li>2020 - Present: Backend Engineer in POPER Co.,Ltd.</li>
          <li>2019 - 2020: PHP developer in Chengdu Jiayi Education Technology Co., Ltd.</li>
          <li>2018 - 2019: Backend Engineer in Chengdu Fengyu Technology Co., Ltd.</li>
          <li>2017 - 2018: PHP developer in Guangdong Shunbo Internet Co., Ltd.</li>
        </ul>
        <h2 className="text-xl">My values:</h2>
        <ul className="list-none ml-4 pt-2 pb-4">
          <li>Communication and teamwork are extremely important.</li>
          <li>Approachable and responsible.</li>
          <li>Trust, understanding, and respect.</li>
        </ul>
        <h2 className="text-xl mt-8">Contact:</h2>
        <ul className="list-none ml-4 pt-2 pb-4">
          <li><a href="https://www.linkedin.com/in/jianhua-wang-62354480/">Linkedin</a></li>
          <li><a target="_blank" href="mailto:lynn.ivdvef@gmail.com">Email</a></li>
        </ul>
      </section>
    );
  }
  