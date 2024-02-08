import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeContainer = styled.div`
  /* background-color: #f0f0f0;  */
  padding: 0px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const customStyle = {
  lineHeight: "1.5",
  fontSize: "1.8rem",
  borderRadius: "5px",
  backgroundColor: "var(--color-grey-000)",
  padding: "20px",
};

function Code({ children }) {
  return (
    <CodeContainer>
      <SyntaxHighlighter
        language="javascript"
        style={solarizedlight}
        customStyle={customStyle}

        //customStyle={{ backgroundColor: "var(--color-grey-000)" }}
      >
        {children}
      </SyntaxHighlighter>
    </CodeContainer>
  );
}

export default Code;
