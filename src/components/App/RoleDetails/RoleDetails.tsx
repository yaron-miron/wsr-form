import { Button, Card, Cell, Heading, Layout, Text } from 'wix-style-react';
import React from 'react';

const RoleDetails = () => {
  return (
    <Card>
      <Card.Header
        title="Role details"
        suffix={
          <Button priority="secondary" disabled>
            Edit
          </Button>
        }
      />
      <Card.Divider />
      <Card.Content>
        <Layout>
          <Cell>
            <Heading appearance="H6">Official title</Heading>
            <Text>Yaron Miron</Text>
          </Cell>
          <Cell>
            <Heading appearance="H6">Experience</Heading>
            <Text>Some...</Text>
          </Cell>
        </Layout>
      </Card.Content>
    </Card>
  );
};

export default RoleDetails;
