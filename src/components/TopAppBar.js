import { GitHub } from "@mui/icons-material";
import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";

const TopAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Google Translate Clone
          </Typography>
          <Link href="https://github.com/joaomarceloods/google-translate-clone" color="inherit" underline="hover" target="_blank">
            <GitHub />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopAppBar;
