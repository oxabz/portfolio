import ContentItem from "./ContentItem";
import FolderContent from "./FolderContent";

export default class ContentFile extends ContentItem{
    
    content : Blob|null;

    constructor(name:string, parent:ContentItem|null){
        super(name, parent);
        this.content = null;
    }

    setContent(path: string, content: Blob | FolderContent): void {
        if(path.length!==0){
            throw "Invalid Path" ;
        }
        if(!(content instanceof Blob)){
            throw new TypeError();
        }
        
        this.content = content; 
    } 

    getContent(path:string): Blob | FolderContent | null {
        if (path.length!==0)
            throw "Invalid Path"
        return this.content
    }
}
