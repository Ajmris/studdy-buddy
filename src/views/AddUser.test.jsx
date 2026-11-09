import React from "react";
import AddUser from "./AddUser";
import Dashboard from "./Dashboard";
import {screen, fireEvent} from "@testing-library/react";
import { renderWithProviders } from "../renderWithProviders";

describe("Add User", ()=>{
    it("It adds new user to the list.", ()=>{
        renderWithProviders(
        <>
            <AddUser />
            <Dashboard />
        </>
        );
       fireEvent.change(screen.getByTestId("Name"), {target:{value:"Estera"}});
       fireEvent.change(screen.getByTestId("Attendance"), {target:{value:"55%"}});
       fireEvent.change(screen.getByTestId("Average"), {target:{value:"4.5"}});
       fireEvent.click(screen.getByTestId("Consent"));
       fireEvent.click(screen.getByText("Add"));
       expect(screen.getByText("Estera"))
    });
});