void traverseTree(Node* root){
    if(root == NULL)
        return;
    traverseTree(root->left);
    cout<<root->data<<" ";
    traverseTree(root->right);
}