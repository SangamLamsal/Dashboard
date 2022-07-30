import Head from "next/head";
import Dashboard from "../../components/dashboard/Dashview";
import TeamPage from "../../components/dashboard/portion/TeamPage";

const Team = () => {
  return (
    <>
      <Head>
        <title>Admin-Team</title>
      </Head>
      <Dashboard title="Team">
        <TeamPage />
      </Dashboard>
    </>
  );
};

export default Team;
