import Button from "@material-ui/core/Button";
import { any } from "ramda";
import * as React from "react";
import { render, cleanup } from "react-testing-library";
import { OverrideMaterialUICss } from "../";

afterEach(cleanup);

describe("The OverrideMaterialUICss component", () => {
  test("matches the snapshot", () => {
    const { container } = render(
      <OverrideMaterialUICss>
        <Button>testButton</Button>
      </OverrideMaterialUICss>
    );
    expect(container).toMatchSnapshot();
  });

  test("renders the children", () => {
    const { queryByText } = render(
      <OverrideMaterialUICss>
        <Button>testButton</Button>
      </OverrideMaterialUICss>
    );
    const buttonContainer = queryByText("testButton");
    expect(buttonContainer).toBeTruthy();
  });

  test("injects the jss-insertion-point", () => {
    const div = document.createElement("div");
    render(
      <OverrideMaterialUICss>
        <Button>testButton</Button>
      </OverrideMaterialUICss>,
      { container: document.body.appendChild(div) }
    );
    expect(document.head.childNodes[0].nodeValue).toBe("jss-insertion-point");
  });

  test("injects the jss-insertion-point only once even OverrideMaterialUICss has been used twice", () => {
    const div = document.createElement("div");
    const anotherDiv = document.createElement("div");
    render(
      <OverrideMaterialUICss>
        <Button>testButton</Button>
      </OverrideMaterialUICss>,
      { container: document.body.appendChild(div) }
    );
    render(
      <OverrideMaterialUICss>
        <Button>testButton</Button>
      </OverrideMaterialUICss>,
      { container: document.body.appendChild(anotherDiv) }
    );
    expect(document.head.childNodes[1].nodeValue).not.toBe(
      "jss-insertion-point"
    );
  });

  test("injects the material UI's styles below jss-insertion-point", () => {
    const div = document.createElement("div");
    render(
      <OverrideMaterialUICss>
        <Button>testButton</Button>
      </OverrideMaterialUICss>,
      { container: document.body.appendChild(div) }
    );

    expect(document.head.childNodes[1].nodeName).toBe("STYLE");

    const hasMuiButtonBase = any((node: Node) =>
      node.nodeType === 1
        ? (node as HTMLElement).getAttribute("data-meta") === "MuiButtonBase"
        : false
    )(document.head.childNodes);
    expect(hasMuiButtonBase).toBeTruthy();
  });

  test("removes the jss-insertion-point after unmounted", () => {
    const div = document.createElement("div");
    const { unmount } = render(
      <OverrideMaterialUICss>
        <Button>testButton</Button>
      </OverrideMaterialUICss>,
      { container: document.body.appendChild(div) }
    );
    unmount();
    expect(document.head.childNodes[0].nodeValue).not.toBe(
      "jss-insertion-point"
    );
  });
});
