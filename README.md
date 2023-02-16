Static Site Generator using Next.js

This is a simple static-site generator built with Next.js. It takes a folder containing Markdown pages and produces a website with support for a homepage, articles, and supporting pages like an about page and error pages.

Installation

To get started, clone this repository and run the following command to install the necessary packages:

Copy code:

npm install

Usage

To generate your static site, run the following command:

Copy code:

npm run build

This will generate the static site in the out directory. You can then deploy the contents of this directory to a static hosting service like Netlify, Vercel or AWS S3.

Configuration

The generator comes with a default configuration, but you can customize it by modifying the next.config.js file. Here are some of the options you can configure:

siteTitle: The title of your website.
siteDescription: The description of your website.
siteAuthor: The author of your website.
basePath: The base URL of your website.
postsPerPage: The number of posts to display per page.
License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
This project was inspired by the SSG-Notes repository by John Smilga.
