import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba en 06-deses-obj', () => {

    test('debe de retornar un objeto ', () => {
        const clave = 'capcap';
        const edad = 23;
        
        const user = usContext({clave, edad});

        expect(user).toEqual({
            nombreClave: clave,
            anios: edad,
                latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    });
    
})
