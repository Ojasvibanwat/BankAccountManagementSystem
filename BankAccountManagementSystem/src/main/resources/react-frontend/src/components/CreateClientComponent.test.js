import { render, screen, cleanup, fireEvent } from "@testing-library/react";

// Importing the jest testing library
import '@testing-library/jest-dom';


afterEach(() => {
    cleanup();  // Resets the DOM after each test suite
})

describe("Link Components", () => {
    const title = jest.fn();
    render(
        <form data-testid="form" onSubmit={title}>
            <div >
                <label data-testid="name">Name</label>
                <input
                    data-testid="nameIP"
                    type="text"
                    placeholder="Enter full name"
                    name="name"
                    className="form-control"
                    onChange={title}
                >
                </input>
            </div>
            <div>
                <label data-tesid="Account number">Account Number :</label>
                <input
                    data-testid="accountIP"
                    type="int"
                    placeholder="Enter account number"
                    name="accountNumber"
                    className="form-control"
                    onChange={title}
                >
                </input>
            </div>

            <div>
                <label data-testid="balance amount">Balance :</label>
                <input
                    data-testid="balanceIP"
                    type="int"
                    placeholder="Enter balance"
                    name="balance"
                    className="form-control"
                    onChange={title}
                >

                </input>
            </div>
            <div >
                <label data-testid="date">DOJ</label>
            </div>
            <div >
                <label data-testid="id">Password</label>
                <input
                    data-testid="basicIP"
                    type="text"
                    placeholder="Enter password"
                    name="password"
                    className="form-control"
                    onChange={title}
                >
                </input>
            </div>
            <div className='text-center'>
                <button data-testid="buttonForCreate" onClick={title}>Update</button>
            </div>

        </form>

    );
    const button = screen.getByTestId("buttonForCreate");
    const name = screen.getByTestId("name");

    //const bp=screen.getByTestId("id");
    const date = screen.getByTestId("date");
    const form = screen.getByTestId("form");
    const ip1 = screen.getByPlaceholderText("Enter full name");
 


    // Test 4
    test("Rendering", () => {
        expect(button).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        //expect(bp).toBeInTheDocument();
        expect(date).toBeInTheDocument();
        expect(form).toBeInTheDocument();
        expect(ip1).toBeDefined();
        //expect(ip2).toBeDefined();
    })

    // Test 5
    test("Text content", () => {
        expect(button).toHaveTextContent('Update');
        expect(name).toHaveTextContent('Name');
        expect(date).toHaveTextContent('DOJ');
    });

    // Test 6
    test("Click and submit", () => {
        fireEvent.click(button);
        fireEvent.submit(form);
        fireEvent.change(ip1);
    })
})