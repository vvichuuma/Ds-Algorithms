
//when creating a new Node: 
let Node = function () {

    //the hash: 
    this.keys = new Map();
    //to store end: 
    this.end = false;
    //returning the end:
    this.rEnd = function () {
        return this.end;
    }
    //setting the end 
    this.sEnd = function () {
        this.end = true;
    }

}

//when creating a new trie block: 
let Trie = function () {

    this.root = new Node();

    //add function is gonna take in an input and the node by default is root: 
    this.add = function (input, node = this.root) {
        //If there is no word given in as the input: 
        if (input.length === 0) {
            node.sEnd(); //if there is no input, then we are gonna set the end function = true.(which marks the end of the word).
            return;
        } else {
            //if the input has some value in it: 

            //if the node does not contain the first char of the input as the key.
            if (!node.keys.has(input[0])) {
                //setting up the key and the value in the hash of the node: 
                //setting up a new Node as the value of the key. 
                node.keys.set(input[0], new Node());
                //Recurssion with one char down and setting up the rest of the character of string, 
                //value as the reference to the previous node's value.
                return this.add(input.substr(1), node.keys.get(input[0]));

            } else {
                //if the node already has the value : 
                return this.add(input.substr(1), node.keys.get(input[0]));
            }

        }

    }

    //This function is gonna take in a word and see if the Trie contains the word: 
    this.isWord = function (input, node = this.root) {

        //first we are gonna check the root node: 

        while (input.length > 1) {
            //If the node does not contain the first char return false: 
            if (!node.keys.has(input[0])) {
                return false;
            } else {
                //Loop back: 
                node = node.keys.get(input[0]);
                input = input.substr(1);

            }

        }

        //if the node has the last value and it it returns the end function as true then return true.
        return (node.keys.has(input) && node.keys.get(input).rEnd() ? true : false);

    }


    //THis function prints all the data's in the Trie and pushes it into an array : 
    this.printAll = function () {

        //creates a new Array: 
        let words = new Array();

        let search = function (node, string) {
            if (node.keys.size != 0) {
                for (let letter of (node.keys.keys())) {
                    search(node.keys.get(letter), string.concat(letter))
                }

                if (node.rEnd()) {
                    words.push(string);
                }
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            };
        };

        search(this.root, new String());
        return words.length > 0 ? words : null;
    };

};

//creating a new Trie: 

const tt = new Trie();

tt.add("code");
tt.add("cader")
tt.add("hack");
console.log(tt.printAll());
