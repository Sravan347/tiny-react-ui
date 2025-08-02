import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import "./Counter.css"; 

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <Card className="counter-card">
        <CardContent>
          <Typography variant="h4" gutterBottom className="text">
            simple counter        
          </Typography>

          <Typography variant="h2" align="center" className="counter-number">
            {count}
          </Typography>

          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="contained" onClick={() => setCount(count + 1)}>
              Increment
            </Button>
            <Button variant="outlined" onClick={() => setCount(count - 1)}>
              Decrement
            </Button>
            <Button variant="text" onClick={() => setCount(0)}>
              Reset
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default Counter;
