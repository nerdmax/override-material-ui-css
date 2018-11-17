import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { create } from "jss";
import * as React from "react";
import JssProvider from "react-jss/lib/JssProvider";

const jssInsertionPoint = "jss-insertion-point";

const isInsertionPointExisting = (): boolean => {
  const documentHead = document.head;
  for (var i = 0; i < documentHead.childNodes.length; i++) {
    var node = documentHead.childNodes[i];
    if (node.nodeType === 8 && node.nodeValue === jssInsertionPoint) {
      return true;
    }
    return false;
  }
};

const insertInsertionPoint = () => {
  const styleNode = document.createComment(jssInsertionPoint);
  const documentHead = document.head as HTMLHeadElement;
  documentHead.insertBefore(styleNode, documentHead.firstChild);
};

const removeInsertionPoint = () => {
  const documentHead = document.head;
  for (var i = 0; i < documentHead.childNodes.length; i++) {
    var node = documentHead.childNodes[i];
    if (node.nodeType === 8 && node.nodeValue === jssInsertionPoint) {
      node.remove();
    }
  }
};

const setupInsertionPoint = () => {
  if (!isInsertionPointExisting()) {
    insertInsertionPoint();
  }

  const generateClassName = createGenerateClassName();
  const jss = create(jssPreset());
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  jss.setup({ insertionPoint: "jss-insertion-point" });

  return { generateClassName, jss };
};

type Props = {
  children?: (JSX.Element | null)[] | JSX.Element;
  useCssBaseline?: boolean;
};
type State = { generateClassName; jss };

class OverrideMaterialUICss extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = setupInsertionPoint();
  }

  componentWillUnmount() {
    removeInsertionPoint();
  }

  render() {
    const { generateClassName, jss } = this.state;
    const { children, useCssBaseline = true } = this.props;

    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <>
          {useCssBaseline ? <CssBaseline /> : null}
          <>{children}</>
        </>
      </JssProvider>
    );
  }
}

export { OverrideMaterialUICss };
