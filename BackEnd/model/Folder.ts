import AbstractItem from "./AbstractItem";

class Folder extends AbstractItem {

    contentIndex: string[] = [];
    content: AbstractItem[] = [];

    FolderError  FolderError;

    addItem(item: AbstractItem): void {
        try {
            this.removeItem(item.name)
        } catch ( e ) {
            if(!(e instanceof FolderError))
        }

        //Adding Item
        this.content.push(item);
        this.contentIndex.push(item.name);
    }

    removeItem(item:string) : void{
        //Finding Index
        let index = this.contentIndex.indexOf(name);

        if (index === -1) throw new FolderError('Unable to remove item not found', this);

        //Removing item
        this.content.slice(index, 1);
        this.contentIndex.slice(index, 1);
    }

    deserialize(): any {

    }


}

class FolderError {
    message : string;
    folder:Folder;

    constructor(message : string, folder : Folder){
        this.message = message;
        this.folder = folder;
    }

    toString():string{
        return 'Folder Error in ' + this.folder.name + ' : ' + this.message;
    }
}

Folder.FolderError = FolderError;

export default Folder
