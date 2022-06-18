function addNumbers(a:number, b:number):number {
    return a + b;
}

export default addNumbers;


export const addStrings = (str1:string, str2:string = ""):string => {
    return str1 + str2;
}