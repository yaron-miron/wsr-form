import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import {
  ButtonTestkit,
  InputTestkit,
  CardHeaderTestkit,
} from 'wix-style-react/dist/testkit';

describe('App', () => {
  it('Should show the "saved data" section after submitting the form', async () => {
    const { baseElement } = render(<App />);

    const firstNameInputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: 'first-name',
    });

    const lastNameInputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: 'last-name',
    });

    const submitButtonTestkit = ButtonTestkit({
      wrapper: baseElement,
      dataHook: 'submit-button',
    });

    await firstNameInputTestkit.enterText('Yaron');
    await lastNameInputTestkit.enterText('Miron');
    await submitButtonTestkit.click();

    const SavedDataCardHeaderTestkit = CardHeaderTestkit({
      wrapper: baseElement,
      dataHook: 'saved-data',
    });

    expect(await SavedDataCardHeaderTestkit.exists()).toBeTruthy();
  });

  it('Should not show the "saved data" when not all the required fields are filled', async () => {
    const { baseElement } = render(<App />);

    const firstNameInputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: 'first-name',
    });

    const submitButtonTestkit = ButtonTestkit({
      wrapper: baseElement,
      dataHook: 'submit-button',
    });

    await firstNameInputTestkit.enterText('Yaron');
    await submitButtonTestkit.click();

    const SavedDataCardHeaderTestkit = CardHeaderTestkit({
      wrapper: baseElement,
      dataHook: 'saved-data',
    });

    expect(await SavedDataCardHeaderTestkit.exists()).toBeFalsy();
  });

  it('Should clear the form', async () => {
    const { baseElement } = render(<App />);

    const firstNameInputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: 'first-name',
    });

    const clearButtonTestKit = ButtonTestkit({
      wrapper: baseElement,
      dataHook: 'clear-button',
    });

    await firstNameInputTestkit.enterText('Yaron');

    expect(await firstNameInputTestkit.getValue()).toBe('Yaron');

    await clearButtonTestKit.click();

    expect(await firstNameInputTestkit.getText()).toBe('');
  });
});
