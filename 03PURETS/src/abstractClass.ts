abstract class TakePhoto {
    constructor(
        public cameraMode:string,
        public filter: string
    ){}

    abstract getSepia():void// use abstract keyword wheneven you want certain function to be present in exptended class
    getReelTime():number{
        //some complex calculation
        return 8
    }
}


class Instagram extends TakePhoto{
    constructor(
       public cameraMode:string,
       public filter:string,
       public burst:number
    ){
        super(cameraMode,filter)// for class this is important
    }
    getSepia(): void {
        console.log("sepia")
    }
    // extended function  can also be updated by class

}

 const hc= new Instagram("test","Test",3)
 hc.getReelTime()
// abstract class only act as blueprint 
// unlike interface it can not directly have objects 
// object can only belong to class extended from abstract class