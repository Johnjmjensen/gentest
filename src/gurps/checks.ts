// src/gurps/checks.ts
export async function baseRoll(successNumber: number): Promise<string> {
     // Roll 3d6
     const rolls = [1,2,3].map(() => Math.floor(Math.random() * 6) + 1)
     const sum = rolls.reduce((a, b) => a + b, 0)
     const difference = Math.abs(successNumber - sum)
     if (difference === 0) {
          return 'Success!';
     } else if (sum <= successNumber) {
          return `Succeeds by: ${difference}!`;
     } else {
          return `Failed by: ${difference} 😞`;
     }
}
