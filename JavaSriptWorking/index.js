// 1) JavaScript is Synchronous single threaded launguage.
//2) Everything happens in the execution context.

// 1) synchronous means it can execute next line after the current line execution.
//  single threaded means it can execute each line at a time.

// 2) Execution context is dived into 2 blocks
// 1)memory-block(variable enviorment) and code block(thread of execution)

var num=2;
function getSquareOfNumber(n){
var ans=n*n;
return ans;
}
var squareOfNumber1=getSquareOfNumber(num);
var squareOfNumber2=getSquareOfNumber(5);

// Global memory allocation
        // MemoryAllocation in context creation phase
            //1 num:undefined
            //2 getSquareOfNumber:(n){
                // 5 var ans=n*n;
                // 6 return ans;
            // }
            //3 squareOfNumber1=undefined;
            //4 squareOfNumber2=undefined;

        // code execution
        // line 1 gets executed and value 2 is allocated to num in global context
        // line no 3 is executed function gets invoked and a local context is created 
                // local
                    // phase1:memory allocation phase
                        n=undefined;
                        ans=undefined;
                    // phase2:- code execution of local context
                        n=num;
                        ans=num*num;
                        // return ans;    with this line local context is deleted and 
        // return value is allocated to the global variable squareOfNumber1

["global memory allocation","local memory allocation"]

// in call stack first global memory allocation is created.
// for any function invocation local memory allocation is created. 
// once the local function return the value local context is deleted.
// after global function execution is completed global function is delewted from the stack.















