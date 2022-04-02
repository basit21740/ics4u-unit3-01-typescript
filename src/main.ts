/*
* This program is Stack Program 
*
* @author Abdul Basit 
* @version 1.0
* @since   2022-02-03
*/
import { MrCoxallStack } from "./exportedFile"

const aStack = new MrCoxallStack()

console.log('First stack:')
aStack.showStack()

console.log('Add 10:')
aStack.push(10)
aStack.showStack()

console.log('Add 27:')
aStack.push(27)
aStack.showStack()

console.log('\nDone.')
