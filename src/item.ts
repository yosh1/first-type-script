export class Item {
    constructor(private message:string, private date:string){}

    public say(elem : HTMLElement | null) : void {
        if(elem){ // 引数がnullでない場合
          elem.innerHTML = 'Message: ' + this.message + '<br><br>Date: ' + this.date;
        }
    }
}