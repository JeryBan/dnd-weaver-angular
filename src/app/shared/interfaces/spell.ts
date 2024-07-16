export interface Spell {
  index: string,
  level: number[], // search filter, example: 1 or 1,2
  optionalFields: Record<string, any>
}
