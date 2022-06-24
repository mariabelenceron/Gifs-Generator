import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing <AddCategory />', () => {
    test('should change the value in the input', () => {
        render(<AddCategory onNewCategory={() => { }} />)

        // Se extrae el input
        const input = screen.getByRole('textbox');
        // Se dispara el evento (elemento, evento)
        fireEvent.input(input, { target: { value: 'Adventure time' } });

        expect(input.value).toBe('Adventure time');
        // screen.debug()
    });

    test('should call onNewCategory if input has a value', () => {
        const inputValue = 'Adventure time';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        // screen.debug()

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled(); //Saber si la funcion fue llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1); //Saber el numero de veces que se llamo a la funcion
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); // Evalua que sea llamada con el input

    });
    
    test('should not call onNewCategory if input is empty', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    });
});