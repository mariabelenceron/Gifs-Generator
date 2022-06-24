import { fireEvent, render, screen }  from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Testing <GifExpertApp/>', () => {
    test('should onAddCategory', () => {
        render(<GifExpertApp/>);
        
        const input = screen.getByRole('textbox');
        const inputValue = 'Beyonce';
        
        fireEvent.input(input, {target:{value:inputValue}});

        expect(input.value).toBe(inputValue);
    });
});