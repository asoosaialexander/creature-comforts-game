import { Favorite, MenuBook, ShoppingCart } from "@mui/icons-material";
import { Card, Grid, Typography, Box } from "@mui/material";
import styles from "./ImprovementCard.module.css";
import React from "react";

const ImprovementCard = (props) => {
  const { comfort, title, cost, image, text } = props.cardDetails;
  return (
    <Card className={styles.container}>
      <Grid container direction="row">
        <Grid item xs container direction="row" className={styles.cardHeader}>
          <Grid item xs={2} className={styles.cardPoints}>
            <Favorite className={styles.cardPointImg} />
            <Typography variant="body" className={styles.cardPointsText}>
              {comfort}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" fontWeight="bold">
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs container direction="row" className={styles.cardBody}>
          <Grid item xs={3} rowSpacing={0.5} container direction="column">
            {cost.map((item) => {
              return (
                <Grid item>
                  <Box className={styles.cardCostItem}>
                    <MenuBook fontSize="medium" />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs className={styles.cardImage}>
            <ShoppingCart sx={{ fontSize: 120 }} />
          </Grid>
        </Grid>
        <Grid item className={styles.cardFooter}>
          <Typography variant="body">
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ImprovementCard;
