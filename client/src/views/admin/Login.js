import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import LoadingButton from "@mui/lab/LoadingButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading, isError, error }] = useLoginMutation();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      const { token } = await login({ email, password }).unwrap();
      dispatch(setCredentials({ accessToken: token }));
      setEmail("");
      setPassword("");
      navigate("/admin");
    } catch (err) {
      // toast.error("Login Failed");
      // console.log(err);
    }
  };

  useEffect(() => {
    if (isError) {
      if (error.status === 500) {
        toast.error("Could not login!");
      } else {
        toast.error(error.data?.msg);
      }
    }
  }, [isError]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#eee",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          display: "flex",

          width: {
            xs: "80%",
            sm: "60%",
            md: "45%",
            lg: "30%",
          },
          my: 3,
          flexDirection: "column",
          justifyContent: "center",
          border: "0.5px solid #ccc",
          borderRadius: 5,
          p: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 300,
            textAlign: "center",
            fontSize: "24px",
            textDecoration: "underline",
            textUnderlineOffset: "5px",
            mb: 5,
          }}
        >
          Rukhash Grammar School
        </Typography>
        <Typography
          sx={{ fontWeight: 400, textAlign: "center", mb: 2, fontSize: "20px" }}
        >
          Login Now
        </Typography>

        <TextField
          label="Email"
          sx={{
            my: 0.5,
          }}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          label="Password"
          sx={{
            my: 0.5,
          }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <LoadingButton
          sx={{
            color: "black",
            my: 1,
            border: "0.5px solid #ccc",
          }}
          onClick={onSubmit}
          loading={isLoading}
        >
          Login
        </LoadingButton>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            my: 2,
          }}
        >
          <Link to="#">Forgot password?</Link>
          {/* <Link to="/register">register now</Link> */}
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
