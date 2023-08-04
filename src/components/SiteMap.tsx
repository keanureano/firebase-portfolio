import { TreeNode, RootTree } from "@/utils/sitemap";

export default function SiteMap() {
  return <NestedLinks items={[RootTree]} />;
}

function NestedLinks({ items }: { items: TreeNode[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li className="ml-10" key={item.name}>
          <span>
            <a href={item.link}>{item.name}</a>
          </span>
          {item.children.length > 0 && <NestedLinks items={item.children} />}
        </li>
      ))}
    </ul>
  );
}
