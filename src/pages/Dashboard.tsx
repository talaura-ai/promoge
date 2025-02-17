import { Box } from "@mui/material";

//components
import Overview from "../components/Overview";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//colors
import { colors } from "../assets/contants/colors";

const Dashboard = () => {
  return (
    <Box bgcolor={colors.primary}>
      <Navbar />
      <Overview />
      <Footer />
    </Box>
  );
};

export default Dashboard;
