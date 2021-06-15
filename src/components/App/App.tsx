import React, { FC, useState } from 'react';
import {
  Breadcrumbs,
  Cell,
  Layout,
  Page,
  WixStyleReactProvider,
} from 'wix-style-react';
import ActionsBar from './ActionBar/ActionBar';
import GeneralInfoForm from './GeneralInfoForm/GeneralInfoForm';
import RoleDetails from './RoleDetails/RoleDetails';
import SavedValues from './SavedValues/SavedValues';

const breadcrumbItems = [
  {
    id: 1,
    value: 'Root Page',
  },
  {
    id: 2,
    value: 'WSR Form',
  },
];

const App: FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [color, setColor] = useState('');

  const [savedValues, setSavedValues] = useState({
    firstName: '',
    lastName: '',
    color: '',
  });

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setColor('');
  };

  const isFormValid = () => !!firstName && !!lastName;
  const isFormEmpty = () => firstName === '' && lastName === '' && color === '';
  const areThereSavedValues = () =>
    !!savedValues.firstName || !!savedValues.lastName || !!savedValues.color;
  const submitForm = () => {
    if (isFormValid()) {
      setSavedValues({
        color,
        firstName,
        lastName,
      });
    }
  };

  return (
    <WixStyleReactProvider>
      <Page height="100vh">
        <Page.Header
          title="WSR Form"
          breadcrumbs={<Breadcrumbs items={breadcrumbItems} activeId={2} />}
          actionsBar={
            <ActionsBar
              formEmpty={isFormEmpty()}
              formValid={isFormValid()}
              clearForm={clearForm}
              submitForm={submitForm}
            />
          }
        />
        <Page.Content>
          <Layout>
            <Cell span={8}>
              <GeneralInfoForm
                firstName={firstName}
                lastName={lastName}
                color={color}
                onFirstNameChange={setFirstName}
                onLastNameChange={setLastName}
                onColorChange={setColor}
              />
            </Cell>
            <Cell span={4}>
              <Layout>
                <Cell>
                  <RoleDetails />
                </Cell>
                {!areThereSavedValues() ? null : (
                  <Cell>
                    <SavedValues savedValues={savedValues} />
                  </Cell>
                )}
              </Layout>
            </Cell>
          </Layout>
        </Page.Content>
      </Page>
    </WixStyleReactProvider>
  );
};

export default App;
