import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Desenvolvedor Frontend e UX/UI Designer</p>
        <p>
          Espaço onde compartilho novos conhecimentos em <code>desenvolvimento web!</code>
        </p>
      </section>
    </Layout>
  );
}
