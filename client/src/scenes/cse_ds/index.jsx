import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { useGetCse_dsQuery } from "state/api";
const Ds = ({
  _id,
  BranchName,
  Year,
  Section,
  TotalStrength,
}) => {
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {/* {category} */}
          {BranchName}
        </Typography>
        <Typography variant="h5" component="div">
          {Section}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          Year :{Number(Year).toFixed(2)}
        </Typography>
        <Rating value={Year} readOnly />

        {/* <Typography variant="body2">{description}</Typography> */}
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          {/* <Typography>Supply Left: {supply}</Typography> */}
          <Typography>
            {/* Yearly Sales This Year: {stat.yearlyClassesTotal} */}
          </Typography>
          <Typography>
            {/* Yearly Units Sold This Year: {stat.yearlyTotalConducted} */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};





const Cse_ds = () => {
  const { data, isLoading } = useGetCse_dsQuery();
  console.log("data", data)
  
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CSE(DS)" subtitle="Data Science Branch" />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
                  _id,
                  BranchName,
                  Year,
                  Section,
                  TotalStrength,
            }) => (
              <Ds
                key={_id}
                _id={_id}
                BranchName={BranchName}
                Section={Section}
                TotalStrength={TotalStrength}
                // category={category}
                // supply={supply}
                // stat={stat}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Cse_ds;