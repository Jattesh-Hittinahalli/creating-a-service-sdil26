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
  model: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];

  constructor(private user: LoginService) {
    this.user.getData().subscribe(data => {
      console.warn(data);
      this.data = data;
      namesearch:string=''
      
    });
    
    this.model = [
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
      },
      {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
      },
      {
        id: 11,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
      },
      {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
      }
    ];
   
  }
}
