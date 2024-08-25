export function validationEmail(email: string){
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
    return regexEmail.test(email);
}