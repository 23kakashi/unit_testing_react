import { fireEvent, render, screen } from "@testing-library/react";
import Form, { formSubmit } from "../components/Form";

// const renderComponent = () => {
//     return render(<Form />);
//   };

describe("Registation form", () => {
  let form;
  beforeAll(() => {});

    beforeEach(() => {
      form = render(<Form />);
    });

  it("should have registation form", () => {
    //Assert
    expect(screen.getByTestId("registration_form")).toBeTruthy();
  });

  describe("Name field", () => {
    it("should have name filed rendered correctly", () => {
      //Assert
      expect(screen.getByTestId("name")).toBeTruthy();
    });

    describe("validation", () => {
      it("should have only character", () => {
        //Arrange
        let nameField = screen.getByTestId("name");
        console.log(nameField);

        //Act
        fireEvent.change(nameField, { target: { value: "tapish" } });
        console.log(nameField);
        //Assert
        expect(nameField).toHaveValue("tapish");
      });

      it("should have only character", () => {
        //Arrange
        let nameField = screen.getByTestId("name");
        //Act
        fireEvent.change(nameField, { target: { value: "123" } });
        //Assert
        expect(nameField).toHaveValue("");
      });

      it("should have only character", () => {
        //Arrange
        let nameField = screen.getByTestId("name");
        //Act
        fireEvent.change(nameField, { target: { value: "123aBC" } });
        //Assert
        expect(nameField).toHaveValue("aBC");
      });
    });
  });

  describe("submit form", () => {
    it("should have submit button rendered correctly", () => {
      //Assert
      expect(screen.getByTestId("submit")).toBeInTheDocument();
    });

    //  it("should have form rendered correctly", () => {
    //    //Assert
    //    expect(screen.getByTestId("form")).toBeTruthy();
    //  });

    //  it("should submit the form", () => {
    //    //Arrange
    //    const onSubmit = jest.fn();

    //    render(<Form onSubmit={onSubmit} />);
    //    //Act
    //    fireEvent.submit(screen.getByTestId("form"));
    //    //Assert
    //    expect(onSubmit).toHaveBeenCalled();
    //  });

    it.only("should submit the form", () => {
      //Arrange
      // const onSubmit = jest.fn();

      render(<Form />);
      const owner = screen.getByTestId("owner");
      expect(owner).toHaveTextContent("Tapish");
      //Act
      const button = screen.getByRole("button", {
        name: /submit/i,
      });
      expect(button).toBeInTheDocument();
      fireEvent.click(
        screen.getByRole("button", {
          name: /submit/i,
        })
      );
      //Assert
      expect(owner).toHaveTextContent("Sharma");
    });
  });
});
