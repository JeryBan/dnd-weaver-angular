/**
 * Monster to be saved to the database.
 */
export interface Monster {
  index: string,
  name: string,
  level: number,
  image: string | null
}

export interface MonsterSearch {
  count: number,
  results: Monster[]
}

/**
 * Monster info that comes from the dnd api.
 */
export interface MonsterInfo {
  index: string,
  name: string,
  size: string,
  alignment: string,
  challenge_rating: number,
  //
  armor_class: ArmorClass[],
  hit_points: number,
  hit_dice: string,
  hit_points_rolls: string,
  speed: Speed,
  //
  strength: number,
  dexterity: number,
  constitution: number,
  intelligence: number,
  wisdom: number,
  charisma: number,
  //
  proficiencies: Proficiencies[],
  actions: Action[],
  reactions: Action[],
  special_abilities: SpecialAbilities[]
  //
  senses: Senses[],
  //
  damage_vulnerabilities: string[],
  damage_resistances: string[],
  damage_immunities: string[],
  condition_immunities: ConditionImmunities[],
  //
  xp: number,
  image: string | null
}

export interface Armor {
  index: string,
  name: string,
  url: string,
}

export interface ArmorClass {
  type: string,
  value: number,
  armor: Armor[]
}

export interface Speed {
  walk?: string,
  burrow?: string,
  fly?: string
}

export interface Proficiency {
  index: string,
  name: string,
  url: string
}

export interface Proficiencies {
  value: number,
  proficiency: Proficiency
}

export interface DC  {
  dc_value: number,
  success_type: string,
}

export interface Attacks {
  name: string,
  dc: DC
  damage: Damage
}

export interface DamageType {
  index: string,
  level: number,
  name: string,
  url: string
}

export interface Damage {
  damage_dice: string,
  damage_type: DamageType
}

export interface Actions {
  action_name: string,
  count: number,
  type: string,
  damage: Damage
}

export interface Action {
  name: string,
  desc: string,
  multiattack_type: string,
  actions: Actions[],
  attack_bonus: number,
  dc: DC,
  attacks: Attacks[],
  damage: Damage
}

export interface Ability {
  index: string,
  level: number,
  name: string,
  url: string
}

export interface SpellUsage {
  type: string,
  rest_types: string[],
  times: number
}

export interface Spell {
  name: string,
  level: number,
  url: string,
  usage: SpellUsage
}

export interface Spellcasting {
  ability: Ability,
  dc: DC,
  modifier: number,
  school: string,
  spells: Spell[]
}

export interface SpecialAbilities {
  name: string,
  desc: string,
  attack_bonus: number,
  damage: Damage,
  dc: DC,
  spellcasting: Spellcasting,
  usage: SpellUsage
}

export interface ConditionImmunities {
  index: string,
  level: number,
  name: string,
  url: string
}

export interface Senses {
  passive_perception: number,
  blindsight: string,
  darkvision: string,
  tremorsense: string,
  truesight: string
}

