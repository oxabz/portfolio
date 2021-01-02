import React,{Component} from 'react';
import ContentManager from '../../Model/ContentManager';
import FolderContent from "../../Model/FolderContent";
import ContentItem from "../../Model/ContentItem";
import ContentFile from "../../Model/ContentFile";

export default class Navbar extends Component{
    

    contentManager = new ContentManager();
    state : any = {
        rootFolder: null
    };
    
    constructor(props : any){
        super(props);
        this.updaterRootMd()
    }

    async updaterRootMd(): Promise<void>{
        let result = this.contentManager.getContent('');
        result[1].then(content=>{
            this.setState({
                rootFolder : content
            });
        });
        let content = (result[0] as FolderContent) ;
        this.setState({
            rootFolder : content
        })
    }


    render(){
        let buttons: any = [];
        this.state.rootFolder?.getValues().forEach((rootItem: ContentItem) => {
            if(rootItem instanceof ContentFile)
                buttons.push(<button>{rootItem.name}</button>);
        }); 
        return (
            <nav>
                <ul>
                    {buttons}
                </ul>
            </nav>
        );
    }
}
