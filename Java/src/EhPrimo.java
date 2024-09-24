import java.util.Scanner;

public class EhPrimo {
  public void EPrimo(){
    Scanner scanner = new Scanner(System.in); 
    System.out.println("Digite um número inteiro: ");
    int numero = scanner.nextInt();
    if (numero <= 1) {
      System.out.println(numero + " não é primo.");
    } else {
      for (int i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i == 0) {
          System.out.println(numero + " não é primo.");
        }else{
          System.out.println(numero + " é primo.");
        }
      }
    }
    scanner.close();
  }
}