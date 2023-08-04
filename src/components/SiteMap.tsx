import { TreeNode, RootTree } from "@/utils/sitemap";
import Link from "next/link";

export default function SiteMap() {
  return <NestedLinks items={[RootTree]} />;
}

function NestedLinks({ items }: { items: TreeNode[] }) {
  return (
    <ul className="prose prose-sm">
      {items.map((item) => (
        <li key={item.name}>
          <Link href={item.link} className="capitalize">
            {item.name}
          </Link>
          {item.children.length > 0 && <NestedLinks items={item.children} />}
        </li>
      ))}
    </ul>
  );
}
