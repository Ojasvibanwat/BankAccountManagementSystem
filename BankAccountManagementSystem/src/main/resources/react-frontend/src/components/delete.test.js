import { render,screen,cleanup,fireEvent} from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom';

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

describe("delete component", () => {
    const deleteClient = jest.fn()
    render(
        <form data-testid="form" onSubmit={deleteClient}>
            <div>
                <h2> Client List</h2>
                <table data-testid="table">
                <thead>
                    <th> Client Id </th>
                    <th> Client Name </th>
                    <th> Client Account Number </th>
                    <th> Client Balance </th>
                    <th> Client Outstanding Amount </th>
                    <th> Client Date of Joining </th>
                    <th> Client Password </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    <tr>
                        <td>client_id</td>
                        <td>client_name</td>
                        <td>client_accountNumber</td>
                        <td>client_balance</td>
                        <td>client_outstandingAmount</td>
                        <td>client_dateOfJoining</td>
                        <td>client_password</td>
                        <td>
                            <button data-testid="button" onClick={deleteClient}>Delete</button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </form>

    )

    const heading = screen.findByRole('h2');
    const button = screen.getByTestId("button");
    const table = screen.getByTestId("table");

   // Test 1
    test("Rendering", () => {
        expect(heading).toBeDefined();
        expect(button).toBeInTheDocument();
        expect(table).toBeInTheDocument();
    })

    //Test 2
    test("Text content", () => {
        expect(button).toHaveTextContent('Delete');
    })

    //Test 3
    test("Click and submit", () => {
        fireEvent.click(button);
    })
})