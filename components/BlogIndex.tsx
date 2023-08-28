import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";

import { Page } from "./blog.types";

export function BlogIndex() {
  const pages: Page[] = getPagesUnderRoute("/blog");

  return pages.map((page) => (
    <div key={page.route} className="mb-10">
      <Link href={page.route} passHref>
        {page.meta?.title || page.frontMatter?.title || page.name}
      </Link>
      <p className="opacity-80" style={{ marginTop: ".5rem" }}>
        {page.frontMatter?.description}{" "}
        <span className="inline-block">
          <Link href={page.route} passHref>
            {"Read more →"}
          </Link>
        </span>
      </p>
      {page.frontMatter?.date ? (
        <p className="opacity-50 text-sm">{page.frontMatter.date}</p>
      ) : null}
    </div>
  ));
}
