import {render, fireEvent} from '@testing-library/react-native';
import App from "../../../../App";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização e Exibição', () => {
    it('Teste de Componentes da Tela Welcome', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId("imageWelcome")).toBeTruthy();
        expect(getByTestId("btnCadastro")).toBeTruthy();
        expect(getByTestId("btnLogin")).toBeTruthy();
    })
})

describe('Testes de Navegação', () => {
  it('Navegação de Welcome para Login', () => {
      const {getByTestId} = render(<App />);
      
      fireEvent.press(getByTestId("btnLogin"));

      expect(getByTestId("entrar")).toBeTruthy();

  })
})

describe('Teste de Navegação', () => {
    it('Navegação de Welcome para Cadastro', () =>{
        const {getByTestId} = render(<App/>);
        fireEvent.press(getByTestId("btnCadastro"));
        expect(getByTestId("imageCadastroLogoTipo")).toBeTruthy();
    
      })
})

