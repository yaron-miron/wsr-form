import React, { FC } from 'react';
import {
  AddItem,
  Card,
  Cell,
  FormField,
  Heading,
  Input,
  Layout,
} from 'wix-style-react';
import ColorsDropdown from '../ColorsDropdown/ColorsDropdown';

export enum FavoriteColors {}

interface GeneralInfoFormProps {
  firstName: string;
  lastName: string;
  color: string;
  onFirstNameChange: (newFirstName: string) => void;
  onLastNameChange: (newLastName: string) => void;
  onColorChange: (newColorId: string) => void;
}

const GeneralInfoForm: FC<GeneralInfoFormProps> = ({
  firstName,
  lastName,
  color,
  onFirstNameChange,
  onLastNameChange,
  onColorChange,
}) => {
  return (
    <Card>
      <Card.Header title="General Info" />
      <Card.Divider />
      <Card.Content>
        <Layout>
          <Cell>
            <Layout>
              <Cell span={6}>
                <FormField label="First name" required>
                  <Input
                    dataHook="first-name"
                    value={firstName}
                    onChange={(e) => onFirstNameChange(e.target.value)}
                  />
                </FormField>
              </Cell>
              <Cell span={6}>
                <FormField label="Last name" required>
                  <Input
                    dataHook="last-name"
                    value={lastName}
                    onChange={(e) => onLastNameChange(e.target.value)}
                  />
                </FormField>
              </Cell>
            </Layout>
          </Cell>
          <Cell>
            <Layout gap="12px">
              <Cell>
                <Heading appearance="H5">Additional Info</Heading>
              </Cell>
              <Cell>
                <ColorsDropdown color={color} onColorChange={onColorChange} />
              </Cell>
            </Layout>
          </Cell>
          <Cell>
            <AddItem disabled>Add New List Item</AddItem>
          </Cell>
        </Layout>
      </Card.Content>
    </Card>
  );
};

export default GeneralInfoForm;
