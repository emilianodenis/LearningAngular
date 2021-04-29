import { Subscription } from "rxjs/internal/Subscription";

export class DisposableSubscriptions {

    private subscriptions: Array<Subscription> = [];

    private singleSubs: Map<string, Subscription> = new Map();

    public addSubscriptions(...sub: Subscription[]): void {
        sub.forEach(s => this.subscriptions.push(s));
    }

    public addSingleLivingSubscription(id: string, sub: Subscription): void {
        if (this.singleSubs.has(id)){
            this.singleSubs.get(id)?.unsubscribe();
            this.singleSubs.delete(id);
        }
        this.singleSubs.set(id, sub);
    }

    public dispose(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.subscriptions = [];

        this.singleSubs.forEach(s => s.unsubscribe());
        this.singleSubs = new Map();
    }
}