import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Testing <GifItem />', () => {
    const title = 'Adventure Time';
    const url = 'https://github.com/';
    
    test('Verified the snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('show the img with the URL and ALT element', () => {
        render(<GifItem title={title} url={url}/>);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('should show the title in the component', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });
});