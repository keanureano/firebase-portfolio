import Markdown from "@/components/Markdown";

export default function Home() {
  return (
    <main>
      <div className="md:flex space-x-8">
        <Markdown file="landing/Introduction.md" />
        <Markdown file="landing/Table.md" />
        <hr />
      </div>
    </main>
  );
}
