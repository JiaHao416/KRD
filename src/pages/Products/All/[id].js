import App from "../src/App";

export async function getStaticPaths() {
  const pageIds = ["all-products"];
  const paths = pageIds.map((id) => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const page = { id: params.id };

  return { props: { page } };
}
export default App;
