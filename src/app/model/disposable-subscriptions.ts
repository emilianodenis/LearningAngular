import { Subscription } from "rxjs/internal/Subscription";

export class DisposableSubscriptions {
    private subscriptions: Array<Subscription> = [];

    public addSubscriptions(...sub: Subscription[]): void {
        sub.forEach(s => this.subscriptions.push(s));
    }

    public dispose(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.subscriptions = [];
    }
}