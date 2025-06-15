import Image from "next/image";
import me from "public/images/home/me.jpg"

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">hey, I'm sap &#128075;</h1>
      <p className="prose prose-neutral dark:prose-invert">
        I'm an engineer turned project manager who’s spent the last few years helping build everything from airplanes to climate tech. These days, I’m at Heirloom working on direct air carbon capture (literally pulling CO₂ out of the sky to help fight climate change!)
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
        <div className="relative mb-4 h-80">
          <p className="prose prose-neutral dark:prose-invert">
            I’ve always loved solving tough problems, working with smart people, and learning new things along the way. Whether it’s managing complex engineering projects or figuring out how to make something work in the real world, I like being in the thick of it.
            <br></br>
            <br></br>
            Outside of work, you’ll usually find me reading about systems thinking, tinkering with side projects, or hunting for the best coffee in town.
          </p>
        </div>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        Since you're here, why not check out what I've been working? Pop over to the work tab to see my latest projects,
        or the blog tab to hear me rant about what's in the news!
      </p>
    </section>
  );
}
