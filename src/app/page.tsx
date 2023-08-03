import Markdown from "@/components/Markdown";
import SiteMap from "@/components/SiteMap";

export default function Home() {
  return (
    <main>
      <div className="md:flex md:space-x-8">
        <Markdown file="landing/Introduction.md" />
        <Markdown file="landing/Table.md" />
        <SiteMap />
        <hr />
      </div>
    </main>
  );
}
