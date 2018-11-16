import Button from "@material-ui/core/Button";
import { any } from "ramda";
import * as React from "react";
import { render } from "react-testing-library";
import { OverrideMaterialUICss } from "../";

describe("The OverrideMaterialUICss component", () => {
  const div = document.createElement("div");
  const OverrideMaterialUICssContainerWithMUIBtn = render(
    <OverrideMaterialUICss>
      <Button data-testid="test-btn">testButton</Button>
    </OverrideMaterialUICss>,
    { container: document.body.appendChild(div) }
  );

  test("matches the snapshot", () => {
    expect(
      OverrideMaterialUICssContainerWithMUIBtn.container
    ).toMatchSnapshot();
  });

  test("renders the children", () => {
    const contentContainer = OverrideMaterialUICssContainerWithMUIBtn.queryByText(
      "testButton"
    );
    expect(contentContainer).toBeTruthy();
  });

  test("injects the jss-insertion-point", () => {
    expect(document.head.childNodes[0].nodeValue).toBe("jss-insertion-point");
  });

  test("injects the jss-insertion-point only once even OverrideMaterialUICss has been used twice", () => {
    const anotherDiv = document.createElement("div");
    const AnotherOverrideMaterialUICssContainerWithMUIBtn = render(
      <OverrideMaterialUICss>
        <Button data-testid="test-btn2">testButton</Button>
      </OverrideMaterialUICss>,
      { container: document.body.appendChild(anotherDiv) }
    );
    expect(document.head.childNodes[1].nodeValue).not.toBe(
      "jss-insertion-point"
    );
  });

  test("injects the material UI's styles below jss-insertion-point", () => {
    expect(document.head.childNodes[1].nodeName).toBe("STYLE");

    const hasMuiButtonBase = any((node: any) =>
      node.childNodes.length !== 0
        ? node.childNodes[0].nodeValue.includes("MuiButtonBase")
        : false
    )(document.head.childNodes);
    expect(hasMuiButtonBase).toBeTruthy();
  });

  test("removes the jss-insertion-point after unmounted", () => {
    OverrideMaterialUICssContainerWithMUIBtn.unmount();
    expect(document.head.childNodes[0].nodeValue).not.toBe(
      "jss-insertion-point"
    );
  });
});
