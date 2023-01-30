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
// import { useGetCse_dsQuery } from "state/api";
import { useGetIotQuery } from "state/api";



const IOT = ({
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
          Total Strength: {Number(TotalStrength)}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          {Section}
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
          <Typography>Year number: {Year}</Typography>
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





const Iot = () => {
  const { data, isLoading } = useGetIotQuery ();
  console.log("data", data)
  
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="IOT" subtitle="Internet of Things Branch" />
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
              <IOT
                // key={_id}
                _id={_id}
                BranchName={BranchName}
                Year={Year}
                Section={Section}
                TotalStrength={TotalStrength}
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

export default Iot ;