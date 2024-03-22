import Image from "next/image";
import me from "public/images/home/me.jpg"

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">hey, I'm sap &#128075;</h1>
      <p className="prose prose-neutral dark:prose-invert">
        This is my portfolio.
      </p>
      <div className="my-8 columns-1 gap-4 sm:columns-2">
        <div className="relative mb-4 h-80">
          <Image
            alt="Me at Quebec City"
            src={me}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
