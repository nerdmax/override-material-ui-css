import * as React from "react"
import { storiesOf } from "@storybook/react"
import Button from "@material-ui/core/Button"
import { OverrideMaterialUICss } from "../src/OverrideMaterialUICss"
import { css } from "emotion"

const buttonStyle = css`
  color: red;
  background-color: blue;
  font-size: 4rem;
`

storiesOf("Material UI button", module)
  .add("Without OverrideMaterialUICss", () => (
    <Button variant="contained" className={buttonStyle}>
      Button
    </Button>
  ))
  .add("With OverrideMaterialUICss", () => (
    <OverrideMaterialUICss>
      <Button variant="contained" className={buttonStyle}>
        Button
      </Button>
    </OverrideMaterialUICss>
  ))
