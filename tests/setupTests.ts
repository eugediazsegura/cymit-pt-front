import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const originalConsoleError = console.error
console.error = (...args: any[]) => {
    if(args[0].includes('An empty string')){return}
    originalConsoleError(...args)
}