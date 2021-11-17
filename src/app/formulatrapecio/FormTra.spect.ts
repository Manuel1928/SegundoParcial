import { FormTra } from './FormTra';

describe('FormTra', () =>{
    //prueba 1
    it('Base mayor 20 mas base menor 14 entre 2 por 5 = 85', () => {

        const result = FormTra(20,14,5);
        expect(result).toBe(85);
    })

    //prueba 2
    it('Base mayor 9 mas base menor 6 entre 2 por 4 = 30', () => {

        const result = FormTra(9,6,30);
        expect(result).toBe(30);
    })

    //prueba 3
    it('Base mayor 12 mas base menor 8 entre 2 por 5 = 50', () => {

        const result = FormTra(12,8,5);
        expect(result).toBe(50);
    })
})