import App from "App";

export async function getStaticPaths() {
  const pageIds = ["abouts", "all-products", "new-products"];
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
