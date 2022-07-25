import {render, fireEvent} from '@testing-library/react-native';
import App from "../../../../App";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização e Exibição', () => {
    it('Teste de Componentes da Tela Login', () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("btnLogin"));
        expect(getByTestId("entrar")).toBeTruthy();
        expect(getByTestId("imageLogoTipoLogin")).toBeTruthy();
        expect(getByTestId("inputEmail")).toBeTruthy();
        expect(getByTestId("inputSenha")).toBeTruthy();
        expect(getByTestId("btnEsqueceuASenha")).toBeTruthy();
        expect(getByTestId("btnCadastro2")).toBeTruthy();
    })
})
describe ('Testes do componente Input', () => {
    it('Teste de input email tela Login', () => {
      const { getByTestId} = render(<App />);
      fireEvent.press(getByTestId("btnLogin"));
      fireEvent.press(getByTestId("inputEmail"));
    })
        it('Teste de input Senha tela Login', () => {
        const { getByTestId} = render(<App />);
        fireEvent.press(getByTestId("btnLogin"));
        fireEvent.press(getByTestId("inputSenha"));
        })
})

