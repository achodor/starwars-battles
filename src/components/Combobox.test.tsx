import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../utils/test-utils';
import Combobox from './Combobox';

describe('Combobox test', () => {
  it('the Combobox is visible', () => {
    render(<Combobox url="characters" />);
    expect(screen.getByPlaceholderText(/Select/)).toBeInTheDocument();
  });

  it('the Combobox is visible', async () => {
    render(<Combobox url="characters" />);
    const combobox = screen.getByPlaceholderText(/Select/);
    fireEvent.change(combobox, { target: { value: 'Yoda' } });
    await waitFor(() => expect(screen.getByDisplayValue(/Yoda/)).toBeInTheDocument());
  });
});
