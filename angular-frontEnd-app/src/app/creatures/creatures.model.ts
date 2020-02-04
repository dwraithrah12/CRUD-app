//This will create the model that all creatures will abide by.  For now just creating 4 variables. More may be added as needed.
export class Creature {
  
    constructor(public name: string, 
                public type: string, 
                public description: string, 
                public imagePath: string){}
}