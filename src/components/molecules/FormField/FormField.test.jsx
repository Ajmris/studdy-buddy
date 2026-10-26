import { fireEvent, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import FormField from "./FormField";
import { renderWithProviders } from "../../../renderWithProviders.jsx";

describe("Form Field", () => {
    afterEach(() => {
        cleanup();
    });
    it("Renders the component", ()=>{
        renderWithProviders(<FormField label="Name" name="name" id="name" />);

        // Sprawdzamy, czy etykieta (label) jest widoczna na ekranie
        expect(screen.getByText("Name")).toBeInTheDocument();
    });
});
/*const InputWithButton = () => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => setInputValue(e.target.value);
    return (
        <>
            <input value={inputValue} onChange={handleInputChange} name="Name" id="name" placeholder="Enter your name" />
            <button disabled={!inputValue}>Submit</button>
        </>
    );
};

describe("Input with button", () => {
    afterEach(() => {
        cleanup();
    });

    it("Renders the component", () => {
        render(<InputWithButton />);
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    it('Properly handles value change', () => {
        render(<InputWithButton />);
        const input = screen.getByPlaceholderText("Enter your name");
        const button=screen.getByText("Submit");
        expect(button).toBeDisabled();
        fireEvent.change(input, { target: { value: "Roman" } });
        expect(input).toHaveValue("Roman");
        expect(button).not.toBeDisabled();
    });
});*/