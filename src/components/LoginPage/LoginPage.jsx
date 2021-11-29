import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useLoginPageStyles } from "./LoginPage.style";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      setLogin: "",
      setPassword: "",
      setPasswordAgain: "",
      setEmail: "",
    },
  });

  function toggleSignUp() {
    setSignUp((state) => !state);
  }

  function handleLogin() {
    localStorage.setItem("nome", formik.values.login);
    navigate("/home");
  }

  const styles = useLoginPageStyles();
  return (
    <div className={styles.root}>
      <Box className={styles.box}>
        <Box className={styles.content}>
          {signUp ? (
            <Box className={styles.contentOptions}>
              <Box className={styles.tittle}>
                <h1>Cadastro</h1>
              </Box>

              <Box className={styles.formSignUp}>
                <TextField
                  name="setLogin"
                  fullWidth
                  value={formik.values.setLogin}
                  onChange={formik.handleChange}
                  className={styles.fields}
                  label="Usuário"
                />
                <TextField
                  fullWidth
                  type="password"
                  name="setPassword"
                  value={formik.values.setPassword}
                  onChange={formik.handleChange}
                  className={styles.fields}
                  label="Senha"
                />
                <TextField
                  fullWidth
                  type="password"
                  name="setPasswordAgain"
                  value={formik.values.setPasswordAgain}
                  onChange={formik.handleChange}
                  className={styles.fields}
                  label="Repita a senha"
                />
                <TextField
                  fullWidth
                  name="email"
                  value={formik.values.setEmail}
                  onChange={formik.handleChange}
                  className={styles.fields}
                  label="Email"
                />
              </Box>

              <Box className={styles.submit}>
                <Button
                  onClick={() => handleLogin()}
                  fullWidth
                  variant="outlined"
                  disabled={!formik.values.login || !formik.values.password}
                >
                  Confirmar
                </Button>
                <Button
                  onClick={() => toggleSignUp()}
                  fullWidth
                  variant="outlined"
                >
                  Voltar
                </Button>
              </Box>
            </Box>
          ) : (
            <Box className={styles.contentOptions}>
              <Box className={styles.tittle}>
                <h1>Login</h1>
              </Box>

              <Box className={styles.form}>
                <TextField
                  name="login"
                  value={formik.values.login}
                  onChange={formik.handleChange}
                  className={styles.fields}
                  label="Login"
                />
                <TextField
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className={styles.fields}
                  label="Senha"
                />
              </Box>

              <Box className={styles.options}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Lembre-se de mim"
                />
                <Button variant="outlined">Esqueci minha senha</Button>
              </Box>
              <Box className={styles.submit}>
                <Button
                  onClick={() => handleLogin()}
                  fullWidth
                  variant="outlined"
                  disabled={!formik.values.login || !formik.values.password}
                >
                  Login
                </Button>
                <Button
                  onClick={() => toggleSignUp()}
                  fullWidth
                  variant="outlined"
                >
                  Cadastre-se
                </Button>
              </Box>
            </Box>
          )}
        </Box>
        <Box className={styles.asideBackground}></Box>
      </Box>
    </div>
  );
}
