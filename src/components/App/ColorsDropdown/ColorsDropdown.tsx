import { Box, Dropdown, FormField, IconButton } from 'wix-style-react';
import { DeleteSmall } from 'wix-ui-icons-common';
import React, { FC } from 'react';

const colors = [
  { id: 'Red', value: 'Red' },
  { id: 'Blue', value: 'Blue' },
  { id: 'Green', value: 'Green' },
  { id: 'Yellow', value: 'Yellow' },
  { id: 'Pink', value: 'Pink' },
];

interface ColorsDropdownProps {
  color: string;
  onColorChange: (newColorId: string) => void;
}

const ColorsDropdown: FC<ColorsDropdownProps> = ({ color, onColorChange }) => {
  return (
    <FormField label="Favorite color">
      <Box verticalAlign="middle" gap="12px">
        <Box direction="vertical" width="100%">
          <Dropdown
            placeholder="Choose a color"
            options={colors}
            selectedId={color}
            onSelect={(option) => onColorChange(option.id as string)}
          />
        </Box>
        <IconButton size="small" disabled priority="secondary">
          <DeleteSmall />
        </IconButton>
      </Box>
    </FormField>
  );
};

export default ColorsDropdown;
