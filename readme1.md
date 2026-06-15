## Node Js

Node js is a javascript runtime environment that allows developers to run javascript code outside of a web browser
Node js runs on V8 Javascript Engine
Node js is used to create web server


### package.json

package.json contains all the dependencies that we have installed.
it is like id card it contains information about the project. so if a developer opens your package.json file developer will know everything about your project


### Common Js VS module Js
Importing
const express = require("express");
Exporting
module.exports = myFunction;

Features
Older Node.js module system
Uses require() and module.exports
Synchronous loading
Widely used in older projects

## Module
Importing
import express from "express";
Exporting
export default myFunction;

Features
Modern JavaScript standard
Uses import and export
Supported in browsers and Node.js
Better static analysis and tree shaking


### Routing in Node js
Routing means deciding which code should run when a user visits a particular URL or sends a particular request.

Think of routing as a receptionist in an office:

User requests /home → send Home page
User requests /about → send About page
User requests /contact → send Contact page

The router checks the URL and directs the request to the correct handler.
