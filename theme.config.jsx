import { useRouter } from "next/router";
import { Navbar } from "nextra-theme-docs";

export default {
  // project: {
  //   link: "https://github.com/finnoto/fn-new-web",
  // },

  // head: (
  //   <>
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <meta property="og:title" content="Nextra" />

  //     <meta property="og:description" content="The next site builder" />
  //   </>
  // ),
  logo: (
    <>
      <img src="/logo.png" alt="Finnoto" width={130} height={120} />
    </>
  ),

  // This is done for the docs repository link

  docsRepositoryBase: "https://github.com/asujan205/nextrademo/blob/master/",

  // This is done for the edit page on github link

  editLink: {
    text: "Edit this page on GitHub ",
  },
  feedback: {
    content: "Is this page helpful?",
  },

  // This is used for footer links

  // footer: {
  //   component: () => {
  //     return (
  //       <div>
  //         <a href="https://www.google.com">Google</a>
  //       </div>
  //     );
  //   },
  // },

  themeSwitch: {
    useOptions() {
      return {
        light: "Light",
        dark: "Dark",
        system: "Finnoto",
      };
    },
  },
  nextThemes: {
    defaultTheme: "#f02",
  },

  search: {
    // This is used for the search placeholder
    placeholder: "Search...",

    loading: "Loading...",

    error: "An error occurred, please try again later.",
  },
  // banner: {
  //   key: "2.0-release",
  //   text: (
  //     <a href="https://nextra.site" target="_blank">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   ),
  // },

  // sidebar: {
  //   titleComponent({ title, type }) {
  //     if (type === "separator") {
  //       return (
  //         <div style={{ background: "cyan", textAlign: "center" }}>{title}</div>
  //       );
  //     }
  //     if (title === "About") {
  //       return <>❓ {title}</>;
  //     }
  //     return <>👉 {title}</>;
  //   },
  // },

  // useNextSeoProps() {
  //   const { asPath } = useRouter();
  //   if (asPath !== "/") {
  //     return {
  //       titleTemplate: "%s – SWR",
  //     };
  //   }
  // },

  primaryHue: {
    light: 15,
    dark: 210,
  },
  // toc: {
  //   component: ({ toc }) => {
  //     return (
  //       <div>
  //         <h2>Table of Contents</h2>
  //         <div>{toc}</div>
  //       </div>
  //     );
  //   },
  // },
  footer: {
    text: (
      <span>
        Sujan {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          Finnoto
        </a>
        .
      </span>
    ),
  },
};
