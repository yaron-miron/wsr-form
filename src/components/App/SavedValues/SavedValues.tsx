import { Card, Cell, Heading, Layout, Text } from 'wix-style-react';
import React, { FC } from 'react';

interface SavedValuesProps {
  savedValues: { firstName: string; lastName: string; color: string };
}

const SavedValues: FC<SavedValuesProps> = ({ savedValues }) => {
  return (
    <Card>
      <Card.Header dataHook="saved-data" title="Saved data" />
      <Card.Divider />
      <Card.Content>
        <Layout>
          {[
            {
              title: 'First name',
              value: savedValues.firstName,
            },
            {
              title: 'Last name',
              value: savedValues.lastName,
            },
            {
              title: 'Favorite color',
              value: savedValues.color,
            },
          ]
            .filter(({ value }) => !!value)
            .map(({ title, value }) => (
              <Cell key={title}>
                <Heading appearance="H6">{title}</Heading>
                <Text>{value}</Text>
              </Cell>
            ))}
        </Layout>
      </Card.Content>
    </Card>
  );
};

export default SavedValues;
