import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit {

  constructor() { }

  public voice: boolean = false;
  public write: boolean = true;
  public act: boolean = true;
  public host: boolean = true;
  public lecture: boolean = true;
  public model: boolean = true;
  public direct: boolean = true;

  ngOnInit(): void {
  }

  subNavigation(toWhere: string) {

    switch (toWhere) {
      case "voice":
        this.voice = false;
        this.write = true;
        this.act = true;
        this.host = true;
        this.lecture = true;
        this.model = true;
        this.direct = true;
        break;
      case "write":
        this.voice = true;
        this.write = false;
        this.act = true;
        this.host = true;
        this.lecture = true;
        this.model = true;
        this.direct = true;
        break;
      case "act":
        this.voice = true;
        this.write = true;
        this.act = false;
        this.host = true;
        this.lecture = true;
        this.model = true;
        this.direct = true;
        break;
      case "host":
        this.voice = true;
        this.write = true;
        this.act = true;
        this.host = false;
        this.lecture = true;
        this.model = true;
        this.direct = true;
        break;
      case "lecture":
        this.voice = true;
        this.write = true;
        this.act = true;
        this.host = true;
        this.lecture = false;
        this.model = true;
        this.direct = true;
        break;
      case "model":
        this.voice = true;
        this.write = true;
        this.act = true;
        this.host = true;
        this.lecture = true;
        this.model = false;
        this.direct = true;
        break;
      case "direct":
        this.voice = true;
        this.write = true;
        this.act = true;
        this.host = true;
        this.lecture = true;
        this.model = true;
        this.direct = false;
        break;
      default:
        this.voice = false;
        this.write = true;
        this.act = true;
        this.host = true;
        this.lecture = true;
        this.model = true;
        this.direct = true;
    }

  }

}
