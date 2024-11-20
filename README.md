# Martín Fierro Generator 🇦🇷

A text generator that creates placeholder text using José Hernández's epic poem "El Gaucho Martín Fierro" instead of the traditional Lorem Ipsum. Perfect for adding an Argentine touch to your development projects!

## Installation

Install the package using npm:

```bash
npm install martinfierro-generator
```

## Usage

### As a npm package

```javascript
import { MartinFierro } from 'martinfierro-generator';

// Generate 100 characters of Martín Fierro text
const text = MartinFierro(100);
console.log(text);
```

### Web Interface

You can also use our web interface to generate text directly:
[Martín Fierro Generator Web](https://martinfierro-generator.netlify.app)

## Reference

### `MartinFierro(stringLength)`

Generates a string of text from "El Gaucho Martín Fierro".

#### Parameters

- `stringLength` (number): The desired length of the output string.

#### Returns

- `string`: A text string from Martín Fierro with the specified length.
- Returns an empty string if an error occurs.

#### Example

```javascript
import { MartinFierro } from 'martinfierro-generator';

// Generate 200 characters
const shortText = MartinFierro(200);

// Generate 1000 characters
const longText = MartinFierro(1000);
```

## Error Handling

The `MartinFierro` function includes the following error checks:

- Validates that `stringLength` is a number
- Ensures `stringLength` is greater than zero
- Handles cases where requested length exceeds the original text length by repeating the text

If any error occurs, the function will:
1. Log the error to the console
2. Return an empty string

## Why Martín Fierro?

"El Gaucho Martín Fierro" is one of the most important works of Argentine literature. Written by José Hernández and published in 1872, it tells the story of a gaucho and his experiences in the Argentine countryside. By using this text instead of Lorem Ipsum, you can add a unique Argentine cultural element to your development process.

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

Santiago Isola - [GitHub](https://github.com/Santisola)

## Acknowledgments

- José Hernández, author of "El Gaucho Martín Fierro"
- All contributors to this project
