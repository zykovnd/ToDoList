import { render, screen, fireEvent, act } from '@testing-library/react';
import FetchForm from './FetchForm';

test("finds value using fetch", async () => {
    render(<FetchForm />);

    await act(async () => {
        fireEvent.input(screen.getByPlaceholderText('Введите ID поста'), { target: { value: 1 } });
        fireEvent.click(screen.getByText('Найти'));
    });

    await screen.findByText('Sincere@april.biz');

    expect(screen.getByText('Sincere@april.biz')).toBeInTheDocument();
});

test("shows error", async () => {
    render(<FetchForm />);

    await act(async () => {
        fireEvent.input(screen.getByPlaceholderText('Введите ID поста'), { target: { value: 9999 } });
        fireEvent.click(screen.getByText('Найти'));
    });

    await screen.findByText('Ресурса не существует');

    expect(screen.getByText('Ресурса не существует')).toBeInTheDocument();
});