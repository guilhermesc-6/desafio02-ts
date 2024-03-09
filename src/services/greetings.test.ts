import { greetings } from "./greetings";

describe("Boas vindas", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("Deve exibir um alert com boas vindas", () => {
    greetings("Guilherme");
    expect(mockAlert).toHaveBeenCalledWith("Bem vindo(a) Guilherme");
  });

  it("Deve exibir um alert com boas vindas sem nome caso nenhum é informado", () => {
    greetings();
    expect(mockAlert).toHaveBeenCalledWith("Bem vindo(a) ");
  });
});
