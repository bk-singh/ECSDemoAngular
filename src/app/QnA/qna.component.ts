import {Component} from '@angular/core';
import * as _ from 'underscore';
import {QnaService} from "./qna.service";

@Component({
  selector: 'qna',
  templateUrl: './/qna.component.html',
  styleUrls: ['.//qna.component.css'],
})

export class QnaComponent {
    public data:any;
    public error:any;

  constructor(public qnaService: QnaService) {
      this.fetchData();
  }
fetchData(){
    this.qnaService.getData().subscribe(QnaRes => {
        if(QnaRes && QnaRes.response_list)
            this.data=QnaRes.response_list;
        else
            if(QnaRes && QnaRes.error)
                this.error = QnaRes.error;
    });
}

}
