import ContentFolder from "./ContentFolder";
import FolderContent from "./FolderContent";
import ContentFile from "./ContentFile";

let instance: ContentManager;
export default class ContentManager {

    content: ContentFolder | null = null;

    constructor() {
        if (instance) return instance;

        instance = this;
        this.content = null;
    }

    getContent(path: string): [FolderContent | Blob | null, Promise<FolderContent | Blob>] {
        if (!this.content) {
            this.content = new ContentFolder("", null);
        }
        let requestedContent = this.content.getContent(path);
        let promisedContent = new Promise(async (resolve, reject) => {
            let fetched = await this.fetchContent(path);
            this.content?.setContent(path, fetched);
            resolve(<FolderContent | Blob>this.content?.getContent(path))
        });

        return [requestedContent, <Promise<FolderContent | Blob>>promisedContent]
    }

    async fetchContent(path: string): Promise<FolderContent | Blob> {
        let location = window.location;
        return fetch(location.protocol + '//' + location.hostname + ':4000/content/' + path, {
            mode: 'same-origin'
        }).then(async (response:Response) => {
            let type = response.headers.get('content-type') as any;
            if (type.includes('application/json')){
                return this._parseFolderContent(await response.json())
            }else if (type.includes('text/markdown')){
                return new Blob();
            }else {
                return new Blob();
            }
        });
    }

    _parseFolderContent(unparsed: any): FolderContent {
        let folder = new FolderContent();
        unparsed.content.forEach((item: any) =>{
            if(item.isDirectory){
                folder.set(item.name, new ContentFolder(item.name, null))
            }else if(item.isFile){
                folder.set(item.name, new ContentFile(item.name, null))
            }
        });
        return folder;
    }
};
