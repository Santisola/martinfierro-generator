import { MARTIN_FIERRO } from "../constants";
// ! TODO: No funciona el import del paquete `Module not found: Can't resolve 'martinfierro-generator'`
/**
 * Generates a string of Jose Hernandez's epic poem "Martin Fierro"
 * 
 * @param stringLength The length of the requested Martin Fierro's string.
 * @returns An EPIC string by El Gaucho Martín Fierro. | Empty string in case of an error
 */
export const MartinFierro = (stringLength: number):string => {
    try {
        if (typeof stringLength !== 'number') {
            throw new Error('stringLength must be a number');
        }
        if (stringLength <= 0) {
            throw new Error('stringLength must be greater than zero');
        }
        
        if (stringLength > MARTIN_FIERRO.length) {
            const diff = stringLength / MARTIN_FIERRO.length;

            const MartinFierros = new Array(Math.ceil(diff));
            MartinFierros.fill(MARTIN_FIERRO);
            
            return MartinFierros.join(' ').substring(0, stringLength);
        }
    
        return MARTIN_FIERRO.substring(0, stringLength);
    } catch (e) {
        console.error('Error en la generación de Martin Fierro =>', e)
        return '';
    }
}