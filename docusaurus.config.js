/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Covid19 Explicado",
  tagline: "Biblioteca de documentos a cerca da covid19",
  url: "https://covid19-explicado.com.br",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "covid19br", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Covid19 Explicado",
      logo: {},
      items: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "Tópicos",
          position: "left",
        },
      ],
    },
    footer: {},
  },
  presets: [
    [
      "@docusaurus/preset-bootstrap",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
      },
    ],
  ],
};
