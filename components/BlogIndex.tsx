import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";

import { Page } from "./blog.types";

export function BlogIndex() {
  const pages: Page[] = getPagesUnderRoute("/blog");

  return pages.map((page) => (
    <div key={page.route} className="mb-10">
      <Link href={page.route} passHref>
        <a
          style={{ color: "inherit", textDecoration: "none" }}
          className="block font-semibold mt-8 text-2xl"
        >
          {page.meta?.title || page.frontMatter?.title || page.name}
        </a>
      </Link>
      <p className="opacity-80" style={{ marginTop: ".5rem" }}>
        {page.frontMatter?.description}{" "}
        <span className="inline-block">
          <Link href={page.route} passHref>
            <a>{"Read more →"}</a>
          </Link>
        </span>
      </p>
      {page.frontMatter?.date ? (
        <p className="opacity-50 text-sm">{page.frontMatter.date}</p>
      ) : null}
    </div>
  ));
}
