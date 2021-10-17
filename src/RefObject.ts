
export default class RefObject<T> implements TSXe.RefObject<T> {
    private _current:T | null = null;

    public get current() {
        return this._current;
    }

    public set current(val) {
        this._current = val;
    }
}