import java.util.Scanner;

public class SomaDeNumeros {
  Scanner prompt = new Scanner(System.in);
    int n, num, soma = 0, i = 0;

      public void SomaDeNumeros() {
        System.out.print("quantos numeros a serem somados: ");
        int n = prompt.nextInt();
          while (i<n) {
            i = i+ 1;
            System.out.println("entre com o " + i + " numero: ");
            num = prompt.nextInt();
            soma = soma + num;
          }
        System.out.println("a soma da: " + soma);
      }
}