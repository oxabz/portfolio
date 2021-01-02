import ContentItem from "./ContentItem";
import ContentFile from "./ContentFile";
import FolderContent from "./FolderContent";

export default class ContentFolder extends ContentItem {

    content: FolderContent;

    constructor(name: string, parent: ContentItem|null) {
        super(name, parent);

        this.content = new FolderContent();
    }

    setContent(path: string, content: Blob | FolderContent): void {
        let splitedPath: string[] = path.split('/');
        console.log(splitedPath);
        if (path.length===0) {
            if (!(content instanceof FolderContent))
                throw TypeError();

            this.content = content;
            this.content.getValues().forEach((item)=>{
                item.parent = this;
            })
        } else {
            let target = this.content.get(splitedPath[0]);
            if (!target) {
                if (splitedPath.length === 1 && content instanceof Blob) {
                    target = new ContentFile(splitedPath[0], this);
                } else {
                    target = new ContentFolder(splitedPath[0], this);
                }
                this.content.set(splitedPath[0], target);
            }
            let path = splitedPath.splice(0, 1).join('/');
            (<ContentItem>target).setContent(path , content);
        }
    }

    getContent(path: string): Blob | FolderContent | null {
        let splitedPath: string[] = path.split('/');
        if (path.length === 0) {
            return this.content;
        }
        else {
            let child = this.content.get(path);
            if (child) {
                return child.getContent(splitedPath.splice(0, 1).join('/'));
            }
            return null;
        }
    }
}
