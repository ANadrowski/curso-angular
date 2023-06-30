import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss'],
})
export class CicloComponent {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngOnChanges() {
    this.log('OnChanges');
  }

  ngDoCheck() {
    this.log('DoCheck');
  }
  ngAfterContentInit() {
    this.log('AfterContentInit');
  }
  ngAfterContentChecked() {
    this.log('AfterContentChecked');
  }
  ngAfterViewInit() {
    this.log('AfterViewInit');
  }
  ngAfterViewChecked() {
    this.log('AfterViewChecked');
  }
  ngOnDestroy() {
    this.log('OnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
