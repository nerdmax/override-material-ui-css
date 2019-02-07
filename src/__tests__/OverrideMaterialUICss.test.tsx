import Button from "@material-ui/core/Button"
import { css } from "emotion"
import { any, remove } from "ramda"
import * as React from "react"
import { cleanup, render } from "react-testing-library"
import { OverrideMaterialUICss } from "../"

const customisedStyle = css(`
color: red;
background-color: blue;
font-size: 4rem;
`)

const countNodesWithCertainAttribute = (
  nodeList: NodeListOf<ChildNode> | ChildNode[],
  attributeName: string,
  attributeValue: string
): number => {
  const nodesArray: ChildNode[] = Array.prototype.slice.call(nodeList)
  const targetNode = nodesArray.filter(node =>
    node.nodeType === 1
      ? ((node as HTMLElement).getAttribute(attributeName) || "").includes(
          attributeValue
        )
      : false
  )
  return targetNode.length
}

describe("The OverrideMaterialUICss component", () => {
  test("matches the snapshot", () => {
    const { container } = render(
      <OverrideMaterialUICss>
        <Button className={customisedStyle}>testButton</Button>
      </OverrideMaterialUICss>
    )

    expect(container).toMatchSnapshot()
  })

  test("renders the children", () => {
    const { queryByText } = render(
      <OverrideMaterialUICss>
        <Button className={customisedStyle}>testButton</Button>
      </OverrideMaterialUICss>
    )

    expect(queryByText("testButton")).toBeTruthy()
  })

  test("injects the jss-insertion-point to the top of head tag", () => {
    const div = document.createElement("div")
    render(
      <OverrideMaterialUICss>
        <Button className={customisedStyle}>testButton</Button>
      </OverrideMaterialUICss>,
      { container: document.body.appendChild(div) }
    )

    expect(document.head.childNodes[0].nodeType).toBe(8)
    expect(document.head.childNodes[0].nodeValue).toBe("jss-insertion-point")
  })

  test("injects the jss-insertion-point only once even OverrideMaterialUICss has been used twice", () => {
    const div = document.createElement("div")
    const anotherDiv = document.createElement("div")
    render(
      <OverrideMaterialUICss>
        <Button className={customisedStyle}>testButton</Button>
      </OverrideMaterialUICss>,
      { container: document.body.appendChild(div) }
    )
    render(
      <OverrideMaterialUICss>
        <Button className={customisedStyle}>testButton</Button>
      </OverrideMaterialUICss>,
      { container: document.body.appendChild(anotherDiv) }
    )
    const jssInsertionPoint = Array.prototype.slice
      .call(document.head.childNodes)
      .filter(headNode => headNode.nodeValue === "jss-insertion-point")

    expect(jssInsertionPoint.length).toBe(1)
  })

  test("injects the material UI's styles below jss-insertion-point", () => {
    const div = document.createElement("div")
    render(
      <OverrideMaterialUICss>
        <Button className={customisedStyle}>testButton</Button>
      </OverrideMaterialUICss>,
      { container: document.body.appendChild(div) }
    )

    expect(document.head.childNodes[0].nodeValue).toBe("jss-insertion-point")

    const headChildNodesWithoutFirstNode = remove(
      0,
      1,
      Array.prototype.slice.call(document.head.childNodes) as ChildNode[]
    )
    const amountOfMuiStyleNode = countNodesWithCertainAttribute(
      headChildNodesWithoutFirstNode,
      "data-meta",
      "Mui"
    )
    expect(amountOfMuiStyleNode).toBeGreaterThan(0)
  })

  test("removes the jss-insertion-point after unmounted", () => {
    const div = document.createElement("div")
    const { unmount } = render(
      <OverrideMaterialUICss>
        <Button className={customisedStyle}>testButton</Button>
      </OverrideMaterialUICss>,
      { container: document.body.appendChild(div) }
    )
    unmount()
    const jssInsertionPoint = Array.prototype.slice
      .call(document.head.childNodes)
      .filter(headNode => headNode.nodeValue === "jss-insertion-point")

    expect(jssInsertionPoint.length).toBe(0)
  })

  describe("with prop: useCssBaseline unset", () => {
    test("injects the MuiCssBaseline style", () => {
      const div = document.createElement("div")
      render(
        <OverrideMaterialUICss>
          <Button className={customisedStyle}>testButton</Button>
        </OverrideMaterialUICss>,
        { container: document.body.appendChild(div) }
      )

      const amountOfMuiCssBaselineNode = countNodesWithCertainAttribute(
        document.head.childNodes,
        "data-meta",
        "MuiCssBaseline"
      )
      expect(amountOfMuiCssBaselineNode).toBe(1)
    })
  })

  describe("with prop: useCssBaseline set to false", () => {
    test("doesn't inject the MuiCssBaseline style", () => {
      const div = document.createElement("div")
      render(
        <OverrideMaterialUICss useCssBaseline={false}>
          <Button className={customisedStyle}>testButton</Button>
        </OverrideMaterialUICss>,
        { container: document.body.appendChild(div) }
      )

      const amountOfMuiCssBaselineNode = countNodesWithCertainAttribute(
        document.head.childNodes,
        "data-meta",
        "MuiCssBaseline"
      )
      expect(amountOfMuiCssBaselineNode).toBe(0)
    })
  })
})
