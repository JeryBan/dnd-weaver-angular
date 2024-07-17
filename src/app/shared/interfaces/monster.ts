export interface Monster {
  index: string,
  name: string,
  level: number,
  image: string | null
}

export interface MonsterInfo {
  index: string,
  name: string,
  level: number,
  image: string | null,
  optionalFields: Record<string, any>
}
