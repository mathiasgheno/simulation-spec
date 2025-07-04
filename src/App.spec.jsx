import App from './App.jsx';
import {render, screen} from '@testing-library/react';

describe('App', () => {
  it('deve renderizar o App', () => {
    render(<App/>);
    screen.getByText('Simulador de Emprestimos');
  });
});