import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  {
    settings: { react: { version: "detect" } },
    rules: {
      // Not using PropTypes in this JS (non-TS) app.
      "react/prop-types": "off",
      // react-three-fiber uses custom JSX props (geometry, intensity, args, etc.)
      // that this DOM-oriented rule misflags.
      "react/no-unknown-property": "off",
    },
  },
]);
