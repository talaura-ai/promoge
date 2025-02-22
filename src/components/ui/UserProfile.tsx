import { Avatar, Box, Button, Typography } from "@mui/material";
import { colors } from "../../assets/contants/colors";

const UserProfile = ({
  userName,
  designation,
  changeProfile,
}: {
  userName: string;
  designation: string;
  changeProfile: (userName: string, designation: string) => void;
}) => {
  return (
    <Button
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
        paddingX: 1,
        marginX: "auto",
        width: "100%",
        "&:hover": {
          background: "#eee",
        },
      }}
      onClick={() => changeProfile(userName, designation)}
    >
      <Avatar src="/path-to-image.jpg" sx={{ width: 30, height: 30 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          width: "100%",
          marginY: 1,
          cursor: "pointer",
        }}
      >
        <Typography
          fontWeight="bold"
          color={colors.black}
          sx={{ fontSize: 14 }}
        >
          {userName}
        </Typography>
        <Typography
          variant="caption"
          color={colors.black}
          sx={{ fontSize: 10 }}
        >
          {designation}
        </Typography>
      </Box>
    </Button>
  );
};

export default UserProfile;
