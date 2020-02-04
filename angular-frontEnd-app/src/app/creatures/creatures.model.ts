//This will create the model that all creatures will abide by.  For now just creating 4 variables. More may be added as needed.
export class Creature{
    public name:string;
    public creatureType:string;
    public description:string;
    public imagePath:string;

    constructor(name:string, creatType:string, descript:string, imgPath:string){
        this.name=name;
        this.creatureType=creatType;
        this.description=descript;
        this.imagePath=imgPath;
    }
}