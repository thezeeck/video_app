import { createGlobalStyle } from "styled-components";
const colorSchema = require("./schemaColors.json");

const CSS = createGlobalStyle`
  ${({ colorSchema }) => {
    let cssVars = "";
    
    for (const key in colorSchema) {
      cssVars += `--ZUI-${key}: ${colorSchema[key]};`
    }

    return `
      :root {
        ${cssVars}
      }
    `
  }}
`;

export const Styles = () => {
  console.log(colorSchema);
  return <CSS colorSchema={colorSchema} />;
};