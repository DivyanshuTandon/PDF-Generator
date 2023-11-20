# Node PDF Generator

This Node.js application provides an API endpoint to generate a PDF file based on a predefined template. The application uses Express.js for creating the API endpoint, Puppeteer for rendering HTML to PDF, and EJS for template rendering.

# Getting Started

## Prerequisites

Before you begin, ensure you have Node.js installed on your machine. You can download it from https://nodejs.org/.

## Installation

1) Clone the repository:
```bash
git clone https://github.com/DivyanshuTandon/PDF-Generator.git
```

2) Navigate to the project directory:
```bash
cd node-pdf-generator
```

3) Install dependencies:
```bash
npm install
```

# Usage

1) Start the application:
```bash
npm start
```
The server will start on port 3000 by default. You can access the API endpoint at http://localhost:3000/documents.

2) Send a GET request to the `/documents` endpoint to generate a PDF file.

 ### API Endpoint

`/documents`

- **Method**: `GET`
- **Description**: Generates a PDF file based on a predefined template.
- **Response**: The generated PDF file will be sent as a response with the filename `generated.pdf`.


## Template

The application uses EJS (Embedded JavaScript) for template rendering. You can customize the template by modifying the `template.ejs` file in the `views` directory.

## Dependencies

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Puppeteer**: Headless Chrome browser automation library.
- **EJS**: Embedded JavaScript templating.


## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your feedback and contributions are welcome!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
