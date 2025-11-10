// Merge Sort
#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int> &arr,int st,int mid,int end){
    vector<int> temp;
    int i= st;
    int j = mid +1;
    while(i<=mid && j<=end){
        if(arr[i]<=arr[j]){
            temp.push_back(arr[i]);
            i++;
        }else{
            temp.push_back(arr[j]);
            j++;
        }
    }
    while(i<=mid){
         temp.push_back(arr[i]);
            i++;
    }
    while(j<=end){
         temp.push_back(arr[j]);
            j++;
    }
    
    for(int i =0; i <temp.size();i++){
        arr[st+i]=temp[i];
    }
}

void mergeSort(vector<int> &arr, int st,int end ){
    if(st<end){
        int mid = st +(end-st)/2;
        mergeSort(arr,st,mid); //left part
        mergeSort(arr,mid+1,end); //right part
        
        merge(arr,st,mid,end);
    }
}

int main() {
    vector<int>arr = {5,4,1,3,2,8};
    int n = arr.size();
    mergeSort(arr,0,n-1);
    
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    

    return 0;
}