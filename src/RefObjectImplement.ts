import { RefObject } from "./interfaces"

export default class RefObjectImplement<T> implements RefObject<T> {
    private _current: T | null = null;

    public get current() {
        return this._current;
    }

    public set current(val) {
        this._current = val;
    }
}