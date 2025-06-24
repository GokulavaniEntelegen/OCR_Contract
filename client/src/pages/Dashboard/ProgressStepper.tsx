import React from 'react';
import { Stepper, Step, StepLabel, Box, StepIconProps } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

// Define steps
const steps = [1, 2, 3];

// Custom step icon component with correct props type
const CustomStepIcon: React.FC<StepIconProps> = ({ active, completed, className }) => {
  if (completed) {
    return (
      <Box
        className={className}
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: '50%',
          bgcolor: '#1976d2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #1976d2',
        }}
      >
        <CheckIcon sx={{ color: 'white', fontSize: 16 }} />
      </Box>
    );
  }

  if (active) {
    return (
      <Box
        className={className}
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: '50%',
          bgcolor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: "1px solid gray",
        }}
      >
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            bgcolor: 'gray',
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      className={className}
      sx={{
        width: "20px",
        height: "20px",
        borderRadius: '50%',
        border: '2px solid #bdbdbd',
        bgcolor: 'transparent',
      }}
    />
  );
};

// Props type for the ProgressStepper
interface ProgressStepperProps {
  activeStep: number;
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({ activeStep }) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((_, index) => (
        <Step key={index}>
          <StepLabel StepIconComponent={CustomStepIcon} />
        </Step>
      ))}
    </Stepper>
  );
};

export default ProgressStepper;
