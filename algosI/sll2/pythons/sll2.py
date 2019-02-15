class SLNode:
    def __init__(self):
        self.data = None
        self.next = None
    
    def __str__(self):
        return "<SLNode: data: "+ str(self.data) + ">"
    
    def hasNext(self):
        return self.next is not None
    
class SLList:
    def __init(self):
        self.head = None
        self.size = 0
    
    def __str__(self):
        return "SLList: " + (str(self.size) if self.size>0 else "empty")
    
    def addFront(self, data):
        
    





if __name__ == "__main__":
    print("Singly Linked Lists II Testing")
