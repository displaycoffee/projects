# Base (version 3.2)

Base template/framework to create projects. Primarily built with React, JavaScript, Sass, and Webpack. Contains:

-   `_config` directory to configure up "global" settings
-   Organized other directories into folders: `content`, `entry`, `shared`, `sidebar`
-   `entry` directory contains components for additional functionality when needed, like portals and context
-   JS is bundled using `npm run build`
-   CSS is formed using `MiniCssExtractPlugin` and `CssMinimizerPlugin` (via webpack) then bundled using `npm run build`
