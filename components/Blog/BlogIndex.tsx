import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";
import { Card, Cards } from "nextra-theme-docs";

import { Page } from "./blog.types";

export function BlogIndex() {
  const pages: Page[] = getPagesUnderRoute("/blog");

  return pages.map((page) => (
    <div
      key={page.route}
      className="flex min-h-[400px]  w-full flex-col   border font-semibold shadow-sm"
    >
      <div className="images relative mx-3 mt-2">
        <Link href={page.route} passHref>
          <img
            src={page.frontMatter?.ogImage}
            className="rounded"
            alt=""
            width={350}
            height={40}
          />
        </Link>
      </div>
      <a className="cursor-pointer text-gray-800 hover:text-gray-600 mx-3 mt-2">
        {page.frontMatter?.date ? (
          <p className="opacity-50 text-sm"> {page.frontMatter.date}</p>
        ) : null}
      </a>

      <div className="flex flex-col mx-3">
        <h1 className="cursor-pointer text-xl font-bold text-gray-500 dark:text-gray-400 hover:text-gray-400 md:text-6xl">
          <Link href={page.route} passHref>
            {page.meta?.title || page.frontMatter?.title || page.name}
          </Link>
        </h1>
      </div>

      <div className="mt-4 h-full w-full overflow-y-auto  pl-3 mb-2">
        <p className="text-gray-500 dark:text-gray-400">
          {page.frontMatter?.description}{" "}
          <span className="cursor-pointer text-blue-500 hover:text-blue-700">
            <Link href={page.route} passHref>
              {"Read more →"}
            </Link>
          </span>
        </p>
      </div>

      {/* <p className="opacity-80" style={{ marginTop: ".5rem" }}>
        {page.frontMatter?.description}{" "}
        <span className="inline-block">
          
        </span>
      </p>
      {page.frontMatter?.date ? (
        <p className="opacity-50 text-sm">{page.frontMatter.date}</p>
      ) : null} */}
    </div>
  ));
}
