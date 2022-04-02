/*
* This program is Stack Program 
*
* @author Abdul Basit 
* @version 1.0
* @since   2022-02-03
*/

export class MrCoxallStack {
  // this is a stack class.
  private stack: number[] = []

  push (pushValue: number) {
    // this method adds a value to the stack.
    this.stack.push(pushValue)
  }

  showStack () {
    for (let i = this.stack.length - 1; i >= 0; i--) {
      console.log(this.stack[i])
    }
  }
}

