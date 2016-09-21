import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-test',
  template: `
    <p>
      test Works!
    </p>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
