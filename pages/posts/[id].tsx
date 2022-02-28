import Layout from "../../components/layout";
import { getPostData, getAllPostIds } from "../../lib/posts";

interface Props {
  postData: { id: string; title: string; date: string };
}

export default function Post({ postData }: Props) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
