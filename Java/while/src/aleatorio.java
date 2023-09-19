public class aleatorio {

    public static void main(String args[]) {
        int valor = (int)(Math.random()*5);

        while(valor != 0)
        {
            valor = (int)(Math.random()*5);
            System.out.println("Valor igual a " + valor);
        }
    }
}
