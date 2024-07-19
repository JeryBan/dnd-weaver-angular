export interface Monster {
  index: string,
  modalType: string,
  name: string,
  level: number,
  image: string | null
}

export interface MonsterInfo {
  index: string,
  modalType: string,
  name: string,
  level: number,
  image: string | null,
  optionalFields: Record<string, any>
}
