import { render,screen,cleanup,fireEvent} from "@testing-library/react";

import '@testing-library/jest-dom';
import DatePicker from 'react-datepicker';

afterEach(() => {
    cleanup();
})

describe("Link Components", () => {
    const title=jest.fn();
    render(
                         <form data-testid="form" onSubmit={title}>
                             <div >
                                 <label data-testid="name">Name</label>
                                 <input
                                    data-testid="nameIP"
                                     type = "text"
                                     placeholder = "Enter full name"
                                     name = "name"
                                     className = "form-control"
                                     onChange = {title}  
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
                                 <label data-testid="id">BasicPay</label>
                                 <input
                                 data-testid="basicIP"
                                     type = "text"
                                     placeholder = "Enter basic pay per year"
                                     name = "basicPay"
                                     className = "form-control" 
                                     onChange = {title}  
                                 >
                                 </input>
                             </div>
                             <div className='text-center'>
                             <button data-testid="buttonForCreate" onClick={title}>Update</button>
                             </div>
                             
                         </form>
                     
                ); 
    const button = screen.getByTestId("buttonForCreate"); 
    const name=screen.getByTestId("name");
    //const bp=screen.getByTestId("id");
    const date=screen.getByTestId("date");
    const form=screen.getByTestId("form");
    const ip1=screen.getByPlaceholderText("Enter full name");
    //const ip2=screen.getByPlaceholderText("Enter basic pay per year");


    // Test 1
    test("Rendering", () => {
        expect(button).toBeInTheDocument(); 
        expect(name).toBeInTheDocument();
        //expect(bp).toBeInTheDocument();
        expect(date).toBeInTheDocument();
        expect(form).toBeInTheDocument();
        expect(ip1).toBeDefined();
        //expect(ip2).toBeDefined();
    })
  
    test("Text content", () => {
        expect(button).toHaveTextContent('Update');
        expect(name).toHaveTextContent('Name');
        //expect(bp).toHaveTextContent('BasicPay');
        expect(date).toHaveTextContent('DOJ');
    });

    test("Click and submit",()=>{
        fireEvent.click(button);
        fireEvent.submit(form);
        fireEvent.change(ip1);
        //fireEvent.change(ip2);
    })
})