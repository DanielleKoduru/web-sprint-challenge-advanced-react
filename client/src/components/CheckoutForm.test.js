import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    // query for each input field
    const firstNameInput = screen.getByLabelText(/first Name/i);
    const lastNameInput = screen.getByLabelText(/last Name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    //fill out the form 
    userEvent.type(firstNameInput, "Danielle");
    userEvent.type(lastNameInput, "Koduru");
    userEvent.type(addressInput, "1234 somewhere lane");
    userEvent.type(cityInput, "Boston");
    userEvent.type(stateInput, "Massachuttes");
    userEvent.type(zipInput, "12345");


    //click the button 
    const checkoutButton = screen.getByRole("button");
    userEvent.click(checkoutButton);


    //Assert the new form added is now on the page
    const successMessage = screen.getByTestId("successMessage");
    expect(successMessage).toBeInTheDocument();
});
