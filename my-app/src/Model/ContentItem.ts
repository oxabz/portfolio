import FolderContent from "./FolderContent";

export default abstract class ContentItem{
    name:string;
    parent: ContentItem|null;
    
    constructor(name:string, parent:ContentItem|null) {
        this.name = name;
        this.parent = parent;
    }

    getPath():string{
        if(this.parent) return this.parent.getPath() + this.name;
        return this.name;
    }

    abstract setContent(path : string, content : Blob | object):void;

    abstract getContent(path : string) : Blob | FolderContent | null;
}