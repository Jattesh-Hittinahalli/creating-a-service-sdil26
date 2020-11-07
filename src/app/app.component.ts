import { Component } from "@angular/core";
import { BooksService } from "./books.service";
import { LoginService } from "./login.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "List of Books";
  data = [];

  constructor(private user: LoginService) {
    this.user.getData().subscribe(data => {
      console.warn(data);
      this.data = data;
    });
  }
}
