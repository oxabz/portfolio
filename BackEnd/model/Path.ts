export default class Path{
    _parts: string[] = [];

    constructor(s: string|null = null){
        if(s){
            this._parts = s.split('/');
        }
    }

    toString(){
        return '/'+this._parts.join('/');
    }
}
