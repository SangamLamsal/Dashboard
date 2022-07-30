import Head from "next/head";
import Dashboard from "../../components/dashboard/Dashview";
import ProjectsPage from "../../components/dashboard/portion/ProjectsPage";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Admin-Projects</title>
      </Head>
      <Dashboard title="Projects">
        <ProjectsPage />
      </Dashboard>
    </>
  );
};

export default Projects;
