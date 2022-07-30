import Head from "next/head";
import Dashboard from "../../components/dashboard/Dashview";
import HomePage from "../../components/dashboard/portion/HomePage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Admin-Home</title>
      </Head>
      <Dashboard title="Home">
        <HomePage />
      </Dashboard>
    </>
  );
};

export default Home;
