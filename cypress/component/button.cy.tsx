import React from "react";
import Button  from "../../src/components/button/index";
import { ButtonProps } from "../../src/components/button/props";

describe("Button", () => {
  let styles;
  let data;

  before(() => {
    cy.fixture("button/styles").then((fixtureStyles) => {
      styles = fixtureStyles;
    });
    cy.fixture("button/data").then((fixtureData) => {
      data = fixtureData;
    });
  });

  beforeEach(() => {
    cy.wrap(data).as("data");
    cy.wrap(styles).as("styles");
  });

  const mountButton = (props: ButtonProps) => {
    cy.mount(<Button {...props} />);
    return cy.get('[data-cy="hz-button"]');
  };

  const variants = ["default", "destructive", "outline", "secondary", "ghost", "link"];
  const sizes = ["default", "sm", "lg"];
  const types = ["button", "submit", "reset"];

  variants.forEach((variant) => {
    describe(`Variant: ${variant}`, () => {
      sizes.forEach((size) => {
        describe(`Size: ${size}`, () => {
          types.forEach((type) => {
            it(`renders with ${type} type`, () => {
              cy.get("@data").then((data: any) => {
                cy.get("@styles").then((styles: any) => {
                  const onClick = cy.stub().as('onClickStub');
                  const label = `${variant} ${size} ${type}`;
                  const button = mountButton({
                    label,
                    variant: variant as ButtonProps["variant"],
                    size: size as ButtonProps["size"],
                    type: type as ButtonProps["type"],
                    onClick,
                  });

                  button.should("have.text", label);
                  button.should("have.attr", "type", type);

                  styles.variants[variant].split(" ").forEach((className: string) => {
                    button.should("have.class", className);
                  });

                  styles.sizes[size].split(" ").forEach((className: string) => {
                    button.should("have.class", className);
                  });

                  styles.common.split(" ").forEach((className: string) => {
                    button.should("have.class", className);
                  });

                  button.click();
                  cy.get('@onClickStub').should('have.been.calledOnce');
                });
              });
            });
          });
        });
      });
    });
  });

  describe("Disabled state", () => {
    it("applies disabled styles and prevents click", () => {
      cy.get("@data").then((data: any) => {
        cy.get("@styles").then((styles: any) => {
          const onClick = cy.stub().as('onClickStub');
          const button = mountButton({ label: data.labels.disabled, disabled: true, onClick });
          
          button.should("be.disabled");
          button.should("have.class", "disabled:pointer-events-none");
          button.should("have.class", "disabled:opacity-50");

          button.click({force: true});
          cy.get('@onClickStub').should('not.have.been.called');
        });
      });
    });
  });
});
