import { fireEvent, render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Testing <GifGrid />', () => {

    const category = 'Adventure time';

    test('should show loading at the first time', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('should show items when load img using useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Adventure Time',
                url: 'https://localhost/adventureTime.jpg'
            },
            {
                id: '123',
                title: 'Beyonce',
                url: 'https://localhost/Beyonce.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        // screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2);
        
    });
});