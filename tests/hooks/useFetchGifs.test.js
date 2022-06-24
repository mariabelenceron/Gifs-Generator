import { renderHook, waitFor } from '@testing-library/react';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Testing Hook useFetchGifs', () => {
    test('should return the initial state', () => {
        const { result } = renderHook(() => useFetchGifs('Harry Potter'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return an array of img and isLoading false', async () => {
        const { result } = renderHook(() => useFetchGifs('Harry Potter'));

        // Espera hasta que el resultado ya tenga imagenes
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});