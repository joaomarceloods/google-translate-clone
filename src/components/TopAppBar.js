import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const TopAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Google Translate Clone
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopAppBar;
