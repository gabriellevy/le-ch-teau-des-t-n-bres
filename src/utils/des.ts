
export function d6(): number {
    return de(6);
}
const de = (sides: number): number => {
    return Math.floor(Math.random() * sides) + 1;
};
