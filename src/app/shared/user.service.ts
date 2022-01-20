import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {}

  public addUser(str: string): void {
    let t: string[] = this.users.getValue();
    t.push(str);
    this.users.next(t);
  }
}
