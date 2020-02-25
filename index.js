const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");

const app = express();

// load env config
dotenv.config({ path: `${path.resolve(__dirname)}/config/config.env` });

// helmet adds security headers
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const PORT = process.env.PORT ? process.env.PORT : 5000;
app.listen(PORT, () =>
    console.log(
        `Server is listening on port: ${PORT} in ${process.env.NODE_ENV} environment`
    )
);

