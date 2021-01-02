
export default abstract class  AbstractItem {
    name: string;
    parent: AbstractItem|null;

    protected constructor(name: string, parent: AbstractItem|null) {
        this.name = name;
        this.parent = parent;
    }

    abstract deserialize():any;

}
