import ContentItem from "./ContentItem";

export default class FolderContent{
    content:any = {};
    
    set(name : string, item : ContentItem | null):boolean{
        let existed = this.content[name];

        this.content[name] = item;

        return existed;
    }

    get(name:string) : ContentItem | null{
        if(!this.content[name]){
            return null;
        }
        return this.content[name];
    }

    getValues():ContentItem[]{
        return Object.values(this.content);
    }
}
