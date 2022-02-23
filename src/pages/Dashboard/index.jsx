import { Redirect } from "react-router-dom";

const Dashboard = ({ authenticated }) => {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return <></>;
};
export default Dashboard;
