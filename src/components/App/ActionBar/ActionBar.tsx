import { Box, Button } from 'wix-style-react';
import React, { FC } from 'react';

interface ActionsBarProps {
  formValid?: boolean;
  formEmpty?: boolean;
  clearForm?: () => void;
  submitForm?: () => void;
}

const ActionsBar: FC<ActionsBarProps> = ({
  formValid,
  formEmpty,
  clearForm,
  submitForm,
}) => (
  <Box>
    <Box marginRight="12px">
      <Button
        dataHook="clear-button"
        priority="secondary"
        onClick={clearForm}
        disabled={formEmpty}
      >
        Clear
      </Button>
    </Box>
    <Button disabled={!formValid} dataHook="submit-button" onClick={submitForm}>
      Submit
    </Button>
  </Box>
);

export default ActionsBar;
