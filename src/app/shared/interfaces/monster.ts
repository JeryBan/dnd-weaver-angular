export interface Monster {
  id: number,
  name: string,
  image: string
}

export interface MonsterInfo {
  index: string,
  optionalFields: Record<string, any>
}
