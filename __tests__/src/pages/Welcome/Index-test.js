import {render, fireEvent} from '@testing-library/react-native';
import App from "../../../../App";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização e Exibição', () => {
    it('Teste de Componentes da Tela Welcome', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId("Logo")).toBeTruthy();
        expect(getByTestId("Titulo")).toBeTruthy();
        expect(getByTestId("btnTituloAcessarParaSaberMais")).toBeTruthy();
        expect(getByTestId("btnAcessar")).toBeTruthy();
    })
})

describe('Testes de Navegação', () => {
  it('Navegação de Welcome para CourseList', () => {
      const { getByText ,getByTestId} = render(<App />);

      const botaoTituloAcessarParaSaberMais = (getByTestId("btnTituloAcessarParaSaberMais"));
      fireEvent.press(botaoTituloAcessarParaSaberMais);
      expect(getByText(" Alunos, lindos!!")).toBeTruthy();
      
      const botao = (getByTestId("btnAcessar"));
      fireEvent.press(botao);

      expect(getByText("MyTeacher")).toBeTruthy();

  })
})

