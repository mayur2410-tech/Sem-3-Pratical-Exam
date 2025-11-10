// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class Box{
    int l,b,h;
    
    Box(){
        l=b=h=1;
    }
    Box(int x){
        l=b=h=x;
    }
    Box(int x,int y,int z){
        l=x;
        b=y;
        h=z;
    }
    void volumne(){
        System.out.println(l*b*h);
    }
}

class Main {
    public static void main(String[] args) {
        Box b1= new Box();
        Box b2= new Box(3);
        Box b3= new Box(2,3,4);
        b1.volumne();
        b2.volumne();
        b3.volumne();
    }
}