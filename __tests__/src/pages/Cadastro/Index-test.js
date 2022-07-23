import {render, fireEvent} from '@testing-library/react-native';
import App from "../../../../App";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização e Exibição', () => {
    it('Teste de Componentes da Tela Cadastro', () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("btnCadastro"));
        expect(getByTestId("imageCadastroLogoTipo")).toBeTruthy();
        expect(getByTestId("inputEmailCadastro")).toBeTruthy();
        expect(getByTestId("inputSenhaCadastro")).toBeTruthy();
        expect(getByTestId("btnCadastrar")).toBeTruthy();
    })
})