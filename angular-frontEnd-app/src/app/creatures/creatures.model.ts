//This will create the model that all creatures will abide by.  For now just creating 4 variables. More may be added as needed.
import { Attribute } from '../shared/attribute.model';
export class Creature {
  
    constructor(public name: string, 
                public type: string, 
                public description: string, 
                public imagePath: string,
                public attributeArray: Attribute[]){}
}