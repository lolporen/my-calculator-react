import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';


test('the buttons have correct numbers', () => {
    render(<Calculator />)
    const divElement = screen.getAllByTestId('button');
    expect(divElement.length).toBe(18);
});