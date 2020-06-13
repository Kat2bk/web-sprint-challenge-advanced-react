import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm />);
    const header = getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const {getByLabelText, getByText, getByTestId} = render(<CheckoutForm />);

    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const addressInput = getByLabelText(/address/i);
    const cityInput = getByLabelText(/city/i);
    const stateInput = getByLabelText(/state/i);
    const zipInput = getByLabelText(/zip/i);

    fireEvent.change(firstNameInput, {target: {value: 'kat'}});
    fireEvent.change(lastNameInput, {target: {value: 'kumar'}});
    fireEvent.change(addressInput, {target: {value: '587 Jeff'}});
    fireEvent.change(cityInput, {target: {value: 'LC'}});
    fireEvent.change(stateInput, {target: {value: 'LA'}});
    fireEvent.change(zipInput, {target: {value: '7777'}});

    expect(firstNameInput.value).toBe('kat');
    expect(lastNameInput.value).toBe('kumar');
    expect(addressInput.value).toBe('587 Jeff');
    expect(cityInput.value).toBe('LC');
    expect(stateInput.value).toBe('LA');
    expect(zipInput.value).toBe('7777');

    const submitButton = getByText('Checkout');
    fireEvent.click(submitButton);

    const getMyName = getByText(/kat/i);
    expect(getMyName).toBeInTheDocument();

    const successful = getByTestId(/successMessage/i);
    expect(successful).toBeInTheDocument();
});
