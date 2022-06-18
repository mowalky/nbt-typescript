function addNumbers(a:number, b:number):number {
    return a + b;
}

export default addNumbers;


export const addStrings = (str1:string, str2:string = ""):string => {
    return str1 + str2;
}

// union type
export const format = (title:string, params: string|number):string => 
     `${title} ${params}`;


export const printFormat = (title:string, params: string|number):void => {
    console.log(format(title, params));
}

// promise function
export const fetchData = (url:string):Promise<string> => Promise.resolve('data');


function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(", ")}`;
}

export function getName(user:{first:string,last:string}):string {
    return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}