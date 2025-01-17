import { Grid, Stack, Typography, List, ListItem } from "@mui/material";
import React from "react";
import Section from "../components/Section";

export default function ExplanationSection({ explanationSectionData }) {
  return (
    <>
      <Section>
        <Grid container spacing={4}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: { xs: "center", md: "left" },
            }}
            item
            xs={12}
            lg={5}
          >
            <Stack spacing={2}>
              <Typography variant={explanationSectionData.questionVariant}>
                {explanationSectionData.question}
              </Typography>
              <Typography variant={explanationSectionData.answerVariant}>
                {explanationSectionData.answer}
              </Typography>
            </Stack>
          </Grid>
          <Grid
            sx={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            lg={7}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vvKVCbxWl1g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Grid>
        </Grid>
      </Section>
    </>
  );
}
