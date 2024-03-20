const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  // 拡張子が js・jsx・ts・tsx のファイルに対してlinterが走る
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
