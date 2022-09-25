export interface No {
    valor: number | '+' | '-' | 'x' | '/' | '^' | 'v' | 'V' | '(' | ')' | '[' | ']' | '{' | '}' | '=';
    pai: No;
    esquerda: No;
    direita: No;
}
