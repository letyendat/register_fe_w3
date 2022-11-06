import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Avatar, Box, createTheme, CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputField from "../../components/InputField";
import PasswordField from "../../components/PasswordField";
import Paper from "@mui/material/Paper";
import { LoadingButton } from "@mui/lab";

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
  loadingState: PropTypes.bool.isRequired
};

function SignUpForm(props) {
  const { onSubmit, loadingState } = props;

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "", 
    },

  });

  const theme = createTheme();
  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/udpt-fe-fe54d.appspot.com/o/backgrounds%2Fdark-2019041903-laginate.jpg?alt=media&token=fb2993e3-c903-4f41-a0d0-31e196df9e7b)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{bgcolor: "#eeeeee"}}>
          <Box
            sx={{
              my: 8,
              marginTop: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "#eeeeee"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#607d8b" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={form.handleSubmit(handleSubmit)} sx={{ mt: 1 }}>
              <InputField name="name" label="Name" form={form} isNotBold>
                Name
              </InputField>
              <InputField name="email" label="Email" form={form} isNotBold>
                Email
              </InputField>
              <PasswordField name="password" label="Password" form={form}>
                Password
              </PasswordField>
              <LoadingButton
                type="submit"
                fullWidth variant="contained"
                sx={{
                  mt: 3, mb: 2, bgcolor: "#37474f",
                  ":hover": {
                    backgroundColor: "#263238",
                  },
                }}
                loading={loadingState}
              >
                Sign Up
              </LoadingButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignUpForm;
