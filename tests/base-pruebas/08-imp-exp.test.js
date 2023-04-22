import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe por ID', () => {

        const id = 1;
        
        const heroe = getHeroeById( id );

        expect( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    test('getHeroeById debe retornar undefine si no se encuentra un ID', () => {

        const id = 100;
        
        const heroe = getHeroeById( id );

        expect( heroe ).toBeFalsy()

    });

    test('getHeroesByOwner debe retornar heroes de DC', () => {
        
        const owner = 'DC';

        const  dcHeroes  = getHeroesByOwner(owner);
        
        expect( dcHeroes.length ).toBe( 3 );
        
        expect( dcHeroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])

        expect( dcHeroes ).toEqual( heroes.filter((heroe) => heroe.owner === owner))
        
    });

    test('getHeroesByOwner debe retornar heroes de Marvel', () => {
        
        const owner = 'Marvel';

        const  marvelHeroes  = getHeroesByOwner(owner);
        console.log(marvelHeroes)
        
        expect( marvelHeroes.length ).toBe( 2 );
        expect( marvelHeroes ).toEqual([
                { id: 2, name: 'Spiderman', owner: 'Marvel' },
                { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ])

        expect( marvelHeroes ).toEqual( heroes.filter((heroe) => heroe.owner === owner))
        
    });
    
});
