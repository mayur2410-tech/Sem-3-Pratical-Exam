// Online C++ compiler to run C++ program online
#include <iostream>
#include <vector>
using namespace std;

class Node{
    public:
    int data;
    Node*next;
    public:
    Node(int val){
        data = val;
        next=nullptr;
    }
    
};
class List{
    Node*head;
    Node*tail;
    public:
    List(){
        head=tail=nullptr;
    }
    
    void insertHead(int val){
        Node*newNode = new Node(val);
        if(head==nullptr){
            head=tail=newNode;
        }else{
            newNode->next = head;
            head=newNode;
        }
    }
    void printList(){
        Node*temp = head;
        while(temp!=nullptr){
            cout<<temp->data<<" ->";
            temp = temp->next;
        }
    }
};

int main() {
    List ll;
    ll.insertHead(4);
    ll.insertHead(3);
    ll.insertHead(2);
    ll.printList();
    

    return 0;
}