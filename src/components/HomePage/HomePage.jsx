import { Box, Grid, TextField } from "@mui/material";
import React, { useCallback } from "react";
import { useHomePageStyles } from "./HomePage.style";
import { useFormik } from "formik";
import axios from "axios";

export default function HomePage() {
  const userName = localStorage.getItem("nome");
  const styles = useHomePageStyles();


  const formik = useFormik({
    initialValues: {
      cidade: "",
      estado: "",
      bairro: "",
      complemento: "",
      numero: "",
      cep: "",
      logradouro: "",
    },
  });
  const onCepBlur = useCallback(() => {
    const cep = formik.values.cep;
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(({ data }) => {
        formik.setFieldValue("logradouro", data.logradouro);
        formik.setFieldValue("bairro", data.bairro);
        formik.setFieldValue("cidade", data.localidade);
        formik.setFieldValue("estado", data.uf);
      })
  }, [formik.values.cep]);

  return (
    <div className={styles.root}>
      <Box className={styles.box}>
        <Box className={styles.title}>
          <h1>Olá {userName}</h1>
        </Box>
        <Box className={styles.fields}>
          <Box className={styles.subTitle}>
            <h2>Insira seus dados cadastrais</h2>
          </Box>
          <Grid
            spacing={4}
            alignItems="center"
            justifyContent="center"
            container
          >
            <Grid item xs={6}>
              <TextField
                name="cep"
                onBlur={onCepBlur}
                value={formik.values.cep}
                onChange={formik.handleChange}
                label="CEP"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="cidade"
                value={formik.values.cidade}
                onChange={formik.handleChange}
                label="Cidade"
                disabled
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="estado"
                disabled
                value={formik.values.estado}
                onChange={formik.handleChange}
                label="Estado"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="bairro"
                disabled
                value={formik.values.bairro}
                onChange={formik.handleChange}
                label="Bairro"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="complemento"
                value={formik.values.complemento}
                onChange={formik.handleChange}
                label="Complemento"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="numero"
                value={formik.values.numero}
                onChange={formik.handleChange}
                label="Número"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="logradouro"
                value={formik.values.logradouro}
                disabled
                label="Logradouro"
                onChange={formik.handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
