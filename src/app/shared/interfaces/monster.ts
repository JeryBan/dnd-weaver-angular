export interface Monster {
  index: string,
  name: string,
  level: number,
  image: string | null
}

export interface MonsterInfo {
  index: string,
  optionalFields: Record<string, any>
}
