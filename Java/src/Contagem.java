import java.util.Scanner;

public class Contagem {
  public void contarAte() {
    Scanner scanner = new Scanner(System.in);
    System.out.println("digite um número para contar até: ");
    int numero = scanner.nextInt();

    for (int i = numero; i >= 1; i--) {
      System.out.println(i);
    }

    scanner.close();
  }

}
