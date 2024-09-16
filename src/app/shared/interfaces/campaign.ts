import {Scenario} from "./scenario";

export interface Campaign {
  id: number | null;
  title: string;
  description: string | null;
  image: string;
  scenarios: Scenario[];
}
