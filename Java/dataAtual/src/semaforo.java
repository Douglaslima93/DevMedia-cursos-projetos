public class semaforo {

    public static void main(String args[]) {
        String cor = "verde";

        if(cor.equals("Verde")) {
            System.out.println("Andar");

        } else if (cor.equals("Amarelo")) {
            System.out.println("Atenção");
        } else {
            System.out.println("Parar e aguardar");
        }
    }
}
